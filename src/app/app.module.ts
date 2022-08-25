import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { SongListComponent } from './song-list/song-list.component';
import { AppContainerComponent } from './app-container/app-container.component';
import { AddSongDialogComponent } from './add-song-dialog/add-song-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms';
import { EditSongDialogComponent } from './edit-song-dialog/edit-song-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SongListComponent,
    AppContainerComponent,
    AddSongDialogComponent,
    EditSongDialogComponent,
  ],
  imports: [
    RouterModule.forRoot([{ path: '', component: SongListComponent }]),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
