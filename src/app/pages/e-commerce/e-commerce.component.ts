import {Component} from '@angular/core';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent {
  constructor() {
    let name = localStorage.getItem('visitorName');
    if (!name) {
      while (!name) {
        name = this.promptName();
      }
      localStorage.setItem('visitorName', name);
    }
    this.registerUser(name);
  }

  registerUser(name) {
    pendo.initialize({
      visitor: {
        id: name,   // Required if user is logged in, default creates anonymous ID
        // email:        // Recommended if using Pendo Feedback, or NPS Email
        // full_name:    // Recommended if using Pendo Feedback
        // role:         // Optional

        // You can add any additional visitor level key-values here,
        // as long as it's not one of the above reserved names.
      },

      account: {
        id: 'ACCOUNT-UNIQUE-ID', // Required if using Pendo Feedback, default uses the value 'ACCOUNT-UNIQUE-ID'
        // name:         // Optional
        // is_paying:    // Recommended if using Pendo Feedback
        // monthly_value:// Recommended if using Pendo Feedback
        // planLevel:    // Optional
        // planPrice:    // Optional
        // creationDate: // Optional

        // You can add any additional account level key-values here,
        // as long as it's not one of the above reserved names.
      },
    });
  }

  promptName() {
    return prompt(`Please provide a name, it will be used as visitor's name in Pendo`);

  }
}
