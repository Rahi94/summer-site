
function addToCart(productNameId, cartContainerId, productPriceId){
    document.getElementById('purchase-btn').removeAttribute('disabled')
    const ProductName = document.getElementById(productNameId)
    const createProduct = document.createElement('li');
    createProduct.innerText = ProductName.innerText;
    const cartContainer = document.getElementById(cartContainerId);
    cartContainer.appendChild(createProduct)
    calculateTotal('total-price-id', 'discount-id', 'total-id', productPriceId)
}


function calculateTotal(totalPriceId, discountId, totalId, productPriceId){
    const productPrice = document.getElementById(productPriceId);
    const productPriceValue = parseInt(productPrice.innerText)
    console.log('product price :',productPriceValue);

    const totalPrice = document.getElementById(totalPriceId);
    const totalPriceValue = parseInt(totalPrice.innerText) + productPriceValue;
    totalPrice.innerText = totalPriceValue;
    if(totalPriceValue >= 200){
        document.getElementById('coupon-btn').removeAttribute('disabled')
    }

    document.getElementById('coupon-btn').addEventListener('click', ()=> {
        const couponInput = document.getElementById('coupon-input');
        const couponInputValue = couponInput.value ;
        
        const discountPrice = document.getElementById(discountId);
        if(couponInputValue === 'SELL200'){
            discountPrice.innerText = ((totalPriceValue * 20) / 100);
            console.log('discount after sell200 :',discountPrice.innerText);
        }
        else{
            discountPrice.innerText = 0;
        }
        const total = document.getElementById(totalId);
        total.innerText = totalPriceValue - parseInt(discountPrice.innerText);
    })
    const total = document.getElementById(totalId);
    total.innerText = totalPriceValue ;        
}

