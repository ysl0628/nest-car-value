import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  // 由於 DI 無法有效的讀取泛型 Repository<User> 所以必須定義 @InjectRepository(User)
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(email: string, password: string) {
    const user = this.repo.create({ email, password });

    return this.repo.save(user);
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  find(email: string) {
    return this.repo.find({ where: { email } });
  }

  async update(id: number, attr: Partial<User>) {
    const user = await this.repo.findOneBy({ id });
    if (!user) {
      throw new Error('user not found');
    }

    const newUser = { ...user, ...attr };
    return this.repo.save(newUser);
  }

  async remove(id: number) {
    const user = await this.repo.findOneBy({ id });
    if (!user) {
      throw new Error('user not found');
    }

    return this.repo.remove(user);
  }
}
