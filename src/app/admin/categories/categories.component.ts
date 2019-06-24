import { Component, OnInit } from '@angular/core';
import { CategoriesService } from "../../services/categories.service";
import { AuthService } from "../../services/auth.service";
import { NgForm } from '@angular/forms';
import { CategoryModels } from "../../models/category.models";
import swal from "sweetalert2";
import { map } from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"]
})

export class CategoriesComponent implements OnInit {
  id: string;  
  categoriesArray: CategoryModels[] = [];
  public cat: CategoryModels = {
    name: '',
    description: ''
  };

  constructor(
    private categoriesService: CategoriesService,
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getCategories();
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
        this.toastr.success('Exito','exitos');
      },
        err => {
          this.toastr.error('Oops!','You have an error');
        }
      );

    } else {
      // actualiza
      this.categoriesService.updateCategories(this.cat, this.id).subscribe(
        data => {
          this.toastr.success('Exito','exitos');
          this.id = '';
        },
        err => {
          this.toastr.error('Oops!','You have an error');
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
        this.toastr.success('Exito','It was successfully removed');        
      },
      err => {
        this.toastr.error('Oops!','You have an error');
      }
    );
  }

  logout() {
    this.authService.logout();
  } 
}
