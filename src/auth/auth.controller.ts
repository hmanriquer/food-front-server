import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthEntity } from './entities/auth.entity';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOkResponse({
    type: AuthEntity,
    description: 'Login user and return access token',
  })
  async login(@Body() { username, password }: LoginDto): Promise<AuthEntity> {
    return this.authService.login(username, password);
  }

  @Get('whoami')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({
    description: 'Get current user information',
  })
  async whoami(@Request() req) {
    return {
      message: 'User information',
      user: req.user,
    };
  }
}
