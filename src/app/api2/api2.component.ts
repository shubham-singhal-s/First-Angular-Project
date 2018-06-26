import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
	selector: 'app-api2',
	templateUrl: './api2.component.html',
	styleUrls: ['./api2.component.css']
})
export class Api2Component implements OnInit {

	astros:Object={
		people:[{
			name:'',
			carft:''
		}]
	};

	

	constructor(private http:HttpClient) { }

	ngOnInit() {
	}

	getSpace(){
		this.http.get("http://api.open-notify.org/astros.json").subscribe(data => {
			this.astros=data;
			console.log(data);
		});

	}

}
