import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private PaisService: PaisService) { }

  buscar(termino: string){
    this.hayError = false;
    console.log(this.termino);
    
    this.PaisService.buscarCapital( termino)
    .subscribe( (resp) => {
      this.paises = resp;
      console.log(this.paises);
    }, (err) =>{
      this.hayError = true;
    });
  }
}