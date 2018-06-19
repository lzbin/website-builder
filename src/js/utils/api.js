import { loading } from './loading';
import Timer from './timer';

$.ajaxSetup({
	timeout: 5000,
	complete: () => {
		loading(false);
	},
	beforeSend: () => {
		loading();
	}
});

// 预约
// data: tel、game_id、platform(iOS\Android)
export function subscribe(data, success, error) {
	$.ajax({
		type: 'get',
		url: 'http://user-hub.xianyugame.com/api/subscribe/',
		data: data,
		dataType: 'jsonp',
		crossDomain: true,
		jsonp: 'callback',
		success: success,
		error: error
	});
}

// 获取短信验证码
// data: tel
export function sendCode(data, success, error, el) {
    if ($(el).hasClass('disabled')) return;
	$.ajax({
		type: 'get',
		url: 'http://user-hub.xianyugame.com/api/send_vcode/',
		data: data,
		dataType: 'jsonp',
		crossDomain: true,
		jsonp: 'callback',
		success: data => {
            new Timer(el);
            success(data);
        },
		error: error
	});
}

// 验证码验证
// data: tel、vcode、platform(iOS\Android)、game_id
export function verifyCode(data, success, error) {
	$.ajax({
		type: 'get',
		url: 'http://user-hub.xianyugame.com/api/verify/',
		data: data,
		dataType: 'jsonp',
		crossDomain: true,
		jsonp: 'callback',
		success: success,
		error: error
	});
}

// 获得礼包码
// data: user_id、game_id、tel
export function giftCode(data, success, error) {
	$.ajax({
		type: 'get',
		url: 'http://gift-hub.xianyugame.com/api/gift_code/',
		data: data,
		dataType: 'jsonp',
		crossDomain: true,
		jsonp: 'callback',
		success: success,
		error: error
	});
}
