import { Component, OnInit, Input } from "@angular/core";
import { movies } from '../shared/moviedb.json'

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
})
export class ItemComponent implements OnInit {
  samples = movies;
  constructor() {}
  @Input("itemsElement") item;
  
  ngOnInit() {

  }
  openNav(event) {
    document.getElementById("sideNav").style.width = "450px";
    document.getElementById("inView").setAttribute("alt", this.item.title)
    document.getElementById("inView").setAttribute("mo-id", this.item.id)
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var altAttr = target.attributes.alt;
    var synopsis = altAttr.nodeValue; 
    var img = idAttr.nodeValue;
    var sample = img.toString();
    var image = document.getElementById("inView");
    image.setAttribute("src", "../assets/images/" + sample +".jpg");
    var overView = document.getElementById("overView");
    overView.textContent =  synopsis;
    }
}
