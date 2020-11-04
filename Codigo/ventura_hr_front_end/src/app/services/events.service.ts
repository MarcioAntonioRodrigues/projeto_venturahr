import { Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EventsService 
{
    filmes:any = [];
	pecas: any = [];
    bestJsonList = [];
    actionJsonList= [];
	bestEvents:any = [];
	baseUrl = "https://api.themoviedb.org/3/movie/";
    data = ['11/05', '12/05', '13/05', '14/05', '15/05'];
	apiKey = "?api_key=e8c3e24acb276807efbdee9422c2e5e3&language=pt-BR";
    actionMoviesList = ["320288","438650","299537","447404","458156","299534",
        "299536","287947","118340","127585","399579","246655","122917","335983"]
	bestMoviesList = ["420817", "5241", '238', '278', '424', '299534', '497', '550'];
    locales = [
		{ cinema: 'Knoplex Tijuca', endereco: 'Shopping Tijuca, 188.', horarios: ['12:00', '15:00' , '17:00']}, 
        { cinema: 'Cinemark Rio Sul', endereco: 'Shopping Rio Sul, 123.', horarios: [ '12:00', '15:00' , '17:00']},
        { cinema: 'São Luís Lgo do Machado', endereco: 'Lgo. do Machado, 161.', horarios: ['12:00', '15:00' , '17:00', '19:00', '22:00']}
    ];

    constructor(private http: Http)
    {
		this.bestEvents = [
			{ img:'assets/img/x-men.jpg', data: '07/04/2019', titulo:'X-MEN: FÊNIX NEGRA', genero:'Aventura', classificacao: '14 anos'},
			{ img:'assets/img/alladin.jpg', data: '07/04/2019', titulo:'X-MEN: FÊNIX NEGRA', genero:'Aventura', classificacao: '14 anos'},
			{ img:'assets/img/super-man.jpg', data: '07/04/2019', titulo:'X-MEN: FÊNIX NEGRA', genero:'Aventura', classificacao: '14 anos'},
			{ img:'assets/img/x-men.jpg', data: '07/04/2019', titulo:'X-MEN: FÊNIX NEGRA', genero:'Aventura', classificacao: '14 anos'},
			{ img:'assets/img/alladin.jpg', data: '07/04/2019', titulo:'X-MEN: FÊNIX NEGRA', genero:'Aventura', classificacao: '14 anos'}
			
		]
	}
    
    getMoviesListByCategory(category):any
	{
        if(category == 'acao')
        {
            this.actionJsonList = [];
            this.actionMoviesList.forEach(element => {
                this.getMovies(element)
                    .subscribe(res =>
                    {
                        this.actionJsonList.push(res);
                    });
                });
        }
        if(category == 'destaques')
        {
            this.bestJsonList = [];
            this.bestMoviesList.forEach(element => {
                this.getMovies(element)
                    .subscribe(res =>
                    {
                        this.bestJsonList.push(res);
                    });
                });
        }
	}
	
	getMovies(nomeEvento):any
    {
        return this.http
        .get(this.baseUrl + nomeEvento + this.apiKey)
        .map((res:any) => {
            return res.json();
        });
    }
}
