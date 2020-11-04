import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit
{
	
	bestMovies:any = [];
	actionMovies: any = [];
	titulo = "";
	categoria: any;
	listaCategoria = [];

	constructor(private eventsService:EventsService, private route: ActivatedRoute, private router: Router)
	{
	}

	ngOnInit(): void 
	{
		this.route.params.subscribe((obj)=>
		{
			this.categoria = obj.categoria;
			this.eventsService.getMoviesListByCategory(this.categoria);
			this.bestMovies = this.eventsService.bestJsonList;
			this.actionMovies = this.eventsService.actionJsonList;
			this.getCategoria();
		});
	}

	getCategoria()
	{
		
		if(this.categoria == 'destaques')
		{
			this.listaCategoria = this.bestMovies;
			this.titulo = "EM DESTAQUE";
		}
		if(this.categoria == 'acao')
		{
			this.listaCategoria = this.actionMovies;
			this.titulo = "FILMES DE AÇÃO";
		}
	}

	goToEvent(evento)
	{
		this.router.navigate(['/detalhes'], 
		{queryParams: evento});
	}
}