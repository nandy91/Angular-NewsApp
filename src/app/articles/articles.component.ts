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
  title: string;
  constructor(private newsService: NewsApiService) { }

  ngOnInit(): void {
    this.newsService.getArticles().subscribe(data => {this.articles =data['articles']})
    this.title="TOP US";
  }
  
  ngOnChanges(changes: SimpleChanges){
    if(changes.sourceId) {
      this.title=this.sourceId;
      console.log("selected source is: "+changes.sourceId);
      this.newsService.getArticlesByTopic(this.sourceId).subscribe(data => this.articles = data['articles']);
      this.title=this.sourceId;
    }
    else{
      this.title="TOP US";
      this.newsService.getArticles().subscribe(data => {this.articles =data['articles']})
      console.log("This is onChnages else");
    }
  }
  
}
