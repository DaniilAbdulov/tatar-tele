import { describe, expect, test } from "@jest/globals";
import { getChangedNoun } from "../src/utils";

describe("Noun test", () => {
    test("авыл во множественном", () => {
        expect(getChangedNoun(1, 1, 1)).toBe("авыллар");
        expect(getChangedNoun(1, 2, 1)).toBe("авылларның");
        expect(getChangedNoun(1, 3, 1)).toBe("авылларга");
        expect(getChangedNoun(1, 4, 1)).toBe("авылларны");
        expect(getChangedNoun(1, 5, 1)).toBe("авылларда");
        expect(getChangedNoun(1, 6, 1)).toBe("авыллардан");
    });
    test("өй во множественном", () => {
        expect(getChangedNoun(2, 1, 1)).toBe("өйләр");
        expect(getChangedNoun(2, 2, 1)).toBe("өйләрнең");
        expect(getChangedNoun(2, 3, 1)).toBe("өйләргә");
        expect(getChangedNoun(2, 4, 1)).toBe("өйләрне");
        expect(getChangedNoun(2, 5, 1)).toBe("өйләрдә");
        expect(getChangedNoun(2, 6, 1)).toBe("өйләрдән");
    });
    test("кунак во множественном", () => {
        expect(getChangedNoun(3, 1, 1)).toBe("кунаклар");
        expect(getChangedNoun(3, 2, 1)).toBe("кунакларның");
        expect(getChangedNoun(3, 3, 1)).toBe("кунакларга");
        expect(getChangedNoun(3, 4, 1)).toBe("кунакларны");
        expect(getChangedNoun(3, 5, 1)).toBe("кунакларда");
        expect(getChangedNoun(3, 6, 1)).toBe("кунаклардан");
    });
    test("икмәк во множественном", () => {
        expect(getChangedNoun(4, 1, 1)).toBe("икмәкләр");
        expect(getChangedNoun(4, 2, 1)).toBe("икмәкләрнең");
        expect(getChangedNoun(4, 3, 1)).toBe("икмәкләргә");
        expect(getChangedNoun(4, 4, 1)).toBe("икмәкләрне");
        expect(getChangedNoun(4, 5, 1)).toBe("икмәкләрдә");
        expect(getChangedNoun(4, 6, 1)).toBe("икмәкләрдән");
    });
    test("авыл в ед.ч", () => {
        expect(getChangedNoun(1, 1, 2)).toBe("авыл");
        expect(getChangedNoun(1, 2, 2)).toBe("авылның");
        expect(getChangedNoun(1, 3, 2)).toBe("авылга");
        expect(getChangedNoun(1, 4, 2)).toBe("авылны");
        expect(getChangedNoun(1, 5, 2)).toBe("авылда");
        expect(getChangedNoun(1, 6, 2)).toBe("авылдан");
    });
    test("өй в ед.ч", () => {
        expect(getChangedNoun(2, 1, 2)).toBe("өй");
        expect(getChangedNoun(2, 2, 2)).toBe("өйнең");
        expect(getChangedNoun(2, 3, 2)).toBe("өйгә");
        expect(getChangedNoun(2, 4, 2)).toBe("өйне");
        expect(getChangedNoun(2, 5, 2)).toBe("өйдә");
        expect(getChangedNoun(2, 6, 2)).toBe("өйдән");
    });
    test("кунак в ед.ч", () => {
        expect(getChangedNoun(3, 1, 2)).toBe("кунак");
        expect(getChangedNoun(3, 2, 2)).toBe("кунакның");
        expect(getChangedNoun(3, 3, 2)).toBe("кунакка");
        expect(getChangedNoun(3, 4, 2)).toBe("кунакны");
        expect(getChangedNoun(3, 5, 2)).toBe("кунакта");
        expect(getChangedNoun(3, 6, 2)).toBe("кунактан");
    });
    test("икмәк в ед.ч", () => {
        expect(getChangedNoun(4, 1, 2)).toBe("икмәк");
        expect(getChangedNoun(4, 2, 2)).toBe("икмәкнең");
        expect(getChangedNoun(4, 3, 2)).toBe("икмәккә");
        expect(getChangedNoun(4, 4, 2)).toBe("икмәкне");
        expect(getChangedNoun(4, 5, 2)).toBe("икмәктә");
        expect(getChangedNoun(4, 6, 2)).toBe("икмәктән");
    });
    
});