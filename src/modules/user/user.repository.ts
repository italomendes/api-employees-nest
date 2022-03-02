import * as bcrypt from 'bcrypt';
import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public async exists(id: string): Promise<boolean> {
    return await !!this.findOne(id);
  }

  public async _create(createUserDto: CreateUserDto): Promise<User> {
    createUserDto.passhash = await bcrypt.hash(createUserDto.password, 10);
    delete createUserDto.password;
    const user = this.create(createUserDto);
    return user;
  }

  public async findByUserName(username: string): Promise<User | undefined> {
    const user = await this.findOne({ where: { username } });

    return user;
  }

  public async listByDepartment(departmentId: string): Promise<User[]> {
    const users = await this.find({
      relations: ['department', 'role'],
      where: { departmentId },
    });

    return users;
  }

  public async isValidPassword(
    passwordDb: string,
    passwordInput: string,
  ): Promise<boolean> {
    const isValidPassword = await bcrypt.compare(passwordInput, passwordDb);

    return isValidPassword;
  }
}
