import { Component, OnInit, Output, EventEmitter, OnDestroy } from "@angular/core";
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit, OnDestroy{
  isAuthenticated = false;


  private userSub: Subscription;

  constructor(private AuthService: AuthService) {}

  ngOnInit() {
    this.userSub = this.AuthService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }


  newSearch = "";
  search = "";
  input = document.getElementById("searchBox");
  @Output() searchText = new EventEmitter<{
    search: string;
  }>();

  closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("myForm").style.display = "none";
  }
  searchFor() {
    this.searchText.emit({
      search: this.newSearch,
    });
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onLogout(){
    this.AuthService.logout();
  }
}
