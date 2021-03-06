"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mustSatisfy_1 = require("../checks/mustSatisfy");
var isBoolean_1 = require("../checks/isBoolean");
function beBoolean() {
    return "be `boolean`";
}
function mustBeBoolean(name, value, contextBuilder) {
    mustSatisfy_1.default(name, isBoolean_1.default(value), beBoolean, contextBuilder);
    return value;
}
exports.default = mustBeBoolean;
