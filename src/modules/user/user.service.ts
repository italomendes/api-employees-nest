import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository._create(createUserDto);
    await this.userRepository.save(user);
    return this.removePassHash([user]);
  }

  async findAll() {
    const users = await this.userRepository.find();
    return this.removePassHash(users);
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne(id);
    return this.removePassHash([user]);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: string) {
    return this.userRepository.delete(id);
  }

  listByDepartment(departmentId: string) {
    return this.userRepository.listByDepartment(departmentId);
  }

  removePassHash(users: User[]) {
    return users.map((user) => {
      delete user.passhash;
      return user;
    });
  }
}
