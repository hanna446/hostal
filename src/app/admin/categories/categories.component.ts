import { Component, OnInit } from "@angular/core";
import { CategoriesService } from "../../services/categories.service";
import { CategoryModels } from "../../models/category.models";
import { NgForm } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import swal from "sweetalert2";
@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"]
})

export class CategoriesComponent implements OnInit {
  categoriesArray: CategoryModels[] = [];

  public cat: CategoryModels = {
    name: ""
    // description:""
  };

  constructor(
    private categoriesService: CategoriesService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  ngAfterViewInit() {
    this.table();
  }

  async onSubmit(f: NgForm) {
    await swal.fire({
      title: 'Create your category',
      input: 'text',
      showCancelButton: true,
      inputValidator: value => {
        this.cat.name = value;
        if (!value) {
          return "You need to write something!";
        }
        this.categoriesService.createCategories(this.cat).subscribe(resp => {
          swal.fire('Exito', null, 'success');
          this.getCategories();
          err => {
            swal.fire('Ops error', null, 'error');
          };
        });
      }
    });
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe((data: any) => {
      this.categoriesArray = data;
    });
  }

  onDelete(key: string) {
    this.categoriesService.deleteCategories(key).subscribe(
      resp => {
        swal.fire("It was successfully removed", null, "success");
        this.getCategories();
      },
      err => {
        swal.fire("Ops error", null, "error");
      }
    );
  }

  async update(key: string) {
    await swal.fire({
      title: "update you category",
      input: "text",
      showCancelButton: true,
      inputValidator: value => {
        this.cat.name = value;
        if (!value) {
          return "You need to write something!";
        }
        this.categoriesService.updateCategories(this.cat, key).subscribe(
          data => {
            swal.fire("exito!", null, "success");
            this.cat.name = "";
            this.getCategories();
          },
          err => {
            swal.fire("Oops error", null, "error");
          }
        );
      }
    });
  }

  logout() {
    this.authService.logout();
  }

  table() {
    $(document).ready(function () {
      $("#mytable #checkall").click(function () {
        if ($("#mytable #checkall").is(":checked")) {
          $("#mytable input[type=checkbox]").each(function () {
            $(this).prop("checked", true);
          });
        } else {
          $("#mytable input[type=checkbox]").each(function () {
            $(this).prop("checked", false);
          });
        }
      });

      // $("[data-toggle=tooltip]").tooltip();
    });
  }
}
