import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumService } from '../../service/album.service';
import { AlbumComponent } from './album.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AlbumComponent', () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule 
      ],
      declarations: [AlbumComponent],
      providers: [AlbumService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
