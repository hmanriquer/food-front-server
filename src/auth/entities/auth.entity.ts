import { ApiProperty } from '@nestjs/swagger';

export class AuthEntity {
  @ApiProperty({
    description: 'The access token',
  })
  accessToken: string;
}
