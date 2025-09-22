import { BadRequestException, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { JwtPayload } from "../authentication.types";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly prismaService: PrismaService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET as string,
        });
    }

    async validate(payload: JwtPayload) {
        const {id} = payload;
        
        if (!id) throw new BadRequestException('Invalid token payload');

        const userDetails = await this.prismaService.userDetails.findUnique({where: {id}});

        if (!userDetails) throw new BadRequestException('User not found');

        return {userDetails: userDetails}
    }
}