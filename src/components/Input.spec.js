import { expect, test } from "vitest";
import { getApplesFromStock, TrailError } from "../helpers/app";
let stock = "name";
const application = getApplesFromStock(stock);
console.log(application);

let e = 6;
const result = TrailError(e);
console.log(result);
test("mary doesn't have a stock", () => {
  expect(application === "name");
  expect(result === 12);
});
