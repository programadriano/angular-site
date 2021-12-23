import { Component, OnInit } from '@angular/core';
import { News } from './models/news';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }
  public newsList: News[] = new Array<News>();
  public newsStandard: News = new News();

  ngOnInit() {
    this.getNews();
  }
  
  getNews() {
    this.homeService.getNews().subscribe((data: Array<News>) => {
      this.newsList = data;
      this.newsStandard = this.newsList[0];
    });
  }

}
