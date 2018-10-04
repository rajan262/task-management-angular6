import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject = new Subject<any>();

  constructor() { }

  updateLocalStorage(adminUser: string, logged: string) {
    this.subject.next({
      'adminUser': adminUser,
      'logged': logged
    })
  }

  getLocalStorage(): Observable<any> {
    return this.subject.asObservable();
  }

}
