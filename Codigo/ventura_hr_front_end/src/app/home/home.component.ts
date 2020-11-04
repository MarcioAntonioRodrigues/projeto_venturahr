import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { VagasService } from '../services/vagas.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent
{
	vagasEmprego:any = [];
	usuario: any;
	tipoUsuario: string;
	termoDeBusca: string;
	popularSearchList: Array<string> = new Array<string>();

	constructor(private sessionService: SessionService,
				private router: Router,
				private vagasService: VagasService)
	{
		this.listarVagas();
		this.usuario = JSON.parse(this.sessionService.getUser());
		if(this.usuario!=null)
		{
			this.tipoUsuario = this.usuario.tipoUsuario;
		}
		this.popularSearchList = ['Home office', 'Auxiliar de Enfermagem',
								'Analista de Recursos Humanos', 'Trabalho Remoto',
								'Analista Financeiro', 'Auxiliar Administrativo',
								'Analista de Suporte', 'Auxiliar de limpeza',
								'Engenheiro Civil', 'Operador de Telemarketing'];
	}

	public listarVagas()
	{
		this.vagasService.listVagas().subscribe(
			(res: any) =>
			{
				this.vagasEmprego = JSON.parse(res._body);
			}
		);
	}

	public buscarVagas()
	{
		if(!this.termoDeBusca)
		{
			return;
		}
		this.vagasService.buscarVagas(this.termoDeBusca).subscribe(
			(res: any) =>
			{
				this.sessionService.setTermoBusca(this.termoDeBusca);
				this.router.navigate(['/busca'],
				{queryParams: res});
			}
		);
	}

	public buscarVagaPopular(termo: string)
	{
		this.termoDeBusca = termo;
		this.buscarVagas();
	}
	
}
