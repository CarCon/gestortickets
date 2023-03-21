import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoTicketComponent } from './nuevo-ticket/nuevo-ticket.component';
import { VerEstadoComponent } from './ver-estado/ver-estado.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoTicketComponent,
    VerEstadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
