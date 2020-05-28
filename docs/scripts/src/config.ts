
const ignore = [
    '.DS_Store', 
    'util', 
    'index.tsx', 
    'index.ts', 
    'cssReset.ts'
]
const sourceDirectory = __dirname + '/../../../src'
const outputDirectory = __dirname + '/../../website/public/data/properties'
const metadataDirectory = __dirname + '/../../website/public/data/metadata'


export {
    ignore,
    sourceDirectory,
    outputDirectory,
    metadataDirectory,
}