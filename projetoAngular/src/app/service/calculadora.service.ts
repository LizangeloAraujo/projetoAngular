import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  public contas = [];

  constructor() { }

  public somar(a, b) {
    return a + b;
  }

  public subtrair(a, b) {
    return a - b;
  }

  public dividir(a, b) {
    return a/b;
  }

  public multiplicar(a,b) {
    return a * b;
  }
}
