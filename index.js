import { filtres, data } from "./array.js"

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const main = document.getElementById('main');

    //Renderizo los filtros
    filtres.map((filtre) => {
        header.innerHTML += `
            <label class="check">
                <input type="checkbox" id="${filtre}" value="${filtre}" class="checkbox"> 
                ${filtre.toUpperCase()}
            </label>
        `;
    })

    //Renderizo todas las card iniciales
    data.map((object) => {
        main.innerHTML += `
            <div class="card" id="${object.id}">
                <h2 class="title">${object.type.toUpperCase()}</h2>
                <p>${object.character}</p>
            </div>
        `;
    })

    //Agrego los eventlisteners a todos los checkbox
    const checkboxes = document.getElementsByClassName('checkbox');
    Array.from(checkboxes).map(checkbox => {
        checkbox.addEventListener('change', (e) => {handleChange(e.target)})
    });

    const handleChange = (target) => {
        //Busco todos los checkbox seleccionados
        let arrayId = []
        Array.from(checkboxes).map((checkbox) => {
            if (checkbox.checked) {
                arrayId.push(checkbox.id)
            }
        })

        //Filtro la data con los checkbox seleccionados
        let array = [];
        if (arrayId.length) {
            array = data.filter(object => arrayId.includes(object.type));
        }else {
            //Cuando no hay seleccionados dejo la data inicial
            array = data;
        }

        //Renderizo las cards filtradas
        main.innerHTML = ''
        array.map((object) => {
            main.innerHTML += `
                <div class="card" id="${object.id}">
                    <h2 class="title">${object.type.toUpperCase()}</h2>
                    <p>${object.character}</p>
                </div>
            `;
        })
    }

})