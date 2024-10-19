export function nowToHHM(){
    const d = new Date();

    return `${d.getHours()}:${d.getMinutes()}`
}