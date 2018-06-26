import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import {JsonService} from './../json.service'
import { Router, ActivatedRoute } from '@angular/router'; 
import {Subject} from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  jsonArr:Object[];
  id:number;
  sub:any;
  jData:Object;
  nexter=0;
  dtTrigger:Subject<any>=new Subject();

  constructor(private myservice: JsonService, private route: ActivatedRoute, private router:Router, private cdr: ChangeDetectorRef) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
  };

	}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
   });
    this.myservice.getJSON("./assets/file"+this.id+".json").subscribe(data => {
      this.jsonArr=data;
  });
  console.log(this.id);
  }

  onClickSubmit(data) {
    this.jsonArr.push(data);
    // this.dtTrigger.next(this.nexter);
    // this.nexter++;
    this.cdr.detectChanges();
  }

  ngOnDestroy() {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
