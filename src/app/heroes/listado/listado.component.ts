import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ["spiderman", "thor", "iroman", "hulk"];
  heroeBorrado: string|undefined = "";

  borrarHeroe(){
    let heroeBorrado = this.heroes.shift();
    this.heroeBorrado = heroeBorrado;
  }

}
