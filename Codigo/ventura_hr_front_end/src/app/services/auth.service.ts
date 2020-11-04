import { Injectable} from '@angular/core';
import { Usuario } from '../login/Usuario';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Injectable()
export class AuthService 
{
	baseUrl = "https://localhost:44391/api/";

	constructor(private http: Http){}

	login(usuario: Usuario)
	{
		console.log(usuario)

		const url = this.baseUrl + "login/login";
		
		return this.http.post(url, usuario);
	}
	
}
