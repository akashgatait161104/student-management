import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Reports } from './pages/reports/reports';
import { Login } from './authentication/login/login';
import { ForgotPassword } from './authentication/forgot-password/forgot-password';
import { ResetPassword } from './authentication/reset-password/reset-password';
import { Home } from './pages/home/home';

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'forgot-password', component: ForgotPassword },
    { path: 'reset-password', component: ResetPassword },

    {
        path: '', component: MainLayout, children: [
            { path: '', redirectTo: 'app-home', pathMatch: 'full' },
            { path: 'app-home', component: Home },
            { path: 'app-dashboard', component: Dashboard },
            { path: 'app-about', component: About },
            { path: 'contact', component: Contact },
            { path: 'reports', component: Reports }
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];