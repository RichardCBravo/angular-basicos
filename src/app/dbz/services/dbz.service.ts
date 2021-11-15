import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{

    private _personajes: Personaje[]=[
        {
          nombre:'Goku',
          poder:10000
        },
        {
          nombre:'Vegeta',
          poder:999
        }
    ];

    get personajes():Personaje[]{
        return [...this._personajes];
    }

    constructor(){}

    agregarPersonaje(pesonaje:Personaje){
        this._personajes.push(pesonaje);
    }
}