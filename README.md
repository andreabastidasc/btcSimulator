# Aplicación de Envío de Bitcoins (BTC) en React

# Live demo

https://main--btc-transfer-simulator.netlify.app/

## Descripción del Proyecto

Esta aplicación simula el envío de Bitcoins (BTC) y permite a los usuarios gestionar su balance, enviar BTC a direcciones específicas y consultar el historial de operaciones. Desarrollada en React, la aplicación cumple con los siguientes requisitos funcionales:

### Funcionalidades Principales

1. **Visualización del Balance**:
    - El usuario puede ver su balance disponible en BTC, junto con su equivalente en pesos (ARS).
    - Ejemplo: 1 BTC = 56,633,060 ARS

2. **Envío de BTC**:
    - El usuario puede enviar BTC a una dirección específica.

3. **Feedback del Envío**:
    - El usuario recibe un mensaje indicando si el envío fue exitoso o no.

4. **Historial de Operaciones**:
    - El usuario puede ver el historial de todas las operaciones realizadas.

5. **Detalle de Operaciones**:
    - Se muestra el detalle de cada operación, incluyendo la fecha, monto enviado, dirección de destino, estado de la operación (exitosa/no exitosa) y ID de la operación.

6. **Actualización del Balance**:
    - El balance del usuario se actualiza automáticamente después de cada operación.

### Campos para el Envío de BTC

- **Dirección BTC (destino)**.
- **Monto a enviar (en BTC)**.
- **Comisión de la red** (solo lectura), que se sumará al monto total. Esta comisión será un valor aleatorio entre 0.0001 y 0.0002 BTC.

## Instrucciones para Levantar el Proyecto

### Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/ripio-evaluacion-tecnica.git
cd ripio-evaluacion-tecnica
npm install
```

### Configuración del Proyecto

Crea un archivo .env en la raíz del proyecto y define las siguientes variables de entorno:

```bash
REACT_APP_API_URL="https://ripio.com/api/v1"
```

### Ejecución en Desarrollo
```bash
npm start
```

La aplicación estará disponible en http://localhost:3000.

### Advertencia sobre la API y Manejo de CORS

La API de Ripio para consultar las tasas de cambio puede generar un error de CORS que restringe las solicitudes HTTP que se originan desde un origen diferente al del servidor. 

Para solucionar este problema, se pueden aplicar diversas estrategias, como configurar el servidor de la API para permitir solicitudes CORS, utilizar un proxy inverso que agregue los encabezados CORS necesarios, o bien, recurrir a herramientas como extensiones de navegador que permitan CORS. Cada enfoque tiene sus propias ventajas y consideraciones de seguridad, y la elección dependerá del contexto específico del proyecto y de las restricciones del servidor.

En este caso se utilizó un extensión de chrome llamada: CORS Unblock (https://chromewebstore.google.com/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=es). Se debe activar para ver el deploy correctamente y para levantar el proyecto localmente.
