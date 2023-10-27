import { Component } from '@angular/core';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  public message = '';

  constructor(private dialog: MatDialog) {}

  public openDialog() {
    const dialogRef = this.dialog.open(DialogModalComponent, {
      data: 'Biok',
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.message = result !== undefined ? result : '';
    });
  }
}
