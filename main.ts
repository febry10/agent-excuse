import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const entry = "I spent my entire token budget writing the apology for missing this deadline, so the actual work never got a single token.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
chmodSync(outDir, 0o755);
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, entry, "utf8");
chmodSync(outPath, 0o644);
console.log(entry);
process.exit(0);
