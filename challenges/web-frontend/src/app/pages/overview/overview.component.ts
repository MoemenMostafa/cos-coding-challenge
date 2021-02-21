import { Component, OnInit } from '@angular/core';
import { AuctoinsService } from 'src/app/services/auctions/auctoins.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  auctions;

  constructor(private auctoinsService: AuctoinsService) {}

  ngOnInit() {
    this.fetch()  
  }

  fetch(){
    this.auctoinsService.getAuctions().subscribe(
      data => {this.auctions = data}
    );
  }

}
