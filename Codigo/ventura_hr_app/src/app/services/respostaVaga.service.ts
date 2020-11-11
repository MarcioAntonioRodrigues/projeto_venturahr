import { Injectable} from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RespostaVagaService 
{
	baseUrl = "https://localhost:44391/api/";

	constructor(private http: Http){}

	public saveRespostaVaga(resposta: any)
	{
		let url = this.baseUrl + "respostasvagas/save";
		
		return this.http.post(url, resposta);
	}

	
}
