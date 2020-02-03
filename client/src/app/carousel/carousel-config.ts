import {Component, ViewChild} from '@angular/core';
import {NgbCarousel, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'ngbd-carousel-config',
  templateUrl: './carousel-config.html',
  styleUrls: ['./carousel-config.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class NgbdCarouselConfig {
  images = [1, 2, 3, 10, 11, 12, 21, 22, 23].map((n) => `https://picsum.photos/id/${n}/900/500`);

  @ViewChild('carousel', {static: true}) carousel: NgbCarousel;
}
