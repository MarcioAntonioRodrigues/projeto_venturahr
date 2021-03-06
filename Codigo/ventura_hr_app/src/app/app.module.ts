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
import { CommonModule } from '@angular/common';
import { VagaComponent } from './vaga/vaga.component';
import { RespostaVagaComponent } from './resposta-vaga/resposta-vaga.component';
import { MinhasVagasComponent } from './minhas-vagas/minhas-vagas.component';
import { SessionService } from './services/session.service';
import { RespostaVagaService } from './services/respostaVaga.service';
import { FooterComponent } from './components/footer/footer.component';
import { MinhasVagasService } from './services/minhasVagas.service';


@NgModule({
  declarations: [
	  AppComponent,
	  HomeComponent,
	  SearchComponent,
	  VagaComponent,
	  RespostaVagaComponent,
	  FooterComponent,
	  MinhasVagasComponent
	],
  entryComponents: [],
  imports: [
	CommonModule,
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
	SessionService,
	RespostaVagaService,
	MinhasVagasService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
