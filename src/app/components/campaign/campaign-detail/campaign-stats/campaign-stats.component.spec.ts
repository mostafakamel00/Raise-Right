import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignStatsComponent } from './campaign-stats.component';

describe('CampaignStatsComponent', () => {
  let component: CampaignStatsComponent;
  let fixture: ComponentFixture<CampaignStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignStatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampaignStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
