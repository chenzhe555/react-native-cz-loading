import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';


/*
* zIndex: 2990
* */
export default class CZLoading extends Component {

    /************************** 生命周期 **************************/
    constructor(props) {
        super(props);
        //赋值初始值
        this.state = {
            showArr: []
        };
        //每次Loading对应唯一ID
        this.uniqueID = 0;
    }

    componentDidMount() {
        if (this.props.evaluateView) this.props.evaluateView(this);
    }
    /************************** 继承方法 **************************/
    /************************** 通知 **************************/
    /************************** 创建视图 **************************/
    /************************** 网络请求 **************************/
    /************************** 自定义方法 **************************/
    /*
    * 显示Loading, 目前只支持显示菊花和文字
    * text: 显示文本信息
    * extraData: 额外信息{
    *    type: 显示类型,
    *    topSpace: 顶部预留空间,
    *    bottomSpace: 底部预留空间
    * }
    * */
    show(text = '', extraData = {}) {
        if (text.length > 0) {
            const { showArr } = this.state;
            let key = 'loading-key-' + (++this.uniqueID);
            //赋值Loading新数组元素
            extraData['text'] = text;
            extraData['key'] = key;

            showArr.push(extraData);
            //渲染Loading视图
            this.setState({
                showArr: showArr
            });

            //返回Loading可操作对象
            return {'key': key};
        }
    }

    /*
    * 关闭Loading
    * key: 关闭指定Loading，空串代表删除数组最后一个
    * */
    hide(key = '') {
        const { showArr } = this.state;
        //如果Loading数组为空，则直接返回不隐藏
        if (showArr.length == 0) return;

        //要删除的Loading的index
        let index = 0;
        if (key.length > 0) {
            let item = null;
            for (i = 0; i < showArr.length; ++i) {
                item = showArr[i];
                if (item['key'] == key) {
                    index = i;
                    break;
                }
            }
        }

        //删除数组中当前元素,并重新赋值
        showArr.splice(index,1);
        this.setState({
            showArr: showArr
        });
    }

    /*
    * 清空数据源，直接关闭
    * */
    hideImmediately() {
        this.setState({
            showArr: []
        })
    }
    /************************** 子组件回调方法 **************************/
    /************************** 外部调用方法 **************************/
    /************************** List相关方法 **************************/
    /************************** Render中方法 **************************/
    render() {
        const { showArr } = this.state;

        if (showArr.length == 0) return null;

        //获取Loading参数信息
        let params = showArr[0];
        let type = params['type'] ? params['type'] : 1;

        if (type == 1) {
            let text = params['text'];
            let topSpace = params['topSpace'] ? params['topSpace'] : 64;
            let bottomSpace = params['bottomSpace'] ? params['bottomSpace'] : 0;
            return (
                <View style={[styles.MainView, {top: topSpace, bottom: bottomSpace}]}>
                    <View style={[styles.ContentOneView]}>
                        <View>
                            <ActivityIndicator
                                size={'large'}
                                animating={true}
                                color={'#FFFFFF'}
                            />
                            <Text style={[styles.TextView]}>{text}</Text>
                        </View>
                    </View>
                </View>
            )
        } else {
            return null;
        }
    }
}

const styles = StyleSheet.create({
    MainView: {
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 2990,
        alignItems: 'center',
        justifyContent: 'center'
    },

    ContentOneView: {
        width: 120,
        height: 120,
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 8,
        justifyContent: 'center'
    },

    TextView: {
        textAlign: 'center',
        marginTop: 20,
        color: '#FFFFFF',
        fontSize: 14,
        marginLeft: 3,
        marginRight: 3
    }
})