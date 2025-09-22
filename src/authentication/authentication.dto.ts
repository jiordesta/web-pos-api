import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class RegisterUserDTO {
    @IsNotEmpty()
    @IsString()
    readonly username: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;

    @IsNotEmpty()
    @IsString()
    readonly fname: string;

    @IsNotEmpty()
    @IsString()
    readonly lname: string;
}

export class LoginUserDTO {
    @IsNotEmpty()
    @IsString()
    readonly username: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;
}