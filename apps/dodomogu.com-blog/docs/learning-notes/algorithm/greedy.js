// 贪婪 获取利益最大化，始终查找最大项目，尽可能快速满足需求

// 面试题
// 给定一个数组nums，找到一个具有最大和的连续子数组（子数组必须最少包含一个元素），返回其最大和
function getSum(nums) {
  let sum = 0
  let ans = nums[0]

  for(let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if(sum > 0) {
      sum += num
    } else {
      sum = num
    }
    ans = Math.max(ans, sum)
  }

  return ans
}

console.log(getSum([1, 2, 3, 5, -92, 2, 10, 22, -30]))
