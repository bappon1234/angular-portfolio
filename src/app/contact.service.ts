import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
private serviceId = 'service_6rrztem';
private templateId = 'template_fdgu65d';
private publicKey = 'JMU2-b-shUTNP7T_t';
  constructor() { }

  sendEmail(contactData: any) {
    return emailjs.send(this.serviceId, this.templateId, contactData, this.publicKey);
  }
}
