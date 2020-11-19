import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { VagasService } from '../../services/vagas.service';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-detalhe-vaga-dialog',
  templateUrl: './detalhe-vaga-dialog.component.html',
  styleUrls: ['./detalhe-vaga-dialog.component.css']
})
export class DetalheVagaDialogComponent implements OnInit 
{
	public rankingList: any = [];
	public candidatoSelecionado: any = {};

	constructor(@Inject(MAT_DIALOG_DATA) public data: {idVaga: number},
				private vagasService: VagasService) 
	{
		this.getRankingList(data.idVaga);
	}

	ngOnInit() {
	}

	public getRankingList(idVaga: number)
	{
		this.vagasService.getRankingList(idVaga).subscribe(
			(res: any)=>
			{
				this.rankingList = JSON.parse(res._body);
				this.sortList(this.rankingList)
				this.rankingList.reverse();
				this.roundMedia();
			}
		);
	}

	public sortList(list: any)
	{
		list.sort(function(a: any, b: any)
		{
			return a.media - b.media;
		})
	}

	public roundMedia()
	{
		this.rankingList.forEach((c: any) => {
			c.media = Math.round(c.media * 10) / 10;
		});
	}

	public selectCandidato(candidato: any)
	{
		console.log(candidato)
		this.candidatoSelecionado = candidato;
	}
	
}
