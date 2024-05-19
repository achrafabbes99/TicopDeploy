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
      margin: 20,
      autoplay: true,        
      autoplayTimeout: 3000

    });
    
  }
}
