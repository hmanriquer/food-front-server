import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
// This guard uses the JWT strategy defined in the JwtStrategy class to authenticate requests. It will automatically check for a valid JWT token in the request headers and validate it using the secret key defined in the JWT module configuration.
