import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { Specific_tipi } from 'src/models/typespecific.models';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-pokeomon-type',
  templateUrl: './pokeomon-type.component.html',
  styleUrls: ['./pokeomon-type.component.css']
})
export class PokeomonTypeComponent {
      poke!: Specific_tipi;
      url = "https://pokeapi.co/api/v2/type/";
      obs! :Observable<Specific_tipi>;
      constructor(public http: HttpClient, private route : ActivatedRoute){
        this.route.paramMap.subscribe(this.getRoutPam);
       
    
    
      }
      getRoutPam = (params : ParamMap) =>
        {
          this.obs = this.http.get<Specific_tipi>(this.url + params.get('tipo'))
          this.obs.subscribe(this.getData)
        }

      getData = (data : Specific_tipi) =>
      {
        this.poke = data
      }
}
