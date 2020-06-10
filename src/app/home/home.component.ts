import { Component, OnInit } from "@angular/core";
import { movies } from '../shared/moviedb.json'


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})


export class HomeComponent implements OnInit {
  search: string;
  itemsElement: {} = movies;
  result: {};
  closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("myForm").style.display = "none";
  }
  filterSearch(searchFor: { search: string }) {
  
    this.result = movies.filter(function (s) {
     return s.title.toLowerCase().includes(searchFor.search.toLowerCase())
    });
    if (this.result !== []) {
      this.itemsElement = this.result;
    } else {
      this.itemsElement = movies;
    }
  }  
  ngOnInit() {}
}
