const URLdummyJSON='https://dummyjson.com'
export const URLS={
    usersDummyJSON:{
        allUsers:URLdummyJSON+'/users'
    },
    cartsDummyJSON: {
        allCarts: URLdummyJSON + '/carts',
        byUserid:(userId:number)=>
            URLdummyJSON+`/carts/user/${userId}`

    }

}
