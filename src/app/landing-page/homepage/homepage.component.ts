import { AfterViewInit, Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: [
    './homepage.component.css'
    ]

})
export class HomepageComponent implements AfterViewInit {
  ngAfterViewInit() {
    $('.owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      nav: true,
      dots: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      navText: [
        '<span class="owl-prev"><</span>',
        '<span class="owl-next">></span>'
      ]
    });
  }
}
