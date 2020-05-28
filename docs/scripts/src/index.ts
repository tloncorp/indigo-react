import generateProperties from './generateProperties'
import generatePaths from './generatePaths'
import { sourceDirectory } from './config'

// Generate list of sourcefiles to parse later in generate()
const sourcePaths = generatePaths(sourceDirectory)

console.log(`Generating for ${sourcePaths.length} paths...`)

generateProperties(sourcePaths)

// @ts-ignore
process.stdout.clearLine();
