import { Component } from '@angular/core';
//for using the service we must import the service
//here in this case userdata.service
import { UserdataService } from './services/userdata.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MakingService';
  //We need a constructor here for injecting the service?
  // 
  users:any;
  constructor(private userData:UserdataService)
  {
    //calling the function defined in service(userdata)
    console.warn(userData.users())
    this.users=userData.users();

  }
}
