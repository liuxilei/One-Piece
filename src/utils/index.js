const utils = {
	/**
	 * 对象copy(属性)
	 */
	objCopy: (source) => {
		if (typeof source == "object") {
			return JSON.parse(JSON.stringify(source));
		} else {
			return source;
		}
	},
	/**
	 * 对象copy(可拷贝方法))
	 */
	deepClone: (source) => {
		const targetObj = source.constructor === Array ? [] : {}; // 判断复制的目标是数组还是对象
		for (let keys in source) {
			// 遍历目标
			if (source.hasOwnProperty(keys)) {
				if (source[keys] && typeof source[keys] === "object") {
					// 如果值是对象，就递归一下
					targetObj[keys] =
						source[keys].constructor === Array ? [] : {};
					targetObj[keys] = utils.deepClone(source[keys]);
				} else {
					// 如果不是，就直接赋值
					targetObj[keys] = source[keys];
				}
			}
		}
		return targetObj;
	},
	/**
	 * 判断是否是手机号
	 */
	isPhone: (s) => {
		return /^[1][3,4,5,6,7,8][0-9]{9}$/.test(s);
	},
	/**
	 * 身份证号验证
	 */
	isIdentity: (s) => {
		return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(s);
	},
	/**
	 * 数字验证
	 */
	isNumber: (number) => {
		return Object.prototype.toString.call(number) === "[object Number]";
	},
	/**
	 * 特殊符号检测
	 */
	isSpecial: (str) => {
		var patrn = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/im;
		var pattern = /^\s+|\s+$/g;
		return patrn.test(str) || pattern.test(str);
	},
	/**
	 * 字母检测
	 */
	isLetter: (str) => {
		return /[a-zA-Z]/.test(str);
	},
	/**
	 * 电话处理
	 */
	phone2Pwd: (phone) => {
		phone = phone + "" || "";
		return phone.substring(0, 3) + "****" + phone.substring(7, 11);
	},
	/**
	 * 时间转换秒数
	 */
	formatTime: (timeTemp) => {
		let m = Math.floor(timeTemp / 60);
		let s = Math.floor(timeTemp % 60);
		return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
	},

	/**
	 * 时间戳转时间格式
	 */
	getLocalTime: (nS) => {
		return new Date(parseInt(nS) * 1000)
			.toLocaleString("chinese", { hour12: false })
			.replace(/\//g, "-");
	},

	/**
	 * 数组去重
	 */
	unique: (arr) => {
		return Array.from(new Set(arr));
	},

	/**
	 * 小数点舍值默认2位
	 */
	toFixed: (num, number) => {
		if (
			(num && typeof num == "number") ||
			(num && typeof num == "string" && !isNaN(num))
		) {
			let dot = "";
			let cnum = num + "";
			if (
				cnum.substr(cnum.length - 1) == "." &&
				cnum.split(".").length - 1 <= 1
			) {
				//允许最后一位是点
				dot = ".";
			}
			if (!dot) {
				//如果不存在点,则归为0, 不拼接字符串
				dot = 0;
			}
			num = parseFloat(num);
			return num.toFixed(number ? number : 2) + dot;
		} else {
			return 0;
		}
	},
	/**
	 * 对象转get请求数据
	 */
	obj2GetData: (obj) => {
		let str = "";
		for (let key in obj) {
			str += (str ? "&" : "") + key + "=" + obj[key];
		}
		return str;
	},

	/**
	 * 随机数生成数据
	 */
	random: (number, fan) => {
		let m = "";
		fan = fan || 10;
		for (let i = 0; i < number; i++) {
			m += "" + Math.floor(Math.random() * fan);
		}
		return m;
	},

	/**
	 * 判断是否存在
	 */
	isExistent: (id, val) => {
		if (!val) {
			val = null;
		}
		if (id == undefined && id == null) {
			return val;
		}
		let type = typeof id;
		if (
			type == "string" &&
			(id == "" || id == "undefined" || id == "null")
		) {
			return val;
		} else if (
			type == "object" &&
			(JSON.stringify(id) == "{}" || JSON.stringify(id) == "[]")
		) {
			return val;
		}
		return true;
	},

	/**
	 * 是否是数组
	 */
	isArray: (o) => {
		return Object.prototype.toString.call(o) === "[object Array]";
	},

	/**
	 * 去除空格
	 */
	removeSpace: (s) => {
		if (s) {
			s = s.replace(/\s|\t|\r|\n/g, "");
		}
		return s;
	},
	/**
	 * 时间格式
	 */
	format: (fmt) => {
		let o = {
			"M+": this.getMonth() + 1, //月份
			"d+": this.getDate(), //日
			"h+": this.getHours(), //小时
			"m+": this.getMinutes(), //分
			"s+": this.getSeconds(), //秒
			"q+": Math.floor((this.getMonth() + 3) / 3), //季度
			S: this.getMilliseconds(), //毫秒
		};
		if (/(y+)/.test(fmt)) {
			fmt = fmt.replace(
				RegExp.$1,
				(this.getFullYear() + "").substr(4 - RegExp.$1.length),
			);
		}
		for (let k in o) {
			if (new RegExp("(" + k + ")").test(fmt)) {
				fmt = fmt.replace(
					RegExp.$1,
					RegExp.$1.length == 1
						? o[k]
						: ("00" + o[k]).substr(("" + o[k]).length),
				);
			}
		}
		return fmt;
	},
	/**
	 * 获取当前页面滚动位置
	 * @return eg:{x: 0, y: 200}
	 */
	getScrollPosition: (el = window) => ({
		x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
		y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,
	}),
	/**
	 * 平滑的滚动到页面顶部
	 */
	scrollToTop: () => {
		const c = document.documentElement.scrollTop || document.body.scrollTop;
		if (c > 0) {
			window.requestAnimationFrame(scrollToTop);
			window.scrollTo(0, c - c / 8);
		}
	},
	/**
	 * 判断当前元素在当前视图能够被看见
	 * @param {HTMLElement} el
	 */
	elementIsVisibleInViewport: (el) => {
		const { top, left, bottom, right } = el.getBoundingClientRect();
		const { innerHeight, innerWidth } = window;
		return (
			top >= 0 &&
			left >= 0 &&
			bottom <= innerHeight &&
			right <= innerWidth
		);
	},

	/**
	 * 判断当前环境是手机和pc电脑环境
	 */
	detectDeviceType: () =>
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent,
		)
			? "Mobile"
			: "Desktop",
	/**
	 * 复制文本到剪切板
	 */
	copyToClipboard: (data) => {
		const _tempInput = document.createElement("input");
		_tempInput.value = data.value;
		document.body.appendChild(_tempInput);
		_tempInput.select();
		document.execCommand("Copy");
		document.body.removeChild(_tempInput);
	},
	/**
	 * 通用唯一标识符
	 * UUID就是Universal Unique IDentifier的缩写，它是一个128位，16字节的值，并确保在时间和空间上唯一。
	 * 它是把硬件地址、时间以及随机数结合在一起，它保证对在同一时空中的所有机器都是唯一的
	 */
	uuid: () => {
		let s = [];
		let hexDigits = "0123456789abcdef";
		for (let i = 0; i < 36; i++) {
			s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
		}
		s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
		s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
		s[8] = s[13] = s[18] = s[23] = "-";
		const uuid = s.join("");
		return uuid;
	},
	/**
	 * 生成guid（全局唯一标识符）
	 */
	guid: () => {
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
			/[xy]/g,
			function (c) {
				let r = (Math.random() * 16) | 0,
					v = c == "x" ? r : (r & 0x3) | 0x8;
				return v.toString(16);
			},
		);
	},
};

export default utils;
