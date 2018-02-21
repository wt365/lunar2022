/* lunar2018.js by wt365 */
function lunar2018(m=1,d=1) {if (checkMD(m,d)) {return MDtoLunar(m,d);} else {return 'Invalid Date';}}
function checkMD(m,d) {
	if (!/[01]?[0-9]/.test(m+'') || !/[01]?[0-9]/.test(d+'')) {return false;}
	switch (+m) {
		case 1: case 3: case 5: case 7: case 8: case 10: case 12: if (d>0 && d<32) {return true;}
		case 4: case 6: case 9: case 11: if (d>0 && d<31) {return true;}
		case 2: if (d>0 && d<29) {return true;}
		default: return false;
	}
}
function MDtoLunar(m,d) {
	const C=[0,31,59,90,120,151,181,212,243,273,304,334], L=[0,16,46,75,105,134,164,193,222,252,281,311,340], Lx=['十一','腊','正','二','三','四','五','六','七','八','九','十','十一'], n=C[m-1]+d, ly=n>46?'丁酉':'戊戌';
	var lm, ld;
	for (var i=12; i>=0; i--) {if (n>L[i]) {lm=Lx[i], ld=n-L[i]; break;}}
	return ly+'年'+lm+'月'+zh(ld);
}
function zh(x) {
	const Zn=['','一','二','三','四','五','六','七','八','九','十'];
	var z;
	if (x<=10) {xx='初'+Zn[x];} else if (x<20) {xx='十'+Zn[x-10];} else if (x==20) {xx='二十';} else if (x<30) {xx='廿'+Zn[x-20];} else {xx='三十';}
	return xx;
}