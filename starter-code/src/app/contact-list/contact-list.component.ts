import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';
import {Contact} from '../shared/contact.model'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent /*implements OnInit*/ {
  contacts: Object[] = contactList;
  newContact: Contact = new Contact();
  //newContact: Object = {};

  // constructor() { }

  // ngOnInit() {
  //   this.contacts = contactList;
  // }

  addContact(){
    console.log("Add contact has been called");
    // add contact to contacts list
    this.contacts.push(this.newContact)
    // clear inputs
    this.newContact = new Contact;
  }
}
