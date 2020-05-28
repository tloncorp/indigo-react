
const ignore = [
    '.DS_Store', 
    'util', 
    'index.tsx', 
    'index.ts', 
    'cssReset.ts'
]
const sourceDirectory = __dirname + '/../../../src'
const outputDirectory = __dirname + '/../../website/public/data'
const propertyDirectory = outputDirectory + '/properties'
const metadataDirectory = outputDirectory + '/metadata'


export {
    ignore,
    sourceDirectory,
    outputDirectory,
    propertyDirectory,
    metadataDirectory,
}