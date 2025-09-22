import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from "passport-local";
import { validatePassword } from "src/utils/encryption";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly prismaService: PrismaService,
    ) {
        super({
            usernameField: 'username',
            passwordField: 'password'
        });
    }

    async validate(username: string, password: string) {
        const userCredential = await this.prismaService.userCredential.findUnique({where: {username}});

        if (!userCredential) throw new UnauthorizedException('Invalid credentials');

        const isValidPassword = await validatePassword(password, userCredential.password);

        if (!isValidPassword) throw new UnauthorizedException('Invalid credentials');

        const user = await this.prismaService.userDetails.findUnique({where: {id: userCredential.userId}});

        if (!user) throw new UnauthorizedException('Invalid credentials');
        
        return {user: user}
    }
}