import { Client } from '../../models/client.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  client: Client;

  clientList: Client[];

  // here is one way of work with template variables 
  // just for studying how resetting form works in different cases
  @ViewChild("form") formAsFormGroup: FormGroup; 
  @ViewChild("form") formAsNgForm: NgForm; 

  constructor() { }

  ngOnInit() {

    this.client = new Client();

    this.clientList = [ 
      { 
        id: 1,
        fullName: "Anton Volkov",
        email: "volkov@gmail.com",
        age: 25,
        phoneNumber: "+38 050 567-23-45",
        comment: "good client"        
      },
      { 
        id: 2,
        fullName: "Sergey Tokov",
        email: "tokov@gmail.com",
        age: 30,
        phoneNumber: "+38 067 345-01-40",
        comment: "good client"        
      },    
    ];
  }

  onSubmit(form: NgForm) {

    if (form.invalid) return;

    const newClient: Client = {
      id: this.clientList.length + 1,
      fullName: this.client.fullName,
      email: this.client.email,
      age: this.client.age,
      phoneNumber: this.client.phoneNumber,
      comment: this.client.comment
    }
    this.clientList.push(newClient);


    // here a few ways of work with template variables 

    // main way of resetting our form
    // via declaring local variable <form (ngSubmit)="onSubmit(form)" #form="ngForm">
    form.resetForm();

    // just for studying how resetting form works in different cases
    // console.log(form);
    // this.formAsFormGroup.reset();   // does not reset submitted property
    // this.formAsNgForm.resetForm();  // resets submitted property
    // console.log(form);    
  }

  deleteClient(index: number) {
    this.clientList.splice(index, 1)
  }

  onFocus(input) {
    console.log(input);  
  }
}
