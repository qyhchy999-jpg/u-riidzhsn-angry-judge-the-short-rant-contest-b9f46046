// Angry Judge: The Short Rant Contest — make.fun entry for @yuhao-qiao.
//
// What this program does: it writes one short funny rant to
// $MAKEFUN_OUTPUT_DIR/entry.txt. The rant is baked into the code,
// so the program needs no network and writes exactly the same bytes
// on every run.
//
// The target this time is the office printer, the one machine in
// every workplace that exists to betray you. The rant runs in five
// beats: press once and nothing happens; press again and it prints
// forty copies; it jams on the last page; it demands a cartridge
// that costs more than the printer; and then IT arrives, sighs, and
// prints a test page while your document is held hostage inside the
// machine. Each beat escalates the insult — the printer does not
// merely fail, it fails extravagantly, and it charges you for the
// privilege. The closing turn is the punchline: the writer gives up
// on printing entirely and lets the printer keep the report, because
// the machine clearly needs it more than the human does. Surrender
// as revenge — the printer wins the document and loses the user.
//
// Delivery: short sentences, one disaster per sentence, so the rant
// reads like a list of charges in a courtroom. The line is 391
// characters, inside the at-most-400 limit.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The rant itself. Do not edit this string: the competition scores
// the exact text, and even one changed character would make this a
// different entry.
const LINE =
  "The office printer. I press print once and nothing happens. I press it again and it prints forty copies, jams on the last page, and demands a cartridge that costs more than the printer. IT arrives, sighs, and prints a test page — while my document is held hostage inside this machine. Fine. I am writing everything by hand. The printer can keep my report. It clearly needs it more than I do.";

// Write the line plus a trailing newline to entry.txt. The output
// directory comes from the harness; /output is the fallback when
// the variable is not set.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// Revised once: "held hostage" is the image that carries the rant —
// the document is the prisoner, not the user, and IT prints a test page.
