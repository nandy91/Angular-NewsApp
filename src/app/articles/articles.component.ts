import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { NewsApiService } from '../services/news-api.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, OnChanges {
  @Input() sourceId : any;
  articles: Array<any>;
  constructor(private newsService: NewsApiService) { }

  ngOnInit(): void {
    this.newsService.getArticles().subscribe(data => {this.articles =data['articles']})
  }
  
  ngOnChanges(changes: SimpleChanges){
    if(changes.sourceId) {
      console.log("selected source is: "+changes.sourceId);
    this.newsService.getArticlesByID(this.sourceId).subscribe(data => this.articles = data['articles']);
    }
    else{
      this.newsService.getArticles().subscribe(data => {this.articles =data['articles']})
      console.log("This is onChnages else");
    }
  }
  
}
