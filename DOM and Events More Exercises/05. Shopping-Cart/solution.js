function solve() {
   const btns = Array.from(document.querySelectorAll('button.add-product'));
   const result = document.getElementsByTagName('textarea')[0];
   const btnCheckout = document.querySelector('button.checkout');
   let shoppingCart = [];
   let total = 0;
   for (const btn of btns) {
      btn.addEventListener('click', handleClick)

      function handleClick() {
         const productInfo = Array.from(btn.parentElement.parentElement.children);
         const productName = (productInfo[1].children)[0].textContent;
         const productPrice = Number(productInfo[3].textContent);
         result.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
         if (!(shoppingCart.includes(productName))) {
            shoppingCart.push(productName);
         }
         total += productPrice;

      }

   }

   btnCheckout.addEventListener('click', handleCheckout);

   function handleCheckout() {
      result.textContent += `You bought ${shoppingCart.join(', ')} for ${total.toFixed(2)}.`
      btnCheckout.disabled = 'true';
      for (const each of btns) {
         each.disabled = 'true';
      }
   }
}