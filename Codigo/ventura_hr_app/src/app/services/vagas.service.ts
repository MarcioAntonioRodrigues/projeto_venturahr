import { Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { Vaga } from '../Models/Vaga';

@Injectable()
export class VagasService
{
	baseUrl = "https://localhost:44391/api/";

	constructor(private http: Http)
	{
	}

	public saveVaga(vaga: Vaga)
	{
		let	url = this.baseUrl + "vagas/Save";
		
		return this.http.post(url, vaga);
	}

	public listVagas()
	{
		let	url = this.baseUrl + "vagas/";

		return this.http.get(url);
	}

	public buscarVagas(termoDeBusca: string)
	{
		let url = this.baseUrl + "vagas/Buscar/" + termoDeBusca;

		return this.http.get(url);
	}

	public buscarCriteriosByVagaId(idVaga: number)
	{
		let url = this.baseUrl + "vagas/BuscarCriterios/" + idVaga;

		return this.http.get(url);
	}

	public getEmpresaById(id: string)
	{
		let url = this.baseUrl + "empresas/getbyid/" + id;

		return this.http.get(url);
	}

	public getVagasByIdEmpresa(idEmpresa: string)
	{
		let url = this.baseUrl + "vagas/GetByIdEmpresa/" + idEmpresa;

		return this.http.get(url);
	}
}