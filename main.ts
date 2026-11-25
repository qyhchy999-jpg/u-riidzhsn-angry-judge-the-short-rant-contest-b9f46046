// Angry Judge: The Short Rant Contest — make.fun entry for @yuhao-qiao.
// The program writes one short funny rant to /output/entry.txt: a rant
// about the self-checkout machine, a small everyday annoyance. The rant
// is fast — one item, one accusation, and the machine turns a banana
// into a theft charge in front of a queue. The rant is baked into the
// code below so the program runs with no network and writes the same
// bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The rant: the machine's own error message does the whole joke —
// "Unexpected item in the bagging area" — and the item is the bag. A
// human presses one button and walks away like this is normal, while
// the machine has already decided the shopper is a criminal. The
// closing turn is the punchline: if honesty gets you accused of theft,
// theft is the only way to earn respect in this store.
const LINE =
  "The self-checkout machine. I scan one item and it accuses me of theft in front of a queue: 'Unexpected item in the bagging area.' The item is the bag. A human comes over, presses one button, and walks away like this is normal. I have scanned a banana. The machine has decided I am a criminal. Fine — from now on I am stealing everything. It is the only way to get respect in this store.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// Written in full twice in this session; the rant and logic are unchanged.
// Second pass: the quoted error message is the joke — the machine accuses you in its own words.
// Third note: "The item is the bag" is the reversal — the accusation is about the bag itself.
// Fourth note: the human pressing one button is the real insult — the machine needed a babysitter.
// Fifth note: the banana is the evidence — one scanned banana, one criminal record.
