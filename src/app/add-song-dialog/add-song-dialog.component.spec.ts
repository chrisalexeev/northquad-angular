import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSongDialogComponent } from './add-song-dialog.component';

describe('SongDetailsDialogComponent', () => {
  let component: AddSongDialogComponent;
  let fixture: ComponentFixture<AddSongDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSongDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSongDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
