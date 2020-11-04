import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { EventsService } from '../services/events.service';
import { Usuario } from '../login/Usuario';
import { VagasService } from '../services/vagas.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit
{
	usuario: any;
	username: string = null;
	typeOption: number = 1;
	tipoUsuario: number;

	constructor(private sessionService: SessionService, 
				private router: Router,
				private vagasService: VagasService){}

	ngOnInit(): void 
	{
		this.usuario = JSON.parse(this.sessionService.getUser());
		if(this.usuario != null)
		{
			this.username = this.usuario.nome;
			this.tipoUsuario = this.usuario.tipoUsuario;
		}
	}

	logout()
	{
		this.sessionService.clearSession();
		return this.router.navigate(['/']);
	}

	// goToEvent(categoria)
	// {
	// 	this.router.navigate(['/categorias', categoria]);
	// }

	// goToSearchEvent(search)
	// {
	// 	this.router.navigate(['/busca', search]);
	// }

	selectOption(value: number)
	{
		this.typeOption = value;
		if(value == 3)
		{
			console.log("entrou")
			this.vagasService.getVagasByIdEmpresa(this.usuario.id).subscribe(
				res=>{
					this.sessionService.setTermoBusca("Minhas Vagas");
					this.router.navigate(['/MinhasVagas'],
					{queryParams: res});
				}
			);
		}
	}

	public getVagasByIdEmpresa()
	{

	}

}
