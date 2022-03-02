import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { DepartmentRepository } from './department.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DepartmentRepository])],
  controllers: [DepartmentController],
  providers: [DepartmentService],
})
export class DepartmentModule {}
