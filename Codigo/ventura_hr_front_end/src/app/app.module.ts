import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import 'hammerjs';

import { AuthService } from './services/auth.service';
import { EventsService } from './services/events.service';
import { SessionService } from './services/session.service';
import { SearchComponent } from './search/search.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroService } from './services/cadastro.service';

import { HttpClientModule } from '@angular/common/http';
import { CadastroVagasComponent } from './cadastro-vagas/cadastro-vagas.component';
import { VagasService } from './services/vagas.service';
import { MinhasVagasComponent } from './minhas-vagas/minhas-vagas.component';

@NgModule({
  declarations: [
	AppComponent,
	HomeComponent,
	LoginComponent,
	HeaderComponent,
	FooterComponent,
	CategoryComponent,
	CarousselComponent,
	SearchComponent,
	CadastroComponent,
	CadastroVagasComponent,
	MinhasVagasComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	BrowserAnimationsModule,
	MatButtonModule,
	MatInputModule,
	FormsModule,
	HttpModule,
	HttpClientModule,
	MatDialogModule,
	MatProgressSpinnerModule
  ],
  entryComponents: [
    // DialogComponent
  ],
  providers: [
	AuthService,
	EventsService,
	SessionService,
	CadastroService,
	VagasService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
