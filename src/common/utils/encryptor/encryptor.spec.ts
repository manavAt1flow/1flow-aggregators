import { Encryptor } from './encryptor';

describe('Encryptor', () => {
  let encryptor = new Encryptor('aes-192-cbc','@#1@F@L@O#W@@@@APP_+%$#%','24');

  it('should be defined', () => {
    expect(encryptor).toBeDefined();
  });

  it('encypt', () => {
    let result = encryptor.encypt('hello world!');
    console.log(result);
    expect(result).toEqual("0c0182c34c4c359061d4b10e68a59ef7");
  });

  it('decrypt', () => {
    let result = encryptor.decrypt(encryptor.encypt('hello world!'));
    console.log(result);
    expect(result).toEqual('hello world!');
  });

  it('createBase64', () => {
    let result = encryptor.createBase64(encryptor.encypt('hello world!'));
    console.log(result);
    expect(result).toEqual('OzhhRS8VDstRLwk4oQADkPI9YoDsGudeJbMd36gtjOMjBc+byfmtZuGlcMnhrIhL');
  });

  it('decodeBase64', () => {
    let result = encryptor.decodeBase64(encryptor.createBase64('hello world!'));
    console.log(result);
    expect(result).toEqual('hello world!');
  });
});
