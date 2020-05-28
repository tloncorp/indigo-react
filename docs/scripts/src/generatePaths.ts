import * as fs from "fs";
import * as path from 'path'
import { ParsedPath } from 'path'
import { ignore } from './config'

function generatePaths(sourceDirectory:string) {
  return fs
    .readdirSync(sourceDirectory)

    .map(sourcePath => path.parse(sourcePath))

    // Filter files like DS_Store
    .filter(parsedPath => !ignore.includes(parsedPath.base))

    // // Weakly filter files
    .filter(parsedPath => parsedPath.ext === '')

    // Create an array of all valid parsedPaths
    .reduce((acc:ParsedPath[], {name}:ParsedPath) => {


      const filepaths = fs

        .readdirSync(path.join(sourceDirectory, name))

        // Parse paths of source files
        .map(sourcePath => path.parse(sourcePath))

        // Filter files like DS_Store
        .filter(parsedPath => !ignore.includes(parsedPath.base))

        // Produce output parsedPaths
        .map(({dir, base}) => path.parse(path.join(sourceDirectory, dir, name, base)))
      
      // Concat the accumulator with ParsedPaths from the current directory
      return [...acc, ...filepaths]

    }, [])
}

export default generatePaths
