import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarMsnComponent } from './snackbar-msn/snackbar-msn.component';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent {
  constructor(private snackbar: MatSnackBar) {}

  ngOnInit(): void {
    // this.snackbar.open('Olá nego', 'Fechar', {
    //   duration: 1500,
    // });
  }

  openSnackBar() {
    const snackBar = this.snackbar.open('Olá nego', 'Fechar', {
      duration: 1500,
    });

    snackBar.afterOpened().subscribe({
      next: () => console.log('opened'),
    });

    snackBar.afterDismissed().subscribe({
      next: () => console.log('dismissed'),
    });

    snackBar.onAction().subscribe({
      next: () => console.log('dismissed with action'),
    });
  }

  openFromComponent() {
    this.snackbar.openFromComponent(SnackbarMsnComponent, {
      data: 'MAOI',
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}
