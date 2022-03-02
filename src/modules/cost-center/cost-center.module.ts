import { Module } from '@nestjs/common';
import { CostCenterService } from './cost-center.service';
import { CostCenterController } from './cost-center.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CostCenterRepository } from './cost-center.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CostCenterRepository])],
  controllers: [CostCenterController],
  providers: [CostCenterService],
})
export class CostCenterModule {}
