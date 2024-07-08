const path = require('path')
const fs = require('fs-extra')
const inquirer = require('inquirer')
const Generator = require('./generator')

// 1. 对外抛出一个方法用来接收用户需要创建文件的项目&参数
module.exports = async function (name, options) {
  // 判断项目是否存在
  const cwd = process.cwd()
  const targetDir = path.join(cwd, name)

  if (fs.existsSync(targetDir)) {
    // 是否为强制创建(覆盖)
    if (options.force) {
      await fs.remove(targetDir)
    } else {
      // 询问用户是否确定要覆盖
      let { action } = await inquirer.prompt([
        {
          name: 'action',
          type: 'list',
          message: 'Target directory already exists',
          choices: [
            {
              name: 'Overwrite',
              value: 'overwrite'
            },
            {
              name: 'Cancel',
              value: false
            }
          ]
        }
      ])

      if (!action) {
        return
      } else if (action === 'overwrite') {
        await fs.remove(targetDir)
      }
    }
  }

  // 新建模版
  const generator = new Generator(name, targetDir)
  generator.create()
}
