import { Injectable } from '@angular/core';
import { EncryptionService } from './encryption.service';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  constructor(private cript: EncryptionService) {}

  public setItem = (key: string, value: any) => {
    const cKey = this.cript.encrypt(key);
    const cValue = this.cript.encrypt(value);
    localStorage.setItem(cKey, cValue);
  };

  public getItem = (key: string) => {
    const cKey = this.cript.encrypt(key);
    const value = localStorage.getItem(cKey);
    return this.cript.decript(value || '');
  };

  public removeItem(key: string) {
    const cKey = this.cript.encrypt(key);
    localStorage.removeItem(cKey);
  }
}
