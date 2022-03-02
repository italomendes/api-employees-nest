import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateCostCenterDto } from './create-cost-center.dto';

export class UpdateCostCenterDto extends PartialType(CreateCostCenterDto) {
  @ApiProperty()
  name: string;
}
