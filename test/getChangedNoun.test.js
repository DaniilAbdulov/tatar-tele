import { describe, expect, test } from "@jest/globals";
import { getChangedNoun } from "../src/utils";

describe("Noun test", () => {
    test("авыл", () => {
        expect(getChangedNoun(1, 1)).toBe("авыл");
        expect(getChangedNoun(1, 2)).toBe("авылның");
        expect(getChangedNoun(1, 3)).toBe("авылга");
        expect(getChangedNoun(1, 4)).toBe("авылны");
        expect(getChangedNoun(1, 5)).toBe("авылда");
        expect(getChangedNoun(1, 6)).toBe("авылдан");
    });
    test("өй", () => {
        expect(getChangedNoun(2, 1)).toBe("өй");
        expect(getChangedNoun(2, 2)).toBe("өйнең");
        expect(getChangedNoun(2, 3)).toBe("өйгә");
        expect(getChangedNoun(2, 4)).toBe("өйне");
        expect(getChangedNoun(2, 5)).toBe("өйдә");
        expect(getChangedNoun(2, 6)).toBe("өйдән");
    });
    test("кунак", () => {
        expect(getChangedNoun(3, 1)).toBe("кунак");
        expect(getChangedNoun(3, 2)).toBe("кунакның");
        expect(getChangedNoun(3, 3)).toBe("кунакка");
        expect(getChangedNoun(3, 4)).toBe("кунакны");
        expect(getChangedNoun(3, 5)).toBe("кунакта");
        expect(getChangedNoun(3, 6)).toBe("кунактан");
    });
    test("икмәк", () => {
        expect(getChangedNoun(4, 1)).toBe("икмәк");
        expect(getChangedNoun(4, 2)).toBe("икмәкнең");
        expect(getChangedNoun(4, 3)).toBe("икмәккә");
        expect(getChangedNoun(4, 4)).toBe("икмәкне");
        expect(getChangedNoun(4, 5)).toBe("икмәктә");
        expect(getChangedNoun(4, 6)).toBe("икмәктән");
    });
    
});