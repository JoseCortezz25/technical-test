# Frontend challenge

![mi imagen](https://raw.githubusercontent.com/JoseCortezz25/technical-test/main/screenshot.png?token=GHSAT0AAAAAACEAPQ64RMGDNMT2OWEBPDOGZEPFXJA)

Credenciales:
* **Usuario vendedor**:
  * username: admin
  * password: admin
* **Usuario comprador**: 
  * username: user
  * password: user


* **the backend communication will be secured, how do you handle it?**

Con el propósito de incorporar una comunicación segura entre el backend y el frontend, se podrían implementar diferentes medidas y protocolos de seguridad.

En primera instancia, como medida básica y principal, se debería optar por la implementación de HTTPS como protocolo de comunicación entre los clientes y el servidor. Este protocolo utiliza un cifrado de capa de sockets seguros como SSL/TLS para proteger la información en el momento de la transferencia, permitiendo que los datos estén encriptados y protegidos ante eventos de interceptación o manipulación.

En segunda instancia, como buena práctica, se deberían implementar prácticas de autenticación y autorización adecuadas dependiendo de los usuarios y el caso. La implementación de mecanismos de autenticación sólidos, como tokens de acceso o cookies seguras, tiene la finalidad de verificar la identidad de los usuarios en cada solicitud. Además, se deben desarrollar controles de autorización para restringir y limitar el acceso a ciertas funciones o datos sensibles a usuarios no autorizados.

En tercer lugar, se debe considerar la implementación de medidas de protección contra ataques recurrentes, como los ataques de inyección SQL, los ataques de secuencias de comandos entre sitios (XSS) y los ataques de falsificación de solicitudes entre sitios (CSRF). Para esto, se podría emplear técnicas como la validación y sanitización de datos de entrada, la limitación de privilegios y la protección de las cookies.

Asimismo, se debe evitar establecer un valor innerHTML basado en la entrada del usuario, ya que esto puede permitir la ejecución de código arbitrario. Por otra parte, se debe evitar filtrar el valor de referencia que puede revelar información sensible sobre la solicitud o el usuario. En su lugar, se debe implementar el encabezado "Referrer-Policy" en las peticiones para controlar el envío de esta información.

Como medida complementaria, se debe optar por la realización de auditorías y pruebas de seguridad periódicas para identificar posibles vulnerabilidades. Estas pueden incluir análisis de código estático, pruebas de penetración y revisiones de configuración de seguridad.

* **which tech stack do you choose? explain with some details**
  
Mi elección de conjunto tecnológico para este proyecto fue React junto con SASS como preprocesador de CSS, aprovechando también las capacidades de los hooks useContext y useReducer para gestionar el estado de la aplicación.

Se optó por React gracias a sus características de desarrollo de componentes reutilizables y dinámicos, junto con una arquitectura declarativa. Gracias a su gestión y manipulación del React DOM, nos permite realizar cálculos pesados y actualizar componentes sin afectar la eficiencia, lo cual nos permite crear interfaces de usuario interactivas y rápidas.

Además de React, se implementó SASS como preprocesador de CSS, porque ofrece características complementarias que no ofrece la versión nativa de CSS. Características como mixins, funciones, extends, imports, nesting alias, entre otros, hacen que el código sea más reutilizable, organizado y modular, lo que permite una mejor adaptación en términos de la escalabilidad del proyecto.

Respecto al estado de los componentes, se optó por useContext y useReducer, que son hooks de React. Por un lado, useContext nos permite compartir datos entre componentes sin tener que pasarlos explícitamente por las props. Mientras que useReducer me permite tener una mejor organización, manejar acciones complejas y la lógica de estado con una función pura, que devuelve un nuevo estado basado en la acción recibida.

El trabajo conjunto de estos hooks ayuda a evitar el uso de librerías externas como Redux, que pueden añadir complejidad innecesaria al proyecto. Esto se debe a que para proyectos robustos, donde se requiere realizar cambios constantes y gestionar un estado complejo y dinámico, Redux encajaría mejor debido a sus características. Mientras que para proyectos pequeños que cuentan con pocos componentes que necesitan acceder al estado global, se puede optar por useContext para simplificar el código y evitar la instalación de librerías externas.
  
* **how do you test your functionality?**

Para probar la funcionalidad y gestionar los riesgos, se podrían implementar diferentes estrategias.

Inicialmente, se podrían implementar pruebas unitarias para probar funcionalidades desacopladas, como los reducers, utilities, peticiones y demás. Respecto a la lógica de la actualización del estado, en el presente caso se optó por la utilización de useReducer. Esto implica que la lógica está desacoplada del contexto y su componente proveedor, por lo que se podrían desarrollar pruebas unitarias que nos permitan evaluar su funcionamiento sin necesidad de renderizar algún componente y en diferentes escenarios de pruebas.

Por otra parte, se podrían desarrollar pruebas end-to-end con la finalidad de evaluar la funcionalidad completa en los dos roles de usuario. Esto permitiría evaluar desde la interacción hasta la base de datos donde se guardarían los registros de los pendientes a pagar.

Para el desarrollo de estas pruebas, se podría optar por alguna librería de testing como Cypress, Puppeteer, React Testing Library, Jest, entre otras.