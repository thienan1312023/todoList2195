import { Injectable } from '@angular/core';
import {AngularFireDatabaseModule, AngularFireList, AngularFireDatabase} from 'angularfire2/database';
@Injectable()
export class TodoService {
  toDoList: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }
  getToDoList(){
    this.toDoList = this.firebasedb.list('titles');
    return this.toDoList;
  }
  addTitle(title: string){
    this.toDoList.push({
        title: title,
        isChecked: false
    });
  }
  checkOrUncheckTitle($key: string, flag: boolean){
    this.toDoList.update($key, {isChecked: flag});
  }

  removeTitle($key: string){
    this.toDoList.remove($key);
  }

  updateTitle($key: string, updateTitle: string){
    this.toDoList.update($key, updateTitle);
  }
}
