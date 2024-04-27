import { describe, expect, test } from "@jest/globals";
import { getChangedVerb } from "../src/utils";

describe("sum module", () => {
    test("adds 1 + 2 to equal 3", () => {
        expect(getChangedVerb(1, 1, 1, 2)).toBe("алдым");
        expect(getChangedVerb(1, 2, 1, 2)).toBe("алдың");
        expect(getChangedVerb(1, 3, 1, 2)).toBe("алдыfff");
    });
});
