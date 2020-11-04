import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  showMenuFooter: boolean = false;
  title = 'blocoProject';

  constructor(private router: Router){ }

  currentRouteIsLogin() {
    return this.router.url.trim() === '/' || this.router.url.trim() === '';
  }
}
