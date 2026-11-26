import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Payday cleared. " + "I bought my weights.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
