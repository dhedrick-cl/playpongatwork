import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public loginForm;
  constructor() {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  onSubmit(form: NgForm) {
    let email = this.loginForm.get("email").value;
    let password = this.loginForm.get("password").value;
    console.log("email: ", email, " password: ", password);
    // this.authService.login(email, password);
    //this.router.navigate(["search"]);
  }
}
