import { PartialType } from '@nestjs/swagger';
import { CreatePacienteDto } from './create-paciente.dto';

export class UpdatePacienteDto extends PartialType(CreatePacienteDto) {}
// Esta classe estende CreatePacienteDto e permite atualizações parciais na entidade Paciente.
// Ela utiliza PartialType do @nestjs/swagger para tornar automaticamente todas as propriedades opcionais.
// Isso é útil para requisições PATCH, onde você pode não querer atualizar todos os campos de um Paciente.
    