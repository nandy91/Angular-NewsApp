import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { map, catchError } from'rxjs/operators';
import {  ErrorHandlerService } from '../services/error-handler.service';
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  API_KEY = 'de6aa3a89706483096fae6d0426ad331';
  
  constructor(private httpclient:HttpClient, private errService: ErrorHandlerService) {
    
   }
   getAllNewsSource() {
     return this.httpclient.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.API_KEY).pipe(
      catchError(this.errService.handleError)
    );
   }
   getArticles(){
    return this.httpclient.get('https://newsapi.org/v2/top-headlines?country=us&apiKey='+this.API_KEY).pipe(
      catchError(this.errService.handleError)
    );
   }
   getArticlesByID(source: String){
    return this.httpclient.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.API_KEY).pipe(
      catchError(this.errService.handleError)
    );
   }
   getArticlesByCategory(category: String){
    return this.httpclient.get('https://newsapi.org/v2/top-headlines?country=us&category='+category+'&apiKey='+this.API_KEY).pipe(
      catchError(this.errService.handleError)
    );
   }
}
