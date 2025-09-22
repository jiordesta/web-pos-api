import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterUserData } from './authentication.types';
import { PrismaService } from 'src/prisma/prisma.service';
import { createHashedPassword } from 'src/utils/encryption';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly jwtService: JwtService,
    ) {}

    async register(registerUserData: RegisterUserData){
        try {

            const credential = {
                username: registerUserData.username,
                password: await createHashedPassword(registerUserData.password),
            }

            const userDetails = {
                email: registerUserData.email,
                fname: registerUserData.fname,
                lname: registerUserData.lname,
            }

            try {


                return await this.prismaService.$transaction(async (transaction) => {
                    const isUserEmailAlreadyExists = await this.prismaService.userDetails.findUnique({
                        where: { email: userDetails.email },
                    });

                    if (isUserEmailAlreadyExists) throw new BadRequestException('Email already exists');

                    const createUserRes = await transaction.userDetails.create({ data: userDetails });

                    const isUsernameAlreadyExists = await transaction.userCredential.findUnique({where: { username: credential.username } });
                    
                    if (isUsernameAlreadyExists) throw new BadRequestException('Username already exists');
                    
                    const createCredentialRes = await transaction.userCredential.create({ data: {userId: createUserRes.id, ...credential} });
                
                    return {...createUserRes, ...createCredentialRes}
                });

            } catch (e) {
                throw new BadRequestException(e.message);
            }
        } catch (error) {
            throw new BadRequestException(error.message || 'Registration failed');
        }
    }

    async login(req: any){
        try {
            const user = req.user;
            const payload = { id: user.id};
            
            return {
                accessToken: this.jwtService.sign(payload, { expiresIn: '15m' }),
                refreshToken: this.jwtService.sign(payload, { expiresIn: '7d' }),
                user: {
                    email: user.email,
                    fname: user.fname,
                    lname: user.lname,
                },
            };
        } catch (error) {
            throw new UnauthorizedException(error.message || 'Invalid credentials');
        }
    }
}
