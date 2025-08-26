import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket!: WebSocket;

  connect(url: string) {
    this.socket = new WebSocket(url);

    this.socket.onopen = () => {
      console.log('✅ WebSocket connected:', url);
    };

    this.socket.onclose = () => {
      console.log('❌ WebSocket disconnected');
    };

    this.socket.onerror = (err) => {
      console.error('⚠️ WebSocket error:', err);
    };
  }

  onMessage(callback: (data: any) => void) {
    this.socket.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        callback(msg);
      } catch (e) {
        console.error('Invalid WS message:', event.data);
      }
    };
  }

  sendMessage(message: any) {
    this.socket.send(JSON.stringify(message));
  }
}
