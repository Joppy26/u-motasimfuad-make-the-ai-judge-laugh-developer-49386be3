import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "It passed every test in staging, turns out staging was just production in a fake mustache and a trench coat.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
