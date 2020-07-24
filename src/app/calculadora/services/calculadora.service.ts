/**
 * SErviço responsavel por executar as operações da calculadora
 * 
 * @author Rillian Diello <rilliansf@gmail.com>
 * @since 1.0.0
 */


import { Injectable } from '@angular/core';


//Essa notação faz com essa classe seja um service para o Angular
// pois o angular entende q ele deve fornecer essa classe 
// para outras classes externas, com base na injeção de dependencias
@Injectable({
  providedIn: 'root'

})
export class CalculadoraService {

  static readonly ADD: string = '+';
  static readonly SUB: string = '-';
  static readonly MULT: string = '*';
  static readonly DIV: string = '/';
  constructor() { }
/**
 * Metodo that calc an operation math between two numbers
 * @param num1 
 * @param num2 
 * @param operation 
 * @return operation result
 */
  calcular(num1: number, num2: number, operation: string): number {
    let result: number;
    switch (operation) {
      case CalculadoraService.ADD:
        result = num1 + num2;
        break;
      case CalculadoraService.SUB:
        result = num1 - num2;
        break;
      case CalculadoraService.MULT:
        result = num1 * num2;
        break;

      case CalculadoraService.DIV:
        result = num1 / num2;
        break;
      default:
        result = 0;
    }
    return result;
  }
}
