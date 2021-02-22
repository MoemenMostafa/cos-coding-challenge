import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, first } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AppErrorHandler } from 'src/app/services/error/app-error.handler';

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

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService, 
    private router: Router, 
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userMailId: ['', Validators.required],
      password: ['', Validators.required]
  });

  }

  get f() { return this.loginForm.controls; }


  onSubmit() {

    this.route.queryParams.subscribe(params => {
      this.returnUrl = params['returnUrl'];
    });


    this.submitted = true;

    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authService.login(this.f.userMailId.value, this.f.password.value)
        .pipe(
          first(),
          finalize(() => this.loading = false),
        )
        .subscribe(
            data => {
                this.router.navigateByUrl(this.returnUrl);
            });
  }

}
