import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
import { OverviewRoutingModule } from './overview-routing.module';
import { AuctoinsService } from '../../services/auctions/auctoins.service';
import { MatButtonModule, MatCardModule, MatGridListModule } from '@angular/material';

@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [
    AuctoinsService
  ]
})
export class OverviewComponentModule { }
