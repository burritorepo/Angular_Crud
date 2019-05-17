import { Component, OnInit } from '@angular/core';

import {
  ActivatedRoute
} from '@angular/router';
import { ApiService } from 'src/app/api/api/api.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  user: any;
  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) {
    console.log('route', route.snapshot.params)
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.api.getUser(id).subscribe((user) => {
      this.user=user;
    })
   }
}