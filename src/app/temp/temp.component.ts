import { Component, OnInit } from '@angular/core';
import {LoginService} from './../login.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {

  constructor(private login: LoginService,private router: Router) { }

  collapsed = true;

  ngOnInit() {
  }

  toggleCollapsed(): void {
		this.collapsed = !this.collapsed;
  }
  
  logout() {
		this.login.logout();
		this.router.navigate(['/login']);
	}

}
