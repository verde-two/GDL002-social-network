// Se llama a la funcion
import {chekIn} from '../src/main.js';

describe('checkIn',() => {
    it('Deberia de poder iniciar secion con email: test@test.la y password: abc123', () =>
        return chekIn('').then((data) =>{
        expect(data).tobe('test@test.la y password: abc123');
        })
    })
 })

 // __tests__/index.test.js
describe('initial', () => {
    test('first tests', () => {
      expect(true).toBe(true)
    })
  })