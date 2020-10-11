module.exports = {
  markup({content, filename}) {
    const code = minify(content, {
      collapseInlineTagWhitespace: true,
      collapseWhitespace: true,
      keepClosingSlash: true,
      caseSensitive: true,
      ignoreCustomFragments: [/<%[\s\S]*?%>/, /<\?[\s\S]*?\?>/, /\{#.+?\}/, /\{:.+?\}/, /\{\/.+?\}/]
    });

    return {code};
  }
};
