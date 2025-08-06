import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('pacientes') // Agrupa as rotas deste controlador sob a tag "pacientes" na documentação do Swagger.

@Controller('paciente') // Define o prefixo da rota para todos os endpoints neste controlador como /pacienete

export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {} // Injeta o PacienteService

  @Post() // Cadastrar um novo paciente.

  @ApiOperation({ summary: 'Cadastrar um novo paciente' }) // Descrição da operação no Swagger.

  @ApiResponse({ status: 201, description: 'Paciente criado com sucesso' }) // Resposta esperada no Swagger.

  create(@Body() createPacienteDto: CreatePacienteDto) {
    return this.pacienteService.create(createPacienteDto);
  }

  @Get() // Buscar um paciente pelo ID

  @ApiOperation({ summary: 'Listar todos os pacientes' }) // Descrição da operação no Swagger.

  @ApiResponse({ status: 200, description: 'Lista de pacientes retornada' }) // Resposta esperada no Swagger.

  findAll() {
    return this.pacienteService.findAll();
  }

  @Get(':_id') // Buscar uma paciente pelo ID.

  @ApiOperation({ summary: 'Buscar paciente pelo ID' }) // Descrição da operação no Swagger.

  @ApiParam({ name: '_id', type: String }) // Define o parâmetro de rota _id no Swagger.

  @ApiResponse({ status: 200, description: 'Paciente encontrado' }) // Resposta esperado pelo Swagger.

  findOne(@Param('_id') _id: string) {
    return this.pacienteService.findOne(_id);
  }

  @Patch(':_id') // Remover um paciente pelo ID.

  @ApiOperation({ summary: 'Atualizar dados de um paciente' }) // Descrição da operação no Swagger.

  @ApiParam({ name: '_id', type: String }) // Define o parâmetro de rota _id no Swagger.

  @ApiResponse({ status: 200, description: 'Paciente atualizado' }) // Resposta esperada no Swagger.

  update(@Param('_id') _id: string, @Body() updatePacienteDto: UpdatePacienteDto) {
    return this.pacienteService.update(_id, updatePacienteDto); 
  }

  @Delete(':_id') // Remover um paciente pelo ID.

  @ApiOperation({ summary: 'Remover paciente pelo ID' }) // Descrição da operação no Swagger.

  @ApiParam({ name: '_id', type: String }) // Define o parâmetro de rota _id no Swagger.

  @ApiResponse({ status: 200, description: 'Paciente removido' }) // Resposta esperada no Swagger.
  
  remove(@Param('_id') _id: string) {
    return this.pacienteService.remove(_id);
  }
}
