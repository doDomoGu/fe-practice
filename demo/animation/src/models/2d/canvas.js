// import Balls from './ball.js'

const STATUS = {
  PLAYING: Symbol('playing'), // 动画执行中
  PAUSED: Symbol('paused'), // 动画暂停中
  STOPPED: Symbol('stopped') // 动画停止
}

export default class Canvas {
  sprites = []
  animating = true // 是否正在执行动画效果的标志位
  status = STATUS.STOPPED // 动画状态
  frame = 0 // 当前帧数
  fps = 60 // 每秒X帧  ==> 应动态获取客户端数值
  timesPerSecond = 10 // 一秒执行X次
  animationTime = -1 // 动画执行时长 单位（秒）  -1: 一直执行下去

  constructor(canvas, options) {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.width = canvas.width
    this.height = canvas.height

    options.animationTime && (this.animationTime = options.animationTime)

    // totalFrame: 总帧数 = fps(每秒帧数) * animationTime(动画持续时间(秒))
    this.totalFrame =
      this.animationTime > -1 ? this.fps * this.animationTime : -1

    // this.contentHistory = [] // 记录经过的每一帧的数据
    // this.maxHistoryCount = 10000 // 最多记录10000
    // this.curFrameNum = 0 // 当前帧数

    // console.log(this.totalFrame)
  }

  // 添加精灵对象
  addSprite(sprite) {
    this.sprites.push(sprite)
  }

  // 清除画布
  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height)
  }

  update() {
    this.sprites.map((v) => {
      v.update(this.ctx)
    })
  }

  paint() {
    this.sprites.map((v) => {
      v.paint(this.ctx)
    })
  }

  pause() {
    this.status = STATUS.PAUSED
  }

  play() {
    this.status = STATUS.PLAYING
  }

  stop() {
    this.status = STATUS.STOPPED
  }

  get statusCn() {
    switch (this.status) {
      case STATUS.PLAYING:
        return '正在执行中'
      case STATUS.PAUSED:
        return '暂停中'
      case STATUS.STOPPED:
        return '已停止'
      default:
        return '未知状态'
    }
  }

  get isPlaying() {
    return this.status === STATUS.PLAYING
  }

  get isPaused() {
    return this.status === STATUS.PAUSED
  }

  get isStopped() {
    return this.status === STATUS.STOPPED
  }

  // 动作执行帧
  isActionFrame() {
    return this.frame % (this.fps / this.timesPerSecond) === 0
  }

  isFrameExceed() {
    if (this.totalFrame == -1) return false
    return this.frame >= this.totalFrame
  }
}
