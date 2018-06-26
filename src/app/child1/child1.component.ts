import { Component, OnInit, Input } from '@angular/core';
import {JsonService} from './../json.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})

export class Child1Component implements OnInit {
	@Input() jsonArr;

	constructor(private myservice: JsonService) {

	}

  ngOnInit() {
      this.myservice.getJSON("./assets/file.json").subscribe(data => {
            this.jsonArr=data;
        });
    }


  	onClickSubmit(data) {
      alert("First Name : " + data.fname);
      this.jsonArr.push(data);
  	}

  	clearTable() {
  	this.jsonArr = [];
  	}

}
