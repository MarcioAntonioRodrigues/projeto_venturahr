import { Component } from '@angular/core';
import { Vaga } from '../Models/Vaga';
import { VagasService } from '../services/vagas.service';
import { SessionService } from '../services/session.service';
import { Criterio } from '../Models/Criterio';

@Component({
	selector: 'app-cadastro-vagas',
	templateUrl: './cadastro-vagas.component.html',
	styleUrls: ['./cadastro-vagas.component.css']
})

export class CadastroVagasComponent
{
	empresa: any;
	vaga: Vaga = new Vaga();
	criterio: any = {
		Nome: "",
		Descricao: "",
		PMD: "",
		Peso: ""
	};
	criterioError: any = 
	{
		flag: false,
		message: ""
	}
	listaDeCriterios: Array<Criterio> = new Array<Criterio>();
	valuesList: Array<number> = [1,2,3,4,5];
	tipoVaga: string;
	tiposVaga: Array<any> = 
	[
		{
			tipo: 'Estágio',
			valor: 1
		},
		{
			tipo: 'CLT',
			valor: 2
		},
		{
			tipo: 'PJ',
			valor: 3
		}
	]
	
	constructor(private vagasService: VagasService,
				private sessionService: SessionService)
	{
		this.empresa = JSON.parse(this.sessionService.getUser());
		this.vaga.IdEmpresa = this.empresa.id;
		this.vaga.DataCriacao = new Date();
		this.vaga.ListaDeCriterios = this.listaDeCriterios;
	}

	public saveVaga()
	{
		this.vaga.TipoVaga = parseInt(this.tipoVaga);
		console.log("vaga:", this.vaga)
		this.vagasService.saveVaga(this.vaga).subscribe(
			res=>
			{
				console.log("res: ", res);
			}
		);
	}

	public addCriteria()
	{
		if(this.listaDeCriterios.length == 4)
		{
			this.criterioError.flag = true;
			this.criterioError.message = "Só é possível adicionar 4 critérios";
			setTimeout(() => {
				this.criterioError.flag = false;
			}, 3000);
		}
		else if(this.criterio.Nome != "" &&
			this.criterio.Descricao != "" &&
			this.criterio.PMD != undefined &&
			this.criterio.Peso != undefined)
		{
			let newCriterio = new Criterio();
			newCriterio.Nome = this.criterio.Nome;
			newCriterio.Descricao = this.criterio.Descricao;
			newCriterio.PMD = parseInt(this.criterio.PMD);
			newCriterio.Peso = parseInt(this.criterio.Peso);
			this.listaDeCriterios.push(newCriterio);
			this.criterio.Nome = "";
			this.criterio.Descricao = "";
			this.criterio.PMD = undefined;
			this.criterio.Peso = undefined;
		}
		else
		{
			this.criterioError.flag = true;
			this.criterioError.message = "Preencha todos os campos para adicionar";
			setTimeout(() => {
				this.criterioError.flag = false;
			}, 3000);
		}
	}

	public checkListaCriteria(): boolean
	{
		if(this.listaDeCriterios.length == 4)
		{
			return false;
		}
		else
		{
			return true;
		}
	}

	public removeCriteria(criteria: Criterio)
	{
		let index = this.listaDeCriterios.indexOf(criteria);
		this.listaDeCriterios.splice(index, 1);
	}
}