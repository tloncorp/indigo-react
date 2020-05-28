const stdout = (content:string | Uint8Array) => {
    process.stdout.cursorTo(0);
    // @ts-ignore
    process.stdout.clearLine();
    process.stdout.write(content);

    
    // process.stdout.write("\n"); // end the line
}

export { 
    stdout
}