#!/usr/bin/env node
import { program } from 'commander'
import createAction from '../lib/create.js'
console.log('Hello, CLI')

// 定义命令和参数

// create 命令
program
  .command('create <project-name>')
  .description('create a new project')
  .option('-f, --force', 'can overwrite target directory if it exist')
  .action((name, options) => {
    // 打印执行结果
    console.log('program is ready to create, name is ', name, options)
    createAction(name, options)
  })

program.parse(process.argv)

// 如何给到用户提示 command
// 如何主流程开启 action
// 如何进行参数的传递 parse(process.argv)
