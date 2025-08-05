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

@ApiTags('pacientes') // agrupa as rotas no Swagger
@Controller('paciente')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastrar um novo paciente' })
  @ApiResponse({ status: 201, description: 'Paciente criado com sucesso' })
  create(@Body() createPacienteDto: CreatePacienteDto) {
    return this.pacienteService.create(createPacienteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os pacientes' })
  @ApiResponse({ status: 200, description: 'Lista de pacientes retornada' })
  findAll() {
    return this.pacienteService.findAll();
  }

  @Get(':_id')
  @ApiOperation({ summary: 'Buscar paciente pelo ID' })
  @ApiParam({ name: '_id', type: String })
  @ApiResponse({ status: 200, description: 'Paciente encontrado' })
  findOne(@Param('_id') _id: string) {
    return this.pacienteService.findOne(_id);
  }

  @Patch(':_id')
  @ApiOperation({ summary: 'Atualizar dados de um paciente' })
  @ApiParam({ name: '_id', type: String })
  @ApiResponse({ status: 200, description: 'Paciente atualizado' })
  update(@Param('_id') _id: string, @Body() updatePacienteDto: UpdatePacienteDto) {
    return this.pacienteService.update(_id, updatePacienteDto); 
  }

  @Delete(':_id')
  @ApiOperation({ summary: 'Remover paciente pelo ID' })
  @ApiParam({ name: '_id', type: String })
  @ApiResponse({ status: 200, description: 'Paciente removido' })
  remove(@Param('_id') _id: string) {
    return this.pacienteService.remove(_id);
  }
}
