import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationPopupComponent } from '../notification-popup/notification-popup.component';
import { NotificationTypes } from '../notificationType';

@Injectable({ providedIn: 'root' })
export class notificationDialog {
  constructor(private dialog: MatDialog) {}
  public errorNotification(errorMessage: string) {
    this.dialog
      .open(NotificationPopupComponent, {
        position: { top: '1rem', right: '1rem' },
        panelClass: 'notification-color',
        data: {
          message: errorMessage,
          notificationType: NotificationTypes.error,
        },
        enterAnimationDuration: 500,
        exitAnimationDuration: 500,
      })
      .afterClosed();
  }
  public successNotification(errorMessage: string) {
    this.dialog
      .open(NotificationPopupComponent, {
        position: { top: '1rem', right: '1rem' },
        panelClass: 'notification-color',
        data: {
          message: errorMessage,
          notificationType: NotificationTypes.success,
        },
        enterAnimationDuration: 500,
        exitAnimationDuration: 500,
      })
      .afterClosed();
  }
}
