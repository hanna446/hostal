import { Component, OnInit } from "@angular/core";
import { OurServicesService } from "../../services/our-services.service";
import { AuthService } from "../../services/auth.service";
import { NgForm,FormGroup,FormControl, Validators } from "@angular/forms";
import swal from "sweetalert2";
import { ServicesModel } from "../../models/our-services.models";

@Component({
  selector: "app-our-services",
  templateUrl: "./our-services.component.html",
  styleUrls: ["./our-services.component.css"]
})
export class OurServicesComponent implements OnInit {
validate:FormGroup;

  public servicesArray: ServicesModel[] = [];

  public serv: ServicesModel = {
    name: "",
    description: "",
    hours: "",
    price: ""
  };

  constructor(
    private OurServicesService: OurServicesService,
    private authService: AuthService
  ) {
    this.validate = new FormGroup({
      'name': new FormControl(''),
      'description': new FormControl(''),
      'hours': new FormControl(''),
      'price': new FormControl('')
    });
    
  }

  ngOnInit() {
    this.getService();
  }

  logout() {
    this.authService.logout();
  }

  onSubmit(f: NgForm) {    
    if (!f.valid) {
      return;
    }
    this.OurServicesService.createService(this.serv).subscribe(data => {
      swal.fire("EXITO!", null, "success");
      this.getService();
      err => {
        swal.fire("You have an error", null, "error");
      };
    });
  }

  getService() {
    this.OurServicesService.getServices().subscribe((data: any) => {
      this.servicesArray = data;
    });
  }

  delete(key: string) {
    this.OurServicesService.deleteService(key).subscribe(data => {
      swal.fire("exito!", null, "success");
      this.getService();
      err => {
        swal.fire("You have an error", null, "error");
      };
    });
  }

  update(key: string) {
    this.OurServicesService.updateService(this.serv, key).subscribe(
      data => {
      swal.fire("Exito!", null, "success");
      this.getService();
    },
      err => {
        swal.fire("You have an error", null, "error");
      }
    );
  }
}
