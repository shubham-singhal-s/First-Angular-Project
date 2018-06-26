import { Pipe, PipeTransform } from '@angular/core';
//import {isNumeric} from "rxjs/util/isNumeric";
@Pipe({
	name: 'filter'
})
export class FilterPipe implements PipeTransform {
	transform(str: any): any {
		const pattern = /[0-9\+\-\ ]/;
		if (pattern.test(str) || str===''){
			//console.log('alph');
			return true;
		}
		else{
			//console.log('num');
			return false;
		}
	}
}