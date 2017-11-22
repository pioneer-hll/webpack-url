/**
 * Created by hll on 2017/10/10.
 */

var htmlwp=require('html-webpack-plugin');
module.exports={
    entry:'./src/main.js',  //指定打包的入口文件
    output:{        //把打包文件放置到什么位置去
        path:__dirname+'/dist',
        filename:'build.js'
    },
    module:{
        loaders:[{
            test:/\.css$/,
            loader:'style-loader!css-loader'
        },
            {
                test:/\.scss$/,
                loader:'style-loader!css-loader!sass-loader'
            },
            {
                test:/\.less$/,
                loader:'style-loader!css-loader!less-loader'
            },
            {
                test:/\.(png|jpg|gif)$/,
                loader:'url-loader?limit=20000'
            },

        ]
    },
    babel:{
        presets:['es2015'],
        plugins:['transform-routine']
    },

    plugins:[
        new htmlwp({
            title:'',
            filename:'index.html',
            template:'index1.html'
        })
    ]
}


