import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';//need for angular material
import {MatExpansionModule } from '@angular/material';//an angular material component we will use in templating


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { PokemonComponent } from './pokemon/pokemon.component';

// angular routes
const routes = [
  {path:'pokemon', component: PokemonComponent, data: {title:'List of Pokemon'}},
  {path:'**', redirectTo: '/pokemon'}
];

@NgModule({
  imports:[ 
    BrowserModule, 
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ AppComponent, HelloComponent, PokemonComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
