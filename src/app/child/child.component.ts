import { Component, OnInit, Input } from '@angular/core';
import {JsonService} from './../json.service';

@Component({
	selector: 'app-child',
	templateUrl: './child.component.html',
	styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

	jData:jsonPlaceholder = {body:null};
	arrows = ["▲","▼"];
	arrow = ["▼","▼","▼"];
	color = ["gray","white","white"];
	checkboxValue2:boolean;

	constructor(private myservice: JsonService) { }

	ngOnInit(){
		
	}

	@Input() Jarr;

	arrowCol(ind){
		this.color = this.color.map(function(ele){
			return ele="white";
		});
		this.color[ind]="gray";
		for(var i=0;i<this.myservice.adone.length;i++){
			if(i!=ind){
				this.myservice.adone[i]=true;
			}
		}
	}


	sortTable(ind: number) {
		this.Jarr=this.myservice.sortJSON(this.Jarr,ind);
		this.myservice.adone[ind] = !this.myservice.adone[ind];
		this.arrowCol(ind);
		if(this.myservice.adone[ind]){
			this.arrow[ind]=this.arrows[0];
		}
		else{
			this.arrow[ind] = this.arrows[1];
		}
	}

	exJson() {
		this.myservice.getJSON("https://jsonplaceholder.typicode.com/posts/80").subscribe(data => {
			if(this.checkboxValue2){
				data.body=data.body.toUpperCase();
			}
			this.jData=data;
		});
	}


	capital() {
		if(this.jData.body!=null)
		{
			if(this.checkboxValue2){
				this.jData.body = this.jData.body.toUpperCase();
			}
			else
			{
				this.jData.body = this.jData.body.toLowerCase();
			}
		}
	}
}

interface jsonPlaceholder {
	body:string;
}