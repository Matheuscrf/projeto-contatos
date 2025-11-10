import { Injectable } from '@angular/core';
import { initializeApp, FirebaseApp, getApps } from 'firebase/app';
import { getDatabase, ref, push, get, child } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBZEvjox9iFRUsS5PdzWk3d5jtlBS3va5E',
  authDomain: 'projeto-contatos-b3cad.firebaseapp.com',
  databaseURL: 'https://projeto-contatos-b3cad-default-rtdb.firebaseio.com',
  projectId: 'projeto-contatos-b3cad',
  storageBucket: 'projeto-contatos-b3cad.firebasestorage.app',
  messagingSenderId: '959262949889',
  appId: '1:959262949889:web:107e9c761e7558700b3600',
  measurementId: 'G-E9EDKXWR3K',
};

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  private app: FirebaseApp;

  constructor() {
    // inicializa somente uma vez
    if (!getApps().length) {
      this.app = initializeApp(firebaseConfig);
    } else {
      this.app = getApps()[0];
    }
  }

  async addContact(contact: { name: string; email: string }) {
    const db = getDatabase(this.app);
    const contactsRef = ref(db, 'contacts');
    const result = await push(contactsRef, contact);
    return result.key;
  }

  async listContacts(): Promise<any[]> {
    const db = getDatabase(this.app);
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, `contacts`));
    const items: any[] = [];
    if (snapshot.exists()) {
      const data = snapshot.val();
      for (const key of Object.keys(data)) {
        items.push({ id: key, ...data[key] });
      }
    }
    return items;
  }
}
