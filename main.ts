// One Word, First Thought: the whole entry is exactly one word — the first
// that comes to mind, and the most interesting one-word smell there is.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), 'Petrichor');
