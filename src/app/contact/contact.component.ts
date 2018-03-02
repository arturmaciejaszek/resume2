import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  pat: RegExp;
  msgSent = false;
  showSpinner = false;

  constructor(private http: Http) { }

  ngOnInit() {
    this.pat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  }

  onSubmit(form: NgForm) {
    this.showSpinner = true;
    this.sendMail({
      name: form.value.name,
      email: form.value.email,
      query: form.value.query
    }).subscribe(
      res => {
        if (res.json()) {
          this.showSpinner = false;
          form.resetForm();
          this.msgSent = true;
        } else {
          this.showSpinner = false;
        }
      }
    );
  }

  sendMail({name: name, email: email, query: query}) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://us-central1-resume2-amaciejaszek.cloudfunctions.net/sendEmail', {
      name: name,
      email: email,
      query: query
    }, {headers: headers});
  }

}
