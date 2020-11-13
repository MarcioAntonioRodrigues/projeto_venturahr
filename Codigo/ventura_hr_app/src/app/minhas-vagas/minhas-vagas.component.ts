import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MinhasVagasService } from '../services/minhasVagas.service';
import { VagasService } from '../services/vagas.service';
import { SessionService } from '../services/session.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-minhas-vagas',
  templateUrl: './minhas-vagas.component.html',
  styleUrls: ['../search/search.component.scss'],
})
export class MinhasVagasComponent implements OnInit 
{
	private usuario: any;
	private IdCandidato: any;
	private idsVagasList: any = [];
	private empresasList: any = [];
	private minhasVagasListResponse: any = [];
	private minhasVagasList: any = [];

	constructor(private minhasVagasService: MinhasVagasService,
				private sessionService: SessionService,
				public vagasService: VagasService,
				private router: Router,
				private loadingController: LoadingController)
	{
		this.usuario = JSON.parse(this.sessionService.getUser());
		this.IdCandidato = this.usuario.id;
		this.setMinhasVagasList();
	}

	private async setMinhasVagasList() 
	{
		const loading = await this.loadingController.create({
			cssClass: 'my-custom-class',
			message: 'Carregando vagas',
			duration: 2000
		});
		await loading.present();

		this.getRespostasVagaByIdCandidato();
		setTimeout(() => {
			this.getMinhasVagas();
		}, 500);

		setTimeout(() => {
			this.getEmpresasList();
		}, 1000);

		setTimeout(() => {
			loading.onDidDismiss();
			this.setEmpresasToVagas();
		}, 1500);
	}

	ngOnInit() {}
	  
	public getRespostasVagaByIdCandidato()
	{
		this.minhasVagasService.getRespostasVagaByIdCandidato(this.IdCandidato).subscribe(
			(res: any)=>
			{
				let response = JSON.parse(res._body);
				response.forEach((vaga: any) => {
					this.idsVagasList.push(vaga.idVaga)
				});
			}
		);
	}

	public getMinhasVagas()
	{
		this.idsVagasList.forEach((id: number) => {
			this.minhasVagasService.getVagaByIdVaga(id).subscribe(
				(res: any)=>
				{
					let vaga = JSON.parse(res._body);
					this.minhasVagasListResponse.push(vaga);
					console.log("vagas minhas: ", this.minhasVagasListResponse);
				}
			);
		});
	}

	public getEmpresasList()
	{
		this.minhasVagasListResponse.forEach((vaga: any) => {
			console.log("vaga.idEmpresa:", vaga[0].idEmpresa)
			this.vagasService.getEmpresaById(vaga[0].idEmpresa).subscribe(
				(res: any)=>
				{
					let empresa = JSON.parse(res._body);
					this.empresasList.push(empresa);
					console.log("empresasList: ", this.empresasList);
				}
			);
		});
	}

	public setEmpresasToVagas()
	{
		for (let index = 0; index < this.minhasVagasListResponse.length; index++) {
			let minhaVaga = {
				vaga: this.minhasVagasListResponse[index][0],
				empresa: this.empresasList[index]
			}
			this.minhasVagasList.push(minhaVaga);
		}
		console.log("Minhas vagas completas:", this.minhasVagasList)
	}

	closePage()
	{
		this.router.navigateByUrl('/home');
	}

}
