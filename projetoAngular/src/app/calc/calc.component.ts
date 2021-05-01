    import { Component, OnInit } from '@angular/core';
    import { CalculadoraService } from '../service/calculadora.service';

    @Component({
      selector: 'app-calc',
      templateUrl: './calc.component.html',
      styleUrls: ['./calc.component.css']
    })
    export class CalcComponent implements OnInit {
      
      titulo: string;
      descricao: string;
      valor1: number;
      valor2: number;
      operador: string;
      resultado: number;
      contas = [];

      constructor(private calcService: CalculadoraService) { 
        this.contas = calcService.contas;
      }

      ngOnInit(): void {
        this.titulo = 'CALCULADORA';

        this.descricao = 'Insira os valores, escolha a operação e clique em Calcular!';
      }

      getOperador(operador) {
        this.operador = operador;
      }

      calcular() {
        let isValido = true;    
        if(this.valor1 === undefined || this.valor2 === undefined) {
          alert('Insira 2 valores para realizar o cálculo.');
          isValido = false;
          
        } else if(this.operador == '/' && this.valor2 == 0) {
          alert('Não é possível didivir por zero 0 - Insira outro valor.');
          isValido = false;

        } else if (this.operador == undefined) {
          alert('Clique em um dos operadores.');
          isValido = false;
        } 

        if(isValido) {
          // calcular
        switch(this.operador) {
          case '+' :
            this.resultado = this.calcService.somar(this.valor1, this.valor2);
            break;
          case '-' :
            this.resultado = this.calcService.subtrair(this.valor1, this.valor2);
            break;
          case '/' :
            this.resultado = this.calcService.dividir(this.valor1, this.valor2);
            break;
          case '*' :
            this.resultado = this.calcService.multiplicar(this.valor1, this.valor2);
            break;
        }
        
        this.calcService.contas.push(this.valor1 + ' ' + this.operador + ' ' + this.valor2 + ' = ' + this.resultado);

      
        this.calcService.contas.reverse();
        }
      }

      limparValores() {
        this.valor1 = undefined;
        this.valor2 = undefined;
        this.operador = '';
        this.resultado = undefined;
      }
    }

