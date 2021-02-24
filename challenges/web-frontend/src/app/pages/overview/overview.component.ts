import { Component, OnInit } from '@angular/core';
import { AuctionsService } from 'src/app/services/auctions/auctions.service';
import { transition, trigger, query, style, animate } from '@angular/animations';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  animations: [
    trigger('cardsAnimation', [
      transition('* => *', [
        query('mat-grid-list', style({ transform: 'translateX(-100%)' })),
        query('mat-grid-list',
          animate('700ms 0s ease-in-out', style({ transform: 'translateX(0)' }))
        )
      ])
    ])
  ]
})
export class OverviewComponent implements OnInit {
  breakpoint;
  auctions;
  colNumber;
  timer;

  constructor(private auctionsService: AuctionsService) { }

  ngOnInit() {
    this.fetch();
    this.colNumber = this.getColNumber(window);
  }

  onResize(event) {
    this.colNumber = this.getColNumber(event.target);
  }

  getColNumber(element) {
    if (element.innerWidth > 1200) {
      return 4;
    }
    if (element.innerWidth > 800 && element.innerWidth <= 1200) {
      return 3;
    }
    if (element.innerWidth > 500 && element.innerWidth <= 800) {
      return 2;
    }
    if (element.innerWidth <= 500) {
      return 1;
    }
  }

  fetch() {
    this.auctionsService.getAuctions().subscribe(
      data => {
        this.auctions = data;
        if (!this.timer) { this.startTimer(); }
      }
    );
  }

  startTimer() {
    this.timer = setInterval(
      () => {
        for (const key in this.auctions.items) {
          if (this.auctions.items.hasOwnProperty(key)) {
            this.auctions.items[key].remainingTimeInSeconds--;
          }
        }
      }, 1000);
  }

  onDestory() {
    clearInterval(this.timer);
  }

}
