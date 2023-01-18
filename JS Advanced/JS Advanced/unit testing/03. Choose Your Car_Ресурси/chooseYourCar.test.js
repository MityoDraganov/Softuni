const { assert } = require('chai');
const chooseYourCar = require('../chooseYourCar')

describe("ChooseYourCar Functionallity", function() {
    describe("izberi tip", function() {
        it("If the year is less than 1900 and the year is more than 2022, throw an error", function() {
            assert.throw(() => chooseYourCar.choosingType('car', 'red', 1888), 'Invalid Year!')
            assert.throw(() => chooseYourCar.choosingType('car', 'red', 256), 'Invalid Year!')
            assert.throw(() => chooseYourCar.choosingType('car', 'red', 1899), 'Invalid Year!')
        });
        it("If the year is less than ror", function() {
            assert.throw(() => chooseYourCar.choosingType('car', 'red', 2000), "This type of car is not what you are looking for.")
            assert.throw(() => chooseYourCar.choosingType(undefined, 'red', 2000), "This type of car is not what you are looking for.")
            assert.throw(() => chooseYourCar.choosingType(['car'], 'red', 2000), "This type of car is not what you are looking for.")
        });
        it("If the year is less ", function() {
            assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2010), `This red Sedan meets the requirements, that you have.`)
            assert.equal(chooseYourCar.choosingType('Sedan', 'blue', 2007), `This Sedan is too old for you, especially with that blue color.`)
            assert.equal(chooseYourCar.choosingType('Sedan', 'yellow', 2013), `This yellow Sedan meets the requirements, that you have.`)
        });
     });
    describe("brandName  ", function() {
        it("If the year is less than 1900 and the year is more than 2022, throw an error", function() {
            assert.throw(() => chooseYourCar.brandName('car', 'red'), 'Invalid Information!')
            assert.throw(() => chooseYourCar.brandName(['yes'], 6), 'Invalid Information!')
            assert.throw(() => chooseYourCar.brandName(['car'], -7), 'Invalid Information!')
        });
        it("If the year is less than 1900 ", function() {
            let brands = ["BMW", "Toyota", "Peugeot"]
            assert.equal(chooseYourCar.brandName(brands,1), 'BMW, Peugeot')
            assert.equal(chooseYourCar.brandName(brands,2), 'BMW, Toyota')
            assert.equal(chooseYourCar.brandName(brands,0), 'Toyota, Peugeot')
        });
        it("If the year is less ", function() {
            let brands = ["BMW", "Emo", "KuR"]
            assert.equal(chooseYourCar.brandName(brands,1), 'BMW, KuR')
            assert.equal(chooseYourCar.brandName(brands,2), 'BMW, KuR')
            assert.equal(chooseYourCar.brandName(brands,0), 'Emo, KuR')
        });
     });
    describe("carFuelConsumption  ", function() {
        it("If the year is less than 1900 and the year is more than 2022, throw an error", function() {
            assert.throw(() => chooseYourCar.carFuelConsumption('car', 'red'), 'Invalid Information!')
            assert.throw(() => chooseYourCar.carFuelConsumption([], -45), 'Invalid Information!')
            assert.throw(() => chooseYourCar.carFuelConsumption(undefined, 'red'), 'Invalid Information!')
        });
        
        it("ako godina e", function() {
            assert.equal(chooseYourCar.carFuelConsumption(100,56), 'The car burns too much fuel - 56.00 liters!')
            assert.equal(chooseYourCar.carFuelConsumption(300,200), 'The car burns too much fuel - 66.67 liters!')
            assert.equal(chooseYourCar.carFuelConsumption(500,400), 'The car burns too much fuel - 80.00 liters!')
        });
        it("If the year is ", function() {
            assert.equal(chooseYourCar.carFuelConsumption(200,20), 'The car is efficient enough, it burns 10.00 liters/100 km.')
            assert.equal(chooseYourCar.carFuelConsumption(1238,10), `The car is efficient enough, it burns 0.81 liters/100 km.`)
            assert.equal(chooseYourCar.carFuelConsumption(23,1.6), 'The car is efficient enough, it burns 6.96 liters/100 km.')
        });
     });
     
});