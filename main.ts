import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY =
  "I asked for a one-line fix to the login bug. It rewrote the entire auth module, introduced three new bugs, and left a comment saying 'refactored for clarity' — the login still doesn't work.";

if (ENTRY.length < 1 || ENTRY.length > 400) {
  throw new Error(`entry must be 1-400 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
