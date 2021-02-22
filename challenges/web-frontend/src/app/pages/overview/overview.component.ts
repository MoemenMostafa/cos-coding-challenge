import { Component, OnInit } from '@angular/core';
import { AuctoinsService } from 'src/app/services/auctions/auctoins.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  breakpoint;
  auctions;
  colNumber;

  constructor(private auctoinsService: AuctoinsService) {}

  ngOnInit() {
    this.fetch()  
    this.colNumber = this.getColNumber(window);
  }

  onResize(event) {
    this.colNumber = this.getColNumber(event.target);
  }

  getColNumber(element){
    if (element.innerWidth > 1200)
    return 4
    if (element.innerWidth > 800 && element.innerWidth <= 1200)
      return 3
    if (element.innerWidth > 500 && element.innerWidth <= 800)
      return 2
    if (element.innerWidth <= 500)
      return 1
  }

  fetch(){
    this.auctoinsService.getAuctions().subscribe(
      data => {this.auctions = data}
    );
  }

}
