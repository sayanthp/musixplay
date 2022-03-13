import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit() {
  }

  search_param:string = "";
  

  Search(){

      this.route.navigate(['/music/search',this.search_param]);

  }

}
