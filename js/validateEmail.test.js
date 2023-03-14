// №1 просто подключить

describe("describe", function() {
       it('test', function() {
        });
     })

// №2 добавить проверку на длинну строки, строока должна менее содержать меньше 5 символов
let assert = chai.assert;

describe("validateEmail", function() {
    describe('valid string', function(){
      it('not an empty string', function() {
        assert.equal(validateEmail(''), false);
      });
      it('typeof string', function() {
        assert.equal(validateEmail(222), false, 'number error');
        assert.equal(validateEmail(true), false, 'boolean error');
        assert.equal(validateEmail({}), false, 'object error');
      });
      it('not an empty srring', function() {
        assert.equal(validateEmail('     '), false);
      });
    })
    describe('valid data', function(){
      it('Don\'t have the @ or @ the first character', function(){
        assert.isFalse(validateEmail('emailgmail.com'), 'Don\'t have the @');
        assert.isFalse(validateEmail('@emailgmail.com'), '@ the first character')
      })
        // число символов больше 5
      it('the string must contain less than 5 characters', function(){
        // assert.lengthOf(('email@gmail'), 11, 'write less than 5 characters');
         assert.isFalse(validateEmail('emaL'), 'write less than 5 characters');
      })
       // две @
      it('must have only one character', function(){
        assert.equal(validateEmail('email@gmail@.com'), false,'Don\'t have two @');
      })

      // задание  №4
      it('dot written after @', function(){
        assert.equal(validateEmail('e.mail@gmail.com'), true,'dot must be written after @');
      })
      it('dot not written after @', function(){
        assert.equal(validateEmail('e.mail@gmailcom'), false,'dot must be written after @');
      })
      it('dot written before @', function(){
        assert.equal(validateEmail('e.mail.@gmail.com'), false,'dot must be written after @');
      })

    })
  })

  
  
  
 