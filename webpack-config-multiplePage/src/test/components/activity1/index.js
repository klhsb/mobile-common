import $ from 'n-zepto' // zepto�Ļ��������������n-zepto������ʱ����������������������㣡

import '../../../static/css/common.css'
import './index.css'
import _ from 'lodash'
import logo from './images/loops_logo_256.png'
//import banner from 'static/banner.png' // ֱ��дstatic��������images�ļ��У�����Ϊ�������ļ���������alias.static: path.resolve(__dirname, './src/static/images'),
//import banner from './static/images/banner.png'
import banner from './images/activity1/banner.png' // ��ʹstatic����ͬһ���ļ������棬webpackҲ���Զ�ȥת��·����
//import $ from './static/js/zepto.min.js' // ���У�zepto����û��CMDģ�黯������ֱ������ʹ�ã��ᱨ��

//import Swiper from 'swiper'
//import $ from 'jquery' // ����ʱ����������������������㣡�ǾͲ�һ��Ҫʹ��$��
//import $ from 'zepto'
//import $ from 'n-zepto' // zepto�Ļ��������������n-zepto������ʱ����������������������㣡
//import jq from './static/js/jquery.js' // Ҳ����ֱ���ֶ����غ����룬����ʱ����������������������㣡

//import template from './static/js/index.js'
//import template from 'art-template' // ��֣�ͨ��npm���صģ������ᱨ��������ʹ�����룬Ҳ���Գɹ�ִ�еģ�Ӧ���ǲ���ڲ�������ˣ���Ҳ���²��ܷ��䵽����js�ļ��С�
//import template from 'art-template2'
//import express from 'express'
import art from './index.art' // art��ʵ��һ�����������Կ��Խ��ղ�����Ȼ����Ⱦҳ��

//console.log($('body'));
//console.log(jq('body'));
//console.log(zp2('body'));


// ����exportһ��������ȥ����router��render�����������У���Ȼ���Ǳ����谭·�ɵ���ת
export default function activity1() {
    var boardPreData = [
        {
            count: '---',
            reward_amount: '---',
            rank: 3,
            profile: {
                user_name: '---',
                avatar: './images/loops_logo_256.png',
            },
        },
        {
            count: '---',
            reward_amount: '---',
            rank: 1,
            profile: {
                user_name: '---',
                avatar: './images/loops_logo_256.png',
            },
        },
        {
            count: '---',
            reward_amount: '---',
            rank: 2,
            profile: {
                user_name: '---',
                avatar: './images/loops_logo_256.png', // ֱ��д�ַ�������û��ͨ��import���룬��webpack�ǲ�����д���ģ���������Щ����һ���Ǵӷ��������ͻ�������һ��url��Ҳû��Ҫ��webpack���д���
            },
        },

    ]
//var coinTOP3PreHtml = template('coinTopThreeItem', { coinDataTop3: boardPreData })
//zp('.top-three').html(coinTOP3PreHtml)


//art({ coinDataTop3: boardPreData }) // ����ʧ���ˣ���Ҳû����
    var html = art({
        text: '������',
        coinDataTop3: boardPreData
    }) // �Ҳ���ԭ����Ҫ��ȡ��art�����ķ���ֵ���������ֵ����������Ҫ��ģ����룡
    console.log(html);
    $('#app').html(html)
}


