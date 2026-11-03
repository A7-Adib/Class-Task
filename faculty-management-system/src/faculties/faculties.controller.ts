
import { Controller, Post, Body } from '@nestjs/common';
import { FacultiesService } from './faculties.service';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { Faculty } from './entities/faculty.entity';

@Controller('faculties')
export class FacultiesController {
  constructor(
    private readonly facultiesService: FacultiesService,
  ) {}

  @Post('create-faculty')
  async create(
    @Body() createFacultyDto: CreateFacultyDto,
  ): Promise<Faculty> {
    return this.facultiesService.create(createFacultyDto);
  }
}
