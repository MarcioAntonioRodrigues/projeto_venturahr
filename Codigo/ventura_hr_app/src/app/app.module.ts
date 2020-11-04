import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component'
import { SearchComponent } from './search/search.component'

import { VagasService } from './services/vagas.service'

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
	  AppComponent,
	  HomeComponent,
	  SearchComponent
	],
  entryComponents: [],
  imports: [
	BrowserModule,
	FormsModule,
	HttpModule,
    IonicModule.forRoot({mode: "ios"}),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
	SplashScreen,
	VagasService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
