export const retriveLocalStorage = <T>(key:string) => {
    const obj=localStorage.getItem(key) || '';
    if (!obj) {
        return {} as T
    }
    const parsedObj = JSON.parse(obj);
    return parsedObj as T
}