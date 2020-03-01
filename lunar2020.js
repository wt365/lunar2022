;// lunar2020.js by wt365
const lunar2020=function () {
	function go(m=1,d=1) {if (checkMD(m,d)) {return MDtoLunar(m,d);} else {return 'Invalid Date';}}
	function checkMD(m,d) {
		if (/^(0?[1-9]$|1[0-2])$/.test(m)) {
			switch (+m) {
				case 1: case 3: case 5: case 7: case 8: case 10: case 12: if (/^(0?[1-9]|[12][0-9]|3[01])$/.test(d)) {return true;}
				case 4: case 6: case 9: case 11: if (/^(0?[1-9]|[12][0-9]|30)$/.test(d)) {return true;}
				case 2: if (/^(0?[1-9]|[12][0-9])$/.test(d)) {return true;} //Feb29
				default: return false;
			}
		} else {return false;}
	}
	function MDtoLunar(m,d) {
		const C=[0,31,60,91,121,152,182,213,244,274,305,335], L=[-6,24,53,83,113,143,172,202,231,260,290,319,349], Lx=['腊','正','二','三','四','闰四','五','六','七','八','九','十','冬'], n=C[m-1]+d, ly=n>24?'庚子':'己亥';
		let i=L.length-1;
		while (n<L[i]) {i--;}
		const lm=Lx[i],ld=n-L[i];
		return ly+'年'+lm+'月'+zh(ld);
	}
	function zh(x) {
		const Z=['','一','二','三','四','五','六','七','八','九','十'];
		return x<11?'初'+Z[x]:x<20?'十'+Z[x-10]:x==20?'二十':x<30?'廿'+Z[x-20]:'三十';
	}
	return {go};
}();