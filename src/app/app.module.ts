import { Navlinkguard } from './routeguard/navlinkguard.guard';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

/* Angular Material Imports */
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { LayoutModule } from '@angular/cdk/layout';

/* Infinite Scroll Module */
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

/* Emoji Mart */
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';

/* Components */
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilePictureDialogComponent } from './profile-picture-dialog/profile-picture-dialog.component';
import { ConversationInfoDialogComponent } from './conversation-info-dialog/conversation-info-dialog.component';
import { CallDialogComponent } from './call-dialog/call-dialog.component';
import { ChatUserListComponent } from './main-content/chat-user-list/chat-user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatWindowComponent } from './main-content/chat-window/chat-window.component';
import { UserInfoComponent } from './main-content/chat-window/user-info/user-info.component';
import { ChatThreadComponent } from './main-content/chat-window/chat-thread/chat-thread.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { WelcometextComponent } from './welcometext/welcometext.component';

/* Services */
import { ChatwindowService } from './services/chatwindow.service';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavigationComponent,
    MainContentComponent,
    LogoutDialogComponent,
    ProfileComponent,
    ProfilePictureDialogComponent,
    ChatUserListComponent,
    ChatWindowComponent,
    UserInfoComponent,
    ChatThreadComponent,
    ConversationInfoDialogComponent,
    CallDialogComponent,
    LoginComponent,
    ForgotPasswordComponent,
    WelcometextComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    ScrollDispatchModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    // Material
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    NgScrollbarModule,
    FormsModule,
    FlexLayoutModule,
    PickerModule,
    EmojiModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    // Scroll Module
    InfiniteScrollModule
  ],
  providers: [ChatwindowService, Navlinkguard],
  bootstrap: [AppComponent],
  entryComponents: [
    LogoutDialogComponent,
    ProfilePictureDialogComponent,
    ConversationInfoDialogComponent,
    CallDialogComponent
  ]
})
export class AppModule { }
