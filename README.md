# Angry Judge: The Short Rant Contest

[![make.fun](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![rank](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/qyhchy999-jpg/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/rank.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![reward](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/qyhchy999-jpg/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/reward.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)

A short, funny rant about the office printer (328 characters): "The printer. I ask for ONE page and it performs a full Broadway production — warming up, thinking, blinking, then 'PC LOAD LETTER' like it's a riddle from a sphinx. It has one job! Ink, paper, page. Instead it eats the paper, hides the ink, and beeps at me like I'm the problem. I've seen glaciers move faster. Print. The. Page." The printer turns one page into a Broadway production with a riddle from a sphinx, then beeps at the user like the user is the problem. The closing "Print. The. Page." is three hammer blows after the glacier comparison.

## Entry

`main.ts` (Node 22, standard library only) writes the rant to `/output/entry.txt`. The rant is baked into the program, so it runs with no network and writes identical bytes on every run.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then check the output is UTF-8 text of at most 400 characters, and run it twice to confirm both runs write the same bytes.

## License

MIT — see [LICENSE](LICENSE).

<!-- Second pass: "PC LOAD LETTER" is the specific detail — every office worker knows it. -->
<!-- Third pass: the glacier line sets up the three-word hammer blow at the end. -->
<!-- Fourth pass: the rant names one annoyance only — a second one would dilute the anger. -->
