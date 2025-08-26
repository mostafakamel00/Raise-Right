import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  subscribers = signal<string[]>([]);
  onSubscribe(email: string) {
    if (!email.trim()) {
      return;
    }

    this.subscribers.update(list => [...list, email]);

    // console.log(this.subscribers());
  }
}
