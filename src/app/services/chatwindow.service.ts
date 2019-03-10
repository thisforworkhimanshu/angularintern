import { Injectable} from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatwindowService {

  chatUserListA: any = [{'name': 'himanshu', 'id': 1, 'ts': 150430116041},
  {'name': 'bhavik', 'id': 2, 'ts': 150430116042}, {'name': 'milan', 'id': 3, 'ts': 150430116043}
  , {'name': 'dhaval', 'id': 4, 'ts': 150430116044}, {'name': 'sagar', 'id': 5, 'ts': 150430116045}
  , {'name': 'jay', 'id': 14, 'ts': 150430116046}, {'name': 'nitin', 'id': 6, 'ts': 150430116047}
  , {'name': 'kartik', 'id': 7, 'ts': 150430116048}, {'name': 'arjun', 'id': 8, 'ts': 150430116049}
  , {'name': 'nijen', 'id': 9, 'ts': 150430116050}, {'name': 'sahil', 'id': 10, 'ts': 150430116051}
  , {'name': 'krupal', 'id': 11, 'ts': 150430116052}];
  chatUserListB: any = [{'name': 'monik', 'id': 123, 'ts': Date.now()}];

  /* set to true when scroll to top and performs getting chat message. */
  public startGettingMessageOnScrollToTop = new BehaviorSubject(false);
  currentStartGettingMessageOnScrollToTop = this.startGettingMessageOnScrollToTop.asObservable();

  /* Stores types chat message */
  private subject = new Subject<any>();

  public dataSourceChatList = <BehaviorSubject<[]>>new BehaviorSubject([]);

  constructor() { }

  setChatUserList(navlink: any) {
    if (navlink === 'history') {
      this.dataSourceChatList.next(Object.assign([], this.chatUserListB));
    } else {
      this.dataSourceChatList.next(Object.assign([], this.chatUserListA));
    }
  }

  get getchatUserList() {
    return this.dataSourceChatList.asObservable();
  }

  sendChatMessage(message: string) {
    this.subject.next(message);
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  setStartGettingMessageOnScrollToTop(startGettingMessageOnScrollToTop: any) {
    this.startGettingMessageOnScrollToTop.next(startGettingMessageOnScrollToTop);
  }

  returnUserObject(navlink: string, userid: any): any {
    let userObj: any;
    if (navlink === 'history') {
      this.chatUserListB.forEach(element => {
        if (element.id === userid) {
          userObj = element;
        }
      });
    } else {
      this.chatUserListA.forEach(element => {
        if (element.id === userid) {
          userObj = element;
        }
      });
    }
    return userObj;
  }
}
