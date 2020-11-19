import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

	public openHomePage()
	{
		this.router.navigateByUrl('/home');
	}

	public openProfilePage()
	{
		this.router.navigateByUrl('/perfil');
	}

	public openMinhasVagasPage()
	{
		this.router.navigateByUrl('/minhasVagas');
	}
	
}
