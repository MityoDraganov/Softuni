let {assert} = require("chai")
let {mathEnforcer} = require("../Unit Testing and Error Handling - Exercise/04.mathEnforcer")

describe("All my tests", ()=>{

    describe("addFive() tests", ()=>{
        describe("test expect 'undefined' with NaN", ()=>{
            it("string argument", ()=>{
                assert.equal(mathEnforcer.addFive('ab'), undefined)
            })
            it("array argument", ()=>{
                assert.equal(mathEnforcer.addFive([]), undefined)
            })
            it("object argument", ()=>{
                assert.equal(mathEnforcer.addFive({}), undefined)
            })
            it("boolean argument", ()=>{
                assert.equal(mathEnforcer.addFive(true), undefined)
            })
        })
        describe("correct tests", ()=>{
            it("called with five(5)", ()=>{
                assert.equal(mathEnforcer.addFive(5), 10)
            })
            it('floating number', ()=>{
                assert.closeTo(mathEnforcer.addFive(5), 10, 0.01)
            })
            it('negative number', ()=>{
                assert.equal(mathEnforcer.addFive(-5), 0)
            })
        })
    })

    describe("subtractTen() tests", ()=>{
        describe("test expect 'undefined' with NaN", ()=>{
            it("string argument", ()=>{
                assert.equal(mathEnforcer.subtractTen('ab'), undefined)
            })
            it("array argument", ()=>{
                assert.equal(mathEnforcer.subtractTen([]), undefined)
            })
            it("object argument", ()=>{
                assert.equal(mathEnforcer.subtractTen({}), undefined)
            })
            it("boolean argument", ()=>{
                assert.equal(mathEnforcer.subtractTen(true), undefined)
            })
        })

        describe("correct tests",()=> {
            it("called with ten(10)", ()=>{
                assert.equal(mathEnforcer.subtractTen(10), 0)
            })
            it('floating number', ()=>{
                assert.closeTo(mathEnforcer.subtractTen(11), 1, 0.01)
            })
            it('negative number', ()=>{
                assert.equal(mathEnforcer.subtractTen(-1), -11)
            })
        })
    })

    describe("sum() tests", ()=>{
        describe("expected NaN to equal 'undefined' ",()=>{
            describe("first param tests", ()=>{
               it('string argument', ()=>{
                   assert.equal(mathEnforcer.sum('ab', 1), undefined)
               })
               
               it("array argument", ()=>{
                assert.equal(mathEnforcer.sum([], 1), undefined)
               })
               it("object argument", ()=>{
                assert.equal(mathEnforcer.sum({}, 1), undefined)
               })
               it("boolean argument", ()=>{
                assert.equal(mathEnforcer.sum(true, 1), undefined)
               })
            })
            describe("second param tests", ()=>{
                it('string argument', ()=>{
                    assert.equal(mathEnforcer.sum(1, 'ab'), undefined)
                })
                
                it("array argument", ()=>{
                 assert.equal(mathEnforcer.sum(1, []), undefined)
                })
                it("object argument", ()=>{
                 assert.equal(mathEnforcer.sum(1, {}), undefined)
                })
                it("boolean argument", ()=>{
                 assert.equal(mathEnforcer.sum(1, true), undefined)
                })
             })
        })
        })
        describe("correct tests", ()=>{
            it("both arguments right values", ()=>{
                assert.equal(mathEnforcer.sum(1, 1), 2)
            })
            it('floating number', ()=>{
                assert.closeTo(mathEnforcer.sum(5 , 5), 10, 0.01)
            })
            it('negative first param', ()=>{
                assert.equal(mathEnforcer.sum(1, -1), 0)
            })
            it('negative second param', ()=>{
                assert.equal(mathEnforcer.sum(-1, 1), 0)
            })
            it('both negative param', ()=>{
                assert.equal(mathEnforcer.sum(-1, -1), -2)
            })
        })

})