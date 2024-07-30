import { Vector2 } from '@catsums/vector2'
class Ball {
  constructor(x, y, id) {
    this.pos = new Vector2(x, y) //初始化小球的位置
    this.id = id
    this.color = '' //绘制的颜色
    this.r = 20 //小球半径，为方便演示，此处使用给定值
    this.velocity = null //小球的速度
  }
}

export default Ball
