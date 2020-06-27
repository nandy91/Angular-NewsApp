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
    this.sourceList = ['world','nation','business','technology','entertainment','sports','science','health'];
  }


    onSelect(source: String){
      this.sourceId.emit(source);
    }
}
