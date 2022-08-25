import { Injectable } from '@angular/core';
import { Song, songList } from './songs';
import { getNextId } from './util';

@Injectable({
  providedIn: 'root',
})
export class SongListService {
  songs: Song[] = songList;

  constructor() {}

  getSongs() {
    return this.songs;
  }

  addSong(song: Song) {
    const newId = getNextId(this.songs);
    this.songs.push({ ...song, id: newId });
  }

  editSongById(song: Song) {
    const songIndex = this.songs.findIndex((s) => {
      return s.id === song.id;
    });
    this.songs[songIndex] = { ...this.songs[songIndex], ...song };
    return this.songs;
  }

  deleteSongById(songId: number) {
    this.songs = this.songs.filter((song) => {
      return song.id !== songId;
    });
    return this.songs;
  }
}
