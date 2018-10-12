import { Component } from '@angular/core';
import { LoadersCSS } from 'projects/ngx-loaders-css/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loader: LoadersCSS = 'pacman';
  loaders = loaders;

  constructor() {
    const length = loaders.length;
    setInterval(() => {
      const random = Math.floor(Math.random() * length);
      this.loader = loaders[random];
    }, 2000);
  }
}

const loaders: LoadersCSS[] = [
  'ball-pulse',
  'ball-grid-pulse',
  'ball-clip-rotate',
  'ball-clip-rotate-pulse',
  'square-spin',
  'ball-clip-rotate-multiple',
  'ball-pulse-rise',
  'ball-rotate',
  'cube-transition',
  'ball-zig-zag',
  'ball-zig-zag-deflect',
  'ball-triangle-path',
  'ball-scale',
  'line-scale',
  'line-scale-party',
  'ball-scale-multiple',
  'ball-pulse-sync',
  'ball-beat',
  'line-scale-pulse-out',
  'line-scale-pulse-out-rapid',
  'ball-scale-ripple',
  'ball-scale-ripple-multiple',
  'ball-spin-fade-loader',
  'line-spin-fade-loader',
  'triangle-skew-spin',
  'pacman',
  'ball-grid-beat',
  'semi-circle-spin',
];
