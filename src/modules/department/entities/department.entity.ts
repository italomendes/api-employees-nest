import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  BaseEntity,
} from 'typeorm';
import { CostCenter } from 'src/modules/cost-center/entities/cost-center.entity';
import { User } from 'src/modules/user/entities/user.entity';

@Entity()
export class Department extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  costCenterId: string;

  @ManyToOne((type) => CostCenter, (costCenters) => CostCenter, { eager: true })
  costCenter: CostCenter;

  @OneToMany((type) => User, (users) => User)
  users: User[];
}
