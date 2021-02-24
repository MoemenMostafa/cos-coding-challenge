import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
import { OverviewRoutingModule } from './overview-routing.module';
import { AuctionsService } from '../../services/auctions/auctions.service';
import { MatButtonModule, MatCardModule, MatGridListModule } from '@angular/material';
import { SecondsToHourPipe } from 'src/app/pipes/seconds-to-hour.pipe';
import { FuelTypePipe } from 'src/app/pipes/fuel-type.pipe';
import { TransmissionTypePipe } from 'src/app/pipes/transmission-type.pipe';

@NgModule({
  declarations: [
    OverviewComponent,
    SecondsToHourPipe,
    FuelTypePipe,
    TransmissionTypePipe
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [
    AuctionsService
  ]
})
export class OverviewComponentModule { }
