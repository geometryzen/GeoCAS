import { Blade } from './Multivector';
import { Metric } from './Multivector';
import FieldAdapter from './FieldAdapter';
export default function rcoG<T>(a: Blade<T>, b: Blade<T>, m: Metric<T>, adapter: FieldAdapter<T>): Blade<T>[];
