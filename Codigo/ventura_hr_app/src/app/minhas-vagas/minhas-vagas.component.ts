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
	private minhasVagasList: any = [];

	constructor(private minhasVagasService: MinhasVagasService,
				private sessionService: SessionService,
				public vagasService: VagasService,
				private router: Router,
				private loadingController: LoadingController)
	{
		this.usuario = JSON.parse(this.sessionService.getUser());
		this.IdCandidato = this.usuario.id;
		this.getRespostasVagaByIdCandidato();
	}

	ngOnInit() {}
	  
	public async getRespostasVagaByIdCandidato()
	{
		const loading = await this.loadingController.create({
			cssClass: 'my-custom-class',
			message: 'Carregando vagas',
			duration: 2000
		});
		await loading.present();

		this.minhasVagasService.getRespostasVagaByIdCandidato(this.IdCandidato).subscribe(
			(res: any)=>
			{
				loading.onDidDismiss();
				this.minhasVagasList = JSON.parse(res._body);
				console.log("vagas respondidas:", JSON.parse(res._body))
			}
		);
	}

	public closePage()
	{
		this.router.navigateByUrl('/home');
	}

}
