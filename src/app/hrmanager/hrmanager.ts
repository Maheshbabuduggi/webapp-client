import {
  Component,
  OnInit
} from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';


@Component({
  selector: 'app-hr-manager',

  standalone: true,

  templateUrl:
    './hrmanager.html',

  styleUrl:
    './hrmanager.css'
})
export class HrManagerComponent
  implements OnInit {

  data: any = null;


  constructor(
    private http:
      HttpClient
  ) {}


  ngOnInit(): void {

    this.http
      .get(
        'https://localhost:7065/api/HrManager'
      )
      .subscribe({

        next: response => {

          this.data =
            response;
        },


        error: error => {

          console.error(
            'HR Manager API error:',
            error
          );
        }
      });
  }
}