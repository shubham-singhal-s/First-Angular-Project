import { Component, OnInit, Inject } from '@angular/core';
import { LoginService } from './login.service';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';

	constructor(private login: LoginService, @Inject(SESSION_STORAGE) private storage: StorageService) { }

	loggedIn: boolean = false;
	collapsed = true;
	comArr = ["Dion", "Religare", "TATA", "ICICI"]

	ngOnInit() {
		this.loggedIn = this.login.restore();
	}

	toggleCollapsed(): void {
		this.collapsed = !this.collapsed;
	}

	onLogin(data) {
		var date = new Date();
		data.date = date;
		console.log(data);
		this.loggedIn = this.login.login(data);
	}

	logout() {
		this.loggedIn = false;
		this.login.logout();
	}



}
