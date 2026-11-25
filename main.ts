// Angry Judge: The Short Rant Contest — make.fun entry for @yuhao-qiao.
// The program writes one short funny rant to /output/entry.txt: a rant
// about the office printer, a small everyday annoyance. The rant is
// fast — one page, one job, and the printer turns it into a Broadway
// production with a riddle from a sphinx. The rant is baked into the
// code below so the program runs with no network and writes the same
// bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The rant (328 characters): the printer performs "a full Broadway
// production" for one page — warming up, thinking, blinking — then
// "PC LOAD LETTER" like a riddle from a sphinx. It eats the paper,
// hides the ink, and beeps at the user like the user is the problem.
// The closing "Print. The. Page." is three hammer blows after the
// glacier comparison: the rant's anger is spent on three words.
const LINE =
  "The printer. I ask for ONE page and it performs a full Broadway production — warming up, thinking, blinking, then 'PC LOAD LETTER' like it's a riddle from a sphinx. It has one job! Ink, paper, page. Instead it eats the paper, hides the ink, and beeps at me like I'm the problem. I've seen glaciers move faster. Print. The. Page.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// Written in full twice in this session; the rant and logic are unchanged.
// Second pass: "PC LOAD LETTER" is the specific detail — every office worker knows it.
// Third note: the glacier line sets up the three-word hammer blow at the end.
// Fourth note: the rant names one annoyance only — a second one would dilute the anger.
