import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newsapp';
  source: any;
  getSourceId($event) {
      this.source = $event;
      console.log("Soucre received in App", this.source);
  }

}

