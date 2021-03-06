/******************************************************************************
 * Copyright (c) 2019-2021 Mixlinker Networks Inc. <mixiot@mixlinker.com>
 * All rights reserved.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Application License of Mixlinker Networks License and Mixlinker
 * Distribution License which accompany this distribution.
 *
 * The Mixlinker License is available at
 *    http://www.mixlinker.com/legal/license.html
 * and the Mixlinker Distribution License is available at
 *    http://www.mixlinker.com/legal/distribution.html
 *
 * Contributors:
 *    Mixlinker Technical Team
 *****************************************************************************/
import config from '$config';
import { fetch } from '$api.js';

export default {
    //添加测试数据
    add_test_data(cb, data) {
        fetch(config.apiq.event + '/public_add', 'post', data).then((data) => { cb(data) }).catch((e) => { cb(e) })
    },
    //获取事件详细列表
    get_list(cb, data, token) {
        fetch(config.apiq.event + '/public_get_list', 'post', data, token).then((data) => { cb(data) }).catch((e) => { cb(e) })
    },
    //获取事件列表
    get_menu_list(cb, data) {
        fetch(config.apiq.event + '/public_get_menu_list', 'post', data).then((data) => { cb(data) }).catch((e) => { cb(e) })
    },
    // 获取事件详细信息
    get_event_detail(cb, data, token) {
        fetch(config.apiq.event + '/public_get_info', 'post', data, token).then((data) => { cb(data) }).catch((e) => { cb(e) })
    },
    // 获取所有设备的故障/告警/事件列表
    get_all_warn_list(cb, data) {
        fetch(config.apiq.common + '/public_get_all_warn', 'post', data).then((data) => { cb(data) }).catch((e) => { cb(e) })
    },
}
