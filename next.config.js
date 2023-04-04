const withMarkdoc = require('@markdoc/next.js');

const repo = 'nextjs-gh-pages'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

module.exports =
  withMarkdoc(/* config: https://markdoc.io/docs/nextjs#options */)({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdoc'],
    assetPrefix: assetPrefix,
    basePath: basePath,
  });
