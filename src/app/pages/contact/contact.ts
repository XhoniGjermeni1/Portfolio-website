import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  // Krijojmë grupin e formës me rregulla strikte
  contactForm = new FormGroup({
    emri: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]+$'), // Regex: Vetëm shkronja dhe hapësira
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email, // Validator i gatshëm i Angular
    ]),
    mesazhi: new FormControl('', [
      Validators.required,
      Validators.minLength(10), // Minimumi 10 karaktere
    ]),
  });

  dergoMesazhin() {
    if (this.contactForm.valid) {
      alert('Faleminderit! Mesazhi juaj u dërgua me sukses.');
      this.contactForm.reset(); // Pastron formën automatikisht
    }
  }
}
