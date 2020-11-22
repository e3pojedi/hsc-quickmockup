import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feelings-feedback',
  templateUrl: './feelings-feedback.component.html',
  styleUrls: ['./feelings-feedback.component.css']
})
export class FeelingsFeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

}