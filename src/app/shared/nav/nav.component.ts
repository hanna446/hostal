import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  isAuth: Observable<boolean>;
  isUser: any;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isAuth = this.authService.isAuth();
    this.isAuth.subscribe(data => this.isUser = data);
  }
}
