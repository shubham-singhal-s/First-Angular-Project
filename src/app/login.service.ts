import { Injectable, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) { }
  uname: string;
  comp: string;
  date;
  logger = {
    "Admin1": "Pass1",
    "Admin2": "Pass2"
  }

  login(data:any): boolean {
    var user=data.user;
    var pass=data.pass;
    var comp=data.comp;
    var date=data.date;
    if (this.logger[user] === pass && comp !== '') {
      this.storage.set("loggedIn", true);
      this.storage.set("user", user);
      this.storage.set("company", comp);
      this.storage.set("date", date);
      this.uname = user;
      this.comp = comp;
      this.date=date;
      return true;
    }
    else {
      if (comp === '')
        alert("Wrong Credentials: Company");
      else
        alert("Wrong Credentials: User or Password");
      return false;
    }
  }

  logout() {
    this.storage.remove("loggedIn");
    this.storage.set("user", null);
    this.storage.set("company", null);
    this.storage.set("date", null);
    this.uname = null;
    this.comp = null;
    this.date=null;
  }

  restore():boolean{
    var loggedIn=this.storage.get("loggedIn");
		this.uname=this.storage.get("user");
		this.comp=this.storage.get("company");
    this.date=this.storage.get("date");
    return loggedIn;
  }


}
