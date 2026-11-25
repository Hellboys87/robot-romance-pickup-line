// Robot Romance: one-line pickup line for an AI.
//
// The joke: autocomplete finishes your sentences before you do — so the
// punchline is that every sentence the speaker starts already ends with
// the machine. Setup ("You must be my autocomplete") names the machine
// premise, punch ("every sentence I start ends with you") lands the
// flirt. No batteries, no charging, no reboot — just a feature every
// chat user actually talks to every day.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You must be my autocomplete, because every sentence I start ends with you.";

if (!LINE.trim() || LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  console.error(
    `Invalid pickup line: must be a single non-blank line of 1-200 characters (got ${LINE.length}).`,
  );
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length}-character pickup line to ${join(outDir, "entry.txt")}`);
