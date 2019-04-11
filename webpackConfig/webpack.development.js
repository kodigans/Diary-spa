const extractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {            
        open: true,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,                
                use: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/                
            },
            {
                test: /\.less$/,                
                use: extractTextWebpackPlugin.extract({                   
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.(svg|png|woff|ttf|eot|woff2|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[folder]/[name].[ext]',
                        },
                    },
                ],
            },
        ]
    }, 
    plugins: [
        new extractTextWebpackPlugin('style/style.css'),
        new HtmlWebpackPlugin({
            template: './src/index.html',      
          }),  
    ]
};