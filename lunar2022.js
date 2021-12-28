;// lunar2022.js by Tingyu
const lunar2022=function () {
	function go(m=1,d=1) {if (checkMD(m,d)) {return MDtoLunar(m,d);} else {return 'Invalid Date';}}
	function checkMD(m,d) {
		if (/^(0?[1-9]|1[0-2])$/.test(m)) {
			switch (+m) {
				case 1: case 3: case 5: case 7: case 8: case 10: case 12: if (/^(0?[1-9]|[12][0-9]|3[01])$/.test(d)) {return true;}
				case 4: case 6: case 9: case 11: if (/^(0?[1-9]|[12][0-9]|30)$/.test(d)) {return true;}
				case 2: if (/^(0?[1-9]|1[0-9]|2[0-8])$/.test(d)) {return true;}
				default: return false;
			}
		} else {return false;}
	}
	function MDtoLunar(m,d) {
		const C=[0,31,59,90,120,151,181,212,243,273,304,334], L=[-28,2,31,61,90,120,149,179,209,238,268,297,327,356], Lx=['冬','腊','正','二','三','四','五','六','七','八','九','十','冬','腊'], n=C[m-1]+d, ly=n>31?'壬寅':'辛丑';
		let i=L.length-1;
		while (n<L[i]+1) {i--;}
		const lm=Lx[i],ld=n-L[i];
		return ly+'年'+lm+'月'+zh(ld);
	}
	function zh(x) {
		const Z=['','一','二','三','四','五','六','七','八','九','十'];
		return x<11?'初'+Z[x]:x<20?'十'+Z[x-10]:x==20?'二十':x<30?'廿'+Z[x-20]:'三十';
	}
	return {go};
}();