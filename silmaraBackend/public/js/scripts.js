var title = document.querySelector('#header');
console.log(title);

title.addEventListener('click', displayItems);

function displayItems(e) {
  e.preventDefault();
  title.style.color = 'red';

  $.ajax({
    beforeSend: function() {
      console.log('Espera un momento....');
    },
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    url: '/api/items',
    //data: {"valor1" : valor1, "valor2" : valor2},
    dataType: 'json',
    success: function(responseData) {
      console.log('Me llego: ' + JSON.stringify(responseData));

      document.querySelector('#itemBox').innerHTML = `${responseData
        .map(products => {
          return `<div class='product'>
                    ${products.product_id} - ${products.product_name} : ${products.product_price}
                  <div>
                  
                  `;
        })
        .join('')}`;
    },
    error: function() {
      alert('no pude completar la comunicacion!!');
    },
    complete: function() {
      console.log('Ya termine!!');
    }
  });
}
