import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  sending: boolean = false;
  nameValidationMessage: string = '';
  emailValidationMessage: string = '';
  subjectValidationMessage: string = '';
  messageValidationMessage: string = '';

  host: string = 'smtp.gmail.com';
  port: number = 465;
  secure: boolean = true;
  auth: {
    user: string,
    pass: string
  } = {
      user: 'bobnassar93@gmail.com',
      pass: ''
    };

  name = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  subject = new FormControl('', Validators.required);
  message = new FormControl('', Validators.required);

  canSend: boolean = false;

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }


  sendMessage = (): void => {
    this.validate();
    if (this.canSend === false) {
      return;
    }
    this.sending = true;
    this.http.post('https://node-webmailer.herokuapp.com/sendMail',
      {
        from: this.email.value,
        subject: this.subject.value,
        message: this.message.value,
        name: this.name.value,
        host: this.host,
        port: this.port,
        secure: this.secure
      }).subscribe((res: any) => {
        this.toastr.success(res.Response);
        this.canSend = false;
        this.email.reset();
        this.name.reset();
        this.subject.reset();
        this.message.reset();
        this.sending = false;
      });
  }

  validate = (): void => {
    this.emailValidationMessage = '';
    this.nameValidationMessage = '';
    this.subjectValidationMessage = '';
    this.messageValidationMessage = '';
    this.canSend = true;

    if (this.email.hasError('required')) {
      this.canSend = false;
      this.emailValidationMessage = 'You must enter your email';
    }
    if (this.email.hasError('email')) {
      this.canSend = false;
      this.emailValidationMessage = 'Not a valid email';
    }
    if (this.name.hasError('required')) {
      this.canSend = false;
      this.nameValidationMessage = 'You must enter your full name';
    }
    if (this.subject.hasError('required')) {
      this.canSend = false;
      this.subjectValidationMessage = 'You must enter a subject';
    }
    if (this.message.hasError('required')) {
      this.canSend = false;
      this.messageValidationMessage = 'You must enter a message';
    }
  }
}
