import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss']
})
export class HomeCarouselComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1280/400`);

  constructor() { }

  ngOnInit(): void {
  }

}
