import { Injectable } from '@nestjs/common';
import { DepartmentRepository } from './department.repository';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentService {
  constructor(private readonly departmentRepository: DepartmentRepository) {}
  create(createDepartmentDto: CreateDepartmentDto) {
    const department = this.departmentRepository.create(createDepartmentDto);
    return this.departmentRepository.save(department);
  }

  findAll() {
    return this.departmentRepository.find();
  }

  findOne(id: string) {
    return this.departmentRepository.findOne(id);
  }

  update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    return this.departmentRepository.update(id, updateDepartmentDto);
  }

  remove(id: string) {
    return this.departmentRepository.delete(id);
  }

  listByCostCenter(costCenterId: string) {
    return this.departmentRepository.listByCostCenter(costCenterId);
  }
}
