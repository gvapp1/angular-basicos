// import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
// export class ListadoComponent implements OnInit {
 export class ListadoComponent {
  constructor() { }//Primero se dispara el constructor
//  ngOnInit(): void { //Segundo se dispara el ngOninit casi se ocupa inizializar cosas, peticion a un servicio
  heroes: string[]=['Spiderman','Iroman','Hulk','Thor','Capitan america'];
  heroeBorrado:string = '';
  borrarHeroe(): void{    
    //this.heroes = [];
    this.heroeBorrado = this.heroes.shift()||'';
    console.log(this.heroeBorrado);
  }
  
 }
