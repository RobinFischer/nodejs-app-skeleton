import { Component, ViewChild } from "@angular/core";
import { NavController, IonicPage } from "ionic-angular";
import { AdminPage } from "../adminpage/adminpage";
import { UserPage } from "../userpage/userpage";
import { HomePage } from "../homepage/homepage";

@IonicPage({
  name: "dev",
  segment: "dev"
})
@Component({
  selector: "developer-page",
  templateUrl: "developerpage.html"
})
export class DeveloperPage {
  // this is the important part for working with the ionic stack navigation
  // page2 = Page2;
  admin = AdminPage;
  user = UserPage;
  home = HomePage;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {}
}
