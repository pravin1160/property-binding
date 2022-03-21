import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  imageUrl: string = "https://api.adorable.io/avatars/285/abott@adorable.png";
  imageWidth: number = 120;
  imageHeight: number = 120;
}
