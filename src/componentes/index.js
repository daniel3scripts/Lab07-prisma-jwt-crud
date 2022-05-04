//la idea de este index.js es q se encargue de poder exportar
// los componentes que vamos a crear.
// Tenemos que exportar network.js de cada componente
export { default as user }
from "./user/network";

export { default as story }
from "./story/network";

export { default as auth }
from "./auth/networks";