const btns = builtButtons();
renderButtons(btns);

const positionRelation = {
    1:4,
    2:1,
    3:2,
    4:7,
    5:5,
    6:3,
    7:8,
    8:9,
    9:6
};

function renderButtons(buttons) {
    //sort by dataset.position
    //buttons.sort((a,b) => a.dataset.position - b.dataset.position);

    const div = document.getElementById("btns");
    for (const btn of buttons) {
        div.appendChild(btn);
    }
}

function builtButtons(){
    const buttons = [];
    for (let i = 1; i < 10; i++) {
        const btn = document.createElement("button");
        btn.classList.add("btn");
        btn.id = `btn${i}`;
        btn.dataset.position = i;
        btn.innerText = i;
        if(i === 5) {
            btn.addEventListener("click", click5Handler)
        }
        buttons.push(btn);
    }
    return buttons;
} 

function click5Handler() {
    
    for (const btn of btns) {
        
        btn.innerText = positionRelation[btn.innerText];    
    }
    renderButtons(btns);

}