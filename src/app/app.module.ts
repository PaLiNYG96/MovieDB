import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ItemComponent } from "./item/item.component";
import { HomeComponent } from "./home/home.component";
import { Routes, RouterModule } from "@angular/router";
import { SideNavComponent } from "./side-nav/side-nav.component";
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  //angular.io/guide/router
  { path: "", redirectTo: "Home", pathMatch: "full" },
  { path: "Home", component: HomeComponent },
  { path: "Admin", component: AdminComponent},
  { path: "item", component: ItemComponent },
  { path: "login", component: AuthComponent},
  { path: "register", component: AuthComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemComponent,
    HomeComponent,
    SideNavComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    AdminComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule, HttpClientModule],
  exports: [RouterModule],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
