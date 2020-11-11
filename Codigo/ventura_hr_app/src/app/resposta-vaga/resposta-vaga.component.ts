import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-resposta-vaga',
  templateUrl: './resposta-vaga.component.html',
  styleUrls: ['./resposta-vaga.component.scss'],
})
export class RespostaVagaComponent implements OnInit 
{
	@Input() idVaga: number;
	@Input() criterios: Array<any>;
	usuario: any;
	idUsuario: string;
	respostaCriteriosList: Array<any>;

	constructor(private sessionService: SessionService,
				private modalController: ModalController) 
	{ 
		this.usuario = JSON.parse(this.sessionService.getUser());
		this.idUsuario = this.usuario.id;
	}

	ngOnInit() {}
	
	enviarCandidatura()
	{

	}

	dismiss() 
  {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
