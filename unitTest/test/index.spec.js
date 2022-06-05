
const {emailValidation, pwdValidation} = require('../services/index-service');
describe('email validation', ()=>{

    it('valid email',()=>{
        expect(emailValidation("foulen@gmail.com")).toBeTruthy()
    })
    it('invalid email : email without @',()=>{
        expect(emailValidation("foulengmail.com")).toBeFalsy()
    })
    it('invalid email : email without identifier ',()=>{
        expect(emailValidation("@gmail.com")).toBeFalsy()
    })
    it('invalid email : email without domain name',()=>{
        expect(emailValidation("foulen@")).toBeFalsy()
    })

})
describe('password validation',()=>{
    it('valid password : Minimum 5 characters, at least one letter and one number', function () {
        expect(pwdValidation('azerty2')).toBeTruthy()

    });
    it('invalid password : password with less than 5 characters', function () {
        expect(pwdValidation('aze')).toBeFalsy()

    });
    it('invalid password : password with no numbers', function () {
        expect(pwdValidation('azerty')).toBeFalsy()

    });
    it('invalid password : password with no letters', function () {
        expect(pwdValidation('123456')).toBeFalsy()

    });
})
