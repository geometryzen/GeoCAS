import { Complex } from './Complex';
import FieldAdapter from './FieldAdapter';
export default class ComplexFieldAdapter implements FieldAdapter<Complex> {
    private _ε;
    constructor(ε?: number);
    get ε(): Complex;
    abs(z: Complex): Complex;
    add(lhs: Complex, rhs: Complex): Complex;
    eq(lhs: Complex, rhs: Complex): boolean;
    ne(lhs: Complex, rhs: Complex): boolean;
    le(lhs: Complex, rhs: Complex): boolean;
    lt(lhs: Complex, rhs: Complex): boolean;
    ge(lhs: Complex, rhs: Complex): boolean;
    gt(lhs: Complex, rhs: Complex): boolean;
    sub(lhs: Complex, rhs: Complex): Complex;
    max(lhs: Complex, rhs: Complex): Complex;
    min(lhs: Complex, rhs: Complex): Complex;
    mul(lhs: Complex, rhs: Complex): Complex;
    mulByNumber(arg: Complex, α: number): Complex;
    div(lhs: Complex, rhs: Complex): Complex;
    neg(z: Complex): Complex;
    asString(z: Complex): string;
    cos(z: Complex): Complex;
    isField(z: Complex): z is Complex;
    isOne(z: Complex): boolean;
    isZero(z: Complex): boolean;
    get one(): Complex;
    sin(z: Complex): Complex;
    sqrt(z: Complex): Complex;
    get zero(): Complex;
}