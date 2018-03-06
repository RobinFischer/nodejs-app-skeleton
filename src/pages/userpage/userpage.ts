import { Component, ViewChild } from "@angular/core";
import { NavController, IonicPage } from "ionic-angular";
//import { UserPage } from "../userpage/userpage";
import { AdminPage } from "../adminpage/adminpage";
import { HomePage } from "../homepage/homepage";
import { DeveloperPage } from "../developerpage/developerpage";

@IonicPage({
  name: "user",
  segment: "user"
})
@Component({
  selector: "user-page",
  templateUrl: "userpage.html"
  // this tells the tabs component which Pages
  // should be each tab's root Page
  
  //tab1Root = HomePage;
  //tab2Root = Page2;
  //tab3Root = Page3;


})
export class UserPage {
  // this is the important part for working with the ionic stack navigation
  // page2 = Page2;
  admin = AdminPage;
  home = HomePage;
  dev = DeveloperPage;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {}
}
