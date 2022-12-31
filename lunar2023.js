;// lunar2023.js by Tingyu
const lunar2023 = (function () {
	function go (m = 1, d = 1) {if (checkMD(m, d)) {return MDtoLunar(m, d);} else {return 'Invalid Date';}}
	function checkMD(m, d) {
		if (/^(0?[1-9]|1[0-2])$/.test(m)) {
			switch (+m) {
				case 1: case 3: case 5: case 7: case 8: case 10: case 12: if (/^(0?[1-9]|[12][0-9]|3[01])$/.test(d)) {return true;}
				case 4: case 6: case 9: case 11: if (/^(0?[1-9]|[12][0-9]|30)$/.test(d)) {return true;}
				case 2: if (/^(0?[1-9]|1[0-9]|2[0-8])$/.test(d)) {return true;}
				default: return false;
			}
		} else {return false;}
	}
	function MDtoLunar(m, d) {
		const C = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], L = [-9, 21, 50, 80, 109, 138, 168, 198, 227, 257, 287, 316, 346], Lx=['腊', '正', '二', '闰二', '三', '四', '五', '六', '七', '八', '九', '十', '冬'], n = C[m - 1] + d, ly = n > 21 ? '癸卯' : '壬寅';
		let i = L.length - 1;
		while (n < L[i] + 1) {i--;}
		const lm = Lx[i],ld = n - L[i];
		return ly + '年' + lm + '月' + zh(ld);
	}
	function zh(x) {
		const Z = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
		return x < 11 ? '初' + Z[x] : x < 20 ? '十' + Z[x - 10] : x == 20 ? '二十' : x < 30 ? '廿' + Z[x - 20] : '三十';
	}
	return {go};
})();