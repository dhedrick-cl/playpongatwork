import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}

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
}
