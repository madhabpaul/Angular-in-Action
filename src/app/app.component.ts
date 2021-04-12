import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learning Angular';
  subheading = 'First angular project';
  realText="";
  isdisable=true;
  myArray=["pen", "pencil", "book", "eraser", "scale"];
  choice=""

  constructor(private router: Router){}

  getalert(val){
    alert(val);
  }

  getText(val){
    this.realText=val;
  }

  edit(){
    this.isdisable=false;
  }

  setColor(data){
    this.choice=data;
  }

  onClickFunc(){
    this.router.navigate(['/login']);
  }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
