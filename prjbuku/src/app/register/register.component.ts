import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';
import { BukuService } from '../services/buku.service';
import { group } from 'console';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;
  executeState: string = '';
  showSpinner = false;
  private registerSub: Subscription = new Subscription();

  constructor(
    public userService: UserService,
    public bukuService: BukuService,
    private fb: FormBuilder
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    },
      {
        validator: this.checkIfMatchingPasswords('password', 'confirmPassword'),
      }
    );
  }

  ngOnInit(): void {
    this.registerSub = this.userService
      .executeUserListener()
      .subscribe((value) => {
        //console.log(value);
        this.executeState = value;
        if (this.executeState != '') {
          this.showSpinner = false;
        }
      });
  }
  onSubmit(form: FormGroup) {
    this.submitted = true;
    this.showSpinner = true;
    if (form.invalid) {
      this.showSpinner = false;
      return;
    }
    this.userService.addUser(form.value.email, form.value.password);
  }

  checkIfMatchingPasswords(
    passwordKey: string,
    passwordConfirmationKey: string
  ): any {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey];
      let passwordConfirmationInput = group.controls[passwordKey];

      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({ norMatch: true });
      }
    };
  }
}
