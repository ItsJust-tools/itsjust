import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

const REPO_ROOT = path.resolve(__dirname, '../..');

describe('README.md', () => {
  const readmePath = path.join(REPO_ROOT, 'README.md');
  const readme = fs.readFileSync(readmePath, 'utf-8');

  it('exists and is not empty', () => {
    expect(readme.length).toBeGreaterThan(0);
  });

  it('has a title', () => {
    expect(readme).toContain('# itsjust.tools');
  });

  it('has a license section', () => {
    expect(readme).toContain('MIT');
  });

  it('has a contributing section', () => {
    expect(readme).toMatch(/contributing/i);
  });

  it('has a development section', () => {
    expect(readme).toMatch(/development/i);
  });

  it('references the template repo', () => {
    expect(readme).toMatch(/template/i);
  });
});

describe('package.json', () => {
  const pkgPath = path.join(REPO_ROOT, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

  it('exists and is valid JSON', () => {
    expect(pkg.name).toBe('itsjust');
  });

  it('has a license field', () => {
    expect(pkg.license).toBe('MIT');
  });
});

describe('Repository files', () => {
  it('has a .gitignore', () => {
    expect(fs.existsSync(path.join(REPO_ROOT, '.gitignore'))).toBe(true);
  });

  it('has a LICENSE file', () => {
    expect(fs.existsSync(path.join(REPO_ROOT, 'LICENSE'))).toBe(true);
    const license = fs.readFileSync(path.join(REPO_ROOT, 'LICENSE'), 'utf-8');
    expect(license).toContain('MIT');
  });

  it('has a .env.example file', () => {
    expect(fs.existsSync(path.join(REPO_ROOT, '.env.example'))).toBe(true);
  });
});