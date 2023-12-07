comm_list=[
    ["fast","log"],
    ["text","comm","list","cp","remove"]
];
//fast( text:説明文表示 comm:第二コマンドを表示説明
//log( text:説明 comm:第二コマンド cp:log欄に現在の表示をコピー remove:log欄のリセット
(function ter_fast(){//初期化
    for(let i=0;i<15;i++){
        let text_list=document.createElement('li');
        document.getElementById('list').appendChild(text_list);
    }
})();
//入力したキーを取得test_ivent呼び出し
let ter_form = document.getElementById('form_text');
ter_form.addEventListener('keypress', test_ivent);

function test_ivent(e) {
    if (e.keyCode === 13) {//改行の字が入力 keyCodeが非推奨
        if(ter_form.value==="")return;//空白の例外処理

        let text_list=document.createElement('li');//logに<li>で表示
        text_list.textContent=ter_form.value;
        ter_check();
        document.getElementById('list').appendChild(text_list);//log<li>から削除
        document.getElementById('list').removeChild(list.children [0]);//テキストエリアをクリア
        ter_form.value = "";
    }
}
function ter_check(){//コマンド抽出 ここより下 整理してない
    let str=" "+ter_form.value+" ";
    let flag_sum=0;
    let flag_num=[0];
    let flag_max=2;
    for(let i=1;i<str.length&&flag_sum<flag_max;i++){
        if(str.slice(i,i+1)===" "){
            flag_num[flag_num.length]=i;
            flag_sum++;
        }
    }
    let index;
    let int_index=[]
    for(let i=0;i<flag_sum;i++){
        index=str.slice(flag_num[i]+1,flag_num[i+1])
        console.log(index);
        for(let j=0;j<comm_list[i].length;j++){
            if(index===comm_list[i][j]){
                console.log(j);
                int_index[i]=j
                tutorial("command"+(i+1)+":"+comm_list[i][j],i)
            }
        }
    }
    comm_table[int_index[0]+"_"+int_index[1]]();
}
function tutorial(index,i){
    console.log(index);
    let test = document.getElementById('main');
    if(i===0){
        test.textContent = index+"_";
    }else{test.textContent += index
    }; // textContentでテキストを追加
}