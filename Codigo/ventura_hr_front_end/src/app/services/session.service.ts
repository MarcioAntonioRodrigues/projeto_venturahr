import { Injectable } from "@angular/core";
import { Usuario } from '../login/Usuario';

@Injectable()
export class SessionService 
{
	termoBusca: string = '';

	sessionKeys: any = 
	{
		userName: "Usuario",
		termoBusca: "termoBusca"
	}

	public setUser(usuario: any)
	{
		sessionStorage.setItem(this.sessionKeys.userName, JSON.stringify(usuario));
	}

	public getUser(): string {
		return sessionStorage.getItem(this.sessionKeys.userName);
	}

	public setTermoBusca(value: any)
	{
		this.termoBusca = value;
		sessionStorage.setItem(this.sessionKeys.termoBusca, JSON.stringify(this.termoBusca));
	}

	public getTermoBusca(): string
	{
		let busca = JSON.parse(sessionStorage.getItem(this.sessionKeys.termoBusca));
		return busca;
	}

	public clearSession(): void 
	{
		sessionStorage.clear();
	}
}