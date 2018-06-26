import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JsonService {

	adone=[false,true,true];
	anames=["fname","lname","addr"];

	constructor(private http: HttpClient) {
	}


	public getJSON(url: string): Observable<any> {
		return this.http.get(url)
	}

	public sortJSON(Jarr: any, sor: number): Observable<any> {
		
		Jarr.sort(this.predicateBy(this.anames[sor],this.adone[sor]));
		//console.log(this.adone[0]);
		return Jarr;
	}

	predicateBy(prop,done){
		if(done){
			return function(a,b){
				if( a[prop] > b[prop]){
					return 1;
				}else if( a[prop] < b[prop] ){
					return -1;
				}
				else return 0;
			}
		}
		else{
			return function(a,b){
				if( a[prop] > b[prop]){
					return -1;
				}else if( a[prop] < b[prop] ){
					return 1;
				}
				else return 0;}
			}
	}
}



