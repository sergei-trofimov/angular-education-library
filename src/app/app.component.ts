import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public users!: Observable<{name: string, personalInfo: string}[]>;
  public user!: { name: string, personalInfo: string, userId: string };

  constructor(private fire: AngularFirestore) {
    this.users = fire.collection<{name: string, personalInfo: string}>('users').valueChanges();
  }

  ngOnInit() {
    // this.postUser();
    this.getAll();
    // this.updateUser();
    // this.removeUser();
    setTimeout(() => {
      this.removeUser(this.user.userId);
    }, 3000);
  }

  removeUser(id: string) {
    this.fire.collection('users').doc(id).delete().then((res) => console.log('res', res));
  }

  getAll() {
    // this.fire
    //   .collection('users')
    //   .snapshotChanges()
    //   .subscribe((response) => {
    //     console.log('reponse ', response);
    //     console.log(response[0].payload.doc.id)
    //     const a: {name: string, personalInfo: string}  = response[0].payload.doc.data() as {name: string, personalInfo: string};
    //     // console.log(a);
    //   });


    this.fire
      .collection('users')
      .valueChanges({ idField: 'userId' })
      .subscribe((resp) => {
        console.log('resp', resp);
        this.user = resp[0] as { name: string, personalInfo: string, userId: string };
      });
  }

  updateUser() {
    return this.fire.collection('users').doc('J3xgclPHQPLnVmQz2ifk').set({ name: 'Alex' }).then(console.log);
  }

  getUsers() {
      this.fire.collection('users').snapshotChanges()
      .subscribe(snapshots => {
        console.log('snapshot', snapshots);
      });
  }

  postUser() {
    this.fire.collection('users').add({ name: 'Max', personalInfo: 'some info'});
  }
}
