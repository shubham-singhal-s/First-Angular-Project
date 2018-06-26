import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { HomeComponent } from './home/home.component';
import { Child1Component } from './child1/child1.component';
import { MainchildComponent } from './mainchild/mainchild.component';
import { ApiexComponent } from './apiex/apiex.component';
import { Api2Component } from './api2/api2.component';
import { LoaderComponent } from './loader/loader.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {TempComponent} from './temp/temp.component';
import {NgxTableComponent} from './ngx-table/ngx-table.component';

export const AppRoutes: Routes = [
	{
		path: '', component: TempComponent, canActivate: [AuthGuard],
		children: [
			{ path: 'table', component: Child1Component },
			{ path: 'imdb', component: ApiexComponent },
			{ path: 'home', component: HomeComponent },
			{ path: 'api2', component: Api2Component },
			{ path: 'graphs', component: MainchildComponent },
			{ path: 'loader/:id', component: LoaderComponent },
			{ path: 'home', component: HomeComponent },
			{ path: 'ngx', component: NgxTableComponent },
			{ path: '', component: HomeComponent }
		]
	},
	{ path: 'login', component: LoginComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);