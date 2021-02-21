import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userMailId: ['', Validators.required],
      password: ['', Validators.required]
  });

  }

  get f() { return this.loginForm.controls; }


  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authService.login(this.f.userMailId.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate(['overview']);
                this.loading = false;
            },
            error => {
                this.openSnackBar(error);
                this.loading = false;
            });
  }

  openSnackBar(err, action = "close") {
    this.snackBar.open(err, action, {panelClass:['snackbar', 'error']});
  }

}
