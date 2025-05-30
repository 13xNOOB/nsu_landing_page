const fs = require('fs');
const path = require('path');

const chunksDir = path.join(__dirname, 'chunks');
const outputFile = path.join(__dirname, 'index.html');

const chunkFiles = [
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
</head>
<body x-data>
  <div id="app">
    ${chunkFiles.map(file => {
      const content = fs.readFileSync(path.join(chunksDir, file), 'utf8');
      return content;
    }).join('\n')}
  </div>
</body>
</html>
`;

fs.writeFileSync(outputFile, template);
console.log('index.html updated with all chunks!');
