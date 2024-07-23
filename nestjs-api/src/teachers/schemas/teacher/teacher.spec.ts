import { Teacher } from './teacher.schema';

describe('Teacher', () => {
  it('should be defined', () => {
    expect(new Teacher()).toBeDefined();
  });
});
