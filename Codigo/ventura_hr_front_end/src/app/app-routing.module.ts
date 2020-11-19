import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroVagasComponent } from './cadastro-vagas/cadastro-vagas.component';
import { MinhasVagasComponent } from './minhas-vagas/minhas-vagas.component';

const routes: Routes = 
[
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'busca', component: SearchComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cadastroVagas', component: CadastroVagasComponent },
  { path: 'MinhasVagas', component: MinhasVagasComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
