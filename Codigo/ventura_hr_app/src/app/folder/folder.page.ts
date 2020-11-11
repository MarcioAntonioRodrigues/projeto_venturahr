import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../models/Usuario';
import { NavController } from '@ionic/angular';
import { HomeComponent } from '../home/home.component'
import { SessionService } from '../services/session.service';

@Component({
	selector: 'app-folder',
	templateUrl: './folder.page.html',
	styleUrls: ['./folder.page.scss'],
	providers:[AuthService]
})

export class FolderPage implements OnInit {
	public folder: string;
	private usuario: Usuario = new Usuario();
	public erroMessageFlag: boolean;

	constructor(private activatedRoute: ActivatedRoute,
				private authService: AuthService,
				private router: Router,
				public navCtrl: NavController,
				private sessionService: SessionService) { }

	ngOnInit()
	{
		this.folder = this.activatedRoute.snapshot.paramMap.get('id');
	}

	login()
	{
		this.authService.login(this.usuario).subscribe(
			(res: any) =>
			{
				let userResponse = JSON.parse(res._body)[0]
				this.sessionService.setUser(userResponse);
				this.router.navigateByUrl('/home');
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
