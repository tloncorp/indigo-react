import * as fs from "fs";
import generate from './generate'
import { ignore, sourceDirectory } from './config'


function generateFilenames(sourceDirectory:string) {
  return fs
    .readdirSync(sourceDirectory)
    // Filter files like DS_Store
    .filter(obj => !ignore.includes(obj))
    // Weakly filter files
    .filter(obj => !obj.includes('.'))
    .reduce((acc:string[], dir:string) => {
      const filepaths = fs
        .readdirSync(sourceDirectory + '/' + dir)
        // Filter files like DS_Store
        .filter(obj => !ignore.includes(obj))
        .map(filename => sourceDirectory + '/' + dir + '/' + filename)
      return [...acc, ...filepaths]
    }, [])
}

// Generate list of sourcefiles to parse later in generate()


const sourcePaths = generateFilenames(sourceDirectory)
const testPath = [sourcePaths[1]]

console.log('Running...', testPath)
generate(testPath)
