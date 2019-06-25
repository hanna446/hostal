import { Component, OnInit, AfterViewInit } from "@angular/core";
import { OurServicesService } from "../../services/our-services.service";
import { ServicesModel } from "../../models/our-services.models";
import { NgForm } from "@angular/forms";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
declare var $: any;

@Component({
  selector: "app-sections",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, AfterViewInit {
  servicesArray: ServicesModel[] = [];

  public formQuote = {
    dateIn: "",
    dateOut: "",
    room: ""
  };
  constructor(private ourServices: OurServicesService) {}

  ngOnInit() {
    this.getServices();
  }

  ngAfterViewInit() {
    this.onCarousel();
    this.ViewPopup();
    this.stellar();
  }

  onsubmit(f: NgForm) {
    // console.log(f.value);
  }

  addEvent(type: string, event: any) {
    if (type.indexOf('changeIn')) {
      this.formQuote.dateOut = event.value;
      console.log(this.formQuote.dateOut);
    } else {
      this.formQuote.dateIn = event.value;
      console.log("hola",this.formQuote.dateIn);
    }
  }

  getServices() {
    this.ourServices
      .getServices()
      .subscribe((data: any) => (this.servicesArray = data));                  
  }

  stellar() {
    "use strict";
    $(window).stellar({
      responsive: true,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: "scroll"
    });
  }

  // JQUERY carousel
  onCarousel() {
    $(".home-slider").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 0,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      nav: false,
      autoplayHoverPause: false,
      items: 1,
      navText: [
        "<span class='ion-md-arrow-back'></span>",
        "<span class='ion-chevron-right'></span>"
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
    $(".carousel-testimony").owlCarousel({
      autoplay: true,
      autoHeight: true,
      center: true,
      loop: true,
      items: 1,
      margin: 30,
      stagePadding: 0,
      nav: false,
      dots: true,
      navText: [
        '<span class="ion-ios-arrow-back">',
        '<span class="ion-ios-arrow-forward">'
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  }

  // magnific popup
  ViewPopup() {
    $(".image-popup").magnificPopup({
      type: "image",
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        verticalFit: true
      },
      zoom: {
        enabled: true,
        duration: 300 // don't foget to change the duration also in CSS
      }
    });
  }
}
