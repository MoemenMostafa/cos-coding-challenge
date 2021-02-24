import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { environment } from 'src/environments/environment';

enum ErrorCode {
  USER_MISSING_ROLE = 'User is not allowed'
}
@Injectable()
export class AppErrorHandler implements ErrorHandler {

    constructor(public snackBar: MatSnackBar, private zone: NgZone) {
      AppErrorHandler.snackBar = snackBar;
    }
    static snackBar;

    static showError(error, closeTxt = 'Close') {
      if (ErrorCode[error.message]) { error.message = ErrorCode[error.message]; }
      AppErrorHandler.snackBar.open(error.message || 'Undefined error', closeTxt, {panelClass: ['snackbar', 'error']});
    }

    handleError(error: Error) {

      if (!environment.production) { console.error(`Error`, error); }

      this.zone.run(() => {
        AppErrorHandler.showError(error);
      }
     );
    }

    getErrorMessage(error: ErrorCode) {
      return ErrorCode[error];
    }

}
