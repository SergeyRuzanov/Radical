document.addEventListener('contextmenu', event => event.preventDefault());
var chil;
var round;
var answer;
var error;
var serch;



function someFunc() {
    chil = document.getElementById("a").value;
    round = document.getElementById("b").value;
    answer = document.getElementsByClassName('answer');
    error = document.getElementsByClassName('error');
    chil = chil.replace(/[,]/g, '.');
    answer[0].style.display = "none";
    error[0].style.display = "none";
    if (chil.trim() === '') {
        document.getElementById('d').innerHTML = '<span>错误！</span>输入数字！';
        error[0].style.display = "block";
    } else {
        if (+round > 40) {
            document.getElementById('d').innerHTML = '<span>错误！</span>输出最多40个小数位！';
            error[0].style.display = "block";
        } else if (Number.isInteger(+round) == false || +round < 0) {
            document.getElementById('d').innerHTML = '<span>错误！</span>输入一个正整数来圆！';
            error[0].style.display = "block";
        } else {
            if (isNaN(chil) == false) {
                if (+chil > 0) {
                    if (Number.isInteger(Math.sqrt(+chil))) {
                        document.getElementById('c').innerHTML = '<span>回答：</span>' + '&plusmn;' + Math.sqrt(+chil);
                    } else {
                        document.getElementById('c').innerHTML = '<span>回答：</span>' + '&plusmn;' + Math.sqrt(+chil).toFixed(round);
                    }
                    answer[0].style.display = "block";
                } else if (+chil < 0) {
                    chil = math.complex(chil);
                    document.getElementById('c').innerHTML = '<span>回答：</span>' + '&plusmn;' + (Number.isInteger(math.sqrt(chil).im) ? (math.sqrt(chil).im == 1 ? 'i' : math.sqrt(chil).im + 'i') : math.sqrt(chil).im.toFixed(round) + 'i');
                    answer[0].style.display = "block";
                } else if (+chil === 0) {
                    document.getElementById('c').innerHTML = '<span>回答：</span>' + Math.sqrt(+chil);
                    answer[0].style.display = "block";
                }
            } else {
                try {
                    if (chil.search(/sin/i) != -1 || chil.search(/cos/i) != -1 || chil.search(/tg/i) != -1) {
                        if (chil.search(/Pi/i) != -1) {
                            chil = chil.replace(/ /g, '');
                            var e = /Pi/gi;
                            var array;
                            serch = [];
                            var sec = 0;
                            while ((array = e.exec(chil)) !== null) {
                                serch[sec] = array.index;
                                sec++;
                            }
                            sec = 0;
                            while (serch.length > sec) {
                                if (chil.charCodeAt(serch[sec] - 1) >= 48 && chil.charCodeAt(serch[sec] - 1) <= 57) {
                                    chil = chil.slice(0, serch[sec]) + '*Math.PI' + chil.slice(serch[sec] + 2, chil.length);
                                    for (var ind in serch) {
                                        serch[ind] = serch[ind] + 6;
                                    }
                                } else {
                                    chil = chil.slice(0, serch[sec]) + 'Math.PI' + chil.slice(serch[sec] + 2, chil.length);
                                    for (var ind in serch) {
                                        serch[ind] = serch[ind] + 5;
                                    }
                                }
                                sec++;
                            }
                        }
                        if (chil.search(/sin/i) != -1) {
                            chil = chil.replace(/ /g, '');
                            var e = /sin/gi;
                            var array;
                            serch = [];
                            var sec = 0;
                            while ((array = e.exec(chil)) !== null) {
                                serch[sec] = array.index;
                                sec++;
                            }
                            sec = 0;
                            while (serch.length > sec) {
                                if (chil.charCodeAt(serch[sec] - 1) >= 48 && chil.charCodeAt(serch[sec] - 1) <= 57) {
                                    chil = chil.slice(0, serch[sec]) + '*Math.sin' + chil.slice(serch[sec] + 3, chil.length);
                                    for (var ind in serch) {
                                        serch[ind] = serch[ind] + 6;
                                    }
                                } else {
                                    chil = chil.slice(0, serch[sec]) + 'Math.sin' + chil.slice(serch[sec] + 3, chil.length);
                                    for (var ind in serch) {
                                        serch[ind] = serch[ind] + 5;
                                    }
                                }
                                sec++;
                            }
                        }
                        if (chil.search(/cos/i) != -1) {
                            chil = chil.replace(/ /g, '');
                            var e = /cos/gi;
                            var array;
                            serch = [];
                            var sec = 0;
                            while ((array = e.exec(chil)) !== null) {
                                serch[sec] = array.index;
                                sec++;
                            }
                            sec = 0;
                            while (serch.length > sec) {
                                if (chil.charCodeAt(serch[sec] - 1) >= 48 && chil.charCodeAt(serch[sec] - 1) <= 57) {
                                    chil = chil.slice(0, serch[sec]) + '*Math.cos' + chil.slice(serch[sec] + 3, chil.length);
                                    for (var ind in serch) {
                                        serch[ind] = serch[ind] + 6;
                                    }
                                } else {
                                    chil = chil.slice(0, serch[sec]) + 'Math.cos' + chil.slice(serch[sec] + 3, chil.length);
                                    for (var ind in serch) {
                                        serch[ind] = serch[ind] + 5;
                                    }
                                }
                                sec++;
                            }
                        }
                        if (chil.search(/tg/i) != -1) {
                            chil = chil.replace(/ /g, '');
                            var e = /tg/gi;
                            var array;
                            serch = [];
                            var sec = 0;
                            while ((array = e.exec(chil)) !== null) {
                                serch[sec] = array.index;
                                sec++;
                            }
                            sec = 0;
                            while (serch.length > sec) {
                                if (chil.charCodeAt(serch[sec] - 1) >= 48 && chil.charCodeAt(serch[sec] - 1) <= 57) {
                                    chil = chil.slice(0, serch[sec]) + '*Math.tan' + chil.slice(serch[sec] + 2, chil.length);
                                    for (var ind in serch) {
                                        serch[ind] = serch[ind] + 7;
                                    }
                                } else {
                                    chil = chil.slice(0, serch[sec]) + 'Math.tan' + chil.slice(serch[sec] + 2, chil.length);
                                    for (var ind in serch) {
                                        serch[ind] = serch[ind] + 6;
                                    }
                                }
                                sec++;
                            }
                        }
                        chil = eval(chil);
                        if (!Number.isNaN(chil)) {
                            if (chil > 0) {
                                if (Number.isInteger(Math.sqrt(+chil))) {
                                    document.getElementById('c').innerHTML = '<span>回答：</span>' + '&plusmn;' + Math.sqrt(+chil);
                                } else {
                                    document.getElementById('c').innerHTML = '<span>回答：</span>' + '&plusmn;' + Math.sqrt(+chil).toFixed(round);
                                }
                                answer[0].style.display = "block";
                            } else if (chil < 0) {
                                chil = math.complex(chil);
                                document.getElementById('c').innerHTML = '<span>回答：</span>' + '&plusmn;' + (Number.isInteger(math.sqrt(chil).im) ? (math.sqrt(chil).im == 1 ? 'i' : math.sqrt(chil).im + 'i') : math.sqrt(chil).im.toFixed(round) + 'i');
                                answer[0].style.display = "block";
                            } else if (+chil === 0) {
                                document.getElementById('c').innerHTML = '<span>回答：</span>' + Math.sqrt(+chil);
                                answer[0].style.display = "block";
                            } else {
                                document.getElementById('d').innerHTML = '<span>错误！</span>输入的号码无效！';
                                error[0].style.display = "block";
                            }
                        } else {
                            document.getElementById('d').innerHTML = '<span>错误！</span>输入的号码无效！';
                            error[0].style.display = "block";
                            return;
                        }
                    } else {
                        chil = eval(chil);
                        if (+chil > 0) {
                            if (Number.isInteger(Math.sqrt(+chil))) {
                                document.getElementById('c').innerHTML = '<span>回答：</span>' + '&plusmn;' + Math.sqrt(+chil);
                            } else {
                                document.getElementById('c').innerHTML = '<span>回答：</span>' + '&plusmn;' + Math.sqrt(+chil).toFixed(round);
                            }
                            answer[0].style.display = "block";
                        } else if (+chil < 0) {
                            chil = math.complex(chil);
                            document.getElementById('c').innerHTML = '<span>回答：</span>' + '&plusmn;' + Number.isInteger(math.sqrt(chil).im) ? math.sqrt(chil).im + 'i' : math.sqrt(chil).im.toFixed(round) + 'i';
                            answer[0].style.display = "block";
                        } else if (+chil === 0) {
                            document.getElementById('c').innerHTML = '<span>回答：</span>' + Math.sqrt(+chil);
                            answer[0].style.display = "block";
                        } else {
                            document.getElementById('d').innerHTML = '<span>错误！</span>输入的号码无效！';
                            error[0].style.display = "block";
                        }
                    }
                } catch {
                    try {
                        chil = math.complex(chil);
                        if (typeof (chil) == 'object') {
                            document.getElementById('c').innerHTML = '<span>回答：</span>' + '&plusmn;' + '(' + ((math.sqrt(chil).re == 0) ? (math.sqrt(chil).im == 0 ? '' : (Math.abs(math.sqrt(chil).im) != 1 ? (math.sqrt(chil).im < 0 ? '- ' : '') + Math.abs(math.sqrt(chil).im.toFixed(round)) + 'i' : ((math.sqrt(chil).im < 0 ? ' - ' : ' + ') + ' i'))) : ((Number.isInteger(math.sqrt(chil).re) ? math.sqrt(chil).re : math.sqrt(chil).re.toFixed(round)) + (math.sqrt(chil).im == 0 ? '' : (Math.abs(math.sqrt(chil).im) != 1 ? (math.sqrt(chil).im < 0 ? ' - ' : ' + ') + Math.abs(math.sqrt(chil).im.toFixed(round)) + 'i' : ((math.sqrt(chil).im < 0 ? ' - ' : ' + ') + 'i'))))) + ')';
                            answer[0].style.display = "block";
                        }
                    } catch {
                        document.getElementById('d').innerHTML = '<span>错误！</span>输入的号码无效！';
                        error[0].style.display = "block";
                    }
                }
            }
        }
    }
}
document.getElementById("button").onclick = someFunc;
