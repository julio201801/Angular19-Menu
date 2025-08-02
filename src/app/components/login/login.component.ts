import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MatIconModule,MatButtonModule,ReactiveFormsModule,MatInputModule,MatFormFieldModule,MatCardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  hide = true;
  
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
   router=inject(Router);
onSubmit() {
  //debugger;
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      // Aquí puedes llamar a tu API de autenticación
      this.router.navigateByUrl('layout');
      console.log('Login con:', email, password);
    }
  }


}
