import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  isLoggedIn: boolean = false;
  constructor(public afAuth: AngularFireAuth, private router: Router) {}

  doRegister(email: string, password: string) {
    console.log("trying to register");
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(
          res => {
            resolve(res);
          },
          err => reject(err)
        );
    });
  }
  login(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.isLoggedIn = true;
        this.router.navigate(["home"]);
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  }
  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.isLoggedIn = false;
        this.router.navigate(["login"]);
      })
      .catch(function(error) {
        // An error happened.
      });
  }
  getEmail() {
    return firebase.auth().currentUser.email;
  }
}
