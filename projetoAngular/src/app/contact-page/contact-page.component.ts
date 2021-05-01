  import { Component, OnInit } from '@angular/core';
  import { ContatoService } from '../service/contato.service';

  @Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.css']
  })
  export class ContactPageComponent implements OnInit {

    tituloPaginaDeContato: string = 'Página de Contatos';
    descricaoPaginaDeContato: string = 'Receba notícias sobre o fit';
    listaDeContatos: Array<string> = [];
    contatoDigitado: string;
    dominio = '@fit.com';

    constructor(private contatos: ContatoService) {
      this.listaDeContatos = contatos.listaDeContatos;
    }
    ngOnInit(): void {   
    }
    onAdicionarEmail() {
      if(this.contatoDigitado) {
        this.contatos.listaDeContatos.push(this.contatoDigitado + this.dominio);
        this.contatoDigitado = '';
      }
    }
  }
