function getListItem() {
    const newDiv = document.createElement("div");
    const newInput = document.createElement("input");
    
    const delDiv = document.createElement("button");
    newInput.classList.add('stroka');
    delDiv.classList.add("knopkaDel");
    newDiv.append(newInput);
    newDiv.append(delDiv);
    newInput.type="text";
    newDiv.classList.add("input");
    
     delDiv.addEventListener("click",(event)=>{
        newDiv.remove()
    })
    //     delDiv.addEventListener("mouseover",(event)=>{
    //     delDiv.style.backgroundColor= "#833AE0"
    // })
    //     delDiv.addEventListener("mouseleave",(event)=>{
    //     delDiv.style.backgroundColor= "#e03a3a00"
    // })
    
    return newDiv;
 }
 img.addEventListener('click', (event) => {
    console.log(img.classList[1])
    // if(img.classList[1] === 'firstImg'){
    //     img.classList.remove('firstImg')
    //     img.classList.add('second')
    // } else if(img.classList[1] === 'second'){
    //     img.classList.remove('second')
    //     img.classList.add('firstImg')
    // }
    if(img.classList.contains('firstImg')){
        img.classList.remove('firstImg')
        img.classList.add('second')
    } else {
        img.classList.remove('second')
        img.classList.add('firstImg')
    }
    
    arr.sort(function(a, b){return a, b})
    
})
