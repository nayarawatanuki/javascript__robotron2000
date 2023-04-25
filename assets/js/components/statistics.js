import { statistics, parts } from "../base/variables.js";


export function updateStatistics(part) {

    statistics.forEach( element => {

        element.textContent = parseInt(element.textContent) + parts[part][element.dataset.statistic];
    })
}