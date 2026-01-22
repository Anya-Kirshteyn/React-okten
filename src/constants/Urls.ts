
const baseURL = "https://dummyjson.com";

export const urls = {
    users:{
        allUsers: baseURL+"/users",
    },
    carts:{
        allCarts: baseURL+"/carts",
        CartsById:(id:number)=> baseURL+'/carts/'+id
    }
}
