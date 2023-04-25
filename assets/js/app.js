import { controls, skin } from "./base/variables.js";

import { changeSkin } from "./components/skin.js";
import { control } from "./components/controls.js";
import { updateStatistics } from "./components/statistics.js";


skin.addEventListener("change", event => {

    console.log(event.target.value);
    changeSkin(event.target.value);
})


controls.forEach( element => {
    element.addEventListener("click", event => {
        
        control(event.target.dataset.control, event.target.parentNode);
        updateStatistics(event.target.dataset.part);
    })
})