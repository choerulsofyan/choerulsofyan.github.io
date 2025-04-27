#!/usr/bin/env node

/**
 * Bundle Analysis Script for Portfolio Website
 * 
 * This script analyzes the Next.js bundle size and performance metrics
 * to help identify performance bottlenecks and optimize the website.
 * 
 * Usage: node scripts/analyze-bundle.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Check if required packages are installed
const requiredPackages = [
  '@next/bundle-analyzer'
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

// Update next.config.js to include bundle analyzer
function updateNextConfig() {
  const configPath = path.join(__dirname, '../next.config.js');
  let configContent = fs.readFileSync(configPath, 'utf8');
  
  // Check if bundle analyzer is already configured
  if (configContent.includes('@next/bundle-analyzer')) {
    console.log('Bundle analyzer already configured in next.config.js');
    return;
  }
  
  // Add bundle analyzer to next.config.js
  const bundleAnalyzerConfig = `
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

`;
  
  // Backup original config
  fs.writeFileSync(`${configPath}.backup`, configContent);
  
  // Update config
  if (configContent.startsWith('module.exports =')) {
    configContent = bundleAnalyzerConfig + configContent.replace('module.exports =', 'module.exports = withBundleAnalyzer(');
    configContent += ')';
  } else if (configContent.startsWith('const nextConfig =')) {
    configContent = bundleAnalyzerConfig + configContent.replace('module.exports = nextConfig', 'module.exports = withBundleAnalyzer(nextConfig)');
  } else {
    console.error('Unable to update next.config.js. Please add bundle analyzer manually.');
    return;
  }
  
  fs.writeFileSync(configPath, configContent);
  console.log('Updated next.config.js with bundle analyzer configuration');
}

// Run bundle analysis
function runBundleAnalysis() {
  console.log('Running bundle analysis...');
  console.log('This will build your project and generate bundle analysis reports.');
  console.log('Please wait, this may take a few minutes...');
  
  try {
    execSync('ANALYZE=true npm run build', { stdio: 'inherit' });
    console.log('Bundle analysis complete!');
    console.log('Check the .next/analyze folder for the bundle analysis reports.');
  } catch (error) {
    console.error('Error running bundle analysis:', error.message);
  }
}

// Print performance recommendations
function printRecommendations() {
  console.log('\n--- Performance Recommendations ---');
  console.log('1. Check for large dependencies and consider alternatives');
  console.log('2. Use dynamic imports for code splitting: import("./Component")');
  console.log('3. Lazy load components below the fold: const Component = dynamic(() => import("./Component"))');
  console.log('4. Optimize images with next/image or the OptimizedImage component');
  console.log('5. Minimize CSS and JavaScript with proper bundling');
  console.log('6. Use web fonts with font-display: swap for better loading');
  console.log('7. Implement proper caching strategies with Cache-Control headers');
  console.log('8. Consider using Incremental Static Regeneration for dynamic content');
  console.log('9. Reduce third-party scripts and use async/defer attributes');
  console.log('10. Minimize main thread work by optimizing JavaScript execution');
}

// Main function
function main() {
  console.log('Starting bundle analysis...');
  
  // Install required packages
  installMissingPackages();
  
  // Update next.config.js
  updateNextConfig();
  
  // Run bundle analysis
  runBundleAnalysis();
  
  // Print recommendations
  printRecommendations();
}

main();
