import { asNativeElements, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestA';

Tab = [{name: "a2", qte: 2},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4}, {name: "d3", qte: 0}, {name: "d3", qte: 100},{name: "a2", qte: 4},{name: "b2", qte: 13}, {name: "c1", qte: 2},{name: "b2", qte: 4}, {name: "d3", qte: 2}, {name: "uniq", qte: 4}, {name: "d3", qte: 100},     ]
Tabresult: any;

timeindex: any = 0;
timefilter: any = 0;
timereduce: any = 0;

enregistrements: any;

  ngOnInit(){
  
    this.enregistrements = this.Tab.length

  }



  Methodindex(){

    let start = performance.now();

    let Tabaggregatindex: { name: string; qte: number; }[] = [] ;
    this.Tab.forEach(element => {
      let numeroindex: number = Tabaggregatindex.findIndex(element2 => element2.name === element.name )
      
      if (numeroindex === -1){
      Tabaggregatindex.push({name: element.name, qte: element.qte})
      }
      else{
        Tabaggregatindex[numeroindex].qte += element.qte
      }
      })

      this.Tabresult = Tabaggregatindex;

   this.timeindex = performance.now() - start;
  }

  MethodFilter(){

    let start = performance.now();

    let Tabaggregatfilter: { name: string; qte: number; }[] = [] ;

    function Sum(array: any[]): number{
  
      let somme = 0;
      array.forEach(element => {
      
      somme += element.qte})
      return somme
    
    }
    this.Tab.forEach((element, index, array) => {
      Tabaggregatfilter.push(
    
        {
          name: element.name, 
          qte: Sum(array.filter(element2 => element2.name === element.name ))
    
        }
      )
    
    })
    
    Tabaggregatfilter =Tabaggregatfilter.filter((value, index, self) =>
      index === self.findIndex((t) => (
        t.name === value.name && t.qte === value.qte
      ))
    )

    this.Tabresult = Tabaggregatfilter;

    this.timefilter = performance.now() - start;
  }

  MethodReduce(){
    let start = performance.now();

    let Tabaggregatreduce: { name: string; qte: number; }[] = []

    const aggregated = this.Tab.reduce(
      (accumulator, currentValue) => {
        if (currentValue.name in accumulator) {
          accumulator[currentValue.name] +=
            currentValue.qte
        } else {
          accumulator[currentValue.name] =
            currentValue.qte
        }
        return accumulator
      },
      {} as Record<string, number>
    )
    
    console.log(aggregated)
    Tabaggregatreduce= Object.entries(
      aggregated
    ).map(([name, qte]) => ({name, qte}))

    this.Tabresult = Tabaggregatreduce;
 this.timereduce = performance.now() - start;
  
  }

  resize(){

this.Tab = this.Tab.concat(this.Tab);


    this.enregistrements = this.Tab.length 
  }

  sorting()
{
  this.Tab = this.Tab.sort((a,b)=> a.name.localeCompare(b.name))
}
}
