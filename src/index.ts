import {fromEvent, Subscription} from "rxjs"
import { map } from 'rxjs/operators';

let input = document.getElementById("test");
let source = fromEvent(input, "change");

let subscription: Subscription = source.pipe(
    map((el:any) => el.target.value)
).subscribe((el: any) => console.log(el));

