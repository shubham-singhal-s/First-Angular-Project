import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
	selector: 'app-mainchild',
	templateUrl: './mainchild.component.html',
	styleUrls: ['./mainchild.component.css']
})
export class MainchildComponent {

	chart = [];
	value: number = 0;
	labels = ['a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c'];
	x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	y = [9, 8, 7, 6, 5, 4, 3, 2, 1];

	constructor() { }

	double(x: number[]) {
		var n;
		for (n in x) {
			x[n] = x[n] * 2;
		}
		return x;
	}

	myfunc(num: number) {
		if (num == 1) {
		this.x = this.double(this.x);
			this.chart = new Chart('canvas', {
				type: 'line',
				data: {
					labels: this.labels,
					datasets: [
						{
							data: this.x,
							borderColor: "#3cba9f",
							fill: false
						},
						{
							data: this.y,
							borderColor: "#ffcc00",
							fill: false
						},
					]
				},
				options: {
					legend: {
						display: false
					},
					scales: {
						xAxes: [{
							display: true
						}],
						yAxes: [{
							display: true
						}],
					}
				}
			});
		}

		else {
			var i;
			for (i = 0; i < 1000; i++) {

				this.setDelay(i);
			}

		}
	}

	setDelay(sec: number) {
		setTimeout(() => { this.value = sec / 10; }, 2 * sec);
	}






}
