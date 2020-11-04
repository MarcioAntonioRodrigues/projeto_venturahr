import { Injectable} from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CadastroService
{
	baseUrl = "https://localhost:44391/api/";

	constructor(private http: Http)
	{
	}

	public saveUser(usuario: any, tipoConta: string)
	{
		let url = "";

		if(tipoConta == "1")
		{
			url=  this.baseUrl + "candidatos/Save";
		}
		else
		{
			url=  this.baseUrl + "Empresas/Save";
		}

		return this.http.post(url, usuario);
	}
}