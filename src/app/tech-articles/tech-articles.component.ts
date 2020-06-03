import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';
@Component({
  selector: 'app-tech-articles',
  templateUrl: './tech-articles.component.html',
  styleUrls: ['./tech-articles.component.scss']
})
export class TechArticlesComponent implements OnInit {
    category: String = 'technology';
    articles: Array<any>;
  constructor(private newsService: NewsApiService) { }

  ngOnInit(): void {
    this.newsService.getArticlesByCategory(this.category).subscribe(data=> {this.articles = data['articles']});
    console.log("In tech",this.articles);
  }

}
