import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],//Que quiero hacer publico
    imports:[
        CommonModule //Se trae las directivas propias de angular
    ]//ACa solo van modulos
})
export class HeroesModule{
    
}