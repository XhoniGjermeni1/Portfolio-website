import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
// import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  contactForm = new FormGroup({
    emri: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mesazhi: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  dergoMesazhin() {
    if (this.contactForm.valid) {
      alert('Mesazhi u dërgua!');
      this.contactForm.reset();

      // Vendos ID-të e tua që more te faqja e EmailJS
      // const serviceID = 'service_p3oapqg';
      // const templateID = 'template_btcmqvd';
      // const publicKey = 'M8RzOo6Ic7amypGSy';
      // Këtu i dërgojmë të dhënat e formës (emri, email, mesazhi)
      // të cilat do të përputhen me {{emri}} etj. te template-i
      //   emailjs
      //     .send(serviceID, templateID, this.contactForm.value, publicKey)
      //     .then(() => {
      //       alert('Mesazhi u dërgua!');
      //       this.contactForm.reset();
      //     })
      //     .catch((err) => {
      //       console.error('Gabim nga EmailJS:', err);
      //       alert('Ndodhi një gabim gjatë dërgimit.');
      //     });
      // } else {
      //   alert('Ju lutem plotësoni formën saktë!');
      // }
    }
  }
}
