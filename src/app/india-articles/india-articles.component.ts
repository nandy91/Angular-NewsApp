import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';
@Component({
  selector: 'app-india-articles',
  templateUrl: './india-articles.component.html',
  styleUrls: ['./india-articles.component.scss']
})
export class IndiaArticlesComponent implements OnInit {
    country: String = 'in';
    articles: Array<any>;
  constructor(private newsService: NewsApiService) { }

  ngOnInit(): void {
    this.newsService.getArticlesByCountry(this.country).subscribe(data=> {this.articles = data['articles']});
    console.log("In tech",this.articles);
  }

}
