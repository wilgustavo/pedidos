import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductosModule } from './productos/productos.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ProductosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
