import { Component } from '@angular/core';
import { CadastroService } from '../services/cadastro.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-cadastro',
	templateUrl: './cadastro.component.html',
	styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent
{
	usuario: any = {
		Nome: "",
		Cpf: "",
		CNPJ: "",
		Telefone: "",
		Sexo: "",
		DataNascimento: "",
		Email: "",
		Senha: "",
		TipoUsuario: 0,
		Endereco: 
		{
			Cidade: "",
			Estado: "",
			Logradouro: "",
			Cep: null
		}
	};

	confirmaSenha: string;
	errorPasswordMessage: boolean = false;
	tipoConta: string = "1";

	constructor(private cadastroService: CadastroService, 
				private router: Router)
	{
		
	}

	public registerUser()
	{
		if(this.usuario.Senha == this.confirmaSenha)
		{
			this.usuario.TipoUsuario = parseInt(this.tipoConta);
			this.usuario.Endereco.Cep = parseInt(this.usuario.Endereco.Cep);
			this.cadastroService.saveUser(this.usuario, this.tipoConta).subscribe(
				res=>
				{
					console.log(res);
					return this.router.navigate(['/']);
				});
		}
		else
		{
			this.errorPasswordMessage = true;
			setTimeout(() => {
				this.errorPasswordMessage = false;
			}, 2000);
		}
	}
}