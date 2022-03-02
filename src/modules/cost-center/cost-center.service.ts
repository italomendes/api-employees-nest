import { Injectable } from '@nestjs/common';
import { CostCenterRepository } from './cost-center.repository';
import { CreateCostCenterDto } from './dto/create-cost-center.dto';
import { UpdateCostCenterDto } from './dto/update-cost-center.dto';

@Injectable()
export class CostCenterService {
  constructor(private readonly costCenterRepository: CostCenterRepository) {}

  create(createCostCenterDto: CreateCostCenterDto) {
    const costCenter = this.costCenterRepository.create(createCostCenterDto);
    return this.costCenterRepository.save(costCenter);
  }

  findAll() {
    return this.costCenterRepository.find();
  }

  findOne(id: string) {
    return this.costCenterRepository.findOne(id);
  }

  update(id: string, updateCostCenterDto: UpdateCostCenterDto) {
    return this.costCenterRepository.update(id, updateCostCenterDto);
  }

  remove(id: string) {
    return this.costCenterRepository.delete(id);
  }
}
