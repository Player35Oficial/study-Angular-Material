import { Component, HostListener, NgZone } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isSmallScreen = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private ngZone: NgZone
  ) {}

  ngAfterContentInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 800px)'])
      .subscribe((res) => (this.isSmallScreen = res.matches));
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.ngZone.runOutsideAngular(() => {
      fromEvent(window, 'scroll').subscribe((event) => {
        this.ngZone.run(() => {
          console.log('Scroll Event: ', event.target);
        });
      });
    });
  }

  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }
}
