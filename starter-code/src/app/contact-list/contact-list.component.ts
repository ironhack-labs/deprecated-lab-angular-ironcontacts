import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: Contact = new Contact();

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact() {
    this.contacts.push(this.newContact);
    this.newContact = new Contact();
    // this.newContact = contactList.push(this.newContact);
    // this.newContact = {};
  }
}

class Contact{
  name: string;
  email: string;
  phoneNumber: string;
  image: string;
}
