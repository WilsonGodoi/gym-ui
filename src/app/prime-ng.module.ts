import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

const Modules = [ButtonModule, PasswordModule, InputTextModule];

@NgModule({
  imports: [...Modules],
  exports: [...Modules],
})
export class PrimeNgModule {}
