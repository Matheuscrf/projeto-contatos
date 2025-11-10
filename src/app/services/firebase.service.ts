import { Injectable } from '@angular/core';
import { initializeApp, FirebaseApp, getApps } from 'firebase/app';
import { getDatabase, ref, push, get, child } from 'firebase/database';

/**
 * ATENÇÃO: Substitua o objeto `firebaseConfig` pelas chaves do seu projeto
 * copiadas do console do Firebase.
 */
const firebaseConfig = {
  apiKey: '<YOUR_API_KEY>',
  authDomain: '<YOUR_AUTH_DOMAIN>',
  databaseURL: '<YOUR_DATABASE_URL>',
  projectId: '<YOUR_PROJECT_ID>',
  storageBucket: '<YOUR_STORAGE_BUCKET>',
  messagingSenderId: '<YOUR_MESSAGING_SENDER_ID>',
  appId: '<YOUR_APP_ID>',
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
