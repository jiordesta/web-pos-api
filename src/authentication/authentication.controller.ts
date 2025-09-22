import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { RegisterUserDTO } from './authentication.dto';
import { LocalAuthGuard } from './guard/local.guard';
import { JwtAuthGuard } from './guard/jwt.guard';

@Controller('authentication')
export class AuthenticationController {
    constructor (
        private readonly authenticationService: AuthenticationService
    ) {}

    @Post('register')
    async registerUser (@Body() registerUserDTO: RegisterUserDTO) {
        return await this.authenticationService.register(registerUserDTO as RegisterUserDTO);
    }

    @Post('login')
    @UseGuards(LocalAuthGuard)
    async loginUser (@Request() req: any) {
        return await this.authenticationService.login(req.user);
    }

    @Get('profile')
    @UseGuards(JwtAuthGuard)
    async getProfile(@Request() req: any) {
        return req.user;
    }

    // @Get('refresh')
    // async refreshToken(@Request() req: any) {
    //     const { refreshToken } = req.body;
    //     return await this.authenticationService.refreshToken(refreshToken);
    // }
}
