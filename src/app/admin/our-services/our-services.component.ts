import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
