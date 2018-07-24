import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: Object = {};

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(name, email, phone, image){
    console.log("Add contact has been called: ", name.value, email.value, phone.value, image.value);
    this.contacts.push({
      name: name.value,
      email: email.value,
      phoneNumber: phone.value,
      image: image.value
    })
    this.newContact ={
      name: "",
      email: "",
      phoneNumber: "",
      image: ""
    }
  }
}
