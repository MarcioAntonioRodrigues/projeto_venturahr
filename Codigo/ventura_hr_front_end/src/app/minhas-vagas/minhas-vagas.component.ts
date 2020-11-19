import { Component } from '@angular/core';
import { Empresa } from '../Models/Empresa';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { VagasService } from '../services/vagas.service';
import { SearchComponent } from '../search/search.component';
import {MatDialog, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { DetalheVagaDialogComponent } from '../components/detalhe-vaga-dialog/detalhe-vaga-dialog.component';

@Component({
	selector: 'app-search',
	templateUrl: '../search/search.component.html',
	styleUrls: ['../search/search.component.css'],
	providers: [SearchComponent]
})

export class MinhasVagasComponent
{
	usuario: any;
	vagas: any = [];
	termoBusca: string;
	tipoUsuario: number;
	vagasEncontradas: any;
	criteriosList: any = [];
	searchLoading: boolean = false;
	empresasList: Array<Empresa> = Array<Empresa>();

	constructor(private route: ActivatedRoute,  
				private sessionService: SessionService, 
				private vagasService: VagasService,
				private router: Router,
				private dialog: MatDialog)
	{
		this.usuario = JSON.parse(this.sessionService.getUser());
		this.tipoUsuario = this.usuario.tipoUsuario;
		this.termoBusca = sessionService.getTermoBusca();
		this.vagasEncontradas = this.route.queryParamMap;
		this.vagasEncontradas = this.vagasEncontradas.source._value;
		this.setVagasToList(this.vagasEncontradas._body);
	}

	ngOnInit()
	{
		console.log("vagas", this.vagasEncontradas)
	}

	public getEmpresaById(id: string)
	{
		this.vagasService.getEmpresaById(id).subscribe(
			(res: any)=>
			{
				let empr = JSON.parse(res._body);
				this.empresasList.push(empr);
			}
		);
	}

	public empresasListPush()
	{
		this.vagasEncontradas.forEach((vaga: any) => {
			this.getEmpresaById(vaga.idEmpresa);
			this.buscarCriteriosByVagaId(vaga.id);
		});
	}

	public buscarCriteriosByVagaId(idVaga: number)
	{
		this.vagasService.buscarCriteriosByVagaId(idVaga).subscribe(
			(res: any) => 
			{
				let criterios = JSON.parse(res._body)
				this.criteriosList.push(criterios);
			}
		);
	}

	public attrEmpresaToVaga()
	{
		for (let index = 0; index < this.vagasEncontradas.length; index++) 
		{
			let vaga = {
				vaga: this.vagasEncontradas[index],
				empresa: this.empresasList[index],
				criterios: this.criteriosList[index]
			}
			this.vagas.push(vaga);
		}
	}

	public buscarVagas()
	{
		if(!this.termoBusca)
		{
			return;
		}
		this.vagasService.buscarVagas(this.termoBusca).subscribe(
			(res: any) =>
			{
				this.sessionService.setTermoBusca(this.termoBusca);
				this.router.navigate(['/busca'],
				{queryParams: res});
			}
		);
	}

	public setVagasToList(response: any)
	{
		this.searchLoading = true;
		this.vagasEncontradas = JSON.parse(response);
		this.empresasListPush();
		setTimeout(() => {
			this.vagas = [];
			this.searchLoading = false;
			this.attrEmpresaToVaga();
		}, 2000);
	}

	public openDialog(vaga: any) 
	{
		const dialogRef = this.dialog.open(DetalheVagaDialogComponent,
			{
				data: {idVaga: vaga.id}
			});
	
		dialogRef.afterClosed().subscribe(result => {
		  console.log(`Dialog result: ${result}`);
		});
	}
}