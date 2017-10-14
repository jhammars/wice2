import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// AngularFire stuff
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Environment config
import { Environment } from '../environment';

// Here we are importing components.
// These are components that will be loaded regardless of route entry?
// The .component extension is commonly omitted
// Avoid importing several components per module?
// Import several modules with child components instead?
import { MyApp } from './app.component';

// ToDo: Create a module file for this component and import the .module instead.
import { HomePageModule } from '../pages/home/home.module';

// Here we are importing a module.
import { LoginPageModule } from '../pages/login/login.module';

// import { LoginPageModule } from '../pages/login/login';

@NgModule({
  // Declarations tells NgModule which components to load?
  // Declarations are only useable in the current module (app.module covers all modules though).
  declarations: [
    MyApp,
    // HomePage
  ],
  // Imports tells NgModule which modules to load.
  // Importing modules with it's own declarations will load their respective components.
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(Environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,    
    LoginPageModule,
    HomePageModule
  ],
  // Here we are bootstrapping something in the ionic-angular library. Learn more about this..
  bootstrap: [IonicApp],
  // Entry components are used by Ionic to ensure the offline compiler they should be included
  entryComponents: [
    MyApp,
    // HomePage,
  ],
  // The list of providers declares global services.
  // These are all ClassNames? with the @Injectable decorator?
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
