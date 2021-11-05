import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'loaders-css',
  template: `
    <div class="loader-container" [style.background-color]="bgColor">
      <div class="loader-inner" style="transform-origin: center;" [style.transform]="$scale">
        <div [ngClass]="$loader">
          <div #spinner *ngFor="let c of children"></div>
        </div>
      </div>
    </div>
  `,
  styleUrls: [
    '../../../../node_modules/loaders.css/loaders.min.css',
    './ngx-loaders-css.component.css',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxLoadersCssComponent {
  @ViewChildren('spinner') spinners?: QueryList<ElementRef>;

  @Input() bgColor = 'transparent';

  @Input() color = '#FFFFFF';

  $loader: LoadersCSS = 'ball-pulse';

  children = Array.from({ length: 3 });

  @Input()
  set loader(loader: LoadersCSS) {
    if (LoadersConfig[loader]) {
      this.$loader = loader;
      const config = LoadersConfig[this.$loader];
      this.children = Array.from({ length: config.children });
      this.updateSpinnersColor(config);
    }
  }

  $scale = getScale(1);

  @Input()
  set scale(scale: number) {
    this.$scale = getScale(scale);
  }

  private updateSpinnersColor(config: LoadersCSSConfig) {
    this.spinners
      ? this.spinners.forEach(
          (elm) => (elm.nativeElement.style.backgroundColor = config.hasBg ? this.color : ''),
        )
      : setTimeout(() => this.updateSpinnersColor(config), 100);
  }
}

export type LoadersCSS =
  | 'ball-pulse'
  | 'ball-grid-pulse'
  | 'ball-clip-rotate'
  | 'ball-clip-rotate-pulse'
  | 'square-spin'
  | 'ball-clip-rotate-multiple'
  | 'ball-pulse-rise'
  | 'ball-rotate'
  | 'cube-transition'
  | 'ball-zig-zag'
  | 'ball-zig-zag-deflect'
  | 'ball-triangle-path'
  | 'ball-scale'
  | 'line-scale'
  | 'line-scale-party'
  | 'ball-scale-multiple'
  | 'ball-pulse-sync'
  | 'ball-beat'
  | 'line-scale-pulse-out'
  | 'line-scale-pulse-out-rapid'
  | 'ball-scale-ripple'
  | 'ball-scale-ripple-multiple'
  | 'ball-spin-fade-loader'
  | 'line-spin-fade-loader'
  | 'triangle-skew-spin'
  | 'pacman'
  | 'ball-grid-beat'
  | 'semi-circle-spin';

function getScale(scale: number) {
  return `scale(${scale}, ${scale})`;
}
type LoadersCSSConfig = { children: number; hasBg: boolean };

const LoadersConfig: { [k in LoadersCSS]: LoadersCSSConfig } = {
  'ball-pulse': { children: 3, hasBg: true },
  'ball-grid-pulse': { children: 9, hasBg: true },
  'ball-clip-rotate': { children: 1, hasBg: false },
  'ball-clip-rotate-pulse': { children: 2, hasBg: false },
  'square-spin': { children: 1, hasBg: true },
  'ball-clip-rotate-multiple': { children: 2, hasBg: false },
  'ball-pulse-rise': { children: 5, hasBg: true },
  'ball-rotate': { children: 1, hasBg: false },
  'cube-transition': { children: 2, hasBg: true },
  'ball-zig-zag': { children: 2, hasBg: true },
  'ball-zig-zag-deflect': { children: 2, hasBg: true },
  'ball-triangle-path': { children: 3, hasBg: false },
  'ball-scale': { children: 1, hasBg: true },
  'line-scale': { children: 5, hasBg: true },
  'line-scale-party': { children: 4, hasBg: true },
  'ball-scale-multiple': { children: 3, hasBg: true },
  'ball-pulse-sync': { children: 3, hasBg: true },
  'ball-beat': { children: 3, hasBg: true },
  'line-scale-pulse-out': { children: 5, hasBg: true },
  'line-scale-pulse-out-rapid': { children: 5, hasBg: true },
  'ball-scale-ripple': { children: 1, hasBg: false },
  'ball-scale-ripple-multiple': { children: 3, hasBg: false },
  'ball-spin-fade-loader': { children: 8, hasBg: true },
  'line-spin-fade-loader': { children: 8, hasBg: true },
  'triangle-skew-spin': { children: 1, hasBg: false },
  pacman: { children: 5, hasBg: false },
  'ball-grid-beat': { children: 9, hasBg: true },
  'semi-circle-spin': { children: 1, hasBg: false },
};
