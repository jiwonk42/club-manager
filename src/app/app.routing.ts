import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberComponent } from './member/member.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MemberComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
