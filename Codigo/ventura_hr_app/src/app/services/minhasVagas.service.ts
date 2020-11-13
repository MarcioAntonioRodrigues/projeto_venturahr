import { Injectable} from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MinhasVagasService 
{
	baseUrl = "https://localhost:44391/api/";

	constructor(private http: Http){}

	public getRespostasVagaByIdCandidato(idCandidato: any)
	{
		console.log("id candidato", idCandidato)

		let url = this.baseUrl + "respostasvagas/GetAllByIdCandidato/" + idCandidato;

		return this.http.get(url);
	}
	
	public getVagaByIdVaga(idVaga: number)
	{
		let url = this.baseUrl + "vagas/GetByIdVaga/" + idVaga;

		return this.http.get(url);
	}
	
}
