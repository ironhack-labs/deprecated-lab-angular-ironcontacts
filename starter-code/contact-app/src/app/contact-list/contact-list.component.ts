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
  restrictTyping = false;

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(newContactName:string, newContactEmail:string, newContactPhoneNumber:string, newContactImage:string){
    console.log("Add contact has been called");
    console.log(this.newContact);
    this.contacts.push(this.newContact);
    console.log('List', JSON.stringify(this.contacts));
    // add contact to contacts list
    // clear inputs
  }
}
