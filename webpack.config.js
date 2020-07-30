const path = require('path');
const outputPath = path.resolve(__dirname, 'docs');

module.exports = {
    // webpack-dev-serverを立ち上げた時のドキュメントルートを設定
    // ここではdistディレクトリのindex.htmlにアクセスするよう設定してます
    devServer: {
        contentBase: outputPath
    }
}