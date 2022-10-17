import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  submissions = [1]
  lat = 51.678418;
  lng = 7.809007;
  checkedValue: any = 'map';

  constructor() { }

  ngOnInit(): void {
  }

  radioChecked(event: any){
    this.checkedValue = event;
  }

}
