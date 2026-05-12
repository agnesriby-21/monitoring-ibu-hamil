import { Component } from '@angular/core';

import {
  IonicModule
} from '@ionic/angular';

import {
  CommonModule
} from '@angular/common';

import {
  FormsModule
} from '@angular/forms';

import {
  Router
} from '@angular/router';

import { RouterModule }
from '@angular/router';

import {
  AuthService
} from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],

  standalone: true,

  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule

  ]

})

export class RegisterPage {

  nama:string = '';
  email:string = '';

  password:string = '';
  confirm_password:string = '';

  role:string = '';

  message:string = '';

  isLoading:boolean = false;

  constructor(

    private authService: AuthService,
    private router: Router

  ) { }


  doRegister(){

    this.message = '';

    if(

      this.nama == '' ||
      this.email == '' ||
      this.password == '' ||
      this.confirm_password == '' ||
      this.role == ''

    ){

      this.message =
      'Semua field wajib diisi';

      return;

    }


    this.isLoading = true;


    this.authService.register(

      this.nama,
      this.email,
      this.password,
      this.confirm_password,
      this.role

    ).subscribe((res:any)=>{

      this.isLoading = false;


      if(res.result == 'success'){

        alert('Register berhasil');

        this.router.navigate([
          '/login'
        ]);

      }

      else{

        this.message =
        res.message;

      }

    }, error=>{

      this.isLoading = false;

      this.message =
      'Cannot connect to server';

    });

  }

}