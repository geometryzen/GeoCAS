"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ComplexFieldAdapter_1 = require("./ComplexFieldAdapter");
var Algebra_1 = require("./Algebra");
var NumberFieldAdapter_1 = require("./NumberFieldAdapter");
var sortBlades_1 = require("./sortBlades");
var cfa = new ComplexFieldAdapter_1.default();
var nfa = new NumberFieldAdapter_1.default();
describe("Multivector", function () {
    describe("labels", function () {
        var G2 = Algebra_1.algebra(2, nfa, ['i', 'j']);
        var one = G2.one;
        var e1 = G2.unit(0);
        var e2 = G2.unit(1);
        var e12 = e1.mul(e2);
        it("one should be 1", function () {
            expect(one.toString()).toBe('1');
        });
        it("e1 should be i", function () {
            expect(e1.toString()).toBe('i');
        });
        it("e2 should be j", function () {
            expect(e2.toString()).toBe('j');
        });
        it("e12 should be i ^ j", function () {
            expect(e12.toString()).toBe('i ^ j');
        });
    });
    describe("G2 over number", function () {
        var G2 = Algebra_1.algebra(2, nfa, ['e1', 'e2']);
        var one = G2.one;
        var e1 = G2.unit(0);
        var e2 = G2.unit(1);
        var e12 = e1.mul(e2);
        it("one", function () {
            expect(one).toBeDefined();
            expect(one.blades.length).toBe(1);
            expect(one.blades[0].bitmap).toBe(0);
            expect(one.blades[0].weight).toBe(1);
        });
        it("e1", function () {
            expect(e1.blades.length).toBe(1);
            expect(e1.blades[0].bitmap).toBe(1);
            expect(e1.blades[0].weight).toBe(1);
        });
        it("e2", function () {
            expect(e2.blades.length).toBe(1);
            expect(e2.blades[0].bitmap).toBe(2);
            expect(e2.blades[0].weight).toBe(1);
        });
        it("e12", function () {
            expect(e12.blades.length).toBe(1);
            expect(e12.blades[0].bitmap).toBe(3);
            expect(e12.blades[0].weight).toBe(1);
        });
        describe("+", function () {
            // one
            it("(one, one)", function () {
                var M = one.__add__(one);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(1);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(2);
            });
            it("(one, e1)", function () {
                var M = one.__add__(e1);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(1);
                expect(blades[1].weight).toBe(1);
            });
            it("(one, e2", function () {
                var M = one.__add__(e2);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(1);
            });
            it("(one, e12)", function () {
                var M = one.__add__(e12);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            // e1
            it("(e1, one)", function () {
                var M = e1.__add__(one);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(1);
                expect(blades[1].weight).toBe(1);
            });
            it("(e1, e1)", function () {
                var M = e1.__add__(e1);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(1);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(2);
            });
            it("(e1, e2", function () {
                var M = e1.__add__(e2);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(1);
            });
            it("(e1, e12)", function () {
                var M = e1.__add__(e12);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            // e2
            it("(e2, one)", function () {
                var M = e2.__add__(one);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(1);
            });
            it("(e2, e1)", function () {
                var M = e2.__add__(e1);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(1);
            });
            it("(e2, e2", function () {
                var M = e2.__add__(e2);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(1);
                expect(blades[0].bitmap).toBe(2);
                expect(blades[0].weight).toBe(2);
            });
            it("(e2, e12)", function () {
                var M = e2.__add__(e12);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(2);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            // e12
            it("(e12, one)", function () {
                var M = e12.__add__(one);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            it("(e12, e1)", function () {
                var M = e12.__add__(e1);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            it("(e12, e2", function () {
                var M = e12.__add__(e2);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(2);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            it("(e12, e12)", function () {
                var M = e12.__add__(e12);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(1);
                expect(blades[0].bitmap).toBe(3);
                expect(blades[0].weight).toBe(2);
            });
        });
        describe("-", function () {
            // one
            it("(one, one)", function () {
                var M = one.__sub__(one);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(0);
                // expect(blades[0].bitmap).toBe(0);
                // expect(blades[0].weight).toBe(2);
            });
            it("(one, e1)", function () {
                var M = one.__sub__(e1);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(1);
                expect(blades[1].weight).toBe(-1);
            });
            it("(one, e2", function () {
                var M = one.__sub__(e2);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(-1);
            });
            it("(one, e12)", function () {
                var M = one.__sub__(e12);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(-1);
            });
            // e1
            it("(e1, one)", function () {
                var M = e1.__sub__(one);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(-1);
                expect(blades[1].bitmap).toBe(1);
                expect(blades[1].weight).toBe(1);
            });
            it("(e1, e1)", function () {
                var M = e1.__sub__(e1);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(0);
                // expect(blades[0].bitmap).toBe(1);
                // expect(blades[0].weight).toBe(2);
            });
            it("(e1, e2", function () {
                var M = e1.__sub__(e2);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(-1);
            });
            it("(e1, e12)", function () {
                var M = e1.__sub__(e12);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(-1);
            });
            // e2
            it("(e2, one)", function () {
                var M = e2.__sub__(one);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(-1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(1);
            });
            it("(e2, e1)", function () {
                var M = e2.__sub__(e1);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(-1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(1);
            });
            it("(e2, e2", function () {
                var M = e2.__sub__(e2);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(0);
                // expect(blades[0].bitmap).toBe(2);
                // expect(blades[0].weight).toBe(2);
            });
            it("(e2, e12)", function () {
                var M = e2.__sub__(e12);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(2);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(-1);
            });
            // e12
            it("(e12, one)", function () {
                var M = e12.__sub__(one);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(-1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            it("(e12, e1)", function () {
                var M = e12.__sub__(e1);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(-1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            it("(e12, e2", function () {
                var M = e12.__sub__(e2);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(2);
                expect(blades[0].weight).toBe(-1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            it("(e12, e12)", function () {
                var M = e12.__sub__(e12);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(0);
                // expect(blades[0].bitmap).toBe(3);
                // expect(blades[0].weight).toBe(2);
            });
        });
        describe("*", function () {
            // one
            it("one * one", function () {
                var M = one.__mul__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("one * e1", function () {
                var M = one.__mul__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("one * e2", function () {
                var M = one.__mul__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            it("one * e12", function () {
                var M = one.__mul__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            // e1
            it("(e1, one)", function () {
                var M = e1.__mul__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e1)", function () {
                var M = e1.__mul__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e2)", function () {
                var M = e1.__mul__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e12)", function () {
                var M = e1.__mul__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            // e2
            it("(e2, one)", function () {
                var M = e2.__mul__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e1)", function () {
                var M = e2.__mul__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("(e2, e2)", function () {
                var M = e2.__mul__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e12)", function () {
                var M = e2.__mul__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(-1);
            });
            // e12
            it("(e12, one)", function () {
                var M = e12.__mul__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e1)", function () {
                var M = e12.__mul__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("(e12, e2)", function () {
                var M = e12.__mul__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e12)", function () {
                var M = e12.__mul__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(-1);
            });
        });
        describe("^", function () {
            // one
            it("one ^ one", function () {
                var M = one.__wedge__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("one ^ e1", function () {
                var M = one.__wedge__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("one ^ e2", function () {
                var M = one.__wedge__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            it("one ^ e12", function () {
                var M = one.__wedge__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            // e1
            it("(e1, one)", function () {
                var M = e1.__wedge__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1 ^ e1)", function () {
                var M = e1.__wedge__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(1);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("e1 ^ e2", function () {
                var M = e1.__wedge__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            it("e1 ^ e12", function () {
                var M = e1.__wedge__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(3);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e2
            it("(e2, one)", function () {
                var M = e2.__wedge__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e2 ^ e1)", function () {
                var M = e2.__wedge__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("e2 ^ e2", function () {
                var M = e2.__wedge__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(3);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("e2 ^ e12", function () {
                var M = e2.__wedge__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(3);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e12
            it("(e12, one)", function () {
                var M = e12.__wedge__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e12 ^ e1)", function () {
                var M = e12.__wedge__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(3);
                // expect(M.blades[0].weight).toBe(-1);
            });
            it("e12 ^ e2", function () {
                var M = e12.__wedge__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(3);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("e12 ^ e12", function () {
                var M = e12.__wedge__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(3);
                // expect(M.blades[0].weight).toBe(1);
            });
        });
        describe("<<", function () {
            // one
            it("(one, one)", function () {
                var M = one.__lshift__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e1)", function () {
                var M = one.__lshift__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e2)", function () {
                var M = one.__lshift__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e12)", function () {
                var M = one.__lshift__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            // e1
            it("(e1, one)", function () {
                var M = e1.__lshift__(one);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e1)", function () {
                var M = e1.__lshift__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e2)", function () {
                var M = e1.__lshift__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(2);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e12)", function () {
                var M = e1.__lshift__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            // e2
            it("(e2, one)", function () {
                var M = e2.__lshift__(one);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e1)", function () {
                var M = e2.__lshift__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e2)", function () {
                var M = e2.__lshift__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e12)", function () {
                var M = e2.__lshift__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(-1);
            });
            // e12
            it("(e12, one)", function () {
                var M = e12.__lshift__(one);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e1)", function () {
                var M = e12.__lshift__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e2)", function () {
                var M = e12.__lshift__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e12)", function () {
                var M = e12.__lshift__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(-1);
            });
        });
        describe(">>", function () {
            // one
            it("(one, one)", function () {
                var M = one.__rshift__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e1)", function () {
                var M = one.__rshift__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e2)", function () {
                var M = one.__rshift__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e12)", function () {
                var M = one.__rshift__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e1
            it("(e1, one)", function () {
                var M = e1.__rshift__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e1)", function () {
                var M = e1.__rshift__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e2)", function () {
                var M = e1.__rshift__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e12)", function () {
                var M = e1.__rshift__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e2
            it("(e2, one)", function () {
                var M = e2.__rshift__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e1)", function () {
                var M = e2.__rshift__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e2)", function () {
                var M = e2.__rshift__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e12)", function () {
                var M = e2.__rshift__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e12
            it("(e12, one)", function () {
                var M = e12.__rshift__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e1)", function () {
                var M = e12.__rshift__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("(e12, e2)", function () {
                var M = e12.__rshift__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e12)", function () {
                var M = e12.__rshift__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(-1);
            });
        });
        describe("|", function () {
            // one
            it("(one, one)", function () {
                var M = one.__vbar__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e1)", function () {
                var M = one.__vbar__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e2)", function () {
                var M = one.__vbar__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e12)", function () {
                var M = one.__vbar__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e1
            it("(e1, one)", function () {
                var M = e1.__vbar__(one);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(1);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e1)", function () {
                var M = e1.__vbar__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e2)", function () {
                var M = e1.__vbar__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e12)", function () {
                var M = e1.__vbar__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e2
            it("(e2, one)", function () {
                var M = e2.__vbar__(one);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(2);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e1)", function () {
                var M = e2.__vbar__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e2)", function () {
                var M = e2.__vbar__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e12)", function () {
                var M = e2.__vbar__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e12
            it("(e12, one)", function () {
                var M = e12.__vbar__(one);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(3);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e1)", function () {
                var M = e12.__vbar__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(2);
                // expect(M.blades[0].weight).toBe(-1);
            });
            it("(e12, e2)", function () {
                var M = e12.__vbar__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(1);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e12)", function () {
                var M = e12.__vbar__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(-1);
            });
        });
        describe("inv", function () {
            it("1", function () {
                var M = one.inv();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("e1", function () {
                var M = e1.inv();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("e2", function () {
                var M = e2.inv();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            it("e12", function () {
                var M = e12.inv();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(-1);
            });
        });
        describe("dual", function () {
            it("1", function () {
                var M = one.dual();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            it("e1", function () {
                var M = e1.dual();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            it("e2", function () {
                var M = e2.dual();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("e12", function () {
                var M = e12.dual();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(-1);
            });
        });
        describe("direction", function () {
            it("1", function () {
                var M = one.direction();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("e1", function () {
                var M = e1.direction();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("e2", function () {
                var M = e2.direction();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            it("e12", function () {
                var M = e12.direction();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
        });
    });
    describe("G11 over number", function () {
        var G11 = Algebra_1.algebra([1, -1], nfa);
        var one = G11.one;
        var e1 = G11.unit(0);
        var e2 = G11.unit(1);
        var e12 = e1.mul(e2);
        it("one", function () {
            expect(one.blades.length).toBe(1);
            expect(one.blades[0].bitmap).toBe(0);
            expect(one.blades[0].weight).toBe(1);
        });
        it("e1", function () {
            expect(e1.blades.length).toBe(1);
            expect(e1.blades[0].bitmap).toBe(1);
            expect(e1.blades[0].weight).toBe(1);
        });
        it("e2", function () {
            expect(e2.blades.length).toBe(1);
            expect(e2.blades[0].bitmap).toBe(2);
            expect(e2.blades[0].weight).toBe(1);
        });
        it("e12", function () {
            expect(e12.blades.length).toBe(1);
            expect(e12.blades[0].bitmap).toBe(3);
            expect(e12.blades[0].weight).toBe(1);
        });
        describe("+", function () {
            // one
            it("(one, one)", function () {
                var M = one.__add__(one);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(1);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(2);
            });
            it("(one, e1)", function () {
                var M = one.__add__(e1);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(1);
                expect(blades[1].weight).toBe(1);
            });
            it("(one, e2", function () {
                var M = one.__add__(e2);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(1);
            });
            it("(one, e12)", function () {
                var M = one.__add__(e12);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            // e1
            it("(e1, one)", function () {
                var M = e1.__add__(one);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(1);
                expect(blades[1].weight).toBe(1);
            });
            it("(e1, e1)", function () {
                var M = e1.__add__(e1);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(1);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(2);
            });
            it("(e1, e2", function () {
                var M = e1.__add__(e2);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(1);
            });
            it("(e1, e12)", function () {
                var M = e1.__add__(e12);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            // e2
            it("(e2, one)", function () {
                var M = e2.__add__(one);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(1);
            });
            it("(e2, e1)", function () {
                var M = e2.__add__(e1);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(1);
            });
            it("(e2, e2", function () {
                var M = e2.__add__(e2);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(1);
                expect(blades[0].bitmap).toBe(2);
                expect(blades[0].weight).toBe(2);
            });
            it("(e2, e12)", function () {
                var M = e2.__add__(e12);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(2);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            // e12
            it("(e12, one)", function () {
                var M = e12.__add__(one);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            it("(e12, e1)", function () {
                var M = e12.__add__(e1);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            it("(e12, e2", function () {
                var M = e12.__add__(e2);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(2);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            it("(e12, e12)", function () {
                var M = e12.__add__(e12);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(1);
                expect(blades[0].bitmap).toBe(3);
                expect(blades[0].weight).toBe(2);
            });
        });
        describe("-", function () {
            // one
            it("(one, one)", function () {
                var M = one.__sub__(one);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(0);
                // expect(blades[0].bitmap).toBe(0);
                // expect(blades[0].weight).toBe(2);
            });
            it("(one, e1)", function () {
                var M = one.__sub__(e1);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(1);
                expect(blades[1].weight).toBe(-1);
            });
            it("(one, e2", function () {
                var M = one.__sub__(e2);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(-1);
            });
            it("(one, e12)", function () {
                var M = one.__sub__(e12);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(-1);
            });
            // e1
            it("(e1, one)", function () {
                var M = e1.__sub__(one);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(-1);
                expect(blades[1].bitmap).toBe(1);
                expect(blades[1].weight).toBe(1);
            });
            it("(e1, e1)", function () {
                var M = e1.__sub__(e1);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(0);
                // expect(blades[0].bitmap).toBe(1);
                // expect(blades[0].weight).toBe(2);
            });
            it("(e1, e2", function () {
                var M = e1.__sub__(e2);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(-1);
            });
            it("(e1, e12)", function () {
                var M = e1.__sub__(e12);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(-1);
            });
            // e2
            it("(e2, one)", function () {
                var M = e2.__sub__(one);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(-1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(1);
            });
            it("(e2, e1)", function () {
                var M = e2.__sub__(e1);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(-1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(1);
            });
            it("(e2, e2", function () {
                var M = e2.__sub__(e2);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(0);
                // expect(blades[0].bitmap).toBe(2);
                // expect(blades[0].weight).toBe(2);
            });
            it("(e2, e12)", function () {
                var M = e2.__sub__(e12);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(2);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(-1);
            });
            // e12
            it("(e12, one)", function () {
                var M = e12.__sub__(one);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(-1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            it("(e12, e1)", function () {
                var M = e12.__sub__(e1);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(-1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            it("(e12, e2", function () {
                var M = e12.__sub__(e2);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(2);
                expect(blades[0].weight).toBe(-1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            it("(e12, e12)", function () {
                var M = e12.__sub__(e12);
                var blades = sortBlades_1.default(M.blades);
                expect(blades.length).toBe(0);
                // expect(blades[0].bitmap).toBe(3);
                // expect(blades[0].weight).toBe(2);
            });
        });
        describe("*", function () {
            // one
            it("one * one", function () {
                var M = one.__mul__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("one * e1", function () {
                var M = one.__mul__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("one * e2", function () {
                var M = one.__mul__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            it("one * e12", function () {
                var M = one.__mul__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            // e1
            it("(e1, one)", function () {
                var M = e1.__mul__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e1)", function () {
                var M = e1.__mul__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e2)", function () {
                var M = e1.__mul__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e12)", function () {
                var M = e1.__mul__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            // e2
            it("(e2, one)", function () {
                var M = e2.__mul__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e1)", function () {
                var M = e2.__mul__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("(e2, e2)", function () {
                var M = e2.__mul__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("(e2, e12)", function () {
                var M = e2.__mul__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            // e12
            it("(e12, one)", function () {
                var M = e12.__mul__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e1)", function () {
                var M = e12.__mul__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("(e12, e2)", function () {
                var M = e12.__mul__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("(e12, e12)", function () {
                var M = e12.__mul__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
        });
        describe("^", function () {
            // one
            it("one ^ one", function () {
                var M = one.__wedge__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("one ^ e1", function () {
                var M = one.__wedge__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("one ^ e2", function () {
                var M = one.__wedge__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            it("one ^ e12", function () {
                var M = one.__wedge__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            // e1
            it("(e1, one)", function () {
                var M = e1.__wedge__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1 ^ e1)", function () {
                var M = e1.__wedge__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(1);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("e1 ^ e2", function () {
                var M = e1.__wedge__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            it("e1 ^ e12", function () {
                var M = e1.__wedge__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(3);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e2
            it("(e2, one)", function () {
                var M = e2.__wedge__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e2 ^ e1)", function () {
                var M = e2.__wedge__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("e2 ^ e2", function () {
                var M = e2.__wedge__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(3);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("e2 ^ e12", function () {
                var M = e2.__wedge__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(3);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e12
            it("(e12, one)", function () {
                var M = e12.__wedge__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e12 ^ e1)", function () {
                var M = e12.__wedge__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(3);
                // expect(M.blades[0].weight).toBe(-1);
            });
            it("e12 ^ e2", function () {
                var M = e12.__wedge__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(3);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("e12 ^ e12", function () {
                var M = e12.__wedge__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(3);
                // expect(M.blades[0].weight).toBe(1);
            });
        });
        describe("<<", function () {
            // one
            it("(one, one)", function () {
                var M = one.__lshift__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e1)", function () {
                var M = one.__lshift__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e2)", function () {
                var M = one.__lshift__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e12)", function () {
                var M = one.__lshift__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            // e1
            it("(e1, one)", function () {
                var M = e1.__lshift__(one);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e1)", function () {
                var M = e1.__lshift__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e2)", function () {
                var M = e1.__lshift__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(2);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e12)", function () {
                var M = e1.__lshift__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            // e2
            it("(e2, one)", function () {
                var M = e2.__lshift__(one);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e1)", function () {
                var M = e2.__lshift__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e2)", function () {
                var M = e2.__lshift__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("(e2, e12)", function () {
                var M = e2.__lshift__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            // e12
            it("(e12, one)", function () {
                var M = e12.__lshift__(one);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e1)", function () {
                var M = e12.__lshift__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e2)", function () {
                var M = e12.__lshift__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e12)", function () {
                var M = e12.__lshift__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
        });
        describe(">>", function () {
            // one
            it("(one, one)", function () {
                var M = one.__rshift__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e1)", function () {
                var M = one.__rshift__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e2)", function () {
                var M = one.__rshift__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e12)", function () {
                var M = one.__rshift__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e1
            it("(e1, one)", function () {
                var M = e1.__rshift__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e1)", function () {
                var M = e1.__rshift__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e2)", function () {
                var M = e1.__rshift__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e12)", function () {
                var M = e1.__rshift__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e2
            it("(e2, one)", function () {
                var M = e2.__rshift__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e1)", function () {
                var M = e2.__rshift__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e2)", function () {
                var M = e2.__rshift__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("(e2, e12)", function () {
                var M = e2.__rshift__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e12
            it("(e12, one)", function () {
                var M = e12.__rshift__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e1)", function () {
                var M = e12.__rshift__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("(e12, e2)", function () {
                var M = e12.__rshift__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("(e12, e12)", function () {
                var M = e12.__rshift__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
        });
        describe("|", function () {
            // one
            it("(one, one)", function () {
                var M = one.__vbar__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e1)", function () {
                var M = one.__vbar__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e2)", function () {
                var M = one.__vbar__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e12)", function () {
                var M = one.__vbar__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e1
            it("(e1, one)", function () {
                var M = e1.__vbar__(one);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(1);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e1)", function () {
                var M = e1.__vbar__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e2)", function () {
                var M = e1.__vbar__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e12)", function () {
                var M = e1.__vbar__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e2
            it("(e2, one)", function () {
                var M = e2.__vbar__(one);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(2);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e1)", function () {
                var M = e2.__vbar__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e2)", function () {
                var M = e2.__vbar__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("(e2, e12)", function () {
                var M = e2.__vbar__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e12
            it("(e12, one)", function () {
                var M = e12.__vbar__(one);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(3);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e1)", function () {
                var M = e12.__vbar__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(2);
                // expect(M.blades[0].weight).toBe(-1);
            });
            it("(e12, e2)", function () {
                var M = e12.__vbar__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(1);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e12)", function () {
                var M = e12.__vbar__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
        });
        describe("inv", function () {
            it("1", function () {
                var M = one.inv();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("e1", function () {
                var M = e1.inv();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("e2", function () {
                var M = e2.inv();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("e12", function () {
                var M = e12.inv();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
        });
        describe("dual", function () {
            it("1", function () {
                var M = one.dual();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            it("e1", function () {
                var M = e1.dual();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            it("e2", function () {
                var M = e2.dual();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("e12", function () {
                var M = e12.dual();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
        });
        describe("direction", function () {
            it("1", function () {
                var M = one.direction();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("e1", function () {
                var M = e1.direction();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            // We can't compute the direction of a vector that squares to -1 when the field
            // is like the reals and is not closed. May be we should test with complex?
            xit("e2", function () {
                var M = e2.direction();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            xit("e12", function () {
                var M = e12.direction();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
        });
    });
    describe("G2 over Complex", function () {
        var G2 = Algebra_1.algebra([1, 1], cfa);
        var one = G2.one;
        var e1 = G2.unit(0);
        var e2 = G2.unit(1);
        var e12 = e1.mul(e2);
        it("one", function () {
            expect(one.blades.length).toBe(1);
            expect(one.blades[0].bitmap).toBe(0);
            expect(one.blades[0].weight.x).toBe(1);
            expect(one.blades[0].weight.y).toBe(0);
        });
        it("e1", function () {
            expect(e1.blades.length).toBe(1);
            expect(e1.blades[0].bitmap).toBe(1);
            expect(e1.blades[0].weight.x).toBe(1);
            expect(e1.blades[0].weight.y).toBe(0);
        });
        it("e2", function () {
            expect(e2.blades.length).toBe(1);
            expect(e2.blades[0].bitmap).toBe(2);
            expect(e2.blades[0].weight.x).toBe(1);
            expect(e2.blades[0].weight.y).toBe(0);
        });
        it("e12", function () {
            expect(e12.blades.length).toBe(1);
            expect(e12.blades[0].bitmap).toBe(3);
            expect(e12.blades[0].weight.x).toBe(1);
            expect(e12.blades[0].weight.y).toBe(0);
        });
        describe("direction", function () {
            it("1", function () {
                var M = one.direction();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight.x).toBe(1);
                expect(M.blades[0].weight.y).toBe(0);
            });
            it("e1", function () {
                var M = e1.direction();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight.x).toBe(1);
                expect(M.blades[0].weight.y).toBe(0);
            });
            it("e2", function () {
                var M = e2.direction();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight.x).toBe(1);
                expect(M.blades[0].weight.y).toBe(0);
            });
            it("e12", function () {
                var M = e12.direction();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight.x).toBe(1);
                expect(M.blades[0].weight.y).toBe(0);
            });
        });
    });
    describe("G11 over Complex", function () {
        var G11 = Algebra_1.algebra([+1, -1], cfa);
        var one = G11.one;
        var e1 = G11.unit(0);
        var e2 = G11.unit(1);
        var e12 = e1.mul(e2);
        it("one", function () {
            expect(one.blades.length).toBe(1);
            expect(one.blades[0].bitmap).toBe(0);
            expect(one.blades[0].weight.x).toBe(1);
            expect(one.blades[0].weight.y).toBe(0);
        });
        it("e1", function () {
            expect(e1.blades.length).toBe(1);
            expect(e1.blades[0].bitmap).toBe(1);
            expect(e1.blades[0].weight.x).toBe(1);
            expect(e1.blades[0].weight.y).toBe(0);
        });
        it("e2", function () {
            expect(e2.blades.length).toBe(1);
            expect(e2.blades[0].bitmap).toBe(2);
            expect(e2.blades[0].weight.x).toBe(1);
            expect(e2.blades[0].weight.y).toBe(0);
        });
        it("e12", function () {
            expect(e12.blades.length).toBe(1);
            expect(e12.blades[0].bitmap).toBe(3);
            expect(e12.blades[0].weight.x).toBe(1);
            expect(e12.blades[0].weight.y).toBe(0);
        });
        describe("direction", function () {
            it("1", function () {
                var M = one.direction();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight.x).toBe(1);
                expect(M.blades[0].weight.y).toBe(0);
            });
            it("e1", function () {
                var M = e1.direction();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight.x).toBe(1);
                expect(M.blades[0].weight.y).toBe(0);
            });
            it("e2", function () {
                var M = e2.direction();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight.x).toBe(0);
                expect(M.blades[0].weight.y).toBe(-1);
            });
            it("e12", function () {
                var M = e12.direction();
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight.x).toBe(0);
                expect(M.blades[0].weight.y).toBe(-1);
            });
        });
    });
    describe("Relational", function () {
        var G2 = Algebra_1.algebra(2, nfa, ['i', 'j']);
        var one = G2.one;
        var two = G2.one.mulByScalar(2);
        var e1 = G2.unit(0);
        var e2 = G2.unit(1);
        var e12 = e1.mul(e2);
        var sum = e1.__add__(e2);
        describe("eq", function () {
            it("one eq one", function () {
                expect(one.__eq__(one)).toBeTruthy();
            });
            it("one eq two", function () {
                expect(one.__eq__(two)).toBeFalsy();
            });
            it("e1 eq e1", function () {
                expect(e1.__eq__(e1)).toBeTruthy();
            });
            it("e1 eq e2", function () {
                expect(e1.__eq__(e2)).toBeFalsy();
            });
            it("e1 eq sum", function () {
                expect(e1.__eq__(sum)).toBeFalsy();
            });
            it("e12 eq sum", function () {
                expect(e12.__eq__(sum)).toBeFalsy();
            });
        });
        describe("ge", function () {
            it("one ge one", function () {
                expect(one.__ge__(one)).toBeTruthy();
            });
            it("one ge two", function () {
                expect(one.__ge__(two)).toBeFalsy();
            });
            it("two ge one", function () {
                expect(two.__ge__(one)).toBeTruthy();
            });
        });
        describe("gt", function () {
            it("one gt one", function () {
                expect(one.__gt__(one)).toBeFalsy();
            });
            it("one gt two", function () {
                expect(one.__gt__(two)).toBeFalsy();
            });
            it("two ge one", function () {
                expect(two.__ge__(one)).toBeTruthy();
            });
        });
        describe("le", function () {
            it("one le one", function () {
                expect(one.__le__(one)).toBeTruthy();
            });
            it("one le two", function () {
                expect(one.__le__(two)).toBeTruthy();
            });
            it("two le one", function () {
                expect(two.__le__(one)).toBeFalsy();
            });
        });
        describe("lt", function () {
            it("one lt one", function () {
                expect(one.__lt__(one)).toBeFalsy();
            });
            it("one lt two", function () {
                expect(one.__lt__(two)).toBeTruthy();
            });
            it("two lt one", function () {
                expect(two.__lt__(one)).toBeFalsy();
            });
        });
        describe("ne", function () {
            it("one ne one", function () {
                expect(one.__ne__(one)).toBeFalsy();
            });
            it("one ne two", function () {
                expect(one.__ne__(two)).toBeTruthy();
            });
            it("e1 ne e1", function () {
                expect(e1.__ne__(e1)).toBeFalsy();
            });
            it("e1 ne e2", function () {
                expect(e1.__ne__(e2)).toBeTruthy();
            });
        });
    });
});
