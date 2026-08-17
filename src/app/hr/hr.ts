import {
  Component,
  OnInit
} from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';


@Component({
  selector: 'app-hr',

  standalone: true,

  templateUrl: './hr.html',

  styleUrl: './hr.css'
})
export class HrComponent
  implements OnInit {

  data: any = null;


  constructor(
    private http:
      HttpClient
  ) {}


  ngOnInit(): void {

    this.http
      .get(
        'https://localhost:7065/api/Hr'
      )
      .subscribe({

        next: response => {

          this.data =
            response;
        },


        error: error => {

          console.error(
            'HR API error:',
            error
          );
        }
      });
  }
}