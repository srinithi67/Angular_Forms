import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-drivenform',
  templateUrl: './template-drivenform.component.html',
  styleUrls: ['./template-drivenform.component.css']
})
export class TemplateDrivenformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(email){
    console.log(email);
  }

}
