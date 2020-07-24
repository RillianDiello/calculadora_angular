import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5',
  () => {
    let soma = service.calcular(1, 4, CalculadoraService.ADD);
    expect(soma).toEqual(5);
  })

  it('deve garantir que 4 - 1 = 3',
  () => {
    let sub = service.calcular(4, 1, CalculadoraService.SUB);
    expect(sub).toEqual(3);
  })

  it('deve garantir que 4 * 2 = 8',
  () => {
    let mult = service.calcular(4, 2, CalculadoraService.MULT);
    expect(mult).toEqual(8);
  })

  it('deve garantir que 8 / 2 = 4',
  () => {
    let div = service.calcular(8, 2, CalculadoraService.DIV);
    expect(div).toEqual(4);
  })
});
