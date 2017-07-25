import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';
import contacts from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[] = contacts;
  newContact: Object = {};

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(){
    console.log("Add contact has been called right now");
    // add contact to contacts list
    let newContact = {
      name : this.newContact['name'],
      email : this.newContact['email'],
      phoneNumber : this.newContact['phoneNumber'],
      image : this.newContact['image'] || "http://lorempixel.com/640/480/cats"
    }
    contacts.push(newContact);
    // clear inputs
    this.newContact = {};
  }
}
