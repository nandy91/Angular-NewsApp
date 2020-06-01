import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.scss']
})
export class SourceComponent implements OnInit {

  
  @Output() sourceId = new EventEmitter<any>();
  sourceList: Array<any>;
  constructor(private newsService: NewsApiService) { }

  ngOnInit(): void {
    this.newsService.getAllNewsSource().subscribe(data => {this.sourceList = data['sources'];console.log(this.sourceList)});
    //console.log("Sources",this.sourceList);
  }


    onSelect(source: String){
      this.sourceId.emit(source);
    }
}
