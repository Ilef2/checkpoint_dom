var add = document.getElementsByClassName('add')
var count= document.getElementsByClassName('count')
var moins = document.getElementsByClassName('moins')


for (var i=0; i<add.length;i++){
    var ad=add[i];
    let coun=count[i];
    ad.addEventListener("click",function(){
    coun.innerHTML++
})

}
for (var i=0; i<moins.length;i++){
    var moi=moins[i];
    let coun=count[i];
    moi.addEventListener("click",function(){
        if (coun.innerHTML>0)
    coun.innerHTML--
})

}
var contain=document.getElementsByClassName('container1')
var del=document.getElementsByClassName('del')

for (var i=0; i<contain.length; i++){
    let con=contain[i];
    let dell=del[i];
    console.log(con,dell,i)
    dell.addEventListener("click",function(){
    con.remove()
})

}



