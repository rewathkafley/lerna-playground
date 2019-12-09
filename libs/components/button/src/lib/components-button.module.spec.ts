import { async, TestBed } from '@angular/core/testing';
import { ComponentsButtonModule } from './components-button.module';

describe('ComponentsButtonModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ComponentsButtonModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ComponentsButtonModule).toBeDefined();
  });
});
