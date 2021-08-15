module.exports = {
    devServer:{

        proxy:{
            '/':{
                target:'http://127.0.0.1:8000',
                secure:'false',
                changeOrigin:'true',
                ws:true
            },
            '/auth/':{
                target:"http://127.0.0.1:8000",
                secure:'false',
                changeOrigin:'true',
                ws:true
            }
 
            
        }
    },
}