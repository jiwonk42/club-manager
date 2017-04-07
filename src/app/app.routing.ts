import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { AboutComponent } from './about/about.component';
import { MemberProfileComponent }   from './member-profile/member-profile.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MemberComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'members/:id',
    component: MemberProfileComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
