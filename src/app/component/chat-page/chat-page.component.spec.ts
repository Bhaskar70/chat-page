import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPageComponent } from './chat-page.component';
import { ChatService } from '../../services/chat-service/chat.service';
import { AuthService } from '../../services/auth-service/auth.service';
import { HttpClientModule } from '@angular/common/http';

describe('ChatPageComponent', () => {
  let component: ChatPageComponent;
  let fixture: ComponentFixture<ChatPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatPageComponent,HttpClientModule],
      providers:[ChatService , AuthService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
