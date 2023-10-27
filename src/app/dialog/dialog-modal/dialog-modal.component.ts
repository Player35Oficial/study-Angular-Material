import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss'],
})
export class DialogModalComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public closeDialog() {
    this.dialogRef.close('Returned Biok');
  }
}
