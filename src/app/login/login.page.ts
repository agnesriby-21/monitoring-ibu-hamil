import { Component } from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormsModule
} from '@angular/forms';

import {
  IonicModule
} from '@ionic/angular';

import {
  Router
} from '@angular/router';

import { RouterModule }
from '@angular/router';

import {
  AuthService
} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],

  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ]

})

export class LoginPage {

  email:string = '';
  password:string = '';

  message:string = '';

  isLoading:boolean = false;

  constructor(

    private authService: AuthService,
    private router: Router

  ) { }


  doLogin(){

    this.message = '';

    if(this.email == '' || this.password == ''){

      this.message =
      'Email dan password wajib diisi';

      return;

    }

    this.isLoading = true;

    this.authService.login(

      this.email,
      this.password

    ).subscribe((res:any)=>{

      this.isLoading = false;

      if(res.result == 'success'){


        localStorage.setItem(
          'user_id',
          res.user.user_id
        );

        localStorage.setItem(
          'nama',
          res.user.nama
        );

        localStorage.setItem(
          'email',
          res.user.email
        );

        localStorage.setItem(
          'role',
          res.user.role
        );


        // REDIRECT ROLE

        if(res.user.role == 'ibu'){

          this.router.navigate([
            '/ibu-dashboard'
          ]);

        }

        else if(res.user.role == 'suami'){

          this.router.navigate([
            '/suami-dashboard'
          ]);

        }

        else if(res.user.role == 'dokter'){

          this.router.navigate([
            '/dokter-dashboard'
          ]);

        }

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