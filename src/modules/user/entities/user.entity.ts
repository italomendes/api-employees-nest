import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  BaseEntity,
} from 'typeorm';
import { Department } from 'src/modules/department/entities/department.entity';
import { Role } from 'src/modules/role/entities/role.entity';
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  username: string;

  @Column()
  passhash: string;

  @Column()
  departmentId: string;

  @Column()
  roleId: string;

  @ManyToOne((type) => Department, (department) => Department, { eager: true })
  department: Department;

  @ManyToOne((type) => Role, (role) => Role, { eager: true })
  role: Role;
}
