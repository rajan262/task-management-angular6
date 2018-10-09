
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TaskNavComponent } from './task-nav.component';

describe('TaskNavComponent', () => {
  let component: TaskNavComponent;
  let fixture: ComponentFixture<TaskNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [TaskNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
