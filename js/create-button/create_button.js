const btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {
    const curBtn = event.target;
    let newVal = Number(curBtn.innerHTML) + 1;
    curBtn.innerHTML = `${newVal}`;
})