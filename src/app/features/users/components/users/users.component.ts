import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../api/api/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
   this.api.getUsers().subscribe((users) => {
     this.users = users;
   })
  }
}

