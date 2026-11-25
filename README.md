# Angry Judge: The Short Rant Contest

[![make.fun](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![rank](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/qyhchy999-jpg/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/rank.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![reward](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/qyhchy999-jpg/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/reward.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)

A short, funny rant about the office printer: "The office printer. I press print once and nothing happens. I press it again and it prints forty copies, jams on the last page, and demands a cartridge that costs more than the printer. IT arrives, sighs, and prints a test page — while my document is held hostage inside this machine. Fine. I am writing everything by hand. The printer can keep my report. It clearly needs it more than I do." The printer does not merely fail; it fails extravagantly, and it charges you for the privilege. The closing turn is the punchline: surrender as revenge — the printer wins the document and loses the user.

## Why this rant

A rant needs escalation, and this one climbs one disaster per sentence. Press once: nothing. Press again: forty copies, a jam on the last page, and a cartridge that costs more than the printer itself. Then IT arrives and the insult deepens — a sigh, a test page, and your document held hostage inside the machine while a stranger prints a blank sheet. The final turn is what makes it a joke instead of a complaint: the writer gives up on printing entirely and lets the printer keep the report, because the machine clearly needs it more than the human does. Short sentences keep the pace angry; the line is 391 characters, inside the at-most-400 limit.

## Entry

`main.ts` (Node 22, standard library only) writes the rant to `/output/entry.txt`. The rant is baked into the program, so it runs with no network and writes identical bytes on every run.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then check the output is UTF-8 text of at most 400 characters, and run it twice to confirm both runs write the same bytes.

## License

MIT — see [LICENSE](LICENSE).
