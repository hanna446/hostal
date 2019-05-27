import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"]
})
export class CategoriesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
   this.table();
    
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
