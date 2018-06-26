import { Component, OnInit } from '@angular/core';
import {LoginService} from './../login.service';
import {ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute,private login: LoginService, private router: Router) { }

	loggedIn: boolean = false;
	collapsed = true;
	comArr = ["Dion", "Religare", "TATA", "ICICI"];
	returnUrl:string;

	ngOnInit() {
		this.login.restore();
		
  }
  
  onLogin(data) {
		this.returnUrl = this.route.snapshot.queryParams['returnUrl']||'';
		var date = new Date();
		data.date = date;
		console.log(data);
    this.loggedIn = this.login.login(data);
    if(this.loggedIn){
      this.router.navigate([this.returnUrl]);
		}
		
		try{
			var x = 5/0;
			console.log(x);
		}
		catch(e){
			console.log(e);
		}
	}

	

}
