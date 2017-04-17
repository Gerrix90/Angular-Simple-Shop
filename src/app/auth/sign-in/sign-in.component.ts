import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'db-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;
  error = "";

  constructor(private auth: AuthService,
              private router: Router,
              private fb: FormBuilder) {

    this.form = fb.group({
      "email": ["", Validators.compose([Validators.required, Validators.minLength(4)])],
      "password": ["", Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls["email"];
    this.password = this.form.controls["password"];
  }

  ngOnInit() {
  }

}
