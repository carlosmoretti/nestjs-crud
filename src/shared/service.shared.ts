/* eslint-disable prettier/prettier */
import { Repository } from 'typeorm';

export abstract class SharedService<T> {
  constructor(private repository: Repository<T>) {}

  async getAll() {
      return await this.repository.find();
  }

  async add(obj: T) {
      const data = this.repository.create(obj);
      await this.repository.save(data);
      return data;
  }

  async findById(id: number) {
    return await this.repository.findOne({
        where: {
          id: id,
        },
      })
  }

  async update(data: T) {
    this.repository.save(data);
  }

  async delete(id: number) {
    await this.repository.delete(id);
  }
}
