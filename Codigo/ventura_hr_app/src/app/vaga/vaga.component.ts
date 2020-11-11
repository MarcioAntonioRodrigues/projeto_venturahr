import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RespostaVagaComponent } from '../resposta-vaga/resposta-vaga.component';

@Component({
  selector: 'app-vaga',
  templateUrl: './vaga.component.html',
  styleUrls: ['./vaga.component.scss'],
})
export class VagaComponent implements OnInit 
{
	@Input() cargo: string;
	@Input() tipoVaga: string;
	@Input() remuneracao: string;
	@Input() descricao: string;
	@Input() data: string;
	@Input() nomeEmpresa: string;
	@Input() local: string;
	@Input() criterios: Array<any> = new Array<any>();
	@Input() idVaga: number;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
	  console.log("criterios:", this.criterios)
  }

  dismiss() 
  {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async presentModal() 
	{
		const modal = await this.modalController.create({
		  component: RespostaVagaComponent,
		  cssClass: 'my-custom-class',
		  componentProps: {
			'criterios': this.criterios,
			'idVaga': this.idVaga 
		  }
		});
		return await modal.present();
	  }

}
