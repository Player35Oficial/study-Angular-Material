import { Component } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { concat, interval, map, take, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss'],
})
export class ProgressSpinnerComponent {
  public loadingPercent = 0;
  public queryValue = 0;
  public queryMode: ProgressBarMode = 'query';

  ngOnInit(): void {
    this.loadingProgress(500, 95).subscribe((i) => (this.loadingPercent = i));

    concat(
      // observable 1
      interval(2000).pipe(
        take(1),
        tap((_) => {
          this.queryMode = 'determinate';
        })
      ),
      // observable 2
      // this.loadingProgress(500, 100),
      // // observable 3
      // interval(500).pipe(
      //   take(1),
      //   tap((_) => {
      //     this.queryMode = 'determinate';
      //     console.log('foi 3');
      //   })
      // ),
      // // observable 4
      this.loadingProgress(500, 10)
    ).subscribe((i) => (this.queryValue = i));
  }

  loadingProgress(speed: number, takeUntil: number) {
    return interval(speed).pipe(
      map((i) => i * 5),
      takeWhile((i) => i <= takeUntil)
    );
  }
}
