import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the static images directory
const imagesDir = path.join(__dirname, '..', 'static', 'images', 'gallery');
const outputPath = path.join(__dirname, '..', 'src', 'lib', 'generated-images.json');

// Supported image extensions
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

function getAllImages(dir, baseDir = '') {
	const images = [];

	try {
		const items = fs.readdirSync(dir);

		for (const item of items) {
			const fullPath = path.join(dir, item);
			const relativePath = path.join(baseDir, item);
			const stat = fs.statSync(fullPath);

			if (stat.isDirectory()) {
				// Recursively scan subdirectories
				images.push(...getAllImages(fullPath, relativePath));
			} else if (stat.isFile()) {
				const ext = path.extname(item).toLowerCase();
				if (imageExtensions.includes(ext)) {
					// Convert Windows paths to web paths
					const webPath = '/images/gallery/' + relativePath.replace(/\\/g, '/');
					images.push({
						src: webPath,
						alt: path.basename(item, ext).replace(/[_-]/g, ' '),
						filename: item
					});
				}
			}
		}
	} catch (error) {
		console.warn(`Warning: Could not read directory ${dir}:`, error.message);
	}

	return images;
}

function generateImagesList() {
	console.log('Scanning images directory:', imagesDir);

	if (!fs.existsSync(imagesDir)) {
		console.error('Images directory does not exist:', imagesDir);
		process.exit(1);
	}

	const allImages = getAllImages(imagesDir);

	// Shuffle the images for a random order
	for (let i = allImages.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[allImages[i], allImages[j]] = [allImages[j], allImages[i]];
	}

	const output = {
		images: allImages,
		totalCount: allImages.length,
		generatedAt: new Date().toISOString()
	};

	// Ensure the output directory exists
	const outputDir = path.dirname(outputPath);
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir, { recursive: true });
	}

	fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

	console.log(`Generated images list with ${allImages.length} images`);
	console.log(`Output written to: ${outputPath}`);
}

generateImagesList();
