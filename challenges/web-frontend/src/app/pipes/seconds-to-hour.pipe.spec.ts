import { SecondsToHourPipe } from './seconds-to-hour.pipe';

describe('SecondsToHourPipe', () => {
  // 3750
  const pipe = new SecondsToHourPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('Should return 0h:00m:00s string for input (0)', () => {
    const time = pipe.transform(0);
    expect(time).toEqual('0h:00m:00s');
  });
  it('Should return 1h:02m:30s string for input (3750)', () => {
    const time = pipe.transform(3750);
    expect(time).toEqual('1h:02m:30s');
  });
  it('Should return 1h:02m:05s string for input (3725)', () => {
    const time = pipe.transform(3725);
    expect(time).toEqual('1h:02m:05s');
  });
  it('Should return 1h:10m:05s string for input (4205)', () => {
    const time = pipe.transform(4205);
    expect(time).toEqual('1h:10m:05s');
  });
  it('Should return 10h:01m:00s string for input (36060)', () => {
    const time = pipe.transform(36060);
    expect(time).toEqual('10h:01m:00s');
  });
  it('Should return 0h:00m:59s string for input (59.6)', () => {
    const time = pipe.transform(59.6);
    expect(time).toEqual('0h:00m:59s');
  });
  it('Should return 1h:00m:00s string for input (4600)', () => {
    const time = pipe.transform(3600);
    expect(time).toEqual('1h:00m:00s');
  });
});
