import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './modules/home/home.module';
import { ProductsModule } from './modules/products/products.module';
import { OrdersModule } from './modules/orders/orders.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    HomeModule,
    ProductsModule,
    OrdersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
