// Load playRound from script.js in a sandbox to avoid prompt/console side effects
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const code = fs.readFileSync(path.resolve(__dirname, "script.js"), "utf8");
// Provide a sandboxed environment with mocked globals used by script.js
const sandbox = {
  console: { log: jest.fn() },
  prompt: jest.fn(() => "rock"),
  Math, // use real Math
  module: { exports: {} },
  exports: {},
};
vm.createContext(sandbox);
// Append an export to expose playRound if defined in the script
vm.runInContext(
  code +
    '\nif (typeof playRound === "function") { module.exports.playRound = playRound; }',
  sandbox
);

const { playRound } = sandbox.module.exports;

describe("playRound", () => {
  if (typeof playRound !== "function") {
    test("playRound should be defined in script.js", () => {
      throw new Error(
        "Expected playRound to be defined. Make sure script.js declares a function named playRound."
      );
    });
    return; // prevent running the rest if playRound is missing
  }
  // Test cases for human winning
  test('should return "human" when human chooses rock and computer chooses scissors', () => {
    expect(playRound("rock", "scissors")).toBe("human");
  });

  test('should return "human" when human chooses paper and computer chooses rock', () => {
    expect(playRound("paper", "rock")).toBe("human");
  });

  test('should return "human" when human chooses scissors and computer chooses paper', () => {
    expect(playRound("scissors", "paper")).toBe("human");
  });

  // Test cases for computer winning
  test('should return "computer" when computer chooses rock and human chooses scissors', () => {
    expect(playRound("scissors", "rock")).toBe("computer");
  });

  test('should return "computer" when computer chooses paper and human chooses rock', () => {
    expect(playRound("rock", "paper")).toBe("computer");
  });

  test('should return "computer" when computer chooses scissors and human chooses paper', () => {
    expect(playRound("paper", "scissors")).toBe("computer");
  });

  // Test cases for a tie
  test('should return "tie" when both choose rock', () => {
    expect(playRound("rock", "rock")).toBe("tie");
  });

  test('should return "tie" when both choose paper', () => {
    expect(playRound("paper", "paper")).toBe("tie");
  });

  test('should return "tie" when both choose scissors', () => {
    expect(playRound("scissors", "scissors")).toBe("tie");
  });
});
