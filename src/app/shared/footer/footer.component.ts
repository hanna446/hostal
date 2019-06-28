import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear();
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  logout(){
    this.authService.logout();
  }

}
