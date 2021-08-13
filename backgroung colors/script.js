let index = 0;
function changeColor() {
    let colors = ["red","blue","green","orange","purple","yellow","purple"];
    let btn = document.getElementsByTagName("body")[0];
    btn.style.background = colors[index+=1];

    if(index > colors.length -1)
    index =0;
}