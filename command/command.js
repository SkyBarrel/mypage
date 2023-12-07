const comm_table = {
    "0_0": function(){func0_0();},
    "0_1": function(){func0_1();},
    "0_2": function(){func0_2();},
    "1_0": function(){func1_0();},
    "1_1": function(){func1_1();},
    "1_3": function(){func1_3();},
    "1_4": function(){func1_4();},
};
function func0_0(){
    in_doc("第一コマンドが fast の場合チュートリアルが表示される。基本的に二つの単語を打ち込む。単語は半角スペースで区切る。次は fast comm を実行してみて")
}
function func0_1(){
    in_doc("fast : text(第一コマンドの説明) comm(第一コマンドに対応した第二コマンドの一覧) list(第一コマンドの一覧)")
}
function func0_2(){
    in_doc("fast(チュートリアル) log(出力の後処理)")
}
function func1_0(){
    in_doc("出力されたテキストをlogに移したり、logを消したりできる")
}
function func1_1(){
    in_doc("log : text(第一コマンドの説明) comm(第一コマンドに対応した第二コマンドの一覧) cp(出力されたテキストをlogに移す) remove(logの内容を削除)")
}
function func1_3(){
    const text_com=document.getElementById("command_dot")
    const text_log=document.getElementById("log")
    text_log.textContent=text_com.textContent
    in_doc("移動しました")
}
function func1_4(){
    const text_log=document.getElementById("log")
    text_log.textContent=""
    in_doc("logが削除されました")
}
function in_doc(index){
    const text_com=document.getElementById("command_dot")
    text_com.textContent=index
}