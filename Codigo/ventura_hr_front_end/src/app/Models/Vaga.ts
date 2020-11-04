import { Criterio } from "./Criterio";

export class Vaga
{
	// Id: number;
	IdEmpresa: string;
	Cargo: string;
	Descricao: string;
	Remuneracao: number;
	ListaDeCriterios: Array<any>;
	DataCriacao: Date;
	TipoVaga: number;
}
