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

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

  dismiss() 
  {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
