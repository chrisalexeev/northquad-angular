import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SongListService } from '../song-list.service';
import { Song } from '../songs';

@Component({
  selector: 'app-add-song-dialog',
  templateUrl: './add-song-dialog.component.html',
  styleUrls: ['./add-song-dialog.component.css'],
})
export class AddSongDialogComponent {
  song: Song;

  constructor(
    public dialogRef: MatDialogRef<AddSongDialogComponent>,
    private songListService: SongListService
  ) {
    this.song = {
      title: "",
      id: -1
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addSong(): void {
    this.songListService.addSong(this.song)
    this.dialogRef.close();
  }
}
