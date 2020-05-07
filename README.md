# Personal Web Site

Uso dotenv per iniettare la key localmente, mentre per la build imposto l'env variable nel gestore del mio dominio:

```
npm i dotenv
```

e ricordati di fare:

```js
require('dotenv').config();
```