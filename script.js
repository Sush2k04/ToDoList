document.addEventListener("DOMContentLoaded",()=>{
    const form = document.getElementById("myForm");
    const inp = document.getElementById("inputTask");
    const ls = document.getElementById("list");

    document.addEventListener("submit",(e)=>{
        e.preventDefault();

        const task = inp.value.trim();
        if(task === "") return;

        const li = document.createElement("li");
        li.textContent = task;
        
        const completed = document.createElement("button");
        completed.textContent = "✅";
        completed.addEventListener("click",()=>{
            li.classList.toggle("completed");
        })

        const dlt = document.createElement("button");
        dlt.textContent = "🗑️";
        dlt.addEventListener("click",()=>{
            ls.removeChild(li);
        })

        li.appendChild(completed);
        li.appendChild(dlt);
        ls.appendChild(li);
        task.value = "";
        
    })

})