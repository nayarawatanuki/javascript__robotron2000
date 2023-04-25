export function control(operation, control) {

    const part = control.querySelector("[data-counter]");

    if(operation === "-") {
        part.value--;
    } else {
        part.value++;
    }
}