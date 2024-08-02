// 外接圆判定法 (碰撞检测)
export const checkCircle = (circleA, circleB) => {
  const dx = circleA.x - circleB.x
  const dy = circleA.y - circleB.y
  const distance = Math.sqrt(dx * dx + dy * dy)
  return distance < circleA.radius + circleB.radius
}
