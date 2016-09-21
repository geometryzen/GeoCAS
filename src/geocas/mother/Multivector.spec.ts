import blade from './Blade';
import mv from './Multivector';
import {getBasisVector} from './Multivector';
import NumberFieldAdapter from './NumberFieldAdapter';
import sortBlades from './sortBlades';

const nfa = new NumberFieldAdapter();

describe("Multivector", function () {
    describe("G2", function () {
        const dim = 2;
        const one = mv([blade(0, 1, nfa)], dim, nfa);
        const e1 = getBasisVector(0, dim, nfa);
        const e2 = getBasisVector(1, dim, nfa);
        const e12 = e1.__mul__(e2);
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
                const M = one.__add__(one);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(1);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(2);
            });
            it("(one, e1)", function () {
                const M = one.__add__(e1);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(1);
                expect(blades[1].weight).toBe(1);
            });
            it("(one, e2", function () {
                const M = one.__add__(e2);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(1);
            });
            it("(one, e12)", function () {
                const M = one.__add__(e12);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            // e1
            it("(e1, one)", function () {
                const M = e1.__add__(one);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(1);
                expect(blades[1].weight).toBe(1);
            });
            it("(e1, e1)", function () {
                const M = e1.__add__(e1);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(1);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(2);
            });
            it("(e1, e2", function () {
                const M = e1.__add__(e2);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(1);
            });
            it("(e1, e12)", function () {
                const M = e1.__add__(e12);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            // e2
            it("(e2, one)", function () {
                const M = e2.__add__(one);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(1);
            });
            it("(e2, e1)", function () {
                const M = e2.__add__(e1);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(1);
            });
            it("(e2, e2", function () {
                const M = e2.__add__(e2);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(1);
                expect(blades[0].bitmap).toBe(2);
                expect(blades[0].weight).toBe(2);
            });
            it("(e2, e12)", function () {
                const M = e2.__add__(e12);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(2);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            // e12
            it("(e12, one)", function () {
                const M = e12.__add__(one);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            it("(e12, e1)", function () {
                const M = e12.__add__(e1);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            it("(e12, e2", function () {
                const M = e12.__add__(e2);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(2);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            it("(e12, e12)", function () {
                const M = e12.__add__(e12);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(1);
                expect(blades[0].bitmap).toBe(3);
                expect(blades[0].weight).toBe(2);
            });
        });
        describe("-", function () {
            // one
            it("(one, one)", function () {
                const M = one.__sub__(one);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(0);
                // expect(blades[0].bitmap).toBe(0);
                // expect(blades[0].weight).toBe(2);
            });
            it("(one, e1)", function () {
                const M = one.__sub__(e1);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(1);
                expect(blades[1].weight).toBe(-1);
            });
            it("(one, e2", function () {
                const M = one.__sub__(e2);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(-1);
            });
            it("(one, e12)", function () {
                const M = one.__sub__(e12);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(-1);
            });
            // e1
            it("(e1, one)", function () {
                const M = e1.__sub__(one);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(-1);
                expect(blades[1].bitmap).toBe(1);
                expect(blades[1].weight).toBe(1);
            });
            it("(e1, e1)", function () {
                const M = e1.__sub__(e1);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(0);
                // expect(blades[0].bitmap).toBe(1);
                // expect(blades[0].weight).toBe(2);
            });
            it("(e1, e2", function () {
                const M = e1.__sub__(e2);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(-1);
            });
            it("(e1, e12)", function () {
                const M = e1.__sub__(e12);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(-1);
            });
            // e2
            it("(e2, one)", function () {
                const M = e2.__sub__(one);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(-1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(1);
            });
            it("(e2, e1)", function () {
                const M = e2.__sub__(e1);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(-1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(1);
            });
            it("(e2, e2", function () {
                const M = e2.__sub__(e2);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(0);
                // expect(blades[0].bitmap).toBe(2);
                // expect(blades[0].weight).toBe(2);
            });
            it("(e2, e12)", function () {
                const M = e2.__sub__(e12);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(2);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(-1);
            });
            // e12
            it("(e12, one)", function () {
                const M = e12.__sub__(one);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(-1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            it("(e12, e1)", function () {
                const M = e12.__sub__(e1);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(-1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            it("(e12, e2", function () {
                const M = e12.__sub__(e2);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(2);
                expect(blades[0].weight).toBe(-1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            it("(e12, e12)", function () {
                const M = e12.__sub__(e12);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(0);
                // expect(blades[0].bitmap).toBe(3);
                // expect(blades[0].weight).toBe(2);
            });
        });
        describe("*", function () {
            // one
            it("one * one", function () {
                const M = one.__mul__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("one * e1", function () {
                const M = one.__mul__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("one * e2", function () {
                const M = one.__mul__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            it("one * e12", function () {
                const M = one.__mul__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            // e1
            it("(e1, one)", function () {
                const M = e1.__mul__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e1)", function () {
                const M = e1.__mul__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e2)", function () {
                const M = e1.__mul__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e12)", function () {
                const M = e1.__mul__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            // e2
            it("(e2, one)", function () {
                const M = e2.__mul__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e1)", function () {
                const M = e2.__mul__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("(e2, e2)", function () {
                const M = e2.__mul__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e12)", function () {
                const M = e2.__mul__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(-1);
            });
            // e12
            it("(e12, one)", function () {
                const M = e12.__mul__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e1)", function () {
                const M = e12.__mul__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("(e12, e2)", function () {
                const M = e12.__mul__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e12)", function () {
                const M = e12.__mul__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(-1);
            });
        });
        describe("^", function () {
            // one
            it("one ^ one", function () {
                const M = one.__wedge__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("one ^ e1", function () {
                const M = one.__wedge__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("one ^ e2", function () {
                const M = one.__wedge__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            it("one ^ e12", function () {
                const M = one.__wedge__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            // e1
            it("(e1, one)", function () {
                const M = e1.__wedge__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1 ^ e1)", function () {
                const M = e1.__wedge__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(1);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("e1 ^ e2", function () {
                const M = e1.__wedge__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            it("e1 ^ e12", function () {
                const M = e1.__wedge__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(3);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e2
            it("(e2, one)", function () {
                const M = e2.__wedge__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e2 ^ e1)", function () {
                const M = e2.__wedge__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("e2 ^ e2", function () {
                const M = e2.__wedge__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(3);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("e2 ^ e12", function () {
                const M = e2.__wedge__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(3);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e12
            it("(e12, one)", function () {
                const M = e12.__wedge__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e12 ^ e1)", function () {
                const M = e12.__wedge__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(3);
                // expect(M.blades[0].weight).toBe(-1);
            });
            it("e12 ^ e2", function () {
                const M = e12.__wedge__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(3);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("e12 ^ e12", function () {
                const M = e12.__wedge__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(3);
                // expect(M.blades[0].weight).toBe(1);
            });
        });
        describe("<<", function () {
            // one
            it("(one, one)", function () {
                const M = one.__lshift__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e1)", function () {
                const M = one.__lshift__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e2)", function () {
                const M = one.__lshift__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e12)", function () {
                const M = one.__lshift__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            // e1
            it("(e1, one)", function () {
                const M = e1.__lshift__(one);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e1)", function () {
                const M = e1.__lshift__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e2)", function () {
                const M = e1.__lshift__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(2);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e12)", function () {
                const M = e1.__lshift__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            // e2
            it("(e2, one)", function () {
                const M = e2.__lshift__(one);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e1)", function () {
                const M = e2.__lshift__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e2)", function () {
                const M = e2.__lshift__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e12)", function () {
                const M = e2.__lshift__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(-1);
            });
            // e12
            it("(e12, one)", function () {
                const M = e12.__lshift__(one);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e1)", function () {
                const M = e12.__lshift__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e2)", function () {
                const M = e12.__lshift__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e12)", function () {
                const M = e12.__lshift__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(-1);
            });
        });
        describe(">>", function () {
            // one
            it("(one, one)", function () {
                const M = one.__rshift__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e1)", function () {
                const M = one.__rshift__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e2)", function () {
                const M = one.__rshift__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e12)", function () {
                const M = one.__rshift__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e1
            it("(e1, one)", function () {
                const M = e1.__rshift__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e1)", function () {
                const M = e1.__rshift__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e2)", function () {
                const M = e1.__rshift__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e12)", function () {
                const M = e1.__rshift__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e2
            it("(e2, one)", function () {
                const M = e2.__rshift__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e1)", function () {
                const M = e2.__rshift__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e2)", function () {
                const M = e2.__rshift__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e12)", function () {
                const M = e2.__rshift__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e12
            it("(e12, one)", function () {
                const M = e12.__rshift__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e1)", function () {
                const M = e12.__rshift__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("(e12, e2)", function () {
                const M = e12.__rshift__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e12)", function () {
                const M = e12.__rshift__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(-1);
            });
        });
        describe("|", function () {
            // one
            it("(one, one)", function () {
                const M = one.__vbar__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e1)", function () {
                const M = one.__vbar__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e2)", function () {
                const M = one.__vbar__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e12)", function () {
                const M = one.__vbar__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e1
            it("(e1, one)", function () {
                const M = e1.__vbar__(one);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(1);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e1)", function () {
                const M = e1.__vbar__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e2)", function () {
                const M = e1.__vbar__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e12)", function () {
                const M = e1.__vbar__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e2
            it("(e2, one)", function () {
                const M = e2.__vbar__(one);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(2);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e1)", function () {
                const M = e2.__vbar__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e2)", function () {
                const M = e2.__vbar__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e12)", function () {
                const M = e2.__vbar__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e12
            it("(e12, one)", function () {
                const M = e12.__vbar__(one);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(3);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e1)", function () {
                const M = e12.__vbar__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(2);
                // expect(M.blades[0].weight).toBe(-1);
            });
            it("(e12, e2)", function () {
                const M = e12.__vbar__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(1);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e12)", function () {
                const M = e12.__vbar__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(-1);
            });
        });
    });
    describe("G11", function () {
        const diag = [1, -1];
        const one = mv([blade(0, 1, nfa)], diag, nfa);
        const e1 = getBasisVector(0, diag, nfa);
        const e2 = getBasisVector(1, diag, nfa);
        const e12 = e1.__mul__(e2);
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
                const M = one.__add__(one);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(1);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(2);
            });
            it("(one, e1)", function () {
                const M = one.__add__(e1);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(1);
                expect(blades[1].weight).toBe(1);
            });
            it("(one, e2", function () {
                const M = one.__add__(e2);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(1);
            });
            it("(one, e12)", function () {
                const M = one.__add__(e12);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            // e1
            it("(e1, one)", function () {
                const M = e1.__add__(one);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(1);
                expect(blades[1].weight).toBe(1);
            });
            it("(e1, e1)", function () {
                const M = e1.__add__(e1);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(1);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(2);
            });
            it("(e1, e2", function () {
                const M = e1.__add__(e2);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(1);
            });
            it("(e1, e12)", function () {
                const M = e1.__add__(e12);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            // e2
            it("(e2, one)", function () {
                const M = e2.__add__(one);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(1);
            });
            it("(e2, e1)", function () {
                const M = e2.__add__(e1);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(1);
            });
            it("(e2, e2", function () {
                const M = e2.__add__(e2);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(1);
                expect(blades[0].bitmap).toBe(2);
                expect(blades[0].weight).toBe(2);
            });
            it("(e2, e12)", function () {
                const M = e2.__add__(e12);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(2);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            // e12
            it("(e12, one)", function () {
                const M = e12.__add__(one);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            it("(e12, e1)", function () {
                const M = e12.__add__(e1);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            it("(e12, e2", function () {
                const M = e12.__add__(e2);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(2);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            it("(e12, e12)", function () {
                const M = e12.__add__(e12);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(1);
                expect(blades[0].bitmap).toBe(3);
                expect(blades[0].weight).toBe(2);
            });
        });
        describe("-", function () {
            // one
            it("(one, one)", function () {
                const M = one.__sub__(one);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(0);
                // expect(blades[0].bitmap).toBe(0);
                // expect(blades[0].weight).toBe(2);
            });
            it("(one, e1)", function () {
                const M = one.__sub__(e1);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(1);
                expect(blades[1].weight).toBe(-1);
            });
            it("(one, e2", function () {
                const M = one.__sub__(e2);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(-1);
            });
            it("(one, e12)", function () {
                const M = one.__sub__(e12);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(-1);
            });
            // e1
            it("(e1, one)", function () {
                const M = e1.__sub__(one);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(-1);
                expect(blades[1].bitmap).toBe(1);
                expect(blades[1].weight).toBe(1);
            });
            it("(e1, e1)", function () {
                const M = e1.__sub__(e1);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(0);
                // expect(blades[0].bitmap).toBe(1);
                // expect(blades[0].weight).toBe(2);
            });
            it("(e1, e2", function () {
                const M = e1.__sub__(e2);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(-1);
            });
            it("(e1, e12)", function () {
                const M = e1.__sub__(e12);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(-1);
            });
            // e2
            it("(e2, one)", function () {
                const M = e2.__sub__(one);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(-1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(1);
            });
            it("(e2, e1)", function () {
                const M = e2.__sub__(e1);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(-1);
                expect(blades[1].bitmap).toBe(2);
                expect(blades[1].weight).toBe(1);
            });
            it("(e2, e2", function () {
                const M = e2.__sub__(e2);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(0);
                // expect(blades[0].bitmap).toBe(2);
                // expect(blades[0].weight).toBe(2);
            });
            it("(e2, e12)", function () {
                const M = e2.__sub__(e12);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(2);
                expect(blades[0].weight).toBe(1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(-1);
            });
            // e12
            it("(e12, one)", function () {
                const M = e12.__sub__(one);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(0);
                expect(blades[0].weight).toBe(-1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            it("(e12, e1)", function () {
                const M = e12.__sub__(e1);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(1);
                expect(blades[0].weight).toBe(-1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            it("(e12, e2", function () {
                const M = e12.__sub__(e2);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(2);
                expect(blades[0].bitmap).toBe(2);
                expect(blades[0].weight).toBe(-1);
                expect(blades[1].bitmap).toBe(3);
                expect(blades[1].weight).toBe(1);
            });
            it("(e12, e12)", function () {
                const M = e12.__sub__(e12);
                const blades = sortBlades(M.blades);
                expect(blades.length).toBe(0);
                // expect(blades[0].bitmap).toBe(3);
                // expect(blades[0].weight).toBe(2);
            });
        });
        describe("*", function () {
            // one
            it("one * one", function () {
                const M = one.__mul__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("one * e1", function () {
                const M = one.__mul__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("one * e2", function () {
                const M = one.__mul__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            it("one * e12", function () {
                const M = one.__mul__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            // e1
            it("(e1, one)", function () {
                const M = e1.__mul__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e1)", function () {
                const M = e1.__mul__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e2)", function () {
                const M = e1.__mul__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e12)", function () {
                const M = e1.__mul__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            // e2
            it("(e2, one)", function () {
                const M = e2.__mul__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e1)", function () {
                const M = e2.__mul__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("(e2, e2)", function () {
                const M = e2.__mul__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("(e2, e12)", function () {
                const M = e2.__mul__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            // e12
            it("(e12, one)", function () {
                const M = e12.__mul__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e1)", function () {
                const M = e12.__mul__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("(e12, e2)", function () {
                const M = e12.__mul__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("(e12, e12)", function () {
                const M = e12.__mul__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
        });
        describe("^", function () {
            // one
            it("one ^ one", function () {
                const M = one.__wedge__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("one ^ e1", function () {
                const M = one.__wedge__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("one ^ e2", function () {
                const M = one.__wedge__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            it("one ^ e12", function () {
                const M = one.__wedge__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            // e1
            it("(e1, one)", function () {
                const M = e1.__wedge__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1 ^ e1)", function () {
                const M = e1.__wedge__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(1);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("e1 ^ e2", function () {
                const M = e1.__wedge__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            it("e1 ^ e12", function () {
                const M = e1.__wedge__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(3);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e2
            it("(e2, one)", function () {
                const M = e2.__wedge__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e2 ^ e1)", function () {
                const M = e2.__wedge__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("e2 ^ e2", function () {
                const M = e2.__wedge__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(3);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("e2 ^ e12", function () {
                const M = e2.__wedge__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(3);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e12
            it("(e12, one)", function () {
                const M = e12.__wedge__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e12 ^ e1)", function () {
                const M = e12.__wedge__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(3);
                // expect(M.blades[0].weight).toBe(-1);
            });
            it("e12 ^ e2", function () {
                const M = e12.__wedge__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(3);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("e12 ^ e12", function () {
                const M = e12.__wedge__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(3);
                // expect(M.blades[0].weight).toBe(1);
            });
        });
        describe("<<", function () {
            // one
            it("(one, one)", function () {
                const M = one.__lshift__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e1)", function () {
                const M = one.__lshift__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e2)", function () {
                const M = one.__lshift__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e12)", function () {
                const M = one.__lshift__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            // e1
            it("(e1, one)", function () {
                const M = e1.__lshift__(one);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e1)", function () {
                const M = e1.__lshift__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e2)", function () {
                const M = e1.__lshift__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(2);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e12)", function () {
                const M = e1.__lshift__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            // e2
            it("(e2, one)", function () {
                const M = e2.__lshift__(one);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e1)", function () {
                const M = e2.__lshift__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e2)", function () {
                const M = e2.__lshift__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("(e2, e12)", function () {
                const M = e2.__lshift__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            // e12
            it("(e12, one)", function () {
                const M = e12.__lshift__(one);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e1)", function () {
                const M = e12.__lshift__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e2)", function () {
                const M = e12.__lshift__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e12)", function () {
                const M = e12.__lshift__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
        });
        describe(">>", function () {
            // one
            it("(one, one)", function () {
                const M = one.__rshift__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e1)", function () {
                const M = one.__rshift__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e2)", function () {
                const M = one.__rshift__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e12)", function () {
                const M = one.__rshift__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e1
            it("(e1, one)", function () {
                const M = e1.__rshift__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e1)", function () {
                const M = e1.__rshift__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e2)", function () {
                const M = e1.__rshift__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e12)", function () {
                const M = e1.__rshift__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e2
            it("(e2, one)", function () {
                const M = e2.__rshift__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e1)", function () {
                const M = e2.__rshift__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e2)", function () {
                const M = e2.__rshift__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("(e2, e12)", function () {
                const M = e2.__rshift__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e12
            it("(e12, one)", function () {
                const M = e12.__rshift__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(3);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e1)", function () {
                const M = e12.__rshift__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(2);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("(e12, e2)", function () {
                const M = e12.__rshift__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(1);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("(e12, e12)", function () {
                const M = e12.__rshift__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
        });
        describe("|", function () {
            // one
            it("(one, one)", function () {
                const M = one.__vbar__(one);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e1)", function () {
                const M = one.__vbar__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e2)", function () {
                const M = one.__vbar__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(one, e12)", function () {
                const M = one.__vbar__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e1
            it("(e1, one)", function () {
                const M = e1.__vbar__(one);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(1);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e1)", function () {
                const M = e1.__vbar__(e1);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e2)", function () {
                const M = e1.__vbar__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e1, e12)", function () {
                const M = e1.__vbar__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e2
            it("(e2, one)", function () {
                const M = e2.__vbar__(one);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(2);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e1)", function () {
                const M = e2.__vbar__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e2, e2)", function () {
                const M = e2.__vbar__(e2);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(-1);
            });
            it("(e2, e12)", function () {
                const M = e2.__vbar__(e12);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(0);
                // expect(M.blades[0].weight).toBe(1);
            });
            // e12
            it("(e12, one)", function () {
                const M = e12.__vbar__(one);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(3);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e1)", function () {
                const M = e12.__vbar__(e1);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(2);
                // expect(M.blades[0].weight).toBe(-1);
            });
            it("(e12, e2)", function () {
                const M = e12.__vbar__(e2);
                expect(M.blades.length).toBe(0);
                // expect(M.blades[0].bitmap).toBe(1);
                // expect(M.blades[0].weight).toBe(1);
            });
            it("(e12, e12)", function () {
                const M = e12.__vbar__(e12);
                expect(M.blades.length).toBe(1);
                expect(M.blades[0].bitmap).toBe(0);
                expect(M.blades[0].weight).toBe(1);
            });
        });
    });
    it("one", function () {
        const one = mv([blade(0, 1, nfa)], 3, nfa);
        expect(one.blades.length).toBe(1);
        expect(one.blades[0].bitmap).toBe(0);
        expect(one.blades[0].weight).toBe(1);
    });
    it("__add__(scalar, scalar)", function () {
        const one = mv([blade(0, 5, nfa)], 3, nfa);
        const two = mv([blade(0, 3, nfa)], 3, nfa);
        const rez = one.__add__(two);
        expect(rez.blades.length).toBe(1);
        if (rez.blades.length === 1) {
            expect(rez.blades[0].bitmap).toBe(0);
            expect(rez.blades[0].weight).toBe(8);
        }
    });
    it("__add__(scalar, vector)", function () {
        const one = mv([blade(0, 5, nfa)], 3, nfa);
        const two = mv([blade(1, 3, nfa)], 3, nfa);
        const rez = one.__add__(two);
        expect(rez.blades.length).toBe(2);
        if (rez.blades.length === 2) {
            expect(rez.blades[0].bitmap).toBe(0);
            expect(rez.blades[0].weight).toBe(5);
            expect(rez.blades[1].bitmap).toBe(1);
            expect(rez.blades[1].weight).toBe(3);
        }
    });
    it("__sub__(scalar, scalar)", function () {
        const one = mv([blade(0, 5, nfa)], 3, nfa);
        const two = mv([blade(0, 3, nfa)], 3, nfa);
        const rez = one.__sub__(two);
        expect(rez.blades.length).toBe(1);
        if (rez.blades.length === 1) {
            expect(rez.blades[0].bitmap).toBe(0);
            expect(rez.blades[0].weight).toBe(2);
        }
    });
    it("dual", function () {
        const one = mv([blade(0, 1, nfa)], 3, nfa);
        const I = one.dual();
        expect(I.blades.length).toBe(1);
    });
});