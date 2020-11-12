import { Empresa } from '../models/Empresa';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, ModalController } from '@ionic/angular';
import { VagasService } from '../services/vagas.service';
import { VagaComponent } from '../vaga/vaga.component';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr)

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [ {provide: LOCALE_ID, useValue: 'pt'}]
})
export class SearchComponent implements OnInit 
{
	usuario: any;
	vagas: any = [];
	termoBusca: string;
	tipoUsuario: number;
	vagasEncontradas: any;
	criteriosList: any = [];
	empresasList: Array<Empresa> = Array<Empresa>();

	constructor(private route: ActivatedRoute,
				private vagasService: VagasService,
				public loadingController: LoadingController,
				public navCtrl: NavController,
				public modalController: ModalController,
				private router: Router) 
	{
		const vagasEncontradas =  JSON.parse(this.route._futureSnapshot.queryParams._body);
		this.setVagasToList(vagasEncontradas);
	}

	ngOnInit() {}

	public getEmpresaById(id: string)
	{
		this.vagasService.getEmpresaById(id).subscribe(
			(res: any)=>
			{
				let empr = JSON.parse(res._body);
				this.empresasList.push(empr);
			}
		);
	}

	public empresasListPush()
	{
		this.vagasEncontradas.forEach((vaga: any) => {
			this.getEmpresaById(vaga.idEmpresa);
			this.buscarCriteriosByVagaId(vaga.id);
		});
	}
	
	public async setVagasToList(response: any)
	{
		const loading = await this.loadingController.create({
			cssClass: 'my-custom-class',
			message: 'Carregando vagas',
			duration: 2000
		});
		await loading.present();
		this.vagasEncontradas = response;
		this.empresasListPush();
		setTimeout(() => 
		{
			loading.onDidDismiss();
			this.vagas = [];
			this.attrEmpresaToVaga();
		}, 2000);
	}

	public buscarCriteriosByVagaId(idVaga: number)
	{
		this.vagasService.buscarCriteriosByVagaId(idVaga).subscribe(
			(res: any) => 
			{
				let criterios = JSON.parse(res._body)
				this.criteriosList.push(criterios);
			}
		);
	}

	public attrEmpresaToVaga()
	{
		for (let index = 0; index < this.vagasEncontradas.length; index++) 
		{
			let vaga = {
				vaga: this.vagasEncontradas[index],
				empresa: this.empresasList[index],
				criterios: this.criteriosList[index]
			}
			this.vagas.push(vaga);
		}
	}

	public buscarVagas()
	{
		if(!this.termoBusca)
		{
			return;
		}
		this.vagasService.buscarVagas(this.termoBusca).subscribe(
			(res: any) =>
			{
				// this.sessionService.setTermoBusca(this.termoBusca);
				const vagasEncontradas =  JSON.parse(res._body);
				this.setVagasToList(vagasEncontradas);
			}
		);
	}

	backPage()
	{
		this.navCtrl.pop();
	}

	async presentModal(item: any) 
	{
		console.log("Vaga:", item)
		const modal = await this.modalController.create({
		  component: VagaComponent,
		  cssClass: 'my-custom-class',
		  componentProps: {
			'cargo': item.vaga.cargo,
			'tipoVaga': item.vaga.tipoVaga,
			'remuneracao': item.vaga.remuneracao,
			'descricao': item.vaga.descricao,
			'data': item.vaga.dataCriacao,
			'nomeEmpresa': item.empresa.nome,
			'local': item.empresa.endereco.cidade,
			'criterios': item.criterios,
			'idVaga': item.vaga.id
		  }
		});
		return await modal.present();
	}

	public openProfilePage()
	{
		this.router.navigateByUrl('/perfil');
	}
}
