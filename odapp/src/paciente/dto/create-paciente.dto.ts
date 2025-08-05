import { ApiProperty } from '@nestjs/swagger';

export class CreatePacienteDto {
  @ApiProperty({ example: '43987654321' })
  numero: string; // Adicionando o campo número de telefone

  @ApiProperty({ example: 'Fernando Silva' })
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
