import { ApiProperty } from '@nestjs/swagger';
import { $Enums, User } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class UserEntity implements User {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty({
    description: 'The unique identifier for the user',
    example: 1,
    type: 'number',
    name: 'id',
  })
  id: number;

  @ApiProperty({
    description: 'The name of the user',
    example: 'John Doe',
    type: 'string',
    name: 'name',
  })
  name: string | null;

  @ApiProperty({
    description: 'The username of the user',
    example: 'johndoe',
    type: 'string',
    name: 'username',
  })
  username: string;

  @Exclude()
  password: string;

  @ApiProperty({
    description: 'The role of the user',
    example: 'SELLER',
    enum: $Enums.Role,
    enumName: 'Role',
  })
  role: $Enums.Role;

  @ApiProperty({
    description: 'The date the user was created',
    example: '2023-01-01T00:00:00Z',
    type: Date,
    name: 'createdAt',
    default: new Date(),
  })
  createdAt: Date = new Date();

  @ApiProperty({
    description: 'The date the user was last updated',
    example: '2023-01-01T00:00:00Z',
    type: Date,
    name: 'updatedAt',
    default: new Date(),
  })
  updatedAt: Date = new Date();
}
