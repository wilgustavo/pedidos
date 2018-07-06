import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductosService } from './productos.service';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { ProductoFormComponent } from './producto-form/producto-form.component';
import { ProductoDialogComponent } from './producto-dialog/producto-dialog.component';
import { ProductosStorage } from './productos.storage';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatProgressSpinnerModule
  ],
  declarations: [ProductoListaComponent,
                 ProductoFormComponent,
                 ProductoDialogComponent,
                 SidebarComponent],
  providers: [ProductosService, ProductosStorage],
  exports: [ProductoListaComponent, ProductoFormComponent, SidebarComponent],
  entryComponents: [ProductoDialogComponent]
})
export class ProductosModule { }
