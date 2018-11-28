import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LargestTradeGroup} from './app.models';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {
  }

  getLargestTrades(symbol: string): Observable<LargestTradeGroup[]> {
    // TODO: This is the method you need to implement
  }

  private getEndpoint(symbol: string) {
    return `https://api.iextrading.com/1.0/stock/${symbol}/largest-trades`;
  }
}
