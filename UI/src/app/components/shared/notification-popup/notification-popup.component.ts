import { Component, Inject, Input, TemplateRef } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogState,
} from '@angular/material/dialog';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { NotificationTypes } from '../notificationType';

@Component({
  selector: 'app-notification-popup',
  templateUrl: './notification-popup.component.html',
  styleUrls: ['./notification-popup.component.css'],
})
export class NotificationPopupComponent {
  public readonly errorIcon = faTriangleExclamation;
  public readonly thumbUpIcon = faThumbsUp;

  public readonly NotificationTypes: typeof NotificationTypes =
    NotificationTypes;

  public message: string;
  public notificationType: number;

  constructor(
    public dialogRef: MatDialogRef<NotificationPopupComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { message: string; notificationType: number }
  ) {
    this.message = data.message;
    this.notificationType = data.notificationType;

    setTimeout(() => {
      if (this.dialogRef.getState() === MatDialogState.OPEN)
        this.dialogRef.close();
    }, 1000);
  }
}
