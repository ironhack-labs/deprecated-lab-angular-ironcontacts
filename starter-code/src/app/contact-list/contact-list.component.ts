import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';
import contacts from '../contacts';

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

  addContact(){
    contacts.push(this.newContact);
    console.log("Add contact has been called");
    this.newContact={}
    // add contact to contacts list
    // clear inputs
  }
}
