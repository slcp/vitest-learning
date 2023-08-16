import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { add } from "./add";

const add2 = add(2);

describe("add", () => {
  it("should add two numbers", () => {
    expect(add2(5)).toEqual(7);
  });
});
