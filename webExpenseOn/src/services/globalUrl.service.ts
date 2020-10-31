import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GlobalUrl {
  readonly baseAPIUrl: string = 'http://localhost:5000/v1';
  // readonly baseAPIUrl: string = 'http://tailorit.somee.com/v1';
}
