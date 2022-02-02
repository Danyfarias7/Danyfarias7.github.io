function initCards(){

console.log('initCards');


  var  contentBeatsStudioBuds = `<li>Active Noise Cancelling (ANC)</li>
  <li>Transparency mode</li>
  <li>Up to 8 hours of listening time with ANC off1</li>
  <li>Compatible with Apple and Android</li>`
  
  //  Beats Flex
  
  var flex = `<li>Magnetic earbuds with Auto-Play/Pause</li>
  <li>Powerful, precise sound</li>
  <li>Up to 12 hours of listening time</li>
  <li>Apple W1 Chip & Class 1 Wireless Bluetooth®</li>`
  
  
  //  Power Beats 
  
  var powerBeats = ` <li>Up to 15 hours of listening time</li>
  <li>Sweat & water resistant</li>
  <li>Adjustable, secure-fit earhooks</li>
  <li>Streamlined, round cable</li>`
  
  
  // PowerBeats Pro
  
  var powerBeatsPro = ` <li>Up to 9 hours of listening time</li>
  <li>Sweat & water resistant</li>
  <li>Adjustable, secure-fit earhooks</li>
  <li>Volume & track controls on each earbud</li>`
  
  // Solo Pro
  
  var soloPro = ` <li>Active Noise Cancelling (ANC)</li>
  <li>Transparency Mode</li>
  <li>Up to 22 hours of listening time</li>
  <li>Integrated on-ear controls</li>`
  
  // Solo Pro
  
  var solo3Wireless= `  <li>Up to 40 hours of listening time</li>
  <li>Fast Fuel technology</li>
  <li>On‑ear controls</li>
  <li>Apple W1 Chip & Class 1 Wireless Bluetooth®</li>`
  
  
  // BeatsStudioWireless
  
  var solo3Wireless= `  <li>Active Noise Cancelling (ANC)</li>
  <li>Up to 22 hours of listening time</li>
  <li>Apple W1 Chip & Class 1 Wireless Bluetooth®</li>
  <li>On‑ear controls</li>`
  
  
  
  
  
  
  
  function Card(image, heading, content, price) {
    (this.image = image),
      (this.heading = heading),
      (this.content = content),
      (this.price = price),
  
      this.appendTo = function (destinationElement) {
      
          // var ulContent =  con un array de los li de arriba
      
  
  var card = document.createElement('a')
  card.classList.add('card')
  card.href = 'https://sony.com'
  
  
  var objetoAñadido = this.heading
  
  
  
  card.addEventListener('click', function(e){
    // alert('Tarjeja clickeada')
    e.preventDefault() // Eliminar que el viculo te lleve a otro lugar
    
  console.log(objetoAñadido);
  // SE añaden elementos nuevos al carrito de compras 
  var nuevoItemCarrito = document.createElement('div')
  nuevoItemCarrito.classList.add('carrito__item')
  nuevoItemCarrito.innerHTML = objetoAñadido
  
  var elemSectionCarrito = document.getElementsByClassName('section-carrito')[0]
  
  elemSectionCarrito.appendChild(nuevoItemCarrito)
  
  })
  
  
  
  
  card.innerHTML =  `
          <article class="card__article">
              <div class="card__image">
                  <img src="img-products/${image}" alt="">
                  <h2>${heading}</h2>
                 
              </div>
          
          
              <div class="card__content">
                  <div class="card__heading">
          
                  <ul>
                     ${content}
                  </ul>
                  </div>
          
                  <div class="card__price">
                      <p>${price}</p>
                  </div>
          
                  <div class="card__buy">Buy Now
                      
                  </div>
              </div>
          
  
              <div class="plus-and-minus">
                  <img class="plus-and-minus__plus" src="img-products/icons8-plus-+-50.png" width="20px" height="20px" alt="">
                  <img class="plus-and-minus__minus" src="img-products/icons8-minus-50.png" width="20px"  height="20px" alt="">
              </div>
          
          </article>
          </a>
          `;
  
          destinationElement.appendChild(card)
      };
  }
  
  
  
  
  var elemCardsContainer = document.getElementsByClassName('cards__container')[0];
  
  
  let cardsArray = [
    //BeatsStudioB
   new Card(
    'BeatsStudioBudsRed.png',
    'Beats Studio Buds',
   contentBeatsStudioBuds,
    '$149',
    
  ),
   new Card(
    'BeatsStudioBlack.png', 
    'Beats Studio Buds',
   contentBeatsStudioBuds,
    '$149',
  ),
   new Card(
    'BeatsStudioBudsWhite.png', 
    'Beats Studio Buds',
   contentBeatsStudioBuds,
    '$149',
  ),
  //BeatsFlex
   new Card(
    'BeatsFlexSmokeGrey.png', 
    'Beats Flex',
   flex,
    '$69.99',
  ),
   new Card(
    'BeatsFlexFlameBlue.png', 
    'Beats Flex',
   flex,
    '$69.99',
  ),
   new Card(
    'BeatsFlexBlack.png', 
    'Beats Flex',
   flex,
    '$69.99',
  ),
   new Card(
    'BeatsFlexYuzoYellow.png', 
    'Beats Flex',
   flex,
    '$69.99',
  ),
  
  // Power Beats
   new Card(
    'PowerbeatsBlack.png', 
    'PowerBeats',
   powerBeats,
    '$149.95',
  ),
  
   new Card(
    'PowerbeatsRed.png', 
    'PowerBeats',
   powerBeats,
    '$149.95',
  ),
  
  
  new Card(
    'PowerbeatsWhite.png', 
    'PowerBeats',
   powerBeats,
    '$149.95',
  ),
  
  //Power Beats Pro
  
  new Card(
    'PowerbeatsProCloudPink.png', 
    'PowerBeats Pro ',
   powerBeatsPro,
    '$199.95',
  ),
  new Card(
    'PowerbeatsProGlacierBlue.png', 
    'PowerBeats Pro ',
   powerBeatsPro,
    '$199.95',
  ),
  new Card(
    'PowerbeatsProLavaRed.png', 
    'PowerBeats Pro ',
   powerBeatsPro,
    '$199.95',
  ),
  new Card(
    'PowerbeatsProIvory.png', 
    'PowerBeats Pro ',
   powerBeatsPro,
    '$199.95',
  ),
  new Card(
    'PowerbeatsProBlack.png', 
    'PowerBeats Pro ',
   powerBeatsPro,
    '$199.95',
  ),
  new Card(
    'PowerbeatsProNavy.png', 
    'PowerBeats Pro ',
   powerBeatsPro,
    '$199.95',
  ),
  
  
  // Solo Pro
  
  new Card(
    'SoloProIvory.png', 
    'Solo Pro ',
   soloPro,
    '$299.95',
  ),
  
  new Card(
    'SoloProBlack.png', 
    'Solo Pro ',
   soloPro,
    '$299.95',
  ),
  
  new Card(
    'SoloProGrey.png', 
    'Solo Pro ',
   soloPro,
    '$299.95',
  ),
  
  
  // BEATS SOLO3 WIRELESS
  
  new Card(
    'BeatsSolo3WirelessCitrusRed.png', 
    'Beats Solo3 Wireless ',
   solo3Wireless,
    '$199.95',
  
  ),
  
  new Card(
    'BeatsSolo3WirelessBlack.png', 
    'Beats Solo3 Wireless ',
   solo3Wireless,
    '$199.95',
  ),
  
  
  
  new Card(
    'BeatsSolo3WirelessRoseGold.png', 
    'Beats Solo3 Wireless ',
   solo3Wireless,
    '$199.95',
  ),
  
  
  // BEATS STUDIO3 
  
  new Card(
    'BeatsStudio3WirelessBlackRed.png', 
    'Beats Solo3 Wireless ',
   solo3Wireless,
    '$199.95',
  ),
  
  new Card(
    'BeatsStudio3WirelessMatteBlack.png', 
    'Beats Solo3 Wireless ',
    solo3Wireless,
    '$199.95',
  ),
  
  new Card(
    'BeatsStudio3WirelessWhite.png', 
    'Beats Solo3 Wireless ',
    solo3Wireless,
    '$199.95',
  ),
  
  new Card(
    'BeatsStudio3WirelessBlue.png', 
    'Beats Solo3 Wireless ',
    solo3Wireless,
    '$199.95',
  ),
  
  new Card(
    'BeatsStudio3WirelessShadowGrey.png', 
    'Beats Solo3 Wireless ',
    solo3Wireless,
    '$199.95',
  ),
  new Card(
    'BeatsStudio3WirelessRed.png', 
    'Beats Solo3 Wireless ',
    solo3Wireless,
    '$199.95',
  ),
  new Card(
    'BeatsStudio3WirelessMidnightBlack.png', 
    'Beats Solo3 Wireless ',
    solo3Wireless,
    '$199.95',
  )
  ]
  
  
  
  for ( var myCards of cardsArray){
    myCards.appendTo(elemCardsContainer)
  }
  
  
  
  
  
  
  
  
  // **********************************************************
  
  // AUMENTANDO Y DISMINUYENDO EL BOTON
  
  // **********************************************************
  
  /*
  const container = document.querySelector('.cards__container')
  let contador = 0 
  
  const span = document.getElementById('spanContador')
  
  
  container.addEventListener('click', (e) =>{
  
    // console.log(e.target);
  
    // Contador +
    if(e.target.classList.contains('plus-and-minus__plus')){
  
      
  
      contador ++
  
      span.textContent = contador 
      // console.log(contador);
    }
  
    //Contador -
  
    if(e.target.classList.contains('plus-and-minus__minus')){
  
      contador --
      
  
      span.textContent = contador 
  
      // console.log(contador);
      
    }
  // Eliminar otros clicks que no sea en los botones 
    e.stopImmediatePropagation()
  
  
  })
  
  */

}

