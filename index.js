const args = process.argv.slice(2);
if (args[0] === 'run' && args[1] === 'command') {
    console.log('Running command...');
} else {
    console.log('Invalid command');
}
