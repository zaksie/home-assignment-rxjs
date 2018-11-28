import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {LargestTradeGroup} from './app.models';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rows$: Observable<LargestTradeGroup[]>;

  constructor(private service: AppService) {
    this.rows$ = service.getLargestTrades('GOOG');
  }
}
