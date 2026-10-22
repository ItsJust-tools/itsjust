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

  it('documents defensive LocalStorage persistence handling', () => {
    expect(readme).toMatch(/localStorage/i);
    expect(readme).toMatch(/sessionStorage/i);
    expect(readme).toMatch(/QuotaExceededError/);
    expect(readme).toMatch(/SecurityError/);
    expect(readme).toMatch(/try\/catch/);
    expect(readme).toMatch(/toast/);
    expect(readme).toMatch(/private\/incognito/i);
  });

  it('documents the Clipboard API graceful fallback', () => {
    expect(readme).toMatch(/clipboard/i);
    expect(readme).toMatch(/navigator\.clipboard\.writeText/);
    expect(readme).toMatch(/execCommand\(['"]copy['"]\)/);
    expect(readme).toMatch(/textarea/);
    expect(readme).toMatch(/off-screen/i);
  });

  it('documents suppression of user-abort AbortError in useShare', () => {
    expect(readme).toMatch(/navigator\.share/);
    expect(readme).toMatch(/AbortError/);
    expect(readme).toMatch(/use-share\.ts/);
  });

  it('documents the Skip to content bypass link (WCAG 2.2 AAA)', () => {
    expect(readme).toMatch(/skip to content/i);
    expect(readme).toContain('href="#main-content"');
    expect(readme).toMatch(/main-content/);
    expect(readme).toMatch(/2\.4\.1/);
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

  it('has a typecheck script', () => {
    expect(pkg.scripts.typecheck).toBeDefined();
  });

  it('has a format script', () => {
    expect(pkg.scripts.format).toBeDefined();
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

describe('tsconfig.json', () => {
  const tsconfigPath = path.join(REPO_ROOT, 'tsconfig.json');
  const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf-8'));

  it('exists and is valid JSON', () => {
    expect(tsconfig.compilerOptions).toBeDefined();
  });

  it('has strict mode enabled', () => {
    expect(tsconfig.compilerOptions.strict).toBe(true);
  });

  it('has noEmit enabled', () => {
    expect(tsconfig.compilerOptions.noEmit).toBe(true);
  });
});

describe('CI configuration', () => {
  it('has a CI workflow', () => {
    const ciPath = path.join(REPO_ROOT, '.github/workflows/ci.yml');
    expect(fs.existsSync(ciPath)).toBe(true);
  });

  it('has a labeler workflow', () => {
    const labelerPath = path.join(REPO_ROOT, '.github/workflows/labeler.yml');
    expect(fs.existsSync(labelerPath)).toBe(true);
  });

  it('has a stale issue management workflow', () => {
    const stalePath = path.join(REPO_ROOT, '.github/workflows/stale.yml');
    expect(fs.existsSync(stalePath)).toBe(true);
  });

  it('has Prettier config', () => {
    expect(fs.existsSync(path.join(REPO_ROOT, '.prettierrc'))).toBe(true);
  });
});

describe('CI/CD badges', () => {
  const readmePath = path.join(REPO_ROOT, 'README.md');
  const readme = fs.readFileSync(readmePath, 'utf-8');

  it('includes the CI badge for itsjust', () => {
    expect(readme).toContain(
      'https://github.com/ItsJust-tools/itsjust/actions/workflows/ci.yml/badge.svg',
    );
  });

  it('includes all tool CI badges', () => {
    const tools = [
      'blob-generator',
      'calculator',
      'calendar',
      'color-picker',
      'config-converter',
      'contrast-checker',
      'countdown',
      'cron',
      'css-filter-visualizer',
      'data-uri-builder',
      'diff-viewer',
      'Equation',
      'gitignore-generator',
      'json-formatter',
      'Notepad',
      'password-generator',
      'qr-code',
      'sql-formatter',
      'svg-editor',
      'system-config-builder',
      'systemd-builder',
      'template',
      'text-case-converter',
      'vision-deficiency-simulator',
    ];
    for (const tool of tools) {
      expect(readme).toContain(
        `https://github.com/ItsJust-tools/${tool}/actions/workflows/ci.yml/badge.svg`,
      );
    }
  });
});
