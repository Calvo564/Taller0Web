# Taller1

A continuacion se definiera el glosario presentado en el primer item del taller 1.

1. Request: Corresponde a una solititud realizada en el contexto del protocolo de transferencia HTTP donde el servidor web correspondiente debera enviar la informacion previamente solicitada.   

1. Response: Cualquier prosesos de transferencia exitosa realizada (Protocolo HTTP) debera terminar con la respuesta del servidor con el cual estamos intentando establecer la conexion, dicha respuesta puede ser de distintosk formatos, desde pdf, mp3, o docs aunque generalmente se encuantras en formato HTML.

1. Status Code: Refiere a una serie de codigos los cuales contienen 3 digitos los que definen, donde el primero indica la clase de respuesta (puede tomar valores desde el 1 al 5), los dos siguientes no poseen categorizacion.

Methods:

1. Get: Corresponde al metodo empleado en caso que se nesesite leer una representacion de un recurso, en caso de que la respuesta sea exitosa GET devolvera un formato concreto dependiendo de del caso (como formato HTML, XML, JSON entre otros).

1. Post: Si bien en muchos casos tanto Get como Post nos serviran para conseguir informacion web, POST posee menos limitaciones por lo que a veces sera mas como usar este dicho comando 

1. Head: El metodo head solicita una respuesta identica a la peticion del comando GET, pero son poseer el cuerpo de la respuesta, es decir no podremos ver el contenido HTML sino solo la cabecera del archivo, la cual nos servira para ver cierta informacion, como el tipo de contenido o si la cache debe ser renovada.
			
1. Options: Es utilizado para describir las opciones de comunicaciones correspondientes al recurso de destino, basicamente nos permite explorar las caracteristicas de conexion cliente-servidor.

1. Put: Es el comando inverso a GET ya que nos permite escribir datos en el servidor receptor, A diferencia del comando POST este trabajara sobre un recurso final.

1. Delete: Como su nombre lo indica sirve para eliminar un recurso especificado por la URL indicada (siempre y cuando el servidor web lo permita).

Headers

1. Accept: Es una cabecera que anuncia el tipo de contenido que el cliente puede prosesar, expresado en tipo MIME (tipo de formato de documento)

1. Accept-Charset: Esta cabecera indica las codificaciones de caracteres que se utilizaran para el envio de un forulario especifico donde el valor por defecto de la cadena correspondiente es "Unknown".

1. Accept-Encoding: Es un tipo de solicitud de relacion codificacion-aceptacion, que anuncia que contenidos puede entender el cliente, luego el servidor selecciona una propuesta, la utiliza y notifica al cliente de su eleccion con el encabezado de respuesta del contenido.

1. Cache Control: Es tu tipo header del protocolo HTTP que se utiliza para especificar las politicas de almacenamiento en cache de informacion extraida a travez del navegador (tanto en la solicitudes de clientes, como en las respuestas del servidor).
Dichas politicas incluyen desde como se almacena en cache un recurso, hasta su antiguedad o tiempo de vida.

1. Connection: Tambien conocido como HTTP keep-alive, hace referencia a usar una sola conexion TCP para enviar y recibir multiples solicitues y respuestas en lugar de abrir una conexion por cada una realizada. 

1. Cookie: Es un pequeño segemento de informacion enviada por un sitio web y almacenada por el navegador web del usuario que reciba dichos datos, de manera que en caso de nesesitarlo el sitio pueda acceder a esa informacion.

1. Set Cookie: Es un encabezado que se envia en respuesta a una solicitud HTTP utilizada para crear un cookie en el sistem del usuario receptor.

1. Host: Es una cabecera cuya funcion es poder ser usada de la direccion IP/numero de puerto para identificar de manera unica un sitio web.

1. Origin: Se agrega este header cuando al usuario nesesita describir los contextos de seguridad que causaron la llamada solicitud HTTP (los sevidores HTTP pueden usar el header para mitigar la vulneravilidad ante solicitudes falsificadas o dudosas)

1. Referer: Identifica la direccion web o URL que creo el vinculo con el recurso que esta siendo codificado, a través del chequeo del campo referer, la nueva página web puede determinar dónde se originó la solicitud.

1. User-Agent: Es un agente de usuario es un software (un agente de software) que actúa en nombre de un usuario. Un uso común del término se refiere a un navegador web que recupera, rinde y facilita la interacción del usuario final con el contenido web.

1. Content-Encoding: Tipo de solicitud de codificación-aceptación anuncia qué codificación de contenido, generalmente un algoritmo de compresión que puede entender el cliente.

1. Content-Lenght: Encabezado que indica número que denota la longitud exacta del byte del cuerpo HTTP, generalmente, el encabezado.

1. Content-Type: Header que permite saber el tipo de contenido le envia al cliente o al servidor y en qué formato se transfieren los datos.

1. Localitacion : Permite retornar las respuestas HTTP.

1. Upgrade: Refiere a el intercambio donde el cliente comienza haciendo una petición de texto que es posteriormente actualizado a una versión más nueva del protocolo http.


A continuacion presentara la tabla correspondiente al 5to item del taller 1.


|Request - Response |Metodo HTTP (REQ) | URL |Nombres de Headers |Status (RES) |Descripcion|
|-----------|------------|-------------|
|Request (Solicitud)| Metodo - GET |http://zeus.inf.ucv.cl/~ifigueroa/doku.php | Upgrade-Insecure-Requests, User-Agent, Accept. |n/a|Solicitud de conexion con el sitio web.|
|Response (Respuesta)| n/a |n/a |Date, Server, X-Powered-By, Expires, Cache-Control, Pragma, X-UA, Vary, Content-Encoding, Content-Length, Keep-Alive, Connection, Connection-Type.|Unknown|Respuesta del Sevidor.|
|Request (Solicitud)| Metodo - GET |http://zeus.inf.ucv.cl/~ifigueroa/lib/tpl/bootstrap3/assets/bootstrap/default/bootstrap.min.css | User-Agent, Accept. |n/a|Request iteracion 2.|
|Response (Respuesta)| n/a |n/a |Date, Server, Last-Modified, ETag, Accept-Ranges, Vary, Content-Encoding, Content-Length, Content-Type.|Unknown|Response iteracion 2.|
|Request (Solicitud)| Metodo - GET |http://zeus.inf.ucv.cl/~ifigueroa/lib/exe/css.php?t=bootstrap3&tseed=44b1422730da0b8e0624124cac9afe4b |User-Agent, Accept.|n/a|Request iteracion 3.|
|Response (Respuesta)| n/a |n/a |Date, Server, X-Powered-By, Cache-Control, Pragma, ETag, Last-Modified, Vary, Content-Encoding, Content-Length, Content-Type.|Unknown|Response iteracion 3.|
|Request (Solicitud)| Metodo - GET |http://zeus.inf.ucv.cl/~ifigueroa/lib/tpl/bootstrap3/assets/font-awesome/css/font-awesome.min.css |User-Agent, Accept.|n/a|Request iteracion 4.|
|Response (Respuesta)| n/a | n/a |Date, Server, Last-Modified, ETag, Accept-Ranges, Vary, Content-Encoding, Content-Length, Content-Type.|Unknown|Response iteracion 4.|
|Request (Solicitud)| Metodo - GET |http://zeus.inf.ucv.cl/~ifigueroa/lib/exe/jquery.php?tseed=23f888679b4f1dc26eef34902aca964f |User-Agent, Accept.|n/a|Request iteracion 5.|
|Response (Respuesta)| n/a | |Date, Server, X-Powered-By, Cache-Control, Pragma, ETag, Last-Modified, Vary, Content-Encoding, Content-Type.|Unknown|Response iteracion 5.|
|Request (Solicitud)| Metodo - GET |http://zeus.inf.ucv.cl/~ifigueroa/lib/exe/js.php?t=bootstrap3&tseed=44b1422730da0b8e0624124cac9afe4b |User-Agent, Accept.|n/a|Request iteracion 6.|
|Response (Respuesta)| n/a |n/a |Date, Server, X-Powered-By, Cache-Control, Pragma, ETag, Last-Modified, Vary, Content-Encoding, Content-Length, Content-Type.|Unknown|Response iteracion 6.|
|Request (Solicitud)| Metodo - GET |http://zeus.inf.ucv.cl/~ifigueroa/lib/tpl/bootstrap3/assets/bootstrap/js/bootstrap.min.js |User-Agent, Accept.|n/a|Request iteracion 7.|
|Response (Respuesta)| n/a | n/a |Date, Server, Last-Modified, ETag, Accept-Ranges, Vary, Content-Encoding, Content-Length, Content-Type.|Unknown|Response iteracion 7.|
|Request (Solicitud)| Metodo - GET |http://zeus.inf.ucv.cl/~ifigueroa/lib/tpl/bootstrap3/assets/anchorjs/anchor.min.js |User-Agent, Accept.|n/a|Request iteracion 8.|
|Response (Respuesta)| n/a | n/a |Date, Last-Modified, ETag, Accept-Ranges, Vary, Content-Encoding, Content-Length, Content-Type.|Unknown|Response iteracion 8.|
|Request (Solicitud)| Metodo - GET |http://zeus.inf.ucv.cl/~ifigueroa/lib/tpl/bootstrap3/images/logo.png |User-Agent, Accept.|n/a|Request iteracion 9.|
|Response (Respuesta)| n/a | n/a |Date, Server, Last-Modified, ETag, Accept-Ranges, Vary, Content-Length, Content-Type.|Unknown|Response iteracion 9.|
|Request (Solicitud)| Metodo - GET |http://zeus.inf.ucv.cl/~ifigueroa/lib/tpl/bootstrap3/images/button-bootstrap3.png |User-Agent, Accept.|n/a|Request iteracion 10.|
|Response (Respuesta)| n/a | n/a |Date, Server, Last-Modified, ETag, Accept-Ranges, Content-Length, Content-Type.|Unknown|Response iteracion 10.|


Item 5.

En la previa tabla se presenta el conjunto de las 10 primeras iteraciones de la relacion Request-Response que se realizan durante el protocolo HTTP al realizar la conexion con el servidor web, mientras que en la primera iteracion la solicitud es para establecer una exitosa conexion entre el cliente y la pagina, las subsiguientes son para cargar desde el logo de la pagina, como durante la iteracion 9 (vease el enlace correspondiente a la tabla), hasta eventualmente trabajar con informacion relacionada con los cookies.

Item 6, la siguiente tabla se realizara con la informacion HTTP correspondiente al servidor web de BitBucket.

|Request - Response |Metodo HTTP (REQ) | URL |Nombres de Headers |Status (RES) |Descripcion|
|-----------|------------|-------------|
|Request (Solicitud)| Metodo - GET |https://web.whatsapp.com | Upgrade-Insecure-Requests, User-Agent, Accept. |n/a|Solicitud de conexion con el sitio web.|
|Response (Respuesta)| n/a |n/a |status, content-type, access-control-allow-methods, access-control-allow-origin, cache-control, content-encoding, x-content-type-options, access-control-allow-credentials, access-control-expose-headers, strict-transport-security, x-frame-options, pragma, x-xss-protection, vary, vary, content-security-policy, expires, x-fb-debub, date.|200.|Respuesta del Sevidor.|
|Request (Solicitud)| Metodo - GET |https://web.whatsapp.com/cssm_e8b5fcec233fc0c0459b7f28143c945f.css | User-Agent, Accept. |n/a|Request iteracion 2.|
|Response (Respuesta)| n/a |n/a |status, content-type, access-control-allow-methods, access-control-allow-origin, cache-control, content-encoding, x-content-type-options, access-control-allow-credentials, access-control-expose-headers, strict-transport-security, x-frame-options, pragma, x-xss-protection, vary, vary, content-security-policy, expires, x-fb-debub, date.|200.|Response iteracion 2.|
|Request (Solicitud)| Metodo - GET |https://web.whatsapp.com/progress.7b7a42616c87baa9555d7e59221af16c.js |User-Agent, Accept.|n/a|Request iteracion 3.|
|Response (Respuesta)| n/a |n/a |status, content-type, access-control-allow-methods, access-control-allow-origin, cache-control, content-encoding, x-content-type-options, access-control-allow-credentials, access-control-expose-headers, strict-transport-security, x-frame-options, pragma, x-xss-protection, vary, vary, content-security-policy, expires, x-fb-debub, date.|200.|Response iteracion 3.|
|Request (Solicitud)| Metodo - GET |https://web.whatsapp.com/locales/es.aea7af10aba7aafd975c.js |User-Agent, Accept.|n/a|Request iteracion 4.|
|Response (Respuesta)| n/a | n/a |status, content-type, access-control-allow-methods, access-control-allow-origin, cache-control, content-encoding, x-content-type-options, access-control-allow-credentials, access-control-expose-headers, strict-transport-security, x-frame-options, pragma, x-xss-protection, vary, vary, content-security-policy, expires, x-fb-debub, date.|200.|Response iteracion 4.|
|Request (Solicitud)| Metodo - GET | https://web.whatsapp.com/vendor1.dbf8866c10a9dc59315d.js |User-Agent, Accept.|n/a|Request iteracion 5.|
|Response (Respuesta)| n/a | |status, content-type, access-control-allow-methods, access-control-allow-origin, cache-control, content-encoding, x-content-type-options, access-control-allow-credentials, access-control-expose-headers, strict-transport-security, x-frame-options, pragma, x-xss-protection, vary, vary, content-security-policy, expires, x-fb-debub, date.|200.|Response iteracion 5.|
|Request (Solicitud)| Metodo - GET |https://web.whatsapp.com/vendor2.72c2c80c1525f0e0b1f4.js | User-Agent, Accept.|n/a|Request iteracion 6.|
|Response (Respuesta)| n/a |n/a |status, content-type, access-control-allow-methods, access-control-allow-origin, cache-control, content-encoding, x-content-type-options, access-control-allow-credentials, access-control-expose-headers, strict-transport-security, x-frame-options, pragma, x-xss-protection, vary, vary, content-security-policy, expires, x-fb-debub, date.|200.|Response iteracion 6.|
|Request (Solicitud)| Metodo - GET |https://web.whatsapp.com/app.338c308a5aebb888ef11.js |User-Agent, Accept.|n/a|Request iteracion 7.|
|Response (Respuesta)| n/a | n/a |status, content-type, access-control-allow-methods, access-control-allow-origin, cache-control, content-encoding, x-content-type-options, access-control-allow-credentials, access-control-expose-headers, strict-transport-security, x-frame-options, pragma, x-xss-protection, vary, vary, content-security-policy, expires, x-fb-debub, date.|200.|Response iteracion 7.|
|Request (Solicitud)| Metodo - GET |https://web.whatsapp.com/app3.192aba8d6276d8efd249.js |User-Agent, Accept.|n/a|Request iteracion 8.|
|Response (Respuesta)| n/a | n/a |status, content-type, access-control-allow-methods, access-control-allow-origin, cache-control, content-encoding, x-content-type-options, access-control-allow-credentials, access-control-expose-headers, strict-transport-security, x-frame-options, pragma, x-xss-protection, vary, vary, content-security-policy, expires, x-fb-debub, date.|200.|Response iteracion 8.|
|Request (Solicitud)| Metodo - GET |https://web.whatsapp.com/app2.06c1f86ad417b48fcf55.js |n/a (solo se uso GET)|n/a|Request iteracion 9.|
|Response (Respuesta)| n/a | n/a |status, content-type, access-control-allow-methods, access-control-allow-origin, cache-control, content-encoding, x-content-type-options, access-control-allow-credentials, access-control-expose-headers, strict-transport-security, x-frame-options, pragma, x-xss-protection, vary, vary, content-security-policy, expires, x-fb-debub, date.|200.|Response iteracion 9.|
|Request (Solicitud)| Metodo - GET | wss://web.whatsapp.com/ws |User-Agent, Accept.|n/a|Request iteracion 10.|
|Response (Respuesta)| n/a | n/a |Date, Upgrade, Sec-WebSocket-Accept, Connection.|200|Response iteracion 10.|

Al igual que en la tabla anterior la primera relacion REQ-RES es para establececr una conexion estable mientras que luego se van cargando diversa informacion de la pagina donde no es sino hasta la iteracion 10 cuando varia los metodos utilizados hasta el momento (en caso de duda comprobar con HTTP trace el sitio https://web.whatsapp.com/ ).

Daniel Delgado Zambrano.
19.617.083-9


