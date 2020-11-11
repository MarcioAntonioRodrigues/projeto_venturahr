import { Injectable} from '@angular/core';

@Injectable()
export class SessionService 
{
	sessionKeys: any = 
	{
		userName: "Usuario",
		termoBusca: "termoBusca"
	}
	
	constructor(){}

	public setUser(usuario: any)
	{
		sessionStorage.setItem(this.sessionKeys.userName, JSON.stringify(usuario));
	}

	public getUser(): string {
		return sessionStorage.getItem(this.sessionKeys.userName);
	}

	
}
