# Arquitectura Final

## Uso de Genéricos

Se ha implementado un componente DataTable<T> utilizando genéricos de TypeScript. Esto permite reutilizar la misma tabla para cualquier entidad sin perder el tipado fuerte. El compilador verifica que las columnas utilizadas existen realmente en los datos recibidos.

## Uso de Partial<T>

Para gestionar la edición temporal de datos se ha utilizado Partial<Servidor>. Esto permite trabajar con objetos incompletos durante la edición sin necesidad de proporcionar todos los campos obligatorios desde el inicio.

## Uso de Librerías Externas

Se ha integrado la librería date-fns para realizar cálculos entre fechas. Se ha creado una función utilitaria tipada que recibe dos objetos Date y devuelve un número correspondiente a la diferencia de días.

## Ventajas frente a JavaScript

El uso de TypeScript reduce errores en tiempo de ejecución gracias al análisis estático del código. Los tipos permiten detectar problemas durante el desarrollo antes de ejecutar la aplicación.

Los genéricos mejoran la reutilización de componentes sin perder seguridad de tipos. Los Utility Types como Partial permiten modelar situaciones reales de edición de datos de forma segura.

En conjunto, la aplicación es más mantenible, escalable y robusta que una implementación equivalente desarrollada únicamente con JavaScript.
