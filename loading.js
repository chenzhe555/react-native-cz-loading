import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default class LoadingView extends Component{
    /************************** 生命周期 **************************/
    constructor(props) {
        super(props);
        this.initializeParams();
    }
    /************************** 继承方法 **************************/
    /************************** 通知 **************************/
    /************************** 创建视图 **************************/
    /************************** 网络请求 **************************/
    /************************** 自定义方法 **************************/
    /*
    * 初始化参数
    * */
    initializeParams() {
        this.state = {
            data: this.props.data ? this.props.data : {}
        }
    }
    /************************** 子组件回调方法 **************************/
    /************************** 外部调用方法 **************************/
    /************************** List相关方法 **************************/
    /************************** Render中方法 **************************/
    render() {
        const { data } = this.state;
        //Loading类型
        let type = data['type'] ? data['type'] : 1;

        let text = data['text'];
        if (type == 1) {
            let topSpace = data['topSpace'] ? data['topSpace'] : 64;
            let bottomSpace = data['bottomSpace'] ? data['bottomSpace'] : 0;
            let img = data['img'];
            return (
                <View style={[styles.MainView, {top: topSpace, bottom: bottomSpace}]}>
                    <View style={[styles.ContentOneView]}>
                        {
                            img ? (
                                <View style={[styles.ImageView]}>
                                    {img}
                                </View>
                            ) : (
                                <ActivityIndicator
                                    size={'large'}
                                    animating={true}
                                    color={'#FFFFFF'}
                                />
                            )
                        }
                        {
                            text.length > 0 ? (
                                <Text style={[styles.TextView]} numberOfLines={2}>{text}</Text>
                            ) : null
                        }
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
        borderRadius: 6,
        justifyContent: 'center'
    },

    TextView: {
        textAlign: 'center',
        marginTop: 20,
        color: '#FFFFFF',
        fontSize: 14,
        marginLeft: 3,
        marginRight: 3
    },

    ImageView: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})