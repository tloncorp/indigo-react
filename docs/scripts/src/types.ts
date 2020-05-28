type DefaultPropsEntryProperties = {name: string, text?: string, kind: number} 

type DefaultPropsEntry = {
  leftExpression:  string,
  leftName:  string,
  properties:  {[key: string]: DefaultPropsEntryProperties},
}

type TypeEntry = {
  name: string,
  isOptional: boolean | null,
  type: string,
  parentName: string
}

type Entry = {
  types: TypeEntry[],
  name: string,
  time: Date,
}

type Entries = Entry[]

type Mem = {
    defaultExport: string
    typeNamesOfDefaultExport: string[]
    exports: string[]
    defaultProps: {[key: string]: DefaultPropsEntry }
    declarationTypePairs: {[key: string]: string }
}

export {
    DefaultPropsEntryProperties,
    DefaultPropsEntry,
    TypeEntry,
    Entry,
    Entries,
    Mem,
}