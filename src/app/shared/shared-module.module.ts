import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './components/input-fields/input-text/input-text.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [InputTextComponent, LogoComponent],
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, FormsModule],
  exports: [InputTextComponent, LogoComponent]
})
export class SharedModuleModule {}
