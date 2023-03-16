import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import  Contact  from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  apiUrl = "https://localhost:7146/contacts"
  constructor(private http: HttpClient) { }
  addContact(contact: Contact){
    return this.http.post(this.apiUrl, contact)
  }
}
