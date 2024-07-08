import ora from 'ora'
import path from 'path'
import util from 'util'
import chalk from 'chalk'
import downloadGitRepo from 'download-git-repo'
import inquirer from 'inquirer'
// import process from 'process'

import { getRepoList, getTagList } from './http.js'

// 封装loading
async function wrapLoading(fn, message, ...args) {
  const spinner = ora(message)
  spinner.start()
  try {
    const result = await fn(...args)
    spinner.succeed()
    return result
  } catch (err) {
    spinner.fail('Request failed')
  }
}

class Generator {
  constructor(name, targetDir) {
    this.name = name
    this.targetDir = targetDir
    this.downloadGitRepo = util.promisify(downloadGitRepo)
  }

  // 核心创建逻辑
  async create() {
    // 1. 获取模板名称
    const repo = await this.getRepo()

    // 2. 获取tag名称
    const tag = await this.getTag(repo)

    // 3. 下载模板到目录
    await this.download(repo, tag)
  }

  // 获取用户选择的模板
  async getRepo() {
    // 1. 从远端拉取模板数据
    const repoList = await wrapLoading(
      getRepoList,
      'waiting for fetch template'
    )

    if (!repoList) return

    const repos = repoList.map((item) => item.name)

    // 2. 让用户选择已有的模板名称

    const { repo } = await inquirer.prompt({
      name: 'repo',
      type: 'list',
      choices: repos,
      message: 'Please choose a template to create project.'
    })

    // 3. 返回用户选择的模板
    return repo
  }

  // 获取用户选择的版本
  async getTag(repo) {
    // 1. 基于repo的选择，远程拉取版本列表
    const tagList = await wrapLoading(
      getTagList,
      'waiting for fetch tags',
      repo
    )

    if (!tagList) return

    // 2. 自动选择最新的tag
    const tags = tagList.map((item) => item.name)

    return tags[0]
  }

  // 下载远程模板
  async download(repo, tag) {
    // 1. 拼接下载地址
    const requestUrl = `FecourseZone/${repo}${tag ? '#' + tag : ''}`
    // 2. 调用下载方法
    await wrapLoading(
      this.downloadGitRepo,
      'waiting download template',
      requestUrl,
      path.resolve(process.cwd(), this.targetDir)
    )

    console.log(`\r\nSuccessfully created project ${chalk.cyan(this.name)}`)
  }
}

export default Generator
