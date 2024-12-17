import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { Tipi_poke } from 'src/models/typepoki.models';

@Component({
  selector: 'app-pokeomon-type',
  templateUrl: './pokeomon-type.component.html',
  styleUrls: ['./pokeomon-type.component.css']
})
export class PokeomonTypeComponent {
      poke!: Tipi_poke;
      url = "https://pokeapi.co/api/v2/type";
      obs! :Observable<Tipi_poke>;
      constructor(public http: HttpClient){
        this.obs = this.http.get<Tipi_poke>(this.url)
        this.obs.subscribe(this.getData)
    
    
      }
    
      getData = (data : Tipi_poke) =>
      {
        this.poke = data
      }
}
