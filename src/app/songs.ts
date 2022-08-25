export interface Song {
  id: number;
  title: string;
  artist?: string;
  album?: string;
}

export const songList = [
  { id: 0, title: 'Danger Zone', artist: 'Kenny Loggins', album: 'Top Gun' },
  { id: 1, title: "Can't Take My Eyes off You", artist: 'Frankie Valli' },
];
