import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifiedCampaignsComponent } from './notified-campaigns.component';

describe('NotifiedCampaignsComponent', () => {
  let component: NotifiedCampaignsComponent;
  let fixture: ComponentFixture<NotifiedCampaignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotifiedCampaignsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotifiedCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
