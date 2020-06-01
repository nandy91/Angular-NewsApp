import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  API_KEY = 'de6aa3a89706483096fae6d0426ad331';
  
  constructor(private httpclient:HttpClient) {
    
   }
   getAllNewsSource() {
     return this.httpclient.get('https://newsapi.org/v2/sources?apiKey='+this.API_KEY);
   }

   getArticles(){
    return this.httpclient.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.API_KEY);
   }
   getArticlesByID(source: String){
    return this.httpclient.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.API_KEY);
   }
}
