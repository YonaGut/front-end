# Melo App

## Arquitectura

Este proyecto frontend está construido utilizando **Next.js** y sigue una arquitectura basada en **Feature Slices** dentro del directorio `src/app`.  La arquitectura se centra en la **separación de responsabilidades**, la **reutilización de componentes** y la **escalabilidad**.

### Estructura de directorios

```
├── docs/             
├── src/
│   ├── app/            
│   │   ├── auth/       
│   │   ├── (private)/  
│   │   ├── users/      
│   │   ├── settings/   
│   │   ├── layout.tsx    
│   │   └── ...
│   ├── assets/         
│   ├── components/     
│   │   ├── common/     
│   │   ├── modules/    
│   │   ├── ui/         
│   ├── services/       
│   ├── state/          
│   ├── styles/         
│   ├── types/          
│   ├── utils/          
├── tests/             
│   ├── unit/
│   ├── integration/
│   ├── e2e/
├── .gitignore
├── README.md
├── tsconfig.json
└── package.json
```

## Acuerdos de Equipo y Convenciones de Código

### Nomenclatura

*   **Constantes:** `CONSTANTE_EN_MAYUSCULAS_SNAKE_CASE` (ej. `API_BASE_URL`)
*   **Variables `const` (inmutables):** `nombreDescriptivoCamelCase` (ej. `userName`, `productPrice`)
*   **Variables `let` (mutables - usar con moderación):** `nombreDescriptivoCamelCase` (ej. `currentCount`, `isActive`) - Usar `let` solo cuando sea **estrictamente necesario** la mutabilidad. Preferir inmutabilidad con `const`.
*   **Funciones:** `verboEnInfinitivoCamelCase` (ej. `getUserData`, `calculateTotal`, `validateInput`)
*   **Clases:** `NombreClasePascalCase` (ej. `UserManager`, `ProductService`, `LoginFormComponent`)
*   **Interfaces:** `NombreInterfazPascalCase` (ej. `UserData`, `ProductDetails`, `LoginProps`)
*   **Componentes React:** `NombreComponentePascalCase` (ej. `Button`, `InputForm`, `DashboardPage`)
*   **Archivos:** `nombre-archivo-kebab-case.extensión` (ej. `user-service.ts`, `button.component.tsx`, `login-module.module.css`)
*   **Carpetas:** `nombre-carpeta-en-minusculas` (ej. `components`, `utils`, `services`)

### Estructura de Archivos y Carpetas

*   **Agrupación por Feature Slices:**  Dentro de `src/app/`, organizar las rutas y componentes por funcionalidades (auth, dashboard, users, settings, etc.).
*   **Componentes UI Reutilizables en `src/components/ui/`:**  Crear una biblioteca de componentes UI genéricos y reutilizables.
*   **Componentes Comunes en `src/components/common/`:**  Componentes reutilizables con cierta lógica de negocio.
*   **Módulos (Contenedores) en `src/components/modules/`:**  Componentes que agrupan componentes más pequeños y forman secciones o módulos de la UI.
*   **Servicios API en `src/services/`:**  Organizar los servicios API por funcionalidad o recurso.
*   **Tipos e Interfaces en `src/types/`:**  Definir tipos e interfaces para mejorar la mantenibilidad y seguridad del código.
*   **Utilidades en `src/utils/`:**  Funciones de utilidad reutilizables y genéricas.

### Patrones de Diseño y Principios

*   **Componentes:**  Utilizar el patrón de **Componentes React** para la construcción de la interfaz de usuario, promoviendo la reutilización y la modularidad.
*   **Contenedores/Presentacionales:**  Considerar la separación de componentes en **Contenedores** (con lógica y estado) y **Presentacionales** (solo UI, reciben props).  Esto ayuda a la separación de responsabilidades.
*   **Hooks:**  Utilizar **Hooks de React** para la gestión de estado y efectos secundarios en componentes funcionales.
*   **DRY (Don't Repeat Yourself):**  Evitar la duplicación de código.  Extraer lógica y componentes reutilizables.
*   **KISS (Keep It Simple, Stupid):**  Priorizar la simplicidad y la legibilidad del código.  Evitar la complejidad innecesaria.
*   **Capas:**
    *   **Capa de Presentación (Components):**  Responsable de la UI y la interacción con el usuario.
    *   **Capa de Lógica de Negocio (Services, Utils, State):**  Responsable de la lógica de la aplicación, la gestión de datos, la interacción con APIs y la gestión del estado.
    *   **Capa de Datos (API, Types):**  Responsable de la definición de la estructura de datos y la comunicación con el backend.
*   **Interfaces y Clases:**  Utilizar **Interfaces de TypeScript** para definir contratos y tipos de datos.  Usar **Clases** cuando se requiera encapsulación y herencia (aunque en React, la composición con componentes y hooks suele ser más común que la herencia de clases).
*   **Principio Abierto/Cerrado (Open/Closed Principle):**  Diseñar componentes y módulos que estén **abiertos a la extensión** (mediante props, composición) pero **cerrados a la modificación** (evitar modificar el código interno de componentes reutilizables).
*   **Descriptibilidad:**  Escribir código **auto-documentado** con nombres de variables, funciones y componentes claros y descriptivos.  Comentarios concisos cuando sea necesario para explicar lógica compleja.

## Documentación

*   **TypeDoc:**  Utilizar **TypeDoc** para generar documentación automática de la API a partir de los tipos e interfaces de TypeScript.  Configurar TypeDoc para generar documentación para los archivos en `src/types/` y `src/services/`.
*   **README.md:**  Este archivo README principal para la documentación general del proyecto (arquitectura, convenciones, etc.).
*   **Documentación de Componentes (Opcional - Storybook u otras herramientas):**  Considerar el uso de Storybook o herramientas similares para documentar y probar componentes UI de forma interactiva.
*   **Comentarios en el Código:**  Utilizar comentarios concisos y relevantes en el código para explicar lógica compleja o decisiones de diseño, especialmente en funciones y componentes complejos.

## Estructuras de Datos

*   **Tipos e Interfaces de TypeScript:**  Definir **interfaces y tipos** en `src/types/` para representar las estructuras de datos utilizadas en la aplicación (ej. `User`, `Product`, `Order`, `ApiResponse`).  Asegurarse de que las estructuras de datos sean **coherentes con la API del backend** y las funcionalidades del frontend.
*   **Objetos Literales y Arrays:**  Utilizar **objetos literales** (`{}`) y **arrays** (`[]`) para representar datos estructurados dentro de los componentes y servicios.
*   **Considerar estructuras de datos más complejas si es necesario:**  Para funcionalidades específicas, considerar el uso de estructuras de datos más complejas como **Map, Set, o estructuras de datos de librerías externas** si son apropiadas para la eficiencia y organización de los datos.

## Manejo de Errores y Validaciones

*   **Error Boundaries (Next.js):**  Utilizar [**Error Boundaries de React**](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary) y [**NextJs**](https://nextjs.org/docs/pages/building-your-application/configuring/error-handling)(`global-error.tsx` y `error.tsx` dentro de rutas) para capturar y manejar errores inesperados en la aplicación y proporcionar una experiencia de usuario robusta.
*   **Manejo de Errores en Servicios API:**  Implementar **manejo de errores en los servicios API** (`src/services/`) para capturar errores de red, errores de respuesta del servidor y otros problemas al interactuar con el backend.  Utilizar `try...catch` y manejar las respuestas de error de la API (códigos de estado HTTP, mensajes de error). Recordar la traduccion para el manejo correcto del error, pero tambien en el caso de status 4xx la retroalimentación correcta del usuario.
*   **Validaciones:**
    *   **Validaciones en el Frontend (Formularios):**  Realizar **validaciones en el frontend** (en componentes de formulario) para asegurar que los datos ingresados por el usuario sean válidos antes de enviarlos al backend.  Utilizar librerías de validación si es necesario (ej. `react-hook-form` con validación).
    *   **Validaciones en el Backend (API):**  Asumir que el **backend también realizará validaciones**, pero el frontend debe proporcionar validaciones básicas para mejorar la experiencia del usuario y reducir errores innecesarios al backend.

## Tests Unitarios e Integración

*   **Tests Unitarios:**  Escribir **tests unitarios** para componentes UI, funciones de utilidad y servicios (`src/components/ui/`, `src/utils/`, `src/services/`).  Utilizar un framework de testing como Jest y React Testing Library.  **Enfocarse en probar la lógica individual de componentes y funciones de forma aislada.**
*   **Tests de Integración:**  Escribir **tests de integración** para probar la interacción entre diferentes partes del sistema (ej. componentes que interactúan con servicios API, flujos de usuario que involucran múltiples componentes).  Utilizar herramientas como Cypress o Playwright para tests de integración y E2E.
*   **Cobertura de Tests:**  Se establece como **objetivos de cobertura de tests** un 80% para asegurar que las partes críticas del código estén adecuadamente testeadas.
*   **Validaciones en Tests:**  En los tests, **validar diferentes casos de uso**, incluyendo **casos de éxito y casos de error/excepción**.  Asegurarse de que las validaciones cubran los **comportamientos esperados** y los **límites** de las funciones y componentes.

## Principios SOLID

*   **Principio de Responsabilidad Única (SRP - Single Responsibility Principle):**  Cada clase, componente o módulo debe tener **una y solo una razón para cambiar**.  Separar responsabilidades para mejorar la cohesión y reducir el acoplamiento.
*   **Principio de Sustitución de Liskov (LSP - Liskov Substitution Principle):**  Las **subclases o componentes derivados deben ser sustituibles por sus clases o componentes base** sin alterar el comportamiento del programa.  (En React, esto se relaciona más con la **composición y el uso de props** que con la herencia de clases tradicional).
*   **Principio de Inversión de Dependencias (DIP - Dependency Inversion Principle):**  Depender de **abstracciones** (interfaces, tipos) en lugar de **implementaciones concretas**.  Utilizar **inyección de dependencias** o patrones similares para desacoplar componentes y facilitar el testing y la mantenibilidad.  (En React, esto se puede lograr con props y composición).
*   **Principio de Segregación de Interfaces (ISP - Interface Segregation Principle):**  Las interfaces deben ser **específicas para las necesidades de los clientes**, en lugar de interfaces grandes y genéricas.  Crear interfaces más pequeñas y enfocadas para componentes y módulos.
*   **Principio Abierto/Cerrado (OCP - Open/Closed Principle):**  Ya mencionado anteriormente en la sección de Patrones de Diseño.

## Control de Versiones y Ramas

* **Trunk Based Development:** Se utilizará la rama `main` como rama principal de desarrollo. Se fomentará el uso de **Trunk Based Development** para mantener un flujo de trabajo simple y eficiente.

* **Branches:** Se utilizarán ramas de feature (`feature/`), hotfix (`hotfix/`) y release (`release/`) para el desarrollo de nuevas funcionalidades, corrección de errores y lanzamiento de versiones, respectivamente.

* **Pull Requests:** Cada rama de feature o hotfix deberá ser fusionada a `main` a través de un **Pull Request**. Se requerirá la revisión de al menos un compañero de equipo antes de la fusión.

* **Versionado Semántico:** Se seguirá el **Versionado Semántico** para la numeración de versiones del proyecto. Se utilizarán versiones `MAJOR.MINOR.PATCH` para indicar cambios significativos, nuevas funcionalidades y correcciones de errores, respectivamente.

* **Tags:** Se crearán **tags** en el repositorio para marcar versiones específicas del proyecto. Cada tag deberá seguir el formato `vMAJOR.MINOR.PATCH` (ej. `v1.0.0`).

