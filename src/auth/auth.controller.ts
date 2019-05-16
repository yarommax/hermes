import {
  Body,
  ConflictException,
  Controller,
  ForbiddenException, Get,
  NotFoundException,
  Post, Req,
  Res, UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUseTags,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto } from './interfaces/create-user.dto';
import { LoginUserDto } from './interfaces/login-user.dto';
import { errorMessages } from './exceptions';
import * as bcrypt from 'bcryptjs';
import { AuthGuard } from '@nestjs/passport';

@ApiUseTags('api/auth')
@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ title: 'Hermes Registration' })
  @ApiCreatedResponse({ description: 'Register Successful' })
  @ApiConflictResponse({ description: 'Email is already exists' })
  @Post('/registration')
  async registration(@Body() user: CreateUserDto) {
    const candidate = await this.authService.findUser(user);
    if (candidate) {
      throw new ConflictException(errorMessages.EMAIL_EXISTS);
    } else {
      return await this.authService.createUser(user);
    }
  }

  @ApiOperation({ title: 'Hermes login' })
  @ApiOkResponse({ description: 'Login Successful' })
  @Post('/login')
  async login(@Body() user: LoginUserDto, @Res() response, @Req() request) {
    const candidate = await this.authService.findUser(user);

    if (candidate) {
      const comparePasswords = bcrypt.compareSync(
        user.password,
        candidate.password,
      );
      if (comparePasswords) {
        const token = this.authService.createToken(candidate);
        const newUser = {
          email: candidate.email,
          username: candidate.username,
          userId: candidate._id,
        };
        response.status(200).json({
          newUser,
          token: `Bearer ${token}`,
        });
      } else {
        throw new ForbiddenException(errorMessages.PASSWORD_INCORRECT);
      }
    } else {
      throw new NotFoundException(errorMessages.USER_NOT_EXISTS);
    }
  }

  @ApiBearerAuth()
  @Get('/user')
  @UseGuards(AuthGuard())
  getUserFromReq(@Req() req) {
    return req.user;
  }
}
