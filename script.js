const answerHolder = document.querySelectorAll('.answer_holder');
const answerHolderArray = Array.from(answerHolder);

const toggleBetween = (box)=>{
    answerHolderArray.forEach((event)=>{
        event.style.display = 'none';
        
    });
    for(let i=1;i<=6;i++){
        const iconCh = document.getElementById(`box${i}`);
        iconCh.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    }
    const targetBox = document.querySelector(`.${box}`);
    const iconChangeBox = document.getElementById(`${box}`);
    if(targetBox.classList.contains('temp')){
        targetBox.style.display = 'none';
        iconChangeBox.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        targetBox.classList.remove('temp');
    }else{
        targetBox.style.display = 'block';
        iconChangeBox.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        targetBox.classList.add('temp');
    }
}

