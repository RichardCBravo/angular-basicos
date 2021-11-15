import { Component, OnInit } from '@angular/core';
import { Personaje } from "../interfaces/dbz.interface";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  personajes: Personaje[]=[
    {
      nombre:'Goku',
      poder:10000
    },
    {
      nombre:'Vegeta',
      poder:999
    }
  ]

  nuevo:Personaje={
    nombre:'Richard',
    poder: 999999
  }

  agregarNuevoPersonaje( argumento:Personaje ){
    this.personajes.push(argumento);
  }
}
