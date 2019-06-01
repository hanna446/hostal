import { Component, OnInit } from "@angular/core";
import { NgForm, FormGroup } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  forma:FormGroup;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.validateForms();
  }

  validateForms() {
    this.forma
  }

  onSubmit(f: NgForm) {
    this.authService.login(f.value);
  }
}
