import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MessageServiceService {

  private subject = new Subject<any>();

  constructor() { }

  sendMessage(newId: string, newHash: string) {
    this.subject.next({id: newId, text: newHash})
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
