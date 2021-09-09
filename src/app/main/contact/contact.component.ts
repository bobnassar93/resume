import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  sendMessage = (): void => {
    this.http.post('https://node-webmailer.herokuapp.com/sendMail',
      {
        from: 'bobnassar@gmail.com',
        subject: 'Test Subject',
        message: 'Test Message'
      }).subscribe(res => {
        console.log(res);
      });
  }
}
