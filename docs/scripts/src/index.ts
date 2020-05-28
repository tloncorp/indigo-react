// import generateProperties from './generateProperties'
import generatePaths from './generatePaths'
import { sourceDirectory, outputDirectory } from './config'
import * as fs from 'fs'
import { ParsedPath } from 'path'
import { capitalizeFirstLetter } from './util'

// Generate list of sourcefiles to parse later in generate()
const sourcePaths = generatePaths(sourceDirectory)

console.log(`Generating for ${sourcePaths.length} paths...`)


// type ManifestEntry = {name: string}
// @ts-ignore
const manifestData = sourcePaths.reduce((acc, parsedPath:ParsedPath) => {

    const splitPath = parsedPath.dir.split('/')

    const catagory = splitPath[splitPath.length - 1]

    const inThisCatagory = sourcePaths.filter(path => {
        const _splitPath = path.dir.split('/')
        const _catagory = _splitPath[_splitPath.length - 1]
        return _catagory === catagory
    })

    console.log(inThisCatagory)

    return [...acc, {title: catagory, components: inThisCatagory.map(p => p.name)}]

}, [])


const protoManifest = sourcePaths.reduce((acc:string[], parsedPath:ParsedPath) => {
    const splitPath = parsedPath.dir.split('/')
    const catagory = splitPath[splitPath.length - 1]

    if (acc.includes(catagory)) return acc

    return [...acc, catagory]
}, [])

const manifest = protoManifest.map(key => {
    return {
        name: capitalizeFirstLetter(key),
        components: sourcePaths
            .filter(parsedPath => {
                const splitPath = parsedPath.dir.split('/')
                const catagory = splitPath[splitPath.length - 1]
                return catagory === key
            })
            .map(validPath => validPath.name)
    }
})


// generateProperties(sourcePaths)

fs.writeFileSync(outputDirectory + '/manifest.json', JSON.stringify(manifest))

// @ts-ignore
process.stdout.clearLine();
