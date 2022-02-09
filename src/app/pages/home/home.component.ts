import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/shared/result';
import { News } from './models/news';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }
  public newsList: News[] | undefined = new Array<News>();
  public newsStandard: News | undefined = new News();

  ngOnInit() {
    this.getNews();
  }
  
  getNews() {
    this.homeService.getNews().subscribe((result: Result<News>) => {
      let obj : any = result;
      this.newsList = obj.data;
      this.newsStandard = obj.data[0];
      console.log(this.newsStandard)
    });
  }

}
