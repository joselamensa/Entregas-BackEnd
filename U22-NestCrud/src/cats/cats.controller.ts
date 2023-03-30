import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { Render } from '@nestjs/common/decorators';
import { CreateCatDto } from 'src/dto/create-cat.dto';
import { Cat } from 'src/interfaces/cat/cat.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    const cats = await this.catsService.findAll();
    const id =
      cats[cats.length - 1] && cats[cats.length - 1].id
        ? cats[cats.length - 1].id + 1
        : 1;
    const obj = { ...createCatDto, id };
    this.catsService.create(obj);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.catsService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() createCatDto: CreateCatDto) {
    return this.catsService.update(id, createCatDto);
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    this.catsService.deleteById(id);
  }
}
