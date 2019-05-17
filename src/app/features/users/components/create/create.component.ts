import { Component, OnInit } from '@angular/core';

import {
  Router
} from '@angular/router';

import {
  ApiService
} from '../../../../api/api/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void { }

  onDataUser(value) {
    console.log('value',value);
    this.api.addUser(value).subscribe(v => {
      console.log('value added', v);
    });
    this.router.navigate(['/users']);
  }
}
