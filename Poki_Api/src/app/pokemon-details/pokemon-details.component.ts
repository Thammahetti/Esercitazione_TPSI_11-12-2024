import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Details_poke } from 'src/models/details_poke.models';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent {
      poke!: Details_poke;
      url = "https://pokeapi.co/api/v2/pokemon/";
      obs! :Observable<Details_poke>;
      constructor(public http: HttpClient, private route : ActivatedRoute){
        this.route.paramMap.subscribe(this.getRoutPam);
       
    
    
      }
      getRoutPam = (params : ParamMap) =>
        {
          this.obs = this.http.get<Details_poke>(this.url + params.get('name'))
          this.obs.subscribe(this.getData)
        }

      getData = (data : Details_poke) =>
      {
        this.poke = data
      }
}
