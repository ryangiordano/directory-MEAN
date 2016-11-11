import { Routes, RouterModule} from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { EmployeeComponent} from './employee/employee.component';
export const RouterConfig: Routes = [
  {
    path: 'auth',
    component:AuthComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'employee/add',
    component: EmployeeComponent
  },
  {
    path:'',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]
