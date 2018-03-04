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
    this.contacts = contactList.reverse();
  }

  addContact() {
    console.log(this.newContact);

    // add contact to contacts list
    this.contacts.unshift(this.newContact);
    // clear inputs
    
  }
}
