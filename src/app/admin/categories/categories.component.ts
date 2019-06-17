import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CategoriesService } from "../../services/categories.service";
import { CategoryModels } from "../../models/category.models";
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from "../../services/auth.service";
import swal from "sweetalert2";
import { map } from 'rxjs/operators';
@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"]
})

export class CategoriesComponent implements OnInit, AfterViewInit {
  id: string;
  forma: FormGroup;
  categoriesArray: CategoryModels[] = [];
  public cat: CategoryModels = {
    name: '',
    description: ''
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

  getUpdate(cat) {
    this.id = cat;
    this.categoriesService.getCategoryById(this.id)
      .subscribe((data: any) => this.cat = data);
  }

  async onSubmit(f: NgForm) {
    if (!this.id) {
      // guarda
      this.categoriesService.createCategories(this.cat).subscribe(resp => {
        swal.fire('Exito', null, 'success');
      },
        err => {
          swal.fire('Ops error', null, 'error');
        }
      );

    } else {
      // actualiza
      this.categoriesService.updateCategories(this.cat, this.id).subscribe(
        data => {
          swal.fire("exito!", '', "success");
          this.id = '';
        },
        err => {
          swal.fire("Oops error", '', "error");
        }
      );
    }
  }

  getCategories() {
    this.categoriesService.getCategoriesList().snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() })
          )
        )
      ).subscribe(data => this.categoriesArray = data);
  }

  onDelete(key: string) {
    this.categoriesService.deleteCategories(key).subscribe(
      resp => {
        swal.fire("It was successfully removed", '', "success");
      },
      err => {
        swal.fire("Ops error", null, "error");
      }
    );
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
