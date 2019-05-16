import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserEntity } from './interfaces/user-entity';
import { Model } from 'mongoose';
import { CreateUserDto } from './interfaces/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { LoginUserDto } from './interfaces/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { TokenPayload } from './interfaces/token-payload';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserEntity>,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(user: CreateUserDto): Promise<UserEntity> {
    const salt = bcrypt.genSaltSync(10);
    const password = user.password;

    const newUser = new this.userModel({
      email: user.email,
      username: user.username,
      password: bcrypt.hashSync(password, salt),
    });
    return await newUser.save();
  }

  async findUser(user: LoginUserDto) {
    return await this.userModel.findOne({ email: user.email });
  }

  async validateUser(payload: TokenPayload) {
    return await this.userModel.findById({ _id: payload.userId }).select('email _id username');
  }

  createToken(user) {
    const payload = {
      userId: user._id,
      email: user.email,
    };
    return this.jwtService.sign(payload);
  }
}
