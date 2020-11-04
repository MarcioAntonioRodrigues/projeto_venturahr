import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from './Usuario';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit
{
	private usuario: Usuario = new Usuario();
	private erroMessageFlag: boolean = false;

	constructor(private authService: AuthService, private router: Router, 
				private sessionService: SessionService){}

	ngOnInit() {}

	login()
	{
		this.authService.login(this.usuario).subscribe(
			(res: any) =>
			{
				let userResponse = JSON.parse(res._body)[0]
				this.sessionService.setUser(userResponse);
				this.router.navigate(['/home']);
			},
			error =>
			{
				this.erroMessageFlag = true;
				setTimeout(() => 
				{
					this.erroMessageFlag = false;
				}, 4000);
				console.log("Erro:", error);
			}
		);
	}
	
}
