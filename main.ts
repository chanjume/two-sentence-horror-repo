// Two-Sentence Horror
// Writes exactly two sentences (1-400 chars) to /output/entry.txt.
// The first sentence sets a concrete, verifiable fact — the doorbell
// camera, 2:47 a.m., the ninth night in a row. The second sentence turns
// it: the man shows a live feed of the narrator's own hallway, filmed
// from inside, six feet behind them — so the first sentence reads worse
// on a second read, and the horror is implied, not explained.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My doorbell camera caught the same man standing at my gate at 2:47 a.m. for the ninth night in a row, and tonight I finally opened the door to ask what he wanted. He smiled, held up his phone, and showed me a live feed of my own hallway \u2014 filmed from inside, six feet behind me.";

// Gate: the entry must be 1-400 characters of non-whitespace text.
if (LINE.length < 1 || LINE.length > 400 || !LINE.trim()) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-400`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
