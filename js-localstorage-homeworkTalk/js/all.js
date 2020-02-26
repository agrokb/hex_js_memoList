//DOM設定
newData   = document.querySelector('.text');
sendData  = document.querySelector('.send');
listData  = document.querySelector('.list');
//localStorageデータを取る
data = JSON.parse(localStorage.getItem('list')) || [];

//Event Listener
sendData.addEventListener('click',saveData);
listData.addEventListener('click',deleteData);
updateList(data);
//データ保存と更新リスト
function saveData(e){
    e.preventDefault();
    var txt = newData.value;
    var content = {
        'content':txt
    };
    data.push(content);
    localStorage.setItem('list',JSON.stringify(data));
    updateList(data);
    newData.value = '';
}
//更新関数
function updateList(item){
      str = '';
    for(var i = 0;i<item.length;i++){
      str +="<li><a href='#/' data-key="+i+">削除</a><span>"+item[i].content+"</span></li>"; 
    }
    listData.innerHTML = str; 
}
//データ削除
function deleteData(e){
    e.preventDefault();
    if(e.target.nodeName !== 'A'){return};
    var key = e.target.dataset.key; 
    data.splice(key,1);
    localStorage.setItem('list',JSON.stringify(data));
    updateList(data);
}

//複数ページ
function goPage(){

}