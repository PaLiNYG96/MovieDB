import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Subscription } from "rxjs";
import { movies } from "../shared/moviedb.json";
import { parse } from 'querystring';

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.css"],
})

export class SideNavComponent implements OnInit {
  isAuthenticated = false;
  itemsElement: {} = movies;
  result;
  newVote;
  vote = 0;
  isValid:boolean = false;
  private userSub: Subscription;

  
  constructor(private AuthService: AuthService) {}

  closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("myForm").style.display = "none"; //close form with nav
  }
  openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  onEvent(event: any){
    this.vote = event.target.value;
    if(this.vote < 11 && this.vote > 0) {
      return this.isValid = true;
    }
    if(this.vote > 10 || this.vote < 1) {
      return this.isValid = false;
    }
  }
  onSubmit(event){ //review form submit event
    this.newVote = event.target.rating.value;
    let alt = document.getElementById("inView").getAttribute("alt");
    this.result = movies.filter(function (s) {
      return s.title.includes(alt);
    });
    this.newVote = this.newVote.toString()
    this.newVote = parseInt(this.newVote) //convert to number
    let newAverage: number =
    //((old vote count * old vote average)+ new vote)/new vote count = new average
      (((this.result[0].vote_count * this.result[0].vote_average) + this.newVote) /
      (this.result[0].vote_count + 1));
      //to fixed wasn't working so i made the following to round the numbers
      let a = newAverage.toPrecision(4);
      a = a.replace('.', '')
      a = [a.slice(0, 1), '.', a.slice(1, -1)].join('');
      this.result[0].vote_average = a;  //replace old average with new
    this.result[0].vote_count += 1;
  }
  
  ngOnInit() {
    this.userSub = this.AuthService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }
}
