import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template: `
        <h1>Hola Mundo</h1>
        <h1>{{titulo}}</h1>
        <button (click)="sumar()">+1</button>
        <span>{{numero}}</span>
        <button (click)="restar()">-1</button>
        <br>
        <br>
        <br>
        <br>
        <span>'Acomulado'</span>
        <br>
        <br>
        <button (click)="acumular(2)">+2</button>
        <span>{{numeroAcomulado}}</span>
        <button (click)="acumular(-2)">-2</button>


        <br>
        <br>
        <h3>La base es: <strong>{{base}}</strong></h3>
        <button (click)="acumularDos(base)">+ {{base}}</button>
        <span>{{numAcomulado}}</span>
        <button (click)="acumularDos(-base)">- {{base}}</button>
    `
})
export class ContadorComponent{
    titulo: string = 'Contador App';
    numero: number = 10;
    numeroAcomulado: number = 10;
    base: number = 5;
    numAcomulado: number = 0;
  
   acumular(valor:number)
  {
    this.numeroAcomulado +=valor;
  }
  
  acumularDos(valor:number)
  {
    this.numAcomulado +=valor;
  }
  
  
    sumar(){
      this.numero +=1;
    }
    restar(){
      this.numero -=1;
    }
}