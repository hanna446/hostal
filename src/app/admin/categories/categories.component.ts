import { Component, OnInit } from "@angular/core";
import { CategoriesService } from "../../services/categories.service";
import { CategoryModels } from "../../models/category.models";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"]
})
export class CategoriesComponent implements OnInit {
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.table();
  }

  saveCategory(f: NgForm) {
    console.log(f.value.name);

    this.categoriesService.createCategories(f.value.name)
    .subscribe(() => {});
  }

  table() {
    $(document).ready(function() {
      $("#mytable #checkall").click(function() {
        if ($("#mytable #checkall").is(":checked")) {
          $("#mytable input[type=checkbox]").each(function() {
            $(this).prop("checked", true);
          });
        } else {
          $("#mytable input[type=checkbox]").each(function() {
            $(this).prop("checked", false);
          });
        }
      });

      // $("[data-toggle=tooltip]").tooltip();
    });
  }
}
