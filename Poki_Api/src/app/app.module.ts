import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeomonTypeComponent } from './pokeomon-type/pokeomon-type.component';
import { HoemComponent } from './hoem/hoem.component';
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [
    AppComponent,
    PokeomonTypeComponent,
    HoemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
