import { PrismaService } from 'nestjs-prisma';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './entities/auth.entity';
import { compare } from 'bcrypt-ts';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(username: string, password: string): Promise<AuthEntity> {
    const user = await this.prisma.user.findUnique({ where: { username } });
    if (!user)
      throw new NotFoundException(`User with username: ${username} not found`);

    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) throw new UnauthorizedException('Invalid password');

    const payload = {
      id: user.id,
      username: user.username,
      name: user.name,
      role: user.role,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
