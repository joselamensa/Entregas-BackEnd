import { Injectable } from '@nestjs/common';
import { CreateCatDto } from 'src/dto/create-cat.dto';
import { Cat } from 'src/interfaces/cat/cat.interface';

@Injectable()
export class CatsService {
  private cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }
  async findAll(): Promise<Cat[]> {
    return this.cats;
  }

  async findById(id) {
    return this.cats.find((c) => c.id == id);
  }

  deleteById(id) {
    this.cats = this.cats.filter((c) => c.id !== +id);

    return 'Eliminado';
  }

  async update(id, obj) {
    const newCats = this.cats.map((c) => {
      if (c.id === +id) {
        return {
          ...c,
          ...obj,
        };
      }

      return { ...c };
    });

    this.cats = newCats;
  }
}
