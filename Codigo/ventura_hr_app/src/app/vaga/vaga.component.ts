import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

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

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
	  console.log("criterios:", this.criterios)
  }

  dismiss() 
  {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
