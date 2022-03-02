import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Department } from '../../department/entities/department.entity';
@Entity()
export class CostCenter extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany((type) => Department, (departments) => Department)
  departments: Department[];
}
