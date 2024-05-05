import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  //Subject c est un observable
  public isLoading$ = new Subject<boolean>();

  constructor() { }

  showLoadingSpinner(){
    //si la valeur de is loading est true va faire a appel a cette fct
    this.isLoading$.next(true)
  }

  hideLoadingSpinner(){
    this.isLoading$.next(false)
  }
}
