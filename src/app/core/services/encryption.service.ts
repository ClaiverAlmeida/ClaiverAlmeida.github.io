import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EncryptionService {
  constructor() {}

  encrypt = (value: any) => {
    const data = JSON.stringify(value);
    // return btoa(value);
    return JSON.stringify(value);
  };

  decript = (value: string) => {
    //const data = atob(value);
    const data = value;
    return data && JSON.parse(data);
  };
}
