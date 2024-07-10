const { getOptions } = require('loader-utils')
const { validate } = require('schema-utils')

const schema = require('./schema.json')

module.exports = function(content, map, meta) {
    // 获取传参
    const _options = getOptions(this) || {}
    console.log('i am ' + _options.name)

    validate(schema, _options, {
        name: 'loaderKing'
    })

    return content
}

// pitching阶段
module.exports.pitch = function() {
    console.log('pitch C')
}