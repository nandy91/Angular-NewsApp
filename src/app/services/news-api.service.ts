import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { map, catchError } from'rxjs/operators';
import {  ErrorHandlerService } from '../services/error-handler.service';
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  API_KEY = '2ba2ba964e53737e2978a1c001e0d293';
  
  constructor(private httpclient:HttpClient, private errService: ErrorHandlerService) {
    
   }
   
   getArticles(){
    return this.httpclient.get('https://gnews.io/api/v3/top-news?token='+this.API_KEY).pipe(
      catchError(this.errService.handleError)
    );
   }
 
   getArticlesByCountry(country: String){
    return this.httpclient.get('https://gnews.io/api/v3/top-news?token='+this.API_KEY+'&country='+country).pipe(
      catchError(this.errService.handleError)
    );
   }
   getArticlesByTopic(topic: String){
    return this.httpclient.get('https://gnews.io/api/v3/topics/'+topic+'?token='+this.API_KEY).pipe(
      catchError(this.errService.handleError)
    );
   }
}
