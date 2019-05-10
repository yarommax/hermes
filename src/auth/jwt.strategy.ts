import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { TokenPayload } from './interfaces/token-payload';
import { ConfigService, InjectConfig } from 'nestjs-config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@InjectConfig() private readonly config: ConfigService,
              private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('jwt.jwtSecret'),
    });
  }

  async validate(payload: TokenPayload) {
    const user = await this.authService.validateUser(payload);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
