import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuctionsService {

  constructor(private http: HttpClient) { }

  public getAuctions() {
    console.log('getAuctions');
    return timer(0, 20 * 1000).pipe(flatMap(() => {
      return this.http.get<any>(`${environment.apiUrl}/v2/auction/buyer/?count=false`)
        .pipe(map(auctions => {
          return auctions;
        }));
    }

    ));

  }
}
