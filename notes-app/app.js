const yargs = require('yargs')
const notes = require('./notes')
const { string } = require('yargs')

// const chalk = require('chalk')
// const validator = require('validator')
// const msg = getNotes()


//add
yargs.command({
    command: 'add',
    describe: 'adding note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title, argv.body)
    }
    // handler: function(argv){
    //     notes.addNotes(argv.title, argv.body)
    // }
})

//remove
yargs.command({
    command: 'remove',
    describe: 'removing note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
    // handler: function(argv){
    //     notes.removeNotes(argv.title)
    // }
})

// read
yargs.command({
    command: 'read',
    describe: 'read note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
    // handler: function(){
    //     console.log('Reading note')
    // }
})

// list
yargs.command({
    command: 'list',
    describe: 'list your notes',
    handler(){
        notes.listNotes()
    }
    // handler: function(){
    //     console.log('listing your notes')
    // }
})

yargs.parse()

// console.log(yargs.argv)

// const command = process.argv[2];

// if(command === 'add') {
//     console.log('Note Added')
// } else if(command === 'remove') {
//     console.log('Note removed')
// }

// console.log(msg)
// console.log(chalk.green('Success!'))
// console.log(chalk.blue.inverse.italic('Hello World'))
// console.log(chalk.red('Error!'))

// console.log(validator.isEmail('@foobar.com'))
// console.log(validator.isURL('https://google.com'))

// const add = require('./utils')
// console.log(add(4,2))

// const firstName = require('./utils')
// console.log(firstName)

// const fs = require('fs')

// fs.writeFileSync('notes.txt', 'File created using Node!')
// fs.appendFileSync('notes.txt', ' Second line appended.')