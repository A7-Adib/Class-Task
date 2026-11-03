
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Faculty } from './entities/faculty.entity';
import { CreateFacultyDto } from './dto/create-faculty.dto';

@Injectable()
export class FacultiesService {
  constructor(
    @InjectRepository(Faculty)
    private readonly facultyRepository: Repository<Faculty>,
  ) {}

  async create(createFacultyDto: CreateFacultyDto): Promise<Faculty> {
    const faculty = this.facultyRepository.create(createFacultyDto);
    return await this.facultyRepository.save(faculty);
  }
}
