import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './components/input-fields/input-text/input-text.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LogoComponent } from './components/logo/logo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalErrorComponent } from './components/modal-error/modal-error.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    InputTextComponent,
    LogoComponent,
    ModalErrorComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule
  ],
  exports: [
    InputTextComponent,
    LogoComponent,
    ModalErrorComponent,
    HeaderComponent
  ]
})
export class SharedModule {}
