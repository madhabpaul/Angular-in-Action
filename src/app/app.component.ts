import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup} from '@angular/forms';
import { UserdataService} from './userdata.service';

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

  contactSubmit(data){
    var val=data.value;
    var name=val.name;
    var email=val.email;
    console.log(name, email);
  }

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  onSubmit() {
    console.log(this.profileForm.value);
  }

  // constructor(private userdataServeice: UserdataService){
  //   let userdata = this.userdataServeice.getName();
  //   console.log(userdata);
  // }
}
