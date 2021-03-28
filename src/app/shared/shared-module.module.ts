import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './components/input-fields/input-text/input-text.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LogoComponent } from './components/logo/logo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalErrorComponent } from './components/modal-error/modal-error.component';

@NgModule({
  declarations: [InputTextComponent, LogoComponent, ModalErrorComponent],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [InputTextComponent, LogoComponent]
})
export class SharedModuleModule {}
