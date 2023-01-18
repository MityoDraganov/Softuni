let {assert} = require("chai")
let {isOddOrEven} = require("../Unit Testing and Error Handling - Exercise/02.evenOrOdd")
describe("all my tests", ()=>{
    describe("test isEvenOrOdd with incorect value", ()=>{
        it("result should be undefined with array argument", ()=>{
            assert.equal(isOddOrEven([]), undefined,)
        })
        it("result should be 'even' with argument with even length", ()=>{
            assert.equal(isOddOrEven('ab'), 'even', "error")
        })
        it("result should be undefined with object argument", ()=>{
            assert.equal(isOddOrEven({name: 'ivan'}), undefined)
        })
        it("result should return undefined with number argument", ()=>{
            assert.equal(isOddOrEven(1), undefined)
        })
        it("result should return undefind with boolean argument", ()=>{
            assert.equal(isOddOrEven(true), undefined)
        })
    })

    describe("test isEvenOrOdd expecting 'even'",()=>{
        it("result should return 'even' with even argument", ()=>{
            assert.equal(isOddOrEven('ab'), 'even')
        })
    })
    describe("test should return 'odd' with odd argument", ()=>{
        it("result should return 'odd' with odd argument", ()=>{
            assert.equal(isOddOrEven('abc'), 'odd')
        })
    })
})
