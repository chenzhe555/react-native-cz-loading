import React, { Component } from 'react';
import CZPackElement from 'react-native-cz-pack-element';
import Loading from './loading';
import CZToast from "react-native-cz-toast";

/*
* zIndex: 2990
*
* export func:
* show
* hide
* hideImmediately
* */
export default class CZLoading extends Component {

    //要显示的数组
    static showArr = [];
    //每次Loading对应唯一ID
    static uniqueID = 0;
    //Loading正在显示
    static isShowLoading = false;
    //当前正在显示的Loading
    static currentLoadingView = null;

    /************************** 生命周期 **************************/
    /************************** 继承方法 **************************/
    /************************** 通知 **************************/
    /************************** 创建视图 **************************/
    /************************** 网络请求 **************************/
    /************************** 自定义方法 **************************/
    static showLoading = () => {
        if (CZLoading.showArr.length == 0) return;
        //当前显示数组第一个Loading对象
        let item = CZLoading.showArr[0];
        CZLoading.currentLoadingView = new CZPackElement(<Loading data={item}/>);
        CZLoading.isShowLoading = true;
    }
    /************************** 子组件回调方法 **************************/
    /************************** 外部调用方法 **************************/
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
    static show = (text = '', extraData = {}, img = null) => {
        //赋值Loading新数组元素
        extraData['text'] = text;
        extraData['img'] = img;
        let key = 'loading-key-' + (++CZLoading.uniqueID);
        extraData['key'] = key;
        CZLoading.showArr.push(extraData);
        //显示Loading
        if (!CZLoading.isShowLoading) CZLoading.showLoading();

        //返回Loading可操作对象
        return {'key': key};
    }

    /*
    * 关闭Loading
    * key: show方法会返回一个字典，里面有个key，可以hide指定的Loading，如果指定的Loading正在显示，则移除，不在的话只是简单移除数组
    * */
    static hide = (key = '') => {
        //如果Loading数组为空，则直接返回不隐藏
        if (CZLoading.showArr.length == 0) return;

        //如果只有一个，直接移除
        CZLoading.isShowLoading = false;
        if (CZLoading.showArr.length == 1) {
            CZLoading.hideImmediately();
        } else {
            let index = -1;
            let item = null;
            for (i = 0; i < CZLoading.showArr.length; ++i) {
                item = CZLoading.showArr[i];
                if (item['key'] == key) {
                    index = i;
                    break;
                }
            }

            if (index == -1 || index == 0) {
                //未找到或者第一个，都删除第一个
                if (CZLoading.currentLoadingView) CZLoading.currentLoadingView.destoryElement();
                CZLoading.showArr.splice(0,1);
                CZLoading.showLoading();
            } else {
                //只删除数据源，不隐藏当前显示Loading
                CZLoading.showArr.splice(index,1);
            }
        }
    }

    /*
    * 清空数据源，直接关闭Loading
    * */
    static hideImmediately = () => {
        if (CZLoading.currentLoadingView) CZLoading.currentLoadingView.destoryElement();
        CZLoading.currentLoadingView = null;
        CZLoading.showArr = [];
    }
    /************************** List相关方法 **************************/
    /************************** Render中方法 **************************/
}