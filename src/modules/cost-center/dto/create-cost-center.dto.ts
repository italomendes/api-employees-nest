import { ApiProperty } from '@nestjs/swagger';

export class CreateCostCenterDto {
  @ApiProperty()
  name: string;
}
