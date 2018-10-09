
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDashboardComponent } from './task-dashboard.component';

describe('TaskDashboardComponent', () => {
  let component: TaskDashboardComponent;
  let fixture: ComponentFixture<TaskDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
