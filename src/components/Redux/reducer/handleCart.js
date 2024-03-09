const cart = [];
const handleCart = (state= cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDCART":
            //Check if product already exist
            const exist = state.find((x) => x.id === product.id)
            if (exist) {
                //Increase the quantity
                return

                    state.map((x) => 
                    x.id === product.id ? {...x, qty: x.qty + 1} : x
                    );
                
            }else
            break;
        default:
            return state;
    }
};
export default handleCart;