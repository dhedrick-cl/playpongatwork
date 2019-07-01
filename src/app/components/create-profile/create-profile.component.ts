import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { Profile } from "../../models/profile.model";
import { ProfileService } from "src/app/services/profile.service";
@Component({
  selector: "app-create-profile",
  templateUrl: "./create-profile.component.html",
  styleUrls: ["./create-profile.component.scss"]
})
export class CreateProfileComponent implements OnInit {
  public createProfileForm;
  constructor(public profileService: ProfileService) {}

  ngOnInit() {
    this.createProfileForm = new FormGroup({
      name: new FormControl("", Validators.required),
      nickname: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      confirmpassword: new FormControl("", Validators.required)
    });
  }

  onSubmit(form: NgForm) {
    let name = this.createProfileForm.get("name").value;
    let nickname = this.createProfileForm.get("nickname").value;
    let email = this.createProfileForm.get("email").value;
    let password = this.createProfileForm.get("password").value;
    let confirmpassword = this.createProfileForm.get("confirmpassword").value;

    console.log(
      "name: ",
      name,
      " nickname: ",
      nickname,
      "email: ",
      email,
      " password: ",
      password,
      " confirmpassword ",
      confirmpassword
    );
    let newProfile: Profile = {
      name: this.createProfileForm.get("name").value,
      nickname: this.createProfileForm.get("nickname").value,
      email: this.createProfileForm.get("email").value,
      points: 0,
      gamesplayed: 0,
      gameswon: 0,
      gameslost: 0
    };
    this.profileService.addUpdateProfile(newProfile);

    // this.authService.login(email, password);
    //this.router.navigate(["search"]);
  }
}
