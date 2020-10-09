import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/index';

@Component({
  selector: 'app-pharmaceutical',
  templateUrl: './pharmaceutical.component.html',
  styleUrls: ['./pharmaceutical.component.scss']
})
export class PharmaceuticalComponent implements OnInit {
  
  currentUser: any;

  constructor(private user: UserService) { }

  ngOnInit() {
    this.currentUser = this.user.getCurrentUser();
  }

}
