/**
 * Created by SergST on 27.03.2017.
 */

import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


export class Category {
  // Unique Id
  id: string;
  // The title
  title: string;
  // Description
  desc: string;
  // Path to small image
  imageS: string;
  // Path to large image
  imageL: string;
}

@Injectable()
  export class CategoryService {

  // URL to Categories web api
  private categoriesUrl = 'categories';

  // // We keep categories in cache variable
  // private categories: FirebaseListObservable<Category[]> ;

  constructor(private http: Http,
              private af: AngularFire) {
  }

  getCategories(): Observable<Category[]> {
    return this.af.database
      .list(this.categoriesUrl)
      .catch(this.handleError);
  }


  private handleError(error: any): Observable<any> {
    let errMsg = (error.message) ? error.message : error.status ?
      `${error.status} - ${error.statusText}` : 'Server error';
    window.alert(`An error occurred: ${errMsg}`);
    return Observable.throw(errMsg);
  }


  getCategory(id: string) {
    return this.af.database
      .object(this.categoriesUrl + `/${+id - 1}`)
      .catch(this.handleError);
  }
}
