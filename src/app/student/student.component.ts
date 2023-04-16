import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

//For table
export interface PeriodicElement {
  name: string;
  position: number;
  action: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', action: 1},
  {position: 2, name: 'Helium', action:2}
];

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent{
  // For panel
  panelOpenState1 = true;

  // For form
  stuForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    address: new FormControl(""),
    uniId: new FormControl(""),
    term: new FormControl(""),
    course: new FormControl(""),
  });

  stuSubmitted(){
    console.log(this.stuForm.value);
  }

  // For Modal
  openModel() {
    const modelDiv = document.getElementById('myModal');
    if(modelDiv!= null) {
      modelDiv.style.display = 'block';
    } 
  }

  CloseModel() {
    const modelDiv = document.getElementById('myModal');
    if(modelDiv!= null) {
      modelDiv.style.display = 'none';
    } 
  }

  // For table
  displayedColumns: string[] = ['position', 'name', 'action'];
  dataSource = ELEMENT_DATA;
}
