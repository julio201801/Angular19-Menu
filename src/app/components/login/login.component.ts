import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [MatIconModule,MatButtonModule,ReactiveFormsModule,MatInputModule,MatFormFieldModule,MatCardModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  hide = true;

  userObj: any = {
   "usuario": "",
  "password": ""
}
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
   router=inject(Router);
   Http=inject(HttpClient);
onSubmit() {
  //debugger;
    if (this.loginForm.valid) {
      this.userObj.usuario= this.loginForm.value.email;
      this.userObj.password= this.loginForm.value.password; 
      this.Http.post('http://localhost:5245/Usuario/Authentication', this.userObj).subscribe((res:any)=>{
        localStorage.setItem('user', JSON.stringify(res.registro.usuario));
        this.router.navigateByUrl('dashboard');
      });  
      
            //const { email, password } = this.loginForm.value;
      // Aquí puedes llamar a tu API de autenticación
      
      //console.log('Login con:', email, password);
    }
  }


}
