// 异步类型loader
module.exports = function(content, map, meta) {
    console.log('i am loaderB')

    const callback = this.async()

    setTimeout(() => {
        callback(null, content)
    }, 1000)

    return content
}

// pitching阶段
module.exports.pitch = function() {
    console.log('pitch B')
}
