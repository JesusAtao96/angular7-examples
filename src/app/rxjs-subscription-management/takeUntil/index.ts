import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  templateUrl: './ui.html'
})
export class TakeUntilComponent implements OnInit, OnDestroy {
  private stop$ = new Subject<boolean>();
  public result: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient
      .get('http://github.com')
      .pipe(
        takeUntil(this.stop$),
        tap(res => (this.result = res))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.stop$.next(true);
    this.stop$.complete();
  }
}
