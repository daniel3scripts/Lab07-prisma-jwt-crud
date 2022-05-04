//

import { sumar, restar, multi, divi } from "../helper/operations";

test("sumar", () => {
    expect(sumar(1, 3)).toBe(4);
});


test("restar", () => {
    expect(restar(4, 2)).toBe(2);
});
test("multi", () => {
    expect(multi(3, 6)).toBe(18);
});

test("divi", () => {
    expect(divi(20, 5)).toBe(4);
});