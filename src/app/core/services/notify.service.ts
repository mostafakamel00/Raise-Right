import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  subscribers = signal<string[]>([]);

  onSubscribe(email: string) {
    if (!email.trim()) {
      console.warn('Please enter a valid email');
      return;
    }

    this.subscribers.update(list => [...list, email]);

    // console.log('✅ Subscribers:', this.subscribers());
  }
}
