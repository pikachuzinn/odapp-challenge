import { ApiProperty } from '@nestjs/swagger';

// Este Data Transfer Object define a estrutura dos dados esperados ao criar um novo paciente. Ele é usado para validação e tipagem das requisições POST.

export class CreatePacienteDto {
  @ApiProperty({ example: '43987654321' })
  numero: string; // Adicionando o campo número de telefone

  @ApiProperty({ example: 'Fernando Greca' })
  nome: string; // Adicionando o campo nome

  @ApiProperty({ example: 18 })
  idade: number; // Adicionando o campo idade

  @ApiProperty({ example: '2025-08-01T00:00:00.000Z' })
  dataCadastro: Date; // Adicionando o campo dataCadastro

  @ApiProperty({ example: 'Londrina' })
  cidade: string; // Adicionando o campo cidade

  @ApiProperty({ example: 'PR' })
  estado: string; // Adicionando o campo estado
}

