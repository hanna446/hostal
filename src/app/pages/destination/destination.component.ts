import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  public formQuote = {
    dateIn: "",
    dateOut: "",
    room: ""
  };
  constructor() { }

ngAfterViewInit(){
  this.ViewPopup();
  
}

  ngOnInit() {
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
