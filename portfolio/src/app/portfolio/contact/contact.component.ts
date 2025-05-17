import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
name = '';
email ='';
message ='';

constructor(private contactService:ContactService){}

sendMessage(){
  const contactData = {
    name: this.name,
    email: this.email,
    message: this.message
  };

  this.contactService.sendEmail(contactData).then(
    ()=>{
      alert('Email sent Successfully!');
      this.name ='';
      this.email ='';
      this.message = '';
    },
    (error)=>{
      alert('Failed to send Email.');
      console.error('Email error', error);
    }
  );
}
}
