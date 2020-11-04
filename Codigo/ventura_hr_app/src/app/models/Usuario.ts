export class Usuario
{
	Nome: string;
    Email: string;
	Senha: string;
	Cpf: string;
	DataNascimento: string;
	Endereco: {
		Cep: number;
		Cidade: string;
		Estado: string;
		Logradouro: string;
	}
	Id: string;
	Telefone: string;
	Sexo: string;
	TipoUsuario: number;
}