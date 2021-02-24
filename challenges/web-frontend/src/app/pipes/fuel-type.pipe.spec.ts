import { FuelTypePipe } from './fuel-type.pipe';

describe('FuelTypePipe', () => {
  const pipe = new FuelTypePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('Should return result Gasoline', () => {
    const result = pipe.transform(0);
    expect(result).toEqual('Gasoline');
  });
  it('Should return result Diesel', () => {
    const result = pipe.transform(1);
    expect(result).toEqual('Diesel');
  });
  it('Should return result Unknown', () => {
    const result = pipe.transform(randomInteger(2, 10));
    expect(result).toEqual('Unknown');
  });
});

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
