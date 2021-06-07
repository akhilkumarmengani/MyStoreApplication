import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  public details : { name : string , cost : number };
  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
     console.log(this.router.getCurrentNavigation()?.extras.state);
     this.details = { name : 'Akhil' , cost : 1};
   }

  ngOnInit(): void {
    this.details.cost = history.state.cost;
    this.details.name = history.state.name;
    console.log(this.details.cost +" "+this.details.name);
  }

}
