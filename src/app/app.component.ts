import { Component, OnInit, VERSION } from '@angular/core';
import { of, from } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  name = 'Angular ' + VERSION.major;

  ngOnInit(){
    of('String 1', 'String 2', 'String 3').subscribe((item) => console.log(item));

    from(['String 1', 'String 2', 'String 3']).pipe(
      tap(item => console.log(item))
    )   
    .subscribe({
      next: (item) => console.log(`string emitted ${item}`),
      error: (err) => console.log(err),
      complete: () => console.log('complete')
    });

    of('String 1', 'string 2', 'string 3').subscribe({
      next: (item) => console.log(`string emitted using from ${item}`),
      error: (err) => console.log(`an error occurred ${err}`),
      complete: () => console.log('it completed')
    });

    of(2, 4, 6).pipe(
      map(item => item * 2),
      tap(item => console.log(item)),
      take(2)
    ).subscribe(item => console.log(item));
  }
}
