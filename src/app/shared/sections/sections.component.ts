import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.onCarousel();
  }

  // JQUERY carousel
  onCarousel() {
    $('.home-slider').owlCarousel({
      loop: true,
      autoplay: true,
      margin: 0,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      nav: false,
      autoplayHoverPause: false,
      items: 1,
      navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
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
    $('.carousel-testimony').owlCarousel({
      autoplay: true,
      autoHeight: true,
      center: true,
      loop: true,
      items: 1,
      margin: 30,
      stagePadding: 0,
      nav: false,
      dots: true,
      navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
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



}
