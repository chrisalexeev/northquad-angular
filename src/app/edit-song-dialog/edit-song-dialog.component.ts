import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SongListService } from '../song-list.service';
import { Song } from '../songs';

interface DialogData {
  song: Song
}

@Component({
  selector: 'app-edit-song-dialog',
  templateUrl: './edit-song-dialog.component.html',
  styleUrls: ['./edit-song-dialog.component.css'],
})
export class EditSongDialogComponent {
  song: Song = Object.create(this.data.song);

  constructor(
    public dialogRef: MatDialogRef<EditSongDialogComponent>,
    private songListService: SongListService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveSong(): void {
    this.songListService.editSongById(this.song)
    this.dialogRef.close();
  }
}
