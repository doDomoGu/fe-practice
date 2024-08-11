import { cloneDeep } from 'lodash-es'

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
  duration = -1 // 动画执行时长 单位（秒）  -1: 一直执行下去
  totalFrame = -1 // 总帧数 = fps(每秒帧数) * duration(动画持续时间(秒))
  history = [] // 记录经过的每一帧的数据
  historyMaxCount = 10000 // 最多记录x帧的数据

  constructor(ctx, options) {
    ctx.canvas.width = ctx.canvas.offsetWidth
    ctx.canvas.height = ctx.canvas.offsetHeight

    // this.canvas = canvas
    this.ctx = ctx // canvas.getContext('2d')
    this.width = ctx.canvas.width
    this.height = ctx.canvas.height

    options.duration && (this.duration = options.duration)

    this.totalFrame = this.duration > -1 ? this.fps * this.duration : -1

    options.historyMaxCount && (this.historyMaxCount = options.historyMaxCount)
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
    this.snapshot()
    this.sprites.map((v) => {
      v.paint(this.ctx)
    })
  }

  snapshot() {
    this.history.push({
      frame: this.frame,
      // sprites: JSON.parse(JSON.stringify(this.sprites))
      sprites: cloneDeep(this.sprites)
    })
  }

  paintHistory(frame) {
    this.history
      .find((h) => h.frame === frame)
      .sprites.map((v) => {
        v.paint(this.ctx)
      })
  }

  start() {
    this.status = STATUS.PLAYING
    this.frame = 0
  }

  play() {
    this.status = STATUS.PLAYING
  }

  pause() {
    this.status = STATUS.PAUSED
  }

  stop() {
    this.status = STATUS.STOPPED
  }

  // restart() {

  // }

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
    return this.frame % (this.fps / this.timesPerSecond) === 1
  }

  isFrameExceed() {
    if (this.totalFrame == -1) return false
    return this.frame >= this.totalFrame
  }
}
