var Qus = [];
var Code = [];
var Input = [];
var Ans = [];
Qus[0] = "請撰寫一段程式碼，將傳入的兩個變數相加並回傳結果";
Input[0] = [[21, 35], [2, 3], [-3, -4], [1, 2], [0, 0]];
Ans[0] = [56, 5, -7, 3, 0];
Code[0] = "function foo(a, b) {\n\
    \n\
}";

Qus[1] = "請撰寫一段程式碼，比較傳入的兩個整數變數的大小並回傳值較大的一方";
Input[1] = [[1, 7], [0, -1], [23, -24], [1, -1], [-9, -11]];
Ans[1] = [7, 0, 23, 1, -9];
Code[1] = "function foo(a, b) {\n\
    \n\
}";

Qus[2] = "請宣告陣列，傳入第一二格的數值，第三到五格為前兩格相加的值並將整個陣列依序回傳（使用for迴圈）";
Input[2] = [[1, 1], [2, 4], [0, 0], [0, 1], [3, 5]];
Ans[2] = [[1, 1, 2, 3, 5], [2, 4, 6, 10, 16], [0, 0, 0, 0, 0], [0, 1, 1, 2, 3], [3, 5, 8, 13, 21]];
Code[2] = "function foo(a, b) {\n\
    var arr = [a, b]\n\
    // hint: arr[2] = a + b\n\
    \n\
}";

Qus[3] = "請撰寫一段程式碼，傳入a, b兩變數的值並比較絕對值的大小，若|a| > |b|則回傳a + b，|a| < |b|回傳a - b，|a| = |b|則回傳0";
Input[3] = [[-9, 8], [9, 8], [-8, -9], [-9, 9], [1, 1]];
Ans[3] = [[-1], [17], [1], [0], [0]];
Code[3] = "function foo(a, b) {\n\
    \n\
}";

Qus[4] = "請撰寫一段程式碼，將使用者傳入的陣列由大到小排序並回傳";
Input[4] = [[[0, -7, 1]], [[7, 1, 0]], [[-3, -8, -1]], [[1, 3, -3]], [[5, 7, 2]]];
Ans[4] = [[1, 0, -7], [7, 1, 0], [-1, -3, -8], [3, 1, -3], [7, 5, 2]];
Code[4] = "function foo(arr) {\n\
    \n\
}";

Qus[5] = "請撰寫一段程式碼，將傳入的字串反轉並回傳";
Input[5] = ["Hello World!!", "Welcome", "Nation Blue", "M@GIC", "2nd SIDE"];
Ans[5] = ["!!dlroW olleH", "emocleW", "eulB noitaN", "CIG@M", "EDIS dn2"];
Code[5] = "function foo(str) {\n\
    \n\
}";

// Qus[6] = "傳入一個二維陣列形式的矩陣，將其反轉後回傳";
// var arr = []; 
// arr[0] = [0, 1, 1, 0, 1, 1];
// arr[1] = [0, 0, 4, 5, 6, 1];
// arr[2] = [3, 4 ,0 ,5, 2, 9];
// arr[3] = [4, 5, 6, 8, 0, -1];
// arr[4] = [0, 1, 8, 7, 4, 0];
// arr[5] = [0, 1, 1, 1, 1, 1];
// Input[6] = [arr];

// var Ans_arr = [];
// Ans_arr[0] = [0, 0, 3, 4, 0, 0];
// Ans_arr[1] = [1, 0, 4, 5, 1, 1];
// Ans_arr[2] = [1, 4, 0, 6, 8, 1];
// Ans_arr[3] = [0, 5, 5, 8, 7, 1];
// Ans_arr[4] = [1, 6, 2, 0, 4, 1];
// Ans_arr[5] = [1, 1, 9, -1, 0, 1];
// Ans[6] = [Ans_arr];

var QNum, SeRight, SeWrong, strQus, strExInput, strExOutput, strCode;

function coding() {
	var strCode = document.getElementById("boxCode").value,
		chk = true;
	console.log(strCode + setInputStr(QNum, 0));
	try {
		eval(strCode + setInputStr(QNum, 0));
	} catch (e) {
		if (e) {
			console.log(strCode + setInputStr(QNum, 0));
			setError(e.message);
			chk = false;
			return;
		}
	}

	if (eval(strCode + setInputStr(QNum, 0)) == undefined) {
		setError("No return value");
		return;
	}
	
	if (chk)
	for (var i in Ans[QNum]) {
		if (eval(strCode + setInputStr(QNum, i)).toString() != Ans[QNum][i].toString()) {
			chk = false;
			break;
		}
	}
	if (chk) {
		SeRight.play();
		console.log("Right"); QNum++;
		var strErr = document.getElementById("strError");
		strErr.innerHTML = " ";
		setQuestion(QNum);
		localStorage.setItem("Right", QNum);
		localStorage.setItem("AC", parseInt(localStorage.getItem("AC")) + 1);
	} else {
		SeWrong.play();
		console.log(eval(strCode + setInputStr(QNum, i)).toString(), Ans[QNum][i].toString());
		setError("Wrong Answer");
	}
}

function setError(err) {
	//console.log(err);
	localStorage.setItem("Wrong", parseInt(localStorage.getItem("Wrong")) + 1);
	SeWrong.play();
	var strErr = document.getElementById("strError");
	strErr.innerHTML = err;
}

function init() {
	if (localStorage.getItem("Right")) QNum = localStorage.getItem("Right");
	else {
		QNum = 0;
		localStorage.setItem("Right", 0);
	}
	if (!localStorage.getItem("Wrong")) localStorage.setItem("Wrong", 0);
	if (!localStorage.getItem("AC")) localStorage.setItem("AC", 0);
	SeRight = document.getElementById("Right");
	SeWrong = document.getElementById("Wrong");
	SeRight.volume = SeWrong.volume = 0.2;
	strQus = document.getElementById("Question");
	strExInput = document.getElementById("ExInput");
	strExOutput = document.getElementById("ExOutput");
	strCode = document.getElementById("boxCode");
	setQuestion(QNum);
}

function setQuestion(num) {
	if (num < 6) {
		strQus.innerHTML = "題目：" + Qus[num];
		strExInput.innerHTML = "呼叫：" + setInputStr(num, 0);
		strExOutput.innerHTML = "回傳：" + Ans[num][0];
		strCode.value = Code[num];
	} else {
		strExOutput.hidden = strQus.hidden =
		strExInput.hidden = strCode.hidden = true;
		document.getElementById("BtnCode").hidden = true;
		document.getElementById("Result").innerHTML = "恭喜解開所有題目！";
		document.getElementById("BtnReset").hidden = false;
	}
}

function setInputStr(num, ind) {
	var strInput = "foo(";
	if (Input[num][ind][0] instanceof Array)
		strInput += "[" + Input[num][ind][0] + "]";
	else if (typeof Input[num][ind] == "string") {
		strInput += '"' + Input[num][ind] + '")';
		return strInput;
	} else strInput += Input[num][ind][0];	
	for (var i in Input[num][ind]) {
		if (i != 0)
			if (Input[num][ind][0] instanceof Array)
				strInput += ", [" + Input[num][ind][0] + "]"
			else strInput += ", " + Input[num][ind][i];
	}
	return strInput + ")";
}

function reset() {
	strExOutput.hidden = strQus.hidden =
		strExInput.hidden = strCode.hidden = false;
	document.getElementById("BtnCode").hidden = false;
	document.getElementById("BtnReset").hidden = true;
	document.getElementById("Result").innerHTML = "";
	localStorage.setItem("Right", 0);
	QNum = 0;
	setQuestion(QNum);
}

function cheat() {
	QNum = 7;
	setQuestion(QNum);
}