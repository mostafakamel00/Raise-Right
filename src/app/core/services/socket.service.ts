import { inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket!: WebSocket;
  toastr = inject(ToastrService)
  connect(url: string) {
    this.socket = new WebSocket(url);
    this.socket.onerror = (err) => {
      this.toastr.error('WebSocket connection error')
    };
  }

  onMessage(callback: (data: any) => void) {
    this.socket.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        callback(msg);
      } catch (e) {
        this.toastr.error('Invalid WebSocket message received')
      }
    };
  }

  sendMessage(message: any) {
    this.socket.send(JSON.stringify(message));
  }
}
