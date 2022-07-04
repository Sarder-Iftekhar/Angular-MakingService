import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  users:any;
  constructor(private userData:UserdataService)
  {
    //calling the function defined in service(userdata)
    console.warn(userData.users())
    //by usin injected service call the service function 
    //and store in users
    this.users=userData.users();
    //now you are able to use users to html 

  }

  ngOnInit(): void {
  }

}
