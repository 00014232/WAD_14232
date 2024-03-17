import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { KeyModel } from '../models/key';
import { LockModel } from '../models/lock';

@Injectable({
  providedIn: 'root'
})
export class KeystoreService {
  client = inject(HttpClient);
  key = 'https://localhost:7281/api/Key/';
  lock = 'https://localhost:7281/api/Lock/';

  constructor() { }

  getKeys(){
    return this.client.get<KeyModel[]>(this.key);
  }

  getKey(id: number){
    return this.client.get<KeyModel>(this.key + id);
  }

  editKey(id: number, key: KeyModel){
    return this.client.put(this.key + id, key);
  }

  deleteKey(id: number){
    return this.client.delete(this.key + id);
  }

  createKey(key: KeyModel){
    return this.client.post(this.key, key);
  }

  getLocks(){
    return this.client.get<LockModel[]>(this.lock);
  }

  getLock(id: number){
    return this.client.get<LockModel>(this.lock + id);
  }
  
  editLock(id: number, lock: LockModel){
    return this.client.put(this.lock + id, lock);
  }

  deleteLock(id: number){
    return this.client.delete(this.lock + id);
  }

  createLock(lock: LockModel){
    return this.client.post(this.lock, lock);
  }
}
