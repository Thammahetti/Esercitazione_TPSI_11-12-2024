import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoemComponent } from './hoem/hoem.component';
import { PokeomonTypeComponent } from './pokeomon-type/pokeomon-type.component';

const routes: Routes = [
  {path: '', component: HoemComponent },
  {path: 'type/:tipo', component: PokeomonTypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
