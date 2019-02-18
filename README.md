
## Manual installation

npm install react-native-cz-loading --save

	

## Usage
###  1.引入组件
```
import Loading from 'react-native-cz-loading';

<Loading evaluateView={ (loading) => {this.loading = loading}}></Loading>
```

###  2.属性:
###  3.属性方法:
```
/*
* 赋值当前视图对象
* */
evaluateView
```

###  4.供外部调用的方法:
```
/*
* 显示Loading, 目前只支持显示菊花和文字
* text: 显示文本信息
* extraData: 额外信息{
*    type: 显示类型,
*    topSpace: 顶部预留空间,
*    bottomSpace: 底部预留空间
* }
* return: 返回对象，目前只返回每次Loading对应到Key，用于hide调用关闭指定Loading信息
* */
this.loading.show(text = '测试信息'， extraData = {});
```


```
/*
* 关闭Loading
* key: 关闭指定Key对应的Loading信息
* */
this.loading.hide(key = 'key');
```

```
/*
* 清空数据源，直接关闭Loading
* */
this.loading.hideImmediately();
```


  
