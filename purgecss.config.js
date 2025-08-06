module.exports = {
  content: ['./dist/assets/*.js'],
  css: ['./dist/assets/*.css'],
  output: './dist/test/*.css',
  defaultExtractor: content => {
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
    const innerMatches = content.match(/[^<>"'`\s.()]*\([^<>"'`\s.()]*\)/g) || [];
    return broadMatches.concat(innerMatches);
  },
};
