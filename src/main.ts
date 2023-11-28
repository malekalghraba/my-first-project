import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { FirstModule } from './first/first.module';


platformBrowserDynamic().bootstrapModule(FirstModule)
  .catch(err => console.error(err));
