import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test';
  changeText = false;
  showMore = false;
  showCarousel = true;
  notCarousel = false;

  slides = [
    {
      name: 'Abhishek Jain',
      img: '../assets/img/GMR $99month (cancel anytime).png',
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem nam reiciendis error excepturi, necessitatibus, architecto accusantium illo quae aspernatur reprehenderit mollitia ab vitae. Dolorem, beatae. Saepe fugit inventore exercitationem? Eos.`,
    },
    {
      name: 'Danny Jain',
      img: '../assets/img/GMR $99month (cancel anytime).png',
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem nam reiciendis error excepturi, necessitatibus, architecto accusantium illo quae aspernatur reprehenderit mollitia ab vitae. Dolorem, beatae. Saepe fugit inventore exercitationem? Eos.`,
    },
    {
      name: 'Wink Jain',
      img: '../assets/img/GMR $99month (cancel anytime).png',
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem nam reiciendis error excepturi, necessitatibus, architecto accusantium illo quae aspernatur reprehenderit mollitia ab vitae. Dolorem, beatae. Saepe fugit inventore exercitationem? Eos.`,
    },
    {
      name: 'Live Gee',
      img: '../assets/img/GMR $99month (cancel anytime).png',
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem nam reiciendis error excepturi, necessitatibus, architecto accusantium illo quae aspernatur reprehenderit mollitia ab vitae. Dolorem, beatae. Saepe fugit inventore exercitationem? Eos.`,
    },
    {
      name: 'Abhishek Jain-1',
      img: '../assets/img/GMR $99month (cancel anytime).png',
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem nam reiciendis error excepturi, necessitatibus, architecto accusantium illo quae aspernatur reprehenderit mollitia ab vitae. Dolorem, beatae. Saepe fugit inventore exercitationem? Eos.`,
    },
  ];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  constructor() {
    this.changeText = false;
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }

  // ==============================================

  // document.getElementById(`input${next}`).focus();
  getValue(e: any) {
    if (e == 'true') {
      this.showMore = true;
      let data: any = document.getElementById('show');
      data.style.height = '143px';
    } else if (e == 'false') {
      this.showMore = false;
      let data: any = document.getElementById('show');
      data.style.height = '82px';
    }
  }
  seeMoreReview() {
    this.showCarousel = false;
    this.notCarousel = true;
  }
  topCross() {
    this.showCarousel = true;
    this.notCarousel = false;
    this.changeText = false;
  }
  dontShow() {
    this.showCarousel = false;
    this.notCarousel = false;
    this.changeText = false;
  }
}
