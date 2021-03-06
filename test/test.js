// const assert = require("chai").assert;
// const dMath = require("../lib/index");

import { assert } from 'chai';
import dMath from '../lib/index';

console.log(dMath);

describe("d-math", function() {
    // Add
    describe("Add", function() {
        it("Test add function with 2 parameters", function() {
            let result = dMath.add(1,2);
            assert.equal(result, 3);
        })
        it("Test add function with multiple parameters", function() {
            let result = dMath.add(1,2,3,4,5,6);
            assert.equal(result, 21);
        })
        it("Test add function with string input", function() {
            let result = dMath.add(1,2,3,"4",5);
            assert.equal(result, "Wrong Input");
        })
        it("Test add function with boolean input", function() {
            let result = dMath.add(1,2,3,true,5);
            assert.equal(result, "Wrong Input");
        })
    })

    // multiply
    describe("Multiply", function(){
        it("Test multiply function with 2 parameters", function() {
            let result = dMath.multiply(3,2);
            assert.equal(result, 6);
        })
        it("Test multiply function with multiple parameters", function() {
            let result = dMath.multiply(1,2,3,4,5,6);
            assert.equal(result, 720);
        })
        it("Test multiply function with string input", function() {
            let result = dMath.multiply(1,2,3,"4",5);
            assert.equal(result, "Wrong Input");
        })
        it("Test multiply function with boolean input", function() {
            let result = dMath.multiply(1,2,3,true,5);
            assert.equal(result, "Wrong Input");
        })
    })

    // divide
    describe("Divide", function() {
        it("Test divide function", function() {
            let result = dMath.divide(6,2);
            assert.equal(result, 3);
        })
        it("Test divide function with string input", function() {
            let result = dMath.divide("6", 4);
            assert.equal(result, "Wrong Input");
        })
        it("Test divide function with boolean input", function() {
            let result = dMath.divide(true, 3);
            assert.equal(result, "Wrong Input");
        })
    })
})