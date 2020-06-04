import { Region } from '@p-final/shared/data';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  
  public region$ = new BehaviorSubject<Region>({
    id: "",
    iso2code: "",
    code: "",
    name: "",
    value: ""
  });

  constructor() { }
}
