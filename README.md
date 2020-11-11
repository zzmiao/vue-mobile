# mobile-phone

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### vue开发移动端使用rem的适配方案
npm install --save amfe-flexible
npm install --save-dev postcss-pxtorem

import amfeFlexible from "amfe-flexible"
Vue.use(amfeFlexible)

###增加postcss-pxtorem配置

在package.json增加postcss设置
"postcss": {
    "plugins": {
      "autoprefixer": {},
      "postcss-pxtorem": {
        "rootValue": 37.5,
        "propList": [
          "*"
        ]
      }
    }
  }


####vue中引入swiper
npm install vue-awesome-swiper@2.6.7 --save

###Global Registration

import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)


###卸载软件
1、安装插件

npm install --save qrcode

2、卸载插件

npm uninstall qrcode