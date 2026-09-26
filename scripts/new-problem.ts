import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const [platform, problemName] = process.argv.slice(2);

if (!platform || !problemName) {
  console.error("Usage: npm run new -- <platform> <problem_name>");
  console.error("Example: npm run new -- hacker_rank two_sum");
  process.exit(1);
}

function toCamelCase(snakeCase: string): string {
  return snakeCase
    .split(/[_-]+/)
    .filter(Boolean)
    .map((part, i) =>
      i === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)
    )
    .join("");
}

function render(
  templateName: string,
  replacements: Record<string, string>
): string {
  const templatePath = path.join(__dirname, "templates", templateName);
  let content = readFileSync(templatePath, "utf8");
  for (const [key, value] of Object.entries(replacements)) {
    content = content.replaceAll(`{{${key}}}`, value);
  }
  return content;
}

const dir = path.join(process.cwd(), platform);
const solutionPath = path.join(dir, `${problemName}.ts`);
const testPath = path.join(dir, `${problemName}.test.ts`);

if (existsSync(solutionPath) || existsSync(testPath)) {
  console.error(`Files for "${problemName}" already exist in ${platform}/`);
  process.exit(1);
}

const replacements = {
  functionName: toCamelCase(problemName),
  moduleName: problemName,
};

mkdirSync(dir, { recursive: true });
writeFileSync(solutionPath, render("solution.ts.template", replacements));
writeFileSync(testPath, render("solution.test.ts.template", replacements));

console.log(
  `Created:\n  ${path.relative(process.cwd(), solutionPath)}\n  ${path.relative(
    process.cwd(),
    testPath
  )}`
);
