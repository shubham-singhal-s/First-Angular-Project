import { Component, OnInit } from '@angular/core';
import {ChatService} from './../chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name:string;
  res:string;

  constructor( private chatter: ChatService) {  }

  ngOnInit() {
  }

  login(){
    this.chatter.getResponse(this.name).subscribe(data => {
      console.log(data);
      this.res=data.result.fulfillment.speech;
    })
  }

}
