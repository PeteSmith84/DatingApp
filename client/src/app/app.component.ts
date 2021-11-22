import { AccountService } from './_services/account.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;

  constructor(private AccountService: AccountService) {}

  ngOnInit() {  
    
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user')); 
    this.AccountService.setCurrentUser(user);
  }


}
