// 同步类型loader
module.exports = function(content, map, meta) {
    console.log('i am loaderA')
    this.callback(null, content, map, meta)
}

// pitching阶段
module.exports.pitch = function() {
    console.log('pitch A')
}