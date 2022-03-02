import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'pgsql-employees',
  port: 5432,
  username: 'pguser',
  password: 'pgpassword',
  database: 'employees',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
