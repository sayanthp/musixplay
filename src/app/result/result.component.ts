import { Component, OnInit, HostListener } from '@angular/core';
import { search } from '../interfaces/search';
import { DeezerService } from '../services/deezer.service';

import { ActivatedRoute, Router } from '@angular/router'
import {NgxPaginationModule} from 'ngx-pagination';



@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})


export class ResultComponent implements OnInit {

  constructor(private deezerservice:DeezerService,private Activatedroute:ActivatedRoute,private route:Router) {

    this.search_param = this.Activatedroute.snapshot.paramMap.get("term");
     
    this.Search();
    
   }

  ngOnInit() {

    

  }

  search_param:string = "";
  searchResp:search[];

  Search(){

    this.deezerservice.getResponse(this.search_param).subscribe((data) =>{
		
		if(JSON.parse(JSON.stringify(data)).data.length == 0){
        this.route.navigateByUrl("/**");
      }
      
      this.searchResp = JSON.parse(JSON.stringify(data)).data;

    
    });
  }


  

}
