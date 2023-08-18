GiftCard - Exercise 2

1. Crear pagina CMS accessible a traves de /gift-cards.
2. La página debe contener header y footer.
3. Agregar 1 slot llamado SlotGiftCard
4. Agregar un componente llamado CxGiftCardBanner al slot SlotGiftCard
. Crear el componente en Hybris con los siguientes atributos:
    i.   Titulo
    ii.  Párrafo
    iii. Botón el cual es un link.
    iv.  Imagen
    v. Opcional: los colores de letra y fondo del banner deben ser configurables desde el cms.
5. En caso que crear el componente en hybris no esté dentro de tu alcance, puedes hacer lo siguiente:
    i. Generar el slot con configuración estática en spartacus
    ii. Agregar el componente al slot con configuración estática
    iii. En el componente inyectar un servicio dummy con los datos solicitados en 4
6. En dispositivos móviles, la imagen debe quedar arriba del texto (vertical, uno arriba del otro) (diseño responsive)
7. Agregar un slot llamado SlotGiftCardProducts debajo de SlotGiftCard
8. Agregar un carousel similar al del ejercicio 1 en el slot SlotGiftCardProducts. Los productos en el carrousel pueden ser aleatorios, hardcodeados o seleccionados en SmartEdit. Importante: cuando se hace click en la imagen del producto, se debe
redireccionar a la PDP correspondiente.
9. Diseño adaptativo: solo en mobile, se debe esconde el slot SlotGiftCard. El slot SlotGiftCardProducts siempre es visible.

GiftCard - Exercise 1

HomepageDada la homepage se quiere modificar los ítems del carrusel de productos, para que losproductos se puedan agregar directamente al carrito, además se quiere que el color de fondodel ítem sea #F8F3E9 y el color del texto #3A857E. También se desea ver el rating delproducto, mostrando estrellas como en la imagen (figura-3). No es necesario implementar elprecio tachado.

Figura-3: Carrusel de productos customizado (referencia)

Se debe implementar en este ejercicio los conceptos de optimización de performance vistos enel curso:
  - Lazy loading (code splitting, chunks js)
  - Above the fold loading 
  - Defer Loading
  
Sugerencias:
  Estudiar código de cx-product-carousely cómo interactúacon cx-carouselen el código base de spartacus. En particular interesa ver cómo cx-product-carousel inyecta untemplate (ng-template) a cx-carousel. Tu desafío esinspirarte en estos componentes (oextenderlos) para implementar una solución con los conceptos vistos en el curso.
  Además puedes revisar el componentecx-product-grid-itemque se utiliza en la páginade resultados de búsqueda y luce de la siguiente manera:

    Para agregar al carrito (botón add to bag en la imagen) se sugiere utilizar elcomponente OOTB (out of the box)cx-add-to-cart.●Para implementar las estrellas de rating se sugiere analizar el modelo del producto, enparticular su atributo averageRating y el componentecx-star-rating
