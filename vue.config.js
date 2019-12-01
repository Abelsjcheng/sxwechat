module.exports = {
    configureWebpack: config => {
        require('vux-loader').merge(config, {
            options: {},
            plugins: ['vux-ui']
        })
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/sxwechat/'
    : '/' //tomcat配置
}