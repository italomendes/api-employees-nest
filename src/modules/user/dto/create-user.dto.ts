import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  passhash: string;

  @ApiProperty()
  departmentId: string;

  @ApiProperty()
  roleId: string;
}
