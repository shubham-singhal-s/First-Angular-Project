import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule,ElementRef } from '@angular/core';
import { JsonService } from './json.service';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { Child1Component } from './child1/child1.component';
import { MainchildComponent } from './mainchild/mainchild.component';
import { ApiexComponent } from './apiex/apiex.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ROUTING } from './app.routing';
import { Api2Component } from './api2/api2.component';
import {MatButtonModule,MatNativeDateModule , MatDatepickerModule,MatProgressSpinnerModule,MatMenuModule ,MatSnackBarModule, MatCheckboxModule, MatFormFieldModule, MatExpansionModule, MatInputModule,MatListModule, MatToolbarModule, MatIconModule, MatSidenavModule } from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { timeout } from 'rxjs/operators';
import { LoaderComponent } from './loader/loader.component';
import {ChatService} from './chat.service';
import {LoginService} from './login.service';
import { StorageServiceModule } from 'angular-webstorage-service';
import { DexDirective } from './dex.directive';
import { LoginComponent } from './login/login.component';
import { TempComponent } from './temp/temp.component';
import { AuthGuard } from './auth.guard';
import { DataTablesModule } from 'angular-datatables';
import { NgxTableComponent } from './ngx-table/ngx-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
	declarations: [
		AppComponent,
		ChildComponent,
		FilterPipe,
		Child1Component,
		MainchildComponent,
		ApiexComponent,
		HomeComponent,
		Api2Component,
		LoaderComponent,
		DexDirective,
		LoginComponent,
		TempComponent,
		NgxTableComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ROUTING,
		NgxDatatableModule,
		StorageServiceModule,
		HttpClientModule,
		MatFormFieldModule,
		NoopAnimationsModule,
		MatSidenavModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatIconModule,
		MatExpansionModule,
		MatToolbarModule,
		MatSnackBarModule,
		MatProgressSpinnerModule,
		MatListModule,
		MatInputModule,
		MatMenuModule,
		DataTablesModule,
		MatButtonModule,
		MatCheckboxModule
	],
	providers: [
		JsonService,
		ChatService,
		LoginService,
		AuthGuard
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
