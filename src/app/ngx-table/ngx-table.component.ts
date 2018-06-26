import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inline-edit-demo',
  templateUrl: './ngx-table.component.html'
})
export class NgxTableComponent{

  editing = {};
  fData = [{ "fname": "a1", "lname": "b1", "addr": "d1" },
	{ "fname": "b1", "lname": "d1", "addr": "a1" },
	{ "fname": "c1", "lname": "c1", "addr": "b1" },
	{ "fname": "e1", "lname": "c1", "addr": "b1" },
	{ "fname": "f1", "lname": "c1", "addr": "b1" },
	{ "fname": "b1", "lname": "d1", "addr": "a1" },
	{ "fname": "c1", "lname": "c1", "addr": "b1" },
	{ "fname": "e1", "lname": "c1", "addr": "b1" },
	{ "fname": "f1", "lname": "c1", "addr": "b1" },
	{ "fname": "b1", "lname": "d1", "addr": "a1" },
	{ "fname": "c1", "lname": "c1", "addr": "b1" },
	{ "fname": "e1", "lname": "c1", "addr": "b1" },
	{ "fname": "f1", "lname": "c1", "addr": "b1" },
  { "fname": "d1", "lname": "a1", "addr": "c1" }];
  
  rows =JSON.parse(JSON.stringify(this.fData));
  
  edited=false;


  updateValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex)
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }

  onSave(){
    this.editing={};
    this.edited=false;
    this.fData=JSON.parse(JSON.stringify(this.rows));
  }

  onClickSubmit(data){
    this.rows.push(data);
    this.rows = [...this.rows];
  }

  onCancel(){
    this.editing={};
    this.rows = [...JSON.parse(JSON.stringify(this.fData))];
    this.edited=false;
  }

  remove(ind:number){
    this.rows.splice(ind,1);
  }

}