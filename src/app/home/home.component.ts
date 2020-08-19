import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';
import { DataService } from '@app/services/data.service';
import { Router } from '@angular/router';
import { ItemPage } from '@app/model/itemPage.modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;

  itemPageList: ItemPage[] = [];

  slides = [
    { img: 'http://placehold.it/350x150/000000.jpg' },
    { img: 'http://placehold.it/350x150/111111.jpg' },
    { img: 'http://placehold.it/350x150/333333.jpg' },
    { img: 'http://placehold.it/350x150/666666.jpg' },
  ];

  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

  constructor(private dataservice: DataService, private router: Router) {}

  ngOnInit() {}
}
