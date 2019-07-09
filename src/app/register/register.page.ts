import { Component, OnInit } from '@angular/core';
import { User } from '../entity/user.class';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: User = new User();

  constructor(private authService: AuthService,
              private router:Router,
              private toastController: ToastController) { }

  ngOnInit() {
  }

  async onRegister(){
    const resultado = await this.authService.onRegister(this.user);
    console.log(resultado);

    if(resultado.code){
      this.presentToast(resultado.message);
      return console.log('Error:----->',resultado.message);
    }

    this.router.navigateByUrl('/');
  }

  presentToast(message: string){
    this.toastController.create({
      message: message,
      duration: 2000
    }).then(res=>{
      console.log('Promesa');
      res.present();
    });
  }

}
