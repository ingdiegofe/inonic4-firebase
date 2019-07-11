import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { TaskI } from '../entity/task.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosCollection: AngularFirestoreCollection<TaskI>;
  private todo: Observable<TaskI[]>;
  constructor(private db: AngularFirestore) {
    this.getTodos();
  }

  ///////////////////////////

  getTodos() {// RethinkDB
    this.todosCollection = this.db.collection<TaskI>('todos');
    return this.todo = this.todosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(obj => {
          const data = obj.payload.doc.data();
          const id = obj.payload.doc.id;
          return { id, ...data };
        })
      })
    );
  }

  getTodo(id: string) {
    return this.todosCollection.doc<TaskI>(id).valueChanges();
  }

  updateTodo(todo: TaskI, id: string) {
    return this.todosCollection.doc(id).update(todo);
  }

  addTodo(todo: TaskI) {
    return this.todosCollection.add(todo);
  }

  removeTodo(id: string) {
    return this.todosCollection.doc(id).delete();
  }
}
