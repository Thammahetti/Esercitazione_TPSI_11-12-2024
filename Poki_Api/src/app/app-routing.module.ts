import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoemComponent } from './hoem/hoem.component';
import { PokeomonTypeComponent } from './pokeomon-type/pokeomon-type.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

const routes: Routes = [
  {path: '', component: HoemComponent },
  {path: 'type/:tipo', component: PokeomonTypeComponent},
  {path: 'pokemon/:name', component: PokemonDetailsComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
