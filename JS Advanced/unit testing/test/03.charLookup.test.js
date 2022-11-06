let {assert} = require("chai")
let {lookupChar} = require("../Unit Testing and Error Handling - Exercise/03.charLookup")
/*
o	If the first parameter is NOT a string or the second parameter is NOT a number - return undefined.
o	If both parameters are of the correct type but the value of the index is incorrect (bigger than or equal to the string length or a negative number) - return "Incorrect index". 
o	If both parameters have correct types and values - return the character at the specified index in the string.

*/
describe("All my tests", ()=>{
    describe("incorrect 'string' values", ()=>{
        it('test expects "undefined" with number argument',()=>{
            assert.equal(lookupChar(1, 1), undefined)
        })
        
        it('test expects "undefined" with array argument',()=>{
            assert.equal(lookupChar([], 1), undefined)
        })
        it('test expects "undefined" with object argument',()=>{
            assert.equal(lookupChar({}, 1), undefined)
        })
        it('test expects "undefined" with boolean argument',()=>{
            assert.equal(lookupChar(true, 1), undefined)
        })
    })
    describe('incorect "index" value', ()=>{
        it('test expects "undefined" with string', ()=>{
            assert.equal(lookupChar('ab', 'ab'), undefined)
        })
        it('test expects "undefined" with array argument', ()=>{
            assert.equal(lookupChar('ab', []), undefined)
        })
        it('test expects "undefined" with object', ()=>{
            assert.equal(lookupChar('ab', {}), undefined)
        })
        it('test expects "undefined" with decimal numbers', ()=>{
            assert.equal(lookupChar('ab', 0.99), undefined)
        })
    })

    describe('both parameters are of the correct type but the value of the index is incorrect (bigger than or equal to the string length or a negative number)', ()=>{
        it(' test expects "Incorrect index" with bigget index', ()=>{
            assert.equal(lookupChar('a', 2), "Incorrect index")
        })
        it(' test expects "Incorrect index" with equal index', ()=>{
            assert.equal(lookupChar('ab', 2), "Incorrect index")
        })
        it(' test expects "Incorrect index" with negative index', ()=>{
            assert.equal(lookupChar('ab', -1), "Incorrect index")
        })
    })
    describe('both correct parameters', ()=>{
        it('test expect (a) from ("ab") at zero index', ()=>{
            assert.equal(lookupChar('ab',0), "a")
        })
        it('test expects (b) from ("ab") at last index', ()=>{
            assert.equal(lookupChar('ab',1), "b")
        })
    })
})
