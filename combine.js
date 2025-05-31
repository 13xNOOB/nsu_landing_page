const fs = require('fs');
const path = require('path');

const chunksDir = path.join(__dirname, 'chunks');
const outputFile = path.join(__dirname, 'index.html');

const chunkFiles = [
  'header_scripts.html',
  'utility_bar_asad.html',
  'header_asad.html',
  'slider_asad.html',
  'quick_links_asad.html',
  'achievements_and_accreditations_asad.html',
  'news_asad.html',
  'upcoming_events_asad.html',
  'degree_asad.html',
  'footer_asad.html'
];

const template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NSU Landing Page</title>
  <link href="./output.css" rel="stylesheet">
  <script defer src="node_modules/alpinejs/dist/cdn.min.js"></script>
  ${fs.readFileSync(path.join(chunksDir, 'header_scripts.html'), 'utf8')}
</head>
<body class="min-h-screen bg-gray-100" x-data="{ menuOpen: false }">
  <div id="app">
  ${chunkFiles
    .filter(file => file !== 'header_scripts.html')
    .map(file => fs.readFileSync(path.join(chunksDir, file), 'utf8'))
    .join('\n')}
  </div>
</body>
</html>
`;

fs.writeFileSync(outputFile, template);
console.log('index.html updated with all chunks!');
