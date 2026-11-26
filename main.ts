import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "I spent my entire token budget writing the apology for missing this deadline, so the actual work never got a single token.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, entry, "utf8");
console.log(entry);
process.exit(0);
