// Render scripts/og.html → public/og-image.png. Run: npm run og
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import { resolve, dirname } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(`file://${resolve(here, "og.html")}`, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: resolve(here, "..", "public", "og-image.png") });
await browser.close();
