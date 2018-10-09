import { TaskCountPipe } from './task-count.pipe';

describe('TaskCountPipe', () => {
  it('create an instance', () => {
    const pipe = new TaskCountPipe();
    expect(pipe).toBeTruthy();
  });
});
