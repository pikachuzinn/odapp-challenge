import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Paciente, PacienteDocument } from './schemas/paciente.schema';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

// Este serviço contém a lógica de negócios para a entidade Paciente. Ele interage diretamente com o modelo Mongoose para realizar operações no banco de dados MongoDB.


@Injectable() // Decorador que marca a classe como um provedor injetável.
export class PacienteService {
  constructor(
    @InjectModel(Paciente.name)
    private pacienteModel: Model<PacienteDocument>,
  ) {} // Propósito: Injeta o modelo Mongoose Paciente para interagir com a coleção pacientes no MongoDB.

  create(createPacienteDto: CreatePacienteDto) {
    const paciente = new this.pacienteModel(createPacienteDto);
    return paciente.save();
  } // Propósito: Cria um novo documento de paciente no banco de dados.
    // Comportamento: Instancia um novo pacienteModel com os dados do DTO e o salva.

  findAll() {
    return this.pacienteModel.find().exec();
  } // Propósito: Retorna todos os documentos de paciente do banco de dados
 // Comportamento: Usa find().exec() para buscar todos os pacientes.

  findOne(_id: string) {
    return this.pacienteModel.findById(_id).exec();
  } // Propósito: Retorna um uníco documento de paciente pelo seu ID.
    // Comportamento: Usa findById(_id).exec() para buscar um paciente específico

  update(_id: string, updatePacienteDto: UpdatePacienteDto) {
    return this.pacienteModel.findByIdAndUpdate(_id, updatePacienteDto, { new: true }).exec();
  } // Propósito: Atualiza um documento de paciente existente.
    // Comportamento: Usa findByIdAndUpdate(_id, updatePacienteDto,...exec()). A opcção { new: true} garante que o documento retornado seja a versão atualizada.

  remove(_id: string) {
    return this.pacienteModel.findByIdAndDelete(_id).exec();
  } // Propósito: Remove u documento de paciente pelo seu ID.
    // Comportamento: Usa findByIdAndDelete(_id).exec()
}
