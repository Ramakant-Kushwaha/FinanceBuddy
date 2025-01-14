import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';

@Injectable({ providedIn: 'root' })
export class endpointService {
  baseUrl: string = environment.baseUrl;

  constructor() {}
}
