import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit 
{
	usuario: any;

	constructor(private sessionService: SessionService,
				private router: Router)
	{ 
		this.usuario = JSON.parse(this.sessionService.getUser());
	}

	ngOnInit() 
	{

	}

	public verVagasRespondidas()
	{

	}
	
	closePage()
	{
		this.router.navigateByUrl('/home');
	}

}
