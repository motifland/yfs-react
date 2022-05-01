const theme = {
  base: 'vs',
  inherit: true,
  rules: [
    { token: '', foreground: '0F172A' },
    { token: 'invalid', foreground: '0F172A' },
    { token: 'emphasis', fontStyle: 'italic' },
    { token: 'strong', fontStyle: 'bold' },
    { token: 'variable', foreground: '5c6773' },
    { token: 'variable.predefined', foreground: '5c6773' },
    { token: 'constant', foreground: '854D0E' },
    { token: 'comment', foreground: 'abb0b6', fontStyle: 'italic' },
    { token: 'number', foreground: '854D0E' },
    { token: 'number.hex', foreground: '854D0E' },
    { token: 'regexp', foreground: '4dbf99' },
    { token: 'annotation', foreground: '701A75' },
    { token: 'type', foreground: '701A75' },
    { token: 'delimiter', foreground: '5c6773' },
    { token: 'delimiter.html', foreground: '5c6773' },
    { token: 'delimiter.xml', foreground: '5c6773' },
    { token: 'tag', foreground: '701A75' },
    { token: 'tag.id.jade', foreground: 'C026D3' },
    { token: 'tag.class.jade', foreground: 'C026D3' },
    { token: 'meta.scss', foreground: 'C026D3' },
    { token: 'metatag', foreground: 'C026D3' },
    { token: 'metatag.content.html', foreground: '0E7490' },
    { token: 'metatag.html', foreground: 'C026D3' },
    { token: 'metatag.xml', foreground: 'C026D3' },
    { token: 'metatag.php', fontStyle: 'bold' },
    { token: 'key', foreground: '701A75' },
    { token: 'string.key.json', foreground: '701A75' },
    { token: 'string.value.json', foreground: '0E7490' },
    { token: 'attribute.name', foreground: '854D0E' },
    { token: 'attribute.value', foreground: '0451A5' },
    { token: 'attribute.value.number', foreground: 'abb0b6' },
    { token: 'attribute.value.unit', foreground: '0E7490' },
    { token: 'attribute.value.html', foreground: '0E7490' },
    { token: 'attribute.value.xml', foreground: '0E7490' },
    { token: 'string', foreground: '0F172A' },
    { token: 'string.html', foreground: '0E7490' },
    { token: 'string.sql', foreground: '0E7490' },
    { token: 'string.yaml', foreground: '0E7490' },
    { token: 'string.js', foreground: '0E7490' },
    { token: 'string.mdx', foreground: '0E7490' },
    { token: 'string.link', foreground: '0369A1' },
    { token: 'string.heading', fontStyle: 'bold' },
    { token: 'string.target', foreground: 'A1A1AA' },
    { token: 'string.codedelimiter.mdx', foreground: 'A1A1AA' },
    { token: 'keyword', foreground: '854d0e' },
    { token: 'keyword.json', foreground: '854d0e' },
    { token: 'keyword.flow', foreground: '854d0e' },
    { token: 'keyword.flow.scss', foreground: '854d0e' },
    { token: 'operator.scss', foreground: '666666' },
    { token: 'operator.sql', foreground: '778899' },
    { token: 'operator.swift', foreground: '666666' },
    { token: 'predefined.sql', foreground: 'FF00FF' }
  ],
  // Cf. https://github.com/Microsoft/monaco-editor/blob/main/test/playground.generated/customizing-the-appearence-exposed-colors.html
  colors: {
    'editor.background': '#FFFFFF',
    'editor.foreground': '#1c1917',
    'editorIndentGuide.background': '#E4E4E7',
    'editorIndentGuide.activeBackground': '#A1A1AA',
    'editorCursor.foreground': '#51A7F8',
    'editor.selectionBackground': '#CFDFEC',
    'editor.inactiveSelectionBackground': '#F5F5F5',
    'editorLineNumber.foreground': '#D1D5DB'
  }
}

export default theme
