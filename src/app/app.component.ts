import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { fromEvent, map } from 'rxjs';

// Criar as constantes para ajudar no monitoramento.
export const SCROLL_CONTAINER = 'mat-sidenav-content';
export const TEXT_LIMIT = 50;
export const SHADOW_LIMIT = 100;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isSmallScreen = false;
  public popText = false;
  public applyShadow = false;
  public scrollHeight: number = 0;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngAfterContentInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 800px)'])
      .subscribe((res) => (this.isSmallScreen = res.matches));
  }

  ngOnInit(): void {
    const content = document.getElementsByClassName(SCROLL_CONTAINER)[0];
    console.log(content);

    fromEvent(content, 'scroll')
      .pipe(map(() => content.scrollTop))
      .subscribe({
        next: (scrollTop: number) => {
          this.determineHeader(scrollTop);
        },
      });
  }

  determineHeader(scrollTop: number) {
    console.log(this.popText);
    this.popText = scrollTop >= TEXT_LIMIT;
    this.applyShadow = scrollTop >= SHADOW_LIMIT;
    this.scrollHeight = scrollTop;
  }

  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }
}
