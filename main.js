const arr = [];


function windowLoad(){
    
    const button = document.querySelector(".first");
    const container = document.querySelector(".vidimoe");
    
    const img = document.querySelector('.img')
    const firstItem = getListItem();
    container.append(firstItem);
    arr.push(firstItem)
    

    button.addEventListener("click",() => {
        const div = getListItem();
        arr.push(div)
        container.append(div);
    })

    img.addEventListener('click', (event) => {
        if(img.classList.contains('firstImg')){ 
            img.classList.remove('firstImg')
            img.classList.add('second')
        } else {
            img.classList.remove('second')
            img.classList.add('firstImg')
        }
        
        arr.sort(function(div1, div2) {
            const input1 = div1.querySelector('input');
            const input2 = div2.querySelector('input');

            console.log(input1.value, input2.value)

            if(img.classList.contains('firstImg')) {
                if(isNaN(input1.value) || isNaN(input2.value)) {
                    return input1.value.localeCompare(input2.value);
                } else {
                    return input1.value - input2.value;
                }
            } else {
                if(isNaN(input1.value) || isNaN(input2.value)){
                    return input2.value.localeCompare(input1.value);
                }
                else{
                    return input2.value - input1.value;
                }
            }
        });
        arr.forEach(function(div){
            div.parentElement.append(div);
        });
    });
}
window.addEventListener('load', windowLoad)


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
        const index = arr.indexOf(newDiv);
        arr.splice(index, 1);// ydalenie iz massiva po indeksy
   })
   return newDiv;
}

    
