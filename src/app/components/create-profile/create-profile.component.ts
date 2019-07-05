import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { Profile } from "../../models/profile.model";
import { ProfileService } from "src/app/services/profile.service";
import { AuthService } from "src/app/services/auth.service";
@Component({
  selector: "app-create-profile",
  templateUrl: "./create-profile.component.html",
  styleUrls: ["./create-profile.component.scss"]
})
export class CreateProfileComponent implements OnInit {
  public createProfileForm;
  public errorMessage: string;
  public successMessage: string;
  constructor(
    public profileService: ProfileService,
    public authService: AuthService
  ) {}

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
    let password = this.createProfileForm.get("password").value;
    let confirmpassword = this.createProfileForm.get("confirmpassword").value;

    console.log(" password: ", password, " confirmpassword ", confirmpassword);
    let newProfile: Profile = {
      name: this.createProfileForm.get("name").value,
      nickname: this.createProfileForm.get("nickname").value,
      email: this.createProfileForm.get("email").value,
      points: 0,
      gamesplayed: 0,
      gameswon: 0,
      gameslost: 0
    };

    this.tryRegister(
      this.createProfileForm.get("email").value,
      this.createProfileForm.get("password").value
    ).then(() => {
      this.profileService.addUpdateProfile(newProfile);
    });
    // this.authService.login(email, password);
    //this.router.navigate(["search"]);
  }

  tryRegister(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      this.authService.doRegister(email, password).then(
        res => {
          console.log(res);
          this.errorMessage = "";
          this.successMessage = "Your account has been created";
        },
        err => {
          console.log(err);
          this.errorMessage = err.message;
          this.successMessage = "";
        }
      );
    });
  }
}
