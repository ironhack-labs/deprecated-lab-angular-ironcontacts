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

  addContact(){
    console.log("Add contact has been called");
    console.log(this.contacts.length);
    this.contacts.push(this.newContact);
    console.log(this.contacts.length);
    for(let key in this.newContact){
      this.newContact[key] = "";
    }
    
  }
}
