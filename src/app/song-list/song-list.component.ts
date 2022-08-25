import { Component } from '@angular/core';
import { SongListService } from '../song-list.service';
import { MatDialog } from '@angular/material/dialog';
import { Song } from '../songs';
import { AddSongDialogComponent } from '../add-song-dialog/add-song-dialog.component';
import { EditSongDialogComponent } from '../edit-song-dialog/edit-song-dialog.component';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css'],
})
export class SongListComponent {
  songs: Song[] = this.songListService.getSongs();

  constructor(
    public dialog: MatDialog,
    private songListService: SongListService
  ) {}

  openDialog(): void {
    // const dialogRef =
    this.dialog.open(AddSongDialogComponent, {
      width: '250px'
    });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(result);
    // });
  }

  openSongDetails(song: Song) {
    this.dialog.open(EditSongDialogComponent, {
      width: '250px',
      data: { song: song },
    });
  }

  deleteSongById(songId: number) {
    this.songs = this.songListService.deleteSongById(songId);
  }
}
