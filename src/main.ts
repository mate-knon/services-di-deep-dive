import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

// Provide services - not so efficient
// bootstrapApplication(AppComponent, {
//   providers: [TasksService]
// }).catch((err) => console.error(err));
