const form = document.querySelector("#formulaire");
const tbody = document.querySelector('tbody')



form.addEventListener('submit', (e)=>{
    const tr=document.createElement("tr")
    for (champ of form.elements){
        if(!(champ.name=="bouton")){
            const td=document.createElement("td")
            td.textContent=champ.value
            tr.append(td)

        }
    }
    tbody.append(tr)
    e.preventDefault()
    form.reset()

    

})