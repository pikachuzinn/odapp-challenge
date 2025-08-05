import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Paciente, PacienteDocument } from './schemas/paciente.schema';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@Injectable()
export class PacienteService {
  constructor(
    @InjectModel(Paciente.name)
    private pacienteModel: Model<PacienteDocument>,
  ) {}

  create(createPacienteDto: CreatePacienteDto) {
    const paciente = new this.pacienteModel(createPacienteDto);
    return paciente.save();
  }

  findAll() {
    return this.pacienteModel.find().exec();
  }

  findOne(_id: string) {
    return this.pacienteModel.findById(_id).exec();
  }

  update(_id: string, updatePacienteDto: UpdatePacienteDto) {
    return this.pacienteModel.findByIdAndUpdate(_id, updatePacienteDto, { new: true }).exec();
  }

  remove(_id: string) {
    return this.pacienteModel.findByIdAndDelete(_id).exec();
  }
}
