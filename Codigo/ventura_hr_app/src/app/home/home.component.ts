import { Component, OnInit } from '@angular/core';
import { VagasService } from '../services/vagas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit 
{
	optionsList: Array<any> = new Array<any>();
	termoBusca: string;

	constructor(private vagasService: VagasService,
				private router: Router) 
	{
		this.optionsList = 
		[
			{
				nome: "Acessar",
				value: 1
			},
			{
				nome: "Minhas Vagas",
				value: 2
			},
			{
				nome: "Crie o seu currículo",
				value: 3
			},
			{
				nome: "Sobre o Ventura HR",
				value: 3
			},
		]	
	}

	ngOnInit() {}

	selectOption(value: number)
	{
		console.log("value", value)
	}

	public buscarVagas()
	{
		console.log("termo", this.termoBusca)
		if(!this.termoBusca)
		{
			return;
		}
		this.vagasService.buscarVagas(this.termoBusca).subscribe(
			(res: any) =>
			{
				// this.sessionService.setTermoBusca(this.termoBusca);
				this.router.navigate(['/busca'],
				{queryParams: res});
			}
		);
	}

}
