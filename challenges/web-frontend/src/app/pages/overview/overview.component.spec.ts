import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatCardModule, MatGridListModule } from '@angular/material';
import { FuelTypePipe } from 'src/app/pipes/fuel-type.pipe';
import { SecondsToHourPipe } from 'src/app/pipes/seconds-to-hour.pipe';
import { TransmissionTypePipe } from 'src/app/pipes/transmission-type.pipe';

import { OverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OverviewComponent,
        FuelTypePipe,
        TransmissionTypePipe,
        SecondsToHourPipe
      ],
      imports: [
        MatCardModule,
        MatButtonModule,
        MatGridListModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
