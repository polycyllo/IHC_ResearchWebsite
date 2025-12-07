# Almacenamiento de Datos JSON

Esta carpeta contiene archivos JSON que definen los datos de la aplicación:

- **centers.json** - Datos de centros de investigación
- **laboratories.json** - Datos de laboratorios
- **publications.json** - Datos de publicaciones académicas

Los datos se importan en `src/data/mockData.ts` y se utilizan en toda la aplicación.

## Estructura

Todos los archivos JSON siguen estructuras tipadas según se define en `src/types/index.ts`.

## Historial de búsquedas

El historial de búsquedas se almacena en localStorage del navegador, no en archivos JSON. Esto permite una experiencia más fluida y no requiere sincronización con el servidor.
