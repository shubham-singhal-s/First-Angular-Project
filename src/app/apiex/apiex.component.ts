import { Component, OnInit } from '@angular/core';
import {JsonService} from './../json.service';
import { FormsModule } from '@angular/forms';
import { timeout } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material'

@Component({
	selector: 'app-apiex',
	templateUrl: './apiex.component.html',
	styleUrls: ['./apiex.component.css']
})
export class ApiexComponent implements OnInit {

	//url:string;
	name:string;
	released;
	country;
	genre;
	imdb;
	plot;
	img;
	title;
	vis=false;
	url="http://www.omdbapi.com/?apikey=ed115647&t="
	jData ={};

	constructor(private myservice: JsonService, public snackBar: MatSnackBar) { }

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
		  duration: 10000,
		});
	  }

	login(){

		var url=this.url+this.name;
		console.log(url);
		
		this.myservice.getJSON(url)
		.pipe(timeout(20000),
		catchError(err => {
			alert(" " + err);
			throw("Error: "+ err);
		}))
		.subscribe(data => {
			if(data.Response!='False'){
				console.log(data);
				this.vis=true;
				this.empty();
				this.released=data.Released;
				this.country=data.Country;
				this.genre=data.Genre;
				this.imdb=data.Ratings[0].Value;
				this.img=data.Poster;
				this.plot=data.Plot;
				this.title=data.Title;
				
				this.openSnackBar("Movie: "+data.Title,"Close");
			}
			else{
				alert(data.Error);
			}
		});

		
		
	}

	empty(){
				this.released=null;
				this.country=null;
				this.genre=null;
				this.imdb=null;
				this.img=null;
				this.plot=null;
				this.title=null;
	}


	ngOnInit() {
	}

	logErr(msg:string){
		alert(msg);
	}

}

interface movie {
	Response:string;
	Released:string;
	Country:string;
	Genre:string;
	Ratings;
	Poster:string;
	Plot:string;
	Title:string;
	Error:string;
}