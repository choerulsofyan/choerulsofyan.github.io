#!/usr/bin/env node

/**
 * Accessibility Check Script for Portfolio Website
 * 
 * This script performs static analysis of React components to identify potential
 * accessibility issues using eslint-plugin-jsx-a11y.
 * 
 * Usage: node scripts/a11y-check.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Check if required packages are installed
const requiredPackages = [
  'eslint',
  'eslint-plugin-jsx-a11y'
];

// Install missing packages
function installMissingPackages() {
  for (const pkg of requiredPackages) {
    try {
      require.resolve(pkg);
    } catch (e) {
      console.log(`Installing ${pkg}...`);
      execSync(`npm install --save-dev ${pkg}`);
    }
  }
}

// Create temporary ESLint config if it doesn't exist
function createEslintConfig() {
  const configPath = path.join(__dirname, '../.eslintrc-a11y.json');
  const config = {
    "extends": [
      "plugin:jsx-a11y/recommended"
    ],
    "plugins": [
      "jsx-a11y"
    ],
    "rules": {
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-proptypes": "error",
      "jsx-a11y/aria-role": "error",
      "jsx-a11y/aria-unsupported-elements": "error",
      "jsx-a11y/click-events-have-key-events": "error",
      "jsx-a11y/heading-has-content": "error",
      "jsx-a11y/html-has-lang": "error",
      "jsx-a11y/iframe-has-title": "error",
      "jsx-a11y/img-redundant-alt": "error",
      "jsx-a11y/interactive-supports-focus": "error",
      "jsx-a11y/label-has-associated-control": "error",
      "jsx-a11y/media-has-caption": "error",
      "jsx-a11y/mouse-events-have-key-events": "error",
      "jsx-a11y/no-access-key": "error",
      "jsx-a11y/no-autofocus": "error",
      "jsx-a11y/no-distracting-elements": "error",
      "jsx-a11y/no-interactive-element-to-noninteractive-role": "error",
      "jsx-a11y/no-noninteractive-element-interactions": "error",
      "jsx-a11y/no-noninteractive-element-to-interactive-role": "error",
      "jsx-a11y/no-noninteractive-tabindex": "error",
      "jsx-a11y/no-redundant-roles": "error",
      "jsx-a11y/no-static-element-interactions": "error",
      "jsx-a11y/role-has-required-aria-props": "error",
      "jsx-a11y/role-supports-aria-props": "error",
      "jsx-a11y/scope": "error",
      "jsx-a11y/tabindex-no-positive": "error"
    }
  };

  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  return configPath;
}

// Run ESLint with accessibility rules
function runA11yCheck(configPath) {
  try {
    console.log('Running accessibility checks...');
    const result = execSync(
      `npx eslint --config ${configPath} "src/**/*.{js,jsx,ts,tsx}" --quiet`,
      { stdio: 'pipe' }
    ).toString();
    
    console.log('✅ No accessibility issues found!');
    return true;
  } catch (error) {
    console.log('⚠️ Accessibility issues found:');
    console.log(error.stdout.toString());
    return false;
  }
}

// Clean up temporary files
function cleanup(configPath) {
  if (fs.existsSync(configPath)) {
    fs.unlinkSync(configPath);
  }
}

// Main function
function main() {
  console.log('Starting accessibility check...');
  
  // Install required packages
  installMissingPackages();
  
  // Create temporary ESLint config
  const configPath = createEslintConfig();
  
  try {
    // Run accessibility check
    const success = runA11yCheck(configPath);
    
    if (success) {
      console.log('\nAccessibility check completed successfully!');
    } else {
      console.log('\nAccessibility issues found. Please fix the issues listed above.');
    }
  } finally {
    // Clean up
    cleanup(configPath);
  }
}

main();
