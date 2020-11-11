import { Component, Input, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { RespostaVagaService } from '../services/respostaVaga.service';
import { LoadingController, ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-resposta-vaga',
  templateUrl: './resposta-vaga.component.html',
  styleUrls: ['./resposta-vaga.component.scss'],
})
export class RespostaVagaComponent implements OnInit 
{
	usuario: any;
	idUsuario: string;
	candidatura: any = {
		IdVaga : null,
		IdCandidato : null,
		RespostasCriterios : null };
	@Input() idVaga: number;
	showMessageNullablePMD: boolean = false;
	@Input() criterios: Array<any> = new Array<any>();
	respostasCriterios: Array<any> = new Array<any>();

	constructor(private sessionService: SessionService,
				private modalController: ModalController,
				private respostaVagaService: RespostaVagaService,
				public loadingController: LoadingController,
				public alertController: AlertController) 
	{ 
		this.usuario = JSON.parse(this.sessionService.getUser());
		this.idUsuario = this.usuario.id;
		setTimeout(() => {
			this.criterios.forEach((criterio: any)=>
			{
				criterio.pmd = null;
			})
		}, 1000);
	}

	ngOnInit() {}
	
	async saveCandidatura()
	{
		let existNullablePMD = this.checkPMD();
		console.log("exist", existNullablePMD)
		if(existNullablePMD == true)
		{
			this.showMessageNullablePMD = true;
			setTimeout(() => {
				this.showMessageNullablePMD = false;
			}, 2000);
			return;
		}
		const loading = await this.loadingController.create({
			cssClass: 'my-custom-class',
			message: 'Salvando candidatura',
			duration: 2000
		});
		await loading.present();

		this.criterios.forEach((criterio: any)=>
		{
			this.respostasCriterios.push({
				IdCriterio: criterio.id, 
				PMD: parseInt(criterio.pmd), 
				Peso: criterio.peso
			});
		});
		this.candidatura.IdVaga = this.idVaga;
		this.candidatura.IdCandidato = this.idUsuario;
		this.candidatura.RespostasCriterios = this.respostasCriterios;
		this.respostaVagaService.saveRespostaVaga(this.candidatura).subscribe(
			()=>
			{
				loading.onDidDismiss();
				this.dismiss();
				setTimeout(() => 
				{
					this.dismiss();
					this.presentAlert();
				}, 2000);
			}
		);
	}

	dismiss() 
	{
		this.modalController.dismiss({
		'dismissed': true
		});
	}

	async presentAlert() 
	{
		const alert = await this.alertController.create({
		cssClass: 'my-custom-class',
		header: 'Candidatura salva com sucesso!',
		subHeader: '',
		message: '',
		buttons: ['OK']
		});
	
		await alert.present();
	}

	public checkPMD(): boolean
	{
		let exist: boolean = false;
		this.criterios.forEach((criterio: any)=>
		{
			if(criterio.pmd == null)
			{
				console.log("entrou")
				exist = true;
			}
		})
		return exist;
	}
	
}
