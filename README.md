
## Manual installation

npm install react-native-cz-loading --save

	

## Usage
###  1.引入组件
```
import Loading from 'react-native-cz-loading';
```
###  2.属性:
###  3.属性方法:
###  4.供外部调用的方法:
```
/*
* 显示Loading, 目前只支持显示菊花&文字,以及自定义图片取代菊花
* text: 显示文本信息
* extraData: 额外信息{
*    type: 显示类型,
*    topSpace: 顶部预留空间,
*    bottomSpace: 底部预留空间
* }
* img:图片对象Image，支持Gif，安卓需要引入com.facebook.fresco:animated-gif库
* */
Loading.show(text = '测试信息', extraData = {}, image = null);
```

```
/*
* 关闭Loading
* key: show方法会返回一个字典，里面有个key，可以hide指定的Loading，如果指定的Loading正在显示，则移除，不在的话只是简单移除数组
* */
Loading.hide(key = 'key');
```

```
/*
* 清空数据源，直接关闭Loading
* */
Loading.hideImmediately();
```
