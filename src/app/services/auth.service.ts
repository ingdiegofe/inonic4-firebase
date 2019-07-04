import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../entity/user.class';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: any = false;

  constructor(public afAuth: AngularFireAuth) { }

  async onLogin(user: User){
    try {
      return await this.afAuth.auth.signInWithEmailAndPassword( //await no te movas de esta linea de codigo hasta que responda
        user.email, user.password
      );
    } catch (error) {
      console.log('Login Catch', error);
      return error;
    }
  }


  async onRegister(user: User){
    try {
      return await this.afAuth.auth.createUserWithEmailAndPassword(
        user.email, user.password
      );
    } catch (error) {
      console.log('Register Catch', error);
      return error;
    }
  }

}
