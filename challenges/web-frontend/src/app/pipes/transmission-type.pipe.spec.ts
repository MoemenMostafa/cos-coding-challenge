import { TransmissionTypePipe } from './transmission-type.pipe';

describe('TransmissionTypePipe', () => {
  const pipe = new TransmissionTypePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('Should return result Gasoline', () => {
    const result = pipe.transform(0);
    expect(result).toEqual('Manual');
  });
  it('Should return result Diesel', () => {
    const result = pipe.transform(1);
    expect(result).toEqual('Automatic');
  });
  it('Should return result Unknown', () => {
    const result = pipe.transform(randomInteger(2, 10));
    expect(result).toEqual('Unknown');
  });
});

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}