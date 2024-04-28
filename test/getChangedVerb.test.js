import { describe, expect, test } from "@jest/globals";
import { getChangedVerb } from "../src/utils";

describe("verb endings", () => {
    test("Алырга в прошедшем", () => {
        expect(getChangedVerb(1, 1, 1, 2)).toBe("алдым");
        expect(getChangedVerb(1, 2, 1, 2)).toBe("алдың");
        expect(getChangedVerb(1, 3, 1, 2)).toBe("алды");
        expect(getChangedVerb(1, 4, 1, 2)).toBe("алдык");
        expect(getChangedVerb(1, 5, 1, 2)).toBe("алдыгыз");
        expect(getChangedVerb(1, 6, 1, 2)).toBe("алды(лар)");
    });
    test("Алырга в прошедшем с отрицанием", () => {
        expect(getChangedVerb(1, 1, 1, 1)).toBe("алмадым");
        expect(getChangedVerb(1, 2, 1, 1)).toBe("алмадың");
        expect(getChangedVerb(1, 3, 1, 1)).toBe("алмады");
        expect(getChangedVerb(1, 4, 1, 1)).toBe("алмадык");
        expect(getChangedVerb(1, 5, 1, 1)).toBe("алмадыгыз");
        expect(getChangedVerb(1, 6, 1, 1)).toBe("алмады(лар)");
    });
    test("Алырга в настоящем", () => {
        expect(getChangedVerb(1, 1, 2, 2)).toBe("алам");
        expect(getChangedVerb(1, 2, 2, 2)).toBe("аласың");
        expect(getChangedVerb(1, 3, 2, 2)).toBe("ала");
        expect(getChangedVerb(1, 4, 2, 2)).toBe("алабыз");
        expect(getChangedVerb(1, 5, 2, 2)).toBe("аласыз");
        expect(getChangedVerb(1, 6, 2, 2)).toBe("алалар");
    });
    test("Алырга в настоящем с отрицанием", () => {
        expect(getChangedVerb(1, 1, 2, 1)).toBe("алмыйм");
        expect(getChangedVerb(1, 2, 2, 1)).toBe("алмыйсың");
        expect(getChangedVerb(1, 3, 2, 1)).toBe("алмый");
        expect(getChangedVerb(1, 4, 2, 1)).toBe("алмыйбыз");
        expect(getChangedVerb(1, 5, 2, 1)).toBe("алмыйсыз");
        expect(getChangedVerb(1, 6, 2, 1)).toBe("алмыйлар");
    });
    test("Алырга в будущем", () => {
        expect(getChangedVerb(1, 1, 3, 2)).toBe("алырмын");
        expect(getChangedVerb(1, 2, 3, 2)).toBe("алырсың");
        expect(getChangedVerb(1, 3, 3, 2)).toBe("алыр");
        expect(getChangedVerb(1, 4, 3, 2)).toBe("алырбыз");
        expect(getChangedVerb(1, 5, 3, 2)).toBe("алырсыз");
        expect(getChangedVerb(1, 6, 3, 2)).toBe("алырлар");
    });
    test("Алырга в будущем с отрицанием", () => {
        expect(getChangedVerb(1, 1, 3, 1)).toBe("алмам");
        expect(getChangedVerb(1, 2, 3, 1)).toBe("алмассың");
        expect(getChangedVerb(1, 3, 3, 1)).toBe("алмас");
        expect(getChangedVerb(1, 4, 3, 1)).toBe("алмабыз");
        expect(getChangedVerb(1, 5, 3, 1)).toBe("алмассыз");
        expect(getChangedVerb(1, 6, 3, 1)).toBe("алмаслар");
    });
    test("Килергә в прошедшем", () => {
        expect(getChangedVerb(2, 1, 1, 2)).toBe("килдем");
        expect(getChangedVerb(2, 2, 1, 2)).toBe("килдең");
        expect(getChangedVerb(2, 3, 1, 2)).toBe("килде");
        expect(getChangedVerb(2, 4, 1, 2)).toBe("килдек");
        expect(getChangedVerb(2, 5, 1, 2)).toBe("килдегез");
        expect(getChangedVerb(2, 6, 1, 2)).toBe("килде(ләр)");
    });
    test("Килергә в прошедшем с отрицанием", () => {
        expect(getChangedVerb(2, 1, 1, 1)).toBe("килмәдем");
        expect(getChangedVerb(2, 2, 1, 1)).toBe("килмәдең");
        expect(getChangedVerb(2, 3, 1, 1)).toBe("килмәде");
        expect(getChangedVerb(2, 4, 1, 1)).toBe("килмәдек");
        expect(getChangedVerb(2, 5, 1, 1)).toBe("килмәдегез");
        expect(getChangedVerb(2, 6, 1, 1)).toBe("килмәде(ләр)");
    });
    test("Килергә в настоящем", () => {
        expect(getChangedVerb(2, 1, 2, 2)).toBe("киләм");
        expect(getChangedVerb(2, 2, 2, 2)).toBe("киләсең");
        expect(getChangedVerb(2, 3, 2, 2)).toBe("килә");
        expect(getChangedVerb(2, 4, 2, 2)).toBe("киләбез");
        expect(getChangedVerb(2, 5, 2, 2)).toBe("киләсез");
        expect(getChangedVerb(2, 6, 2, 2)).toBe("киләләр");
    });
    test("Килергә в настоящем с отрицанием", () => {
        expect(getChangedVerb(2, 1, 2, 1)).toBe("килмим");
        expect(getChangedVerb(2, 2, 2, 1)).toBe("килмисең");
        expect(getChangedVerb(2, 3, 2, 1)).toBe("килми");
        expect(getChangedVerb(2, 4, 2, 1)).toBe("килмибез");
        expect(getChangedVerb(2, 5, 2, 1)).toBe("килмисез");
        expect(getChangedVerb(2, 6, 2, 1)).toBe("килмиләр");
    });
    test("Килергә в будущем", () => {
        expect(getChangedVerb(2, 1, 3, 2)).toBe("килермен");
        expect(getChangedVerb(2, 2, 3, 2)).toBe("килерсең");
        expect(getChangedVerb(2, 3, 3, 2)).toBe("килер");
        expect(getChangedVerb(2, 4, 3, 2)).toBe("килербез");
        expect(getChangedVerb(2, 5, 3, 2)).toBe("килерсез");
        expect(getChangedVerb(2, 6, 3, 2)).toBe("килерләр");
    });
    test("Килергә в будущем с отрицанием", () => {
        expect(getChangedVerb(2, 1, 3, 1)).toBe("килмәм");
        expect(getChangedVerb(2, 2, 3, 1)).toBe("килмәссең");
        expect(getChangedVerb(2, 3, 3, 1)).toBe("килмәс");
        expect(getChangedVerb(2, 4, 3, 1)).toBe("килмәбез");
        expect(getChangedVerb(2, 5, 3, 1)).toBe("килмәссез");
        expect(getChangedVerb(2, 6, 3, 1)).toBe("килмәсләр");
    });
    test("Уйларга в прошедшем", () => {
        expect(getChangedVerb(3, 1, 1, 2)).toBe("уйладым");
        expect(getChangedVerb(3, 2, 1, 2)).toBe("уйладың");
        expect(getChangedVerb(3, 3, 1, 2)).toBe("уйлады");
        expect(getChangedVerb(3, 4, 1, 2)).toBe("уйладык");
        expect(getChangedVerb(3, 5, 1, 2)).toBe("уйладыгыз");
        expect(getChangedVerb(3, 6, 1, 2)).toBe("уйлады(лар)");
    });
    test("Уйларга в прошедшем с отрицанием", () => {
        expect(getChangedVerb(3, 1, 1, 1)).toBe("уйламадым");
        expect(getChangedVerb(3, 2, 1, 1)).toBe("уйламадың");
        expect(getChangedVerb(3, 3, 1, 1)).toBe("уйламады");
        expect(getChangedVerb(3, 4, 1, 1)).toBe("уйламадык");
        expect(getChangedVerb(3, 5, 1, 1)).toBe("уйламадыгыз");
        expect(getChangedVerb(3, 6, 1, 1)).toBe("уйламады(лар)");
    });
    test("Уйларга в настоящем", () => {
        expect(getChangedVerb(3, 1, 2, 2)).toBe("уйлыйм");
        expect(getChangedVerb(3, 2, 2, 2)).toBe("уйлыйсың");
        expect(getChangedVerb(3, 3, 2, 2)).toBe("уйлый");
        expect(getChangedVerb(3, 4, 2, 2)).toBe("уйлыйбыз");
        expect(getChangedVerb(3, 5, 2, 2)).toBe("уйлыйсыз");
        expect(getChangedVerb(3, 6, 2, 2)).toBe("уйлыйлар");
    });
    test("Уйларга в настоящем с отрицанием", () => {
        expect(getChangedVerb(3, 1, 2, 1)).toBe("уйламыйм");
        expect(getChangedVerb(3, 2, 2, 1)).toBe("уйламыйсың");
        expect(getChangedVerb(3, 3, 2, 1)).toBe("уйламый");
        expect(getChangedVerb(3, 4, 2, 1)).toBe("уйламыйбыз");
        expect(getChangedVerb(3, 5, 2, 1)).toBe("уйламыйсыз");
        expect(getChangedVerb(3, 6, 2, 1)).toBe("уйламыйлар");
    });
    test("Уйларга в будущем", () => {
        expect(getChangedVerb(3, 1, 3, 2)).toBe("уйлармын");
        expect(getChangedVerb(3, 2, 3, 2)).toBe("уйларсың");
        expect(getChangedVerb(3, 3, 3, 2)).toBe("уйлар");
        expect(getChangedVerb(3, 4, 3, 2)).toBe("уйларбыз");
        expect(getChangedVerb(3, 5, 3, 2)).toBe("уйларсыз");
        expect(getChangedVerb(3, 6, 3, 2)).toBe("уйларлар");
    });
    test("Уйларга в будущем с отрицанием", () => {
        expect(getChangedVerb(3, 1, 3, 1)).toBe("уйламам");
        expect(getChangedVerb(3, 2, 3, 1)).toBe("уйламассың");
        expect(getChangedVerb(3, 3, 3, 1)).toBe("уйламас");
        expect(getChangedVerb(3, 4, 3, 1)).toBe("уйламабыз");
        expect(getChangedVerb(3, 5, 3, 1)).toBe("уйламассыз");
        expect(getChangedVerb(3, 6, 3, 1)).toBe("уйламаслар");
    });
    test("Эшләргә в прошедшем", () => {
        expect(getChangedVerb(4, 1, 1, 2)).toBe("эшләдем");
        expect(getChangedVerb(4, 2, 1, 2)).toBe("эшләдең");
        expect(getChangedVerb(4, 3, 1, 2)).toBe("эшләде");
        expect(getChangedVerb(4, 4, 1, 2)).toBe("эшләдек");
        expect(getChangedVerb(4, 5, 1, 2)).toBe("эшләдегез");
        expect(getChangedVerb(4, 6, 1, 2)).toBe("эшләде(ләр)");
    });
    test("Эшләргә в прошедшем с отрицанием", () => {
        expect(getChangedVerb(4, 1, 1, 1)).toBe("эшләмәдем");
        expect(getChangedVerb(4, 2, 1, 1)).toBe("эшләмәдең");
        expect(getChangedVerb(4, 3, 1, 1)).toBe("эшләмәде");
        expect(getChangedVerb(4, 4, 1, 1)).toBe("эшләмәдек");
        expect(getChangedVerb(4, 5, 1, 1)).toBe("эшләмәдегез");
        expect(getChangedVerb(4, 6, 1, 1)).toBe("эшләмәде(ләр)");
    });
    test("Эшләргә в настоящем", () => {
        expect(getChangedVerb(4, 1, 2, 2)).toBe("эшлим");
        expect(getChangedVerb(4, 2, 2, 2)).toBe("эшлисең");
        expect(getChangedVerb(4, 3, 2, 2)).toBe("эшли");
        expect(getChangedVerb(4, 4, 2, 2)).toBe("эшлибез");
        expect(getChangedVerb(4, 5, 2, 2)).toBe("эшлисез");
        expect(getChangedVerb(4, 6, 2, 2)).toBe("эшлиләр");
    });
    test("Эшләргә в настоящем с отрицанием", () => {
        expect(getChangedVerb(4, 1, 2, 1)).toBe("эшләмим");
        expect(getChangedVerb(4, 2, 2, 1)).toBe("эшләмисең");
        expect(getChangedVerb(4, 3, 2, 1)).toBe("эшләми");
        expect(getChangedVerb(4, 4, 2, 1)).toBe("эшләмибез");
        expect(getChangedVerb(4, 5, 2, 1)).toBe("эшләмисез");
        expect(getChangedVerb(4, 6, 2, 1)).toBe("эшләмиләр");
    });
    test("Эшләргә в будущем", () => {
        expect(getChangedVerb(4, 1, 3, 2)).toBe("эшләрмен");
        expect(getChangedVerb(4, 2, 3, 2)).toBe("эшләрсең");
        expect(getChangedVerb(4, 3, 3, 2)).toBe("эшләр");
        expect(getChangedVerb(4, 4, 3, 2)).toBe("эшләрбез");
        expect(getChangedVerb(4, 5, 3, 2)).toBe("эшләрсез");
        expect(getChangedVerb(4, 6, 3, 2)).toBe("эшләрләр");
    });
    test("Эшләргә в будущем с отрицанием", () => {
        expect(getChangedVerb(4, 1, 3, 1)).toBe("эшләмәм");
        expect(getChangedVerb(4, 2, 3, 1)).toBe("эшләмәссең");
        expect(getChangedVerb(4, 3, 3, 1)).toBe("эшләмәс");
        expect(getChangedVerb(4, 4, 3, 1)).toBe("эшләмәбез");
        expect(getChangedVerb(4, 5, 3, 1)).toBe("эшләмәссез");
        expect(getChangedVerb(4, 6, 3, 1)).toBe("эшләмәсләр");
    });
    test("Китәргә в прошедшем", () => {
        expect(getChangedVerb(14, 1, 1, 2)).toBe("киттем");
        expect(getChangedVerb(14, 2, 1, 2)).toBe("киттең");
        expect(getChangedVerb(14, 3, 1, 2)).toBe("китте");
        expect(getChangedVerb(14, 4, 1, 2)).toBe("киттек");
        expect(getChangedVerb(14, 5, 1, 2)).toBe("киттегез");
        expect(getChangedVerb(14, 6, 1, 2)).toBe("китте(ләр)");
    });
    test("Китәргә в прошедшем с отрицанием", () => {
        expect(getChangedVerb(14, 1, 1, 1)).toBe("китмәдем");
        expect(getChangedVerb(14, 2, 1, 1)).toBe("китмәдең");
        expect(getChangedVerb(14, 3, 1, 1)).toBe("китмәде");
        expect(getChangedVerb(14, 4, 1, 1)).toBe("китмәдек");
        expect(getChangedVerb(14, 5, 1, 1)).toBe("китмәдегез");
        expect(getChangedVerb(14, 6, 1, 1)).toBe("китмәде(ләр)");
    });
    test("Китәргә в настоящем", () => {
        expect(getChangedVerb(14, 1, 2, 2)).toBe("китәм");
        expect(getChangedVerb(14, 2, 2, 2)).toBe("китәсең");
        expect(getChangedVerb(14, 3, 2, 2)).toBe("китә");
        expect(getChangedVerb(14, 4, 2, 2)).toBe("китәбез");
        expect(getChangedVerb(14, 5, 2, 2)).toBe("китәсез");
        expect(getChangedVerb(14, 6, 2, 2)).toBe("китәләр");
    });
    test("Китәргә в настоящем с отрицанием", () => {
        expect(getChangedVerb(14, 1, 2, 1)).toBe("китмим");
        expect(getChangedVerb(14, 2, 2, 1)).toBe("китмисең");
        expect(getChangedVerb(14, 3, 2, 1)).toBe("китми");
        expect(getChangedVerb(14, 4, 2, 1)).toBe("китмибез");
        expect(getChangedVerb(14, 5, 2, 1)).toBe("китмисез");
        expect(getChangedVerb(14, 6, 2, 1)).toBe("китмиләр");
    });
    test("Китәргә в будущем", () => {
        expect(getChangedVerb(14, 1, 3, 2)).toBe("китәрмен");
        expect(getChangedVerb(14, 2, 3, 2)).toBe("китәрсең");
        expect(getChangedVerb(14, 3, 3, 2)).toBe("китәр");
        expect(getChangedVerb(14, 4, 3, 2)).toBe("китәрбез");
        expect(getChangedVerb(14, 5, 3, 2)).toBe("китәрсез");
        expect(getChangedVerb(14, 6, 3, 2)).toBe("китәрләр");
    });
    test("Китәргә в будущем с отрицанием", () => {
        expect(getChangedVerb(14, 1, 3, 1)).toBe("китмәм");
        expect(getChangedVerb(14, 2, 3, 1)).toBe("китмәссең");
        expect(getChangedVerb(14, 3, 3, 1)).toBe("китмәс");
        expect(getChangedVerb(14, 4, 3, 1)).toBe("китмәбез");
        expect(getChangedVerb(14, 5, 3, 1)).toBe("китмәссез");
        expect(getChangedVerb(14, 6, 3, 1)).toBe("китмәсләр");
    });
    test("Сатарга в прошедшем", () => {
        expect(getChangedVerb(54, 1, 1, 2)).toBe("саттым");
        expect(getChangedVerb(54, 2, 1, 2)).toBe("саттың");
        expect(getChangedVerb(54, 3, 1, 2)).toBe("сатты");
        expect(getChangedVerb(54, 4, 1, 2)).toBe("саттык");
        expect(getChangedVerb(54, 5, 1, 2)).toBe("саттыгыз");
        expect(getChangedVerb(54, 6, 1, 2)).toBe("сатты(лар)");
    });
    test("Сатарга в прошедшем с отрицанием", () => {
        expect(getChangedVerb(54, 1, 1, 1)).toBe("сатмадым");
        expect(getChangedVerb(54, 2, 1, 1)).toBe("сатмадың");
        expect(getChangedVerb(54, 3, 1, 1)).toBe("сатмады");
        expect(getChangedVerb(54, 4, 1, 1)).toBe("сатмадык");
        expect(getChangedVerb(54, 5, 1, 1)).toBe("сатмадыгыз");
        expect(getChangedVerb(54, 6, 1, 1)).toBe("сатмады(лар)");
    });
    test("Сатарга в настоящем", () => {
        expect(getChangedVerb(54, 1, 2, 2)).toBe("сатам");
        expect(getChangedVerb(54, 2, 2, 2)).toBe("сатасың");
        expect(getChangedVerb(54, 3, 2, 2)).toBe("сата");
        expect(getChangedVerb(54, 4, 2, 2)).toBe("сатабыз");
        expect(getChangedVerb(54, 5, 2, 2)).toBe("сатасыз");
        expect(getChangedVerb(54, 6, 2, 2)).toBe("саталар");
    });
    test("Сатарга в настоящем с отрицанием", () => {
        expect(getChangedVerb(54, 1, 2, 1)).toBe("сатмыйм");
        expect(getChangedVerb(54, 2, 2, 1)).toBe("сатмыйсың");
        expect(getChangedVerb(54, 3, 2, 1)).toBe("сатмый");
        expect(getChangedVerb(54, 4, 2, 1)).toBe("сатмыйбыз");
        expect(getChangedVerb(54, 5, 2, 1)).toBe("сатмыйсыз");
        expect(getChangedVerb(54, 6, 2, 1)).toBe("сатмыйлар");
    });
    test("Сатарга в будущем", () => {
        expect(getChangedVerb(54, 1, 3, 2)).toBe("сатармын");
        expect(getChangedVerb(54, 2, 3, 2)).toBe("сатарсың");
        expect(getChangedVerb(54, 3, 3, 2)).toBe("сатар");
        expect(getChangedVerb(54, 4, 3, 2)).toBe("сатарбыз");
        expect(getChangedVerb(54, 5, 3, 2)).toBe("сатарсыз");
        expect(getChangedVerb(54, 6, 3, 2)).toBe("сатарлар");
    });
    test("Сатарга в будущем с отрицанием", () => {
        expect(getChangedVerb(54, 1, 3, 1)).toBe("сатмам");
        expect(getChangedVerb(54, 2, 3, 1)).toBe("сатмассың");
        expect(getChangedVerb(54, 3, 3, 1)).toBe("сатмас");
        expect(getChangedVerb(54, 4, 3, 1)).toBe("сатмабыз");
        expect(getChangedVerb(54, 5, 3, 1)).toBe("сатмассыз");
        expect(getChangedVerb(54, 6, 3, 1)).toBe("сатмаслар");
    });
    test("Табарга в прошедшем", () => {
        expect(getChangedVerb(41, 1, 1, 2)).toBe("таптым");
        expect(getChangedVerb(41, 2, 1, 2)).toBe("таптың");
        expect(getChangedVerb(41, 3, 1, 2)).toBe("тапты");
        expect(getChangedVerb(41, 4, 1, 2)).toBe("таптык");
        expect(getChangedVerb(41, 5, 1, 2)).toBe("таптыгыз");
        expect(getChangedVerb(41, 6, 1, 2)).toBe("тапты(лар)");
    });
    test("Табарга в прошедшем с отрицанием", () => {
        expect(getChangedVerb(41, 1, 1, 1)).toBe("тапмадым");
        expect(getChangedVerb(41, 2, 1, 1)).toBe("тапмадың");
        expect(getChangedVerb(41, 3, 1, 1)).toBe("тапмады");
        expect(getChangedVerb(41, 4, 1, 1)).toBe("тапмадык");
        expect(getChangedVerb(41, 5, 1, 1)).toBe("тапмадыгыз");
        expect(getChangedVerb(41, 6, 1, 1)).toBe("тапмады(лар)");
    });
    test("Табарга в настоящем", () => {
        expect(getChangedVerb(41, 1, 2, 2)).toBe("табам");
        expect(getChangedVerb(41, 2, 2, 2)).toBe("табасың");
        expect(getChangedVerb(41, 3, 2, 2)).toBe("таба");
        expect(getChangedVerb(41, 4, 2, 2)).toBe("табабыз");
        expect(getChangedVerb(41, 5, 2, 2)).toBe("табасыз");
        expect(getChangedVerb(41, 6, 2, 2)).toBe("табалар");
    });
    test("Табарга в настоящем с отрицанием", () => {
        expect(getChangedVerb(41, 1, 2, 1)).toBe("тапмыйм");
        expect(getChangedVerb(41, 2, 2, 1)).toBe("тапмыйсың");
        expect(getChangedVerb(41, 3, 2, 1)).toBe("тапмый");
        expect(getChangedVerb(41, 4, 2, 1)).toBe("тапмыйбыз");
        expect(getChangedVerb(41, 5, 2, 1)).toBe("тапмыйсыз");
        expect(getChangedVerb(41, 6, 2, 1)).toBe("тапмыйлар");
    });
    test("Табарга в будущем", () => {
        expect(getChangedVerb(41, 1, 3, 2)).toBe("табармын");
        expect(getChangedVerb(41, 2, 3, 2)).toBe("табарсың");
        expect(getChangedVerb(41, 3, 3, 2)).toBe("табар");
        expect(getChangedVerb(41, 4, 3, 2)).toBe("табарбыз");
        expect(getChangedVerb(41, 5, 3, 2)).toBe("табарсыз");
        expect(getChangedVerb(41, 6, 3, 2)).toBe("табарлар");
    });
    test("Табарга в будущем с отрицанием", () => {
        expect(getChangedVerb(41, 1, 3, 1)).toBe("тапмам");
        expect(getChangedVerb(41, 2, 3, 1)).toBe("тапмассың");
        expect(getChangedVerb(41, 3, 3, 1)).toBe("тапмас");
        expect(getChangedVerb(41, 4, 3, 1)).toBe("тапмабыз");
        expect(getChangedVerb(41, 5, 3, 1)).toBe("тапмассыз");
        expect(getChangedVerb(41, 6, 3, 1)).toBe("тапмаслар");
    });
});
