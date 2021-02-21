import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardModule } from './card/card.module';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { AuthService } from '../services/auth/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    CardModule
  ],
  providers: [
    AuthService
  ]
})
export class ComponentsModule { }
