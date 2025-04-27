#!/usr/bin/env node

/**
 * Image Optimization Script for Portfolio Website
 * 
 * This script optimizes images in the public/images directory:
 * 1. Converts images to WebP format for better compression
 * 2. Resizes images to appropriate dimensions
 * 3. Compresses images to reduce file size
 * 
 * Usage: node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check if sharp is installed
try {
  require.resolve('sharp');
} catch (e) {
  console.log('Installing sharp package for image optimization...');
  execSync('npm install --save-dev sharp');
}

const sharp = require('sharp');

// Configuration
const config = {
  inputDir: path.join(__dirname, '../public/images'),
  outputDir: path.join(__dirname, '../public/images/optimized'),
  sizes: {
    thumbnail: { width: 300, height: null },
    small: { width: 600, height: null },
    medium: { width: 1200, height: null },
    large: { width: 1920, height: null }
  },
  quality: 80 // WebP quality (0-100)
};

// Create output directory if it doesn't exist
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

// Get all image files
async function getImageFiles(dir) {
  const files = fs.readdirSync(dir);
  return files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.gif'].includes(ext);
  });
}

// Process a single image
async function processImage(inputFile) {
  const filename = path.basename(inputFile, path.extname(inputFile));
  
  console.log(`Processing ${filename}...`);
  
  // Process each size
  for (const [size, dimensions] of Object.entries(config.sizes)) {
    const outputFilename = `${filename}-${size}.webp`;
    const outputPath = path.join(config.outputDir, outputFilename);
    
    try {
      await sharp(path.join(config.inputDir, inputFile))
        .resize(dimensions.width, dimensions.height, { 
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({ quality: config.quality })
        .toFile(outputPath);
      
      console.log(`  ✓ Created ${outputFilename}`);
    } catch (error) {
      console.error(`  ✗ Error processing ${outputFilename}:`, error.message);
    }
  }
}

// Main function
async function main() {
  try {
    console.log('Starting image optimization...');
    
    // Get all image files
    const imageFiles = await getImageFiles(config.inputDir);
    
    if (imageFiles.length === 0) {
      console.log('No images found in the input directory.');
      return;
    }
    
    console.log(`Found ${imageFiles.length} images to process.`);
    
    // Process each image
    for (const file of imageFiles) {
      await processImage(file);
    }
    
    console.log('Image optimization complete!');
    console.log(`Optimized images saved to: ${config.outputDir}`);
    console.log('To use these images in your code, import them like this:');
    console.log('  <OptimizedImage src="/images/optimized/image-small.webp" alt="Description" />');
  } catch (error) {
    console.error('Error during image optimization:', error.message);
  }
}

main();
