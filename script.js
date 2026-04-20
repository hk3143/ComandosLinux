    const SECTION_ORDER = ["theory"];
    const SECTION_CONFIG = {
      theory: {
        label: "Teoria del texto",
        description: "Preguntas basadas en La primera regla y Analisis de requisitos.",
        badge: "Texto"
      },
      commands: {
        label: "Comandos Linux",
        description: "Bloque separado para practicar los comandos y operadores que aparecen en el material de estudio.",
        badge: "Linux"
      }
    };

    const THEORY_QUIZ_COUNT = 18;
    const COMMAND_EXAM_COUNT = 14;
    const QUESTION_COUNTS = {
      theory: THEORY_QUIZ_COUNT,
      commands: COMMAND_EXAM_COUNT
    };

    const SEARCH_SOURCES = {
      all: { label: "Todo" },
      guiaComandos: { label: "Guia practica" },
      resumen: { label: "material/resumen-estudio.txt" },
      transcripcion: { label: "material/transcripcion-material.txt" },
      comandosDoc: { label: "material/comandos-linux-practica.docx" },
      claseDoc: { label: "material/semana-5-automatizacion-linux.docx" },
      kaliSim: { label: "Simulacion Kali" }
    };

    const SEARCH_EXAMPLES = [
      "crear carpeta",
      "buscar texto",
      "contar lineas",
      "guardar errores",
      "dar permiso de ejecucion",
      "grep",
      "awk",
      "nano",
      "#!/bin/bash"
    ];

    const MATERIAL_COMMANDS = [
      "pwd",
      "ls",
      "cd",
      "mkdir",
      "cp",
      "mv",
      "rmdir",
      "cat",
      "head",
      "tail",
      "less",
      "grep",
      "cut",
      "sort",
      "uniq",
      "wc",
      "awk",
      "echo",
      "nano",
      "chmod"
    ];

    const MATERIAL_CONCEPTS = ["|", ">", ">>", "2>", "#!/bin/bash"];

    const COMMAND_GUIDES = [
      {
        key: "pwd",
        label: "pwd",
        title: "Saber en que carpeta estas",
        description: "Usa pwd para confirmar tu ubicacion actual antes de copiar, mover o editar archivos.",
        example: "pwd",
        steps: ["Escribe pwd y presiona Enter.", "Lee la ruta actual que devuelve la terminal."],
        aliases: ["donde estoy", "ruta actual", "carpeta actual", "ubicacion actual"],
        scenarioId: "navigation"
      },
      {
        key: "ls",
        label: "ls",
        title: "Listar archivos y ver detalles",
        description: "Usa ls -la para revisar el contenido de una carpeta, incluidos ocultos, permisos y fechas.",
        example: "ls -la",
        steps: ["Ejecuta ls -la dentro de la carpeta que quieres inspeccionar.", "Revisa nombres, permisos, propietario y fecha."],
        aliases: ["ver archivos", "listar archivos", "archivos ocultos", "ver permisos"],
        scenarioId: "navigation"
      },
      {
        key: "cd",
        label: "cd",
        title: "Cambiar de carpeta",
        description: "Usa cd para moverte a otra ruta y trabajar desde ahi con archivos y directorios.",
        example: "cd /var/log",
        steps: ["Escribe cd seguido de la ruta destino.", "Confirma el cambio con pwd si necesitas verificarlo."],
        aliases: ["cambiar de carpeta", "entrar a una carpeta", "moverme a otra ruta"],
        scenarioId: "navigation"
      },
      {
        key: "mkdir",
        label: "mkdir",
        title: "Crear carpetas o rutas completas",
        description: "Usa mkdir -p para crear una carpeta o varias subcarpetas intermedias en una sola orden.",
        example: "mkdir -p proyecto/datos/logs",
        steps: ["Escribe mkdir -p seguido de la ruta que quieres crear.", "Verifica el resultado con ls si quieres revisar la estructura."],
        aliases: ["crear carpeta", "crear directorio", "crear ruta", "hacer carpetas"],
        scenarioId: "organize"
      },
      {
        key: "cp",
        label: "cp",
        title: "Copiar archivos sin borrar el original",
        description: "Usa cp cuando necesitas duplicar un archivo en otra ruta o dejar un respaldo rapido.",
        example: "cp usuarios.txt respaldo/usuarios.txt",
        steps: ["Escribe cp origen destino.", "Comprueba el archivo copiado en la ruta final."],
        aliases: ["copiar archivo", "hacer copia", "duplicar archivo", "respaldar archivo"],
        scenarioId: "organize"
      },
      {
        key: "mv",
        label: "mv",
        title: "Mover o renombrar archivos",
        description: "Usa mv para cambiar un archivo de carpeta o para ponerle otro nombre.",
        example: "mv notas.txt historial/notas-final.txt",
        steps: ["Escribe mv origen destino.", "Si el destino es otro nombre, el archivo queda renombrado."],
        aliases: ["mover archivo", "renombrar archivo", "cambiar nombre"],
        scenarioId: "organize"
      },
      {
        key: "rmdir",
        label: "rmdir",
        title: "Eliminar una carpeta vacia",
        description: "Usa rmdir para borrar directorios vacios sin tocar carpetas que aun tienen archivos.",
        example: "rmdir temporal",
        steps: ["Asegurate de que la carpeta este vacia.", "Ejecuta rmdir nombre-carpeta."],
        aliases: ["borrar carpeta vacia", "eliminar directorio vacio", "quitar carpeta vacia"],
        scenarioId: "organize"
      },
      {
        key: "cat",
        label: "cat",
        title: "Ver el contenido completo de un archivo",
        description: "Usa cat cuando quieres imprimir rapidamente el contenido de un archivo corto en pantalla.",
        example: "cat usuarios.txt",
        steps: ["Escribe cat seguido del archivo.", "Lee la salida completa directamente en la terminal."],
        aliases: ["ver archivo", "mostrar archivo", "leer archivo completo"],
        scenarioId: "reading"
      },
      {
        key: "head",
        label: "head",
        title: "Ver las primeras lineas",
        description: "Usa head para revisar solo el inicio de un archivo, especialmente si es largo.",
        example: "head -n 5 usuarios.txt",
        steps: ["Escribe head -n cantidad archivo.", "Revisa solo las primeras lineas sin abrir todo el archivo."],
        aliases: ["ver primeras lineas", "inicio del archivo", "primeras filas"],
        scenarioId: "reading"
      },
      {
        key: "tail",
        label: "tail",
        title: "Ver las ultimas lineas",
        description: "Usa tail para revisar el final de un archivo o de un log sin imprimirlo completo.",
        example: "tail -n 10 auth.log",
        steps: ["Escribe tail -n cantidad archivo.", "Lee el tramo final de la salida."],
        aliases: ["ver ultimas lineas", "final del archivo", "revisar log al final"],
        scenarioId: "reading"
      },
      {
        key: "less",
        label: "less",
        title: "Revisar un archivo largo de forma comoda",
        description: "Usa less cuando un archivo es demasiado largo para leerlo de una sola vez con cat.",
        example: "less usuarios.txt",
        steps: ["Abre el archivo con less.", "Recorre el contenido por pantallas y sal cuando termines."],
        aliases: ["leer archivo largo", "navegar archivo", "revisar archivo grande"],
        scenarioId: "reading"
      },
      {
        key: "grep",
        label: "grep",
        title: "Buscar texto dentro de un archivo",
        description: "Usa grep para filtrar lineas que contengan una palabra, codigo o patron concreto.",
        example: "grep \"Chile\" datos/usuarios.txt",
        steps: ["Escribe grep seguido del texto a buscar y el archivo.", "Revisa solo las lineas que coinciden con ese patron."],
        aliases: ["buscar texto", "filtrar lineas", "encontrar palabra", "buscar coincidencias"],
        scenarioId: "filtering"
      },
      {
        key: "cut",
        label: "cut",
        title: "Extraer una columna de datos",
        description: "Usa cut cuando tienes archivos delimitados y quieres sacar una columna especifica.",
        example: "cut -d \",\" -f1 datos/usuarios.txt",
        steps: ["Define el separador con -d.", "Elige el campo con -f para mostrar solo esa columna."],
        aliases: ["extraer columna", "sacar campo", "tomar primera columna"],
        scenarioId: "processing"
      },
      {
        key: "sort",
        label: "sort",
        title: "Ordenar lineas o nombres",
        description: "Usa sort para ordenar listados de texto antes de revisar resultados o quitar duplicados.",
        example: "sort nombres.txt",
        steps: ["Escribe sort archivo.", "Si quieres guardar el resultado, usa una redireccion a otro archivo."],
        aliases: ["ordenar nombres", "ordenar lineas", "orden alfabetico"],
        scenarioId: "processing"
      },
      {
        key: "uniq",
        label: "uniq",
        title: "Quitar duplicados consecutivos",
        description: "Usa uniq despues de sort para dejar una lista con valores unicos y ordenados.",
        example: "uniq nombres-ordenados.txt",
        steps: ["Ordena primero el archivo si necesitas agrupar duplicados.", "Ejecuta uniq sobre el resultado ordenado."],
        aliases: ["quitar duplicados", "dejar unicos", "eliminar repetidos"],
        scenarioId: "processing"
      },
      {
        key: "wc",
        label: "wc",
        title: "Contar lineas de un archivo o de un filtro",
        description: "Usa wc -l para saber cuantas lineas tiene un archivo o cuantas coincidencias produjo una busqueda.",
        example: "grep \"Chile\" datos/usuarios.txt | wc -l",
        steps: ["Ejecuta wc -l sobre un archivo o una tuberia.", "Lee el numero total de lineas devuelto por la terminal."],
        aliases: ["contar lineas", "cuantas lineas", "contar resultados", "numero de lineas"],
        scenarioId: "filtering"
      },
      {
        key: "awk",
        label: "awk",
        title: "Procesar campos con reglas mas flexibles",
        description: "Usa awk cuando necesitas imprimir columnas o aplicar reglas mas expresivas que cut.",
        example: "awk -F \",\" '{print $3}' datos/usuarios.txt",
        steps: ["Define el separador con -F.", "Indica la accion entre llaves para mostrar o transformar campos."],
        aliases: ["procesar columnas", "tercera columna", "reglas con campos", "trabajar con campos"],
        scenarioId: "processing"
      },
      {
        key: "echo",
        label: "echo",
        title: "Escribir texto desde la terminal",
        description: "Usa echo para generar una linea y combinarla con redirecciones para crear o completar archivos.",
        example: "echo \"Inicio de bitacora\" > bitacora.txt",
        steps: ["Escribe echo seguido del texto entre comillas.", "Combinalo con > o >> si quieres guardarlo en un archivo."],
        aliases: ["escribir texto", "crear texto", "poner una linea en archivo"],
        scenarioId: "editing"
      },
      {
        key: "nano",
        label: "nano",
        title: "Editar un archivo desde la terminal",
        description: "Usa nano cuando necesitas abrir un archivo, modificarlo y guardarlo sin salir de la consola.",
        example: "nano notas.txt",
        steps: ["Abre el archivo con nano nombre-archivo.", "Edita el contenido y guarda los cambios desde el editor."],
        aliases: ["editar archivo", "abrir editor", "modificar archivo en terminal"],
        scenarioId: "editing"
      },
      {
        key: "chmod",
        label: "chmod",
        title: "Cambiar permisos o dar ejecucion",
        description: "Usa chmod para ajustar permisos y dejar un script listo para ejecutarse.",
        example: "chmod +x reporte.sh",
        steps: ["Escribe chmod seguido del modo o permiso.", "Verifica luego que el archivo tenga el acceso esperado."],
        aliases: ["cambiar permisos", "dar permiso de ejecucion", "hacer ejecutable"],
        scenarioId: "scripts"
      },
      {
        key: "pipe",
        label: "|",
        title: "Conectar dos comandos con una tuberia",
        description: "Usa | para enviar la salida del primer comando como entrada del siguiente.",
        example: "grep \"Chile\" datos/usuarios.txt | wc -l",
        steps: ["Ejecuta un comando que produzca salida.", "Coloca | y luego el comando que debe procesar esa salida."],
        aliases: ["combinar comandos", "conectar comandos", "pipe", "usar tuberia"],
        scenarioId: "filtering"
      },
      {
        key: "redirect-out",
        label: ">",
        title: "Guardar salida en un archivo nuevo o reemplazarlo",
        description: "Usa > para escribir la salida de un comando en un archivo, creando o sobreescribiendo su contenido.",
        example: "echo \"Inicio de bitacora\" > bitacora.txt",
        steps: ["Escribe el comando que genera la salida.", "Pon > y luego el archivo destino para guardar el resultado."],
        aliases: ["guardar salida", "crear archivo", "sobreescribir archivo", "redirigir salida"],
        scenarioId: "editing"
      },
      {
        key: "append-out",
        label: ">>",
        title: "Agregar salida al final de un archivo",
        description: "Usa >> cuando quieres anexar nuevas lineas sin borrar el contenido que ya existe.",
        example: "echo \"Segundo evento\" >> bitacora.txt",
        steps: ["Ejecuta el comando que genera el texto.", "Usa >> para agregarlo al final del archivo."],
        aliases: ["agregar linea", "anexar al archivo", "sumar texto al final"],
        scenarioId: "editing"
      },
      {
        key: "stderr-out",
        label: "2>",
        title: "Guardar errores en un archivo",
        description: "Usa 2> para redirigir el error estandar a un archivo y revisarlo despues.",
        example: "ls carpeta_que_no_existe 2> errores.txt",
        steps: ["Ejecuta el comando que puede producir error.", "Agrega 2> archivo para guardar solo el mensaje de error."],
        aliases: ["guardar errores", "redirigir errores", "capturar error", "error a archivo"],
        scenarioId: "errors"
      },
      {
        key: "shebang",
        label: "#!/bin/bash",
        title: "Indicar Bash como interprete del script",
        description: "Usa #!/bin/bash al inicio del archivo para dejar claro que el script debe ejecutarse con Bash.",
        example: "#!/bin/bash",
        steps: ["Coloca esta linea al inicio del script.", "Despues agrega tus comandos y da permiso de ejecucion con chmod +x."],
        aliases: ["script bash", "interprete bash", "inicio del script", "shebang"],
        scenarioId: "scripts"
      }
    ];

    const PRACTICE_CHALLENGE_COUNT = 6;

    const questionBank = {
      theory: [
        {
          tag: "Capitulo 1",
          prompt: "¿Cual es la primera regla del administrador de sistemas?",
          options: [
            "Actualizar siempre el software antes que cualquier otra tarea.",
            "Proporcionar y mantener acceso a los recursos del sistema.",
            "Instalar Linux en todos los equipos de la empresa.",
            "Reducir el numero de usuarios del sistema."
          ],
          answer: 1,
          explanation: "La idea central del primer capitulo es mantener el acceso a los recursos del sistema."
        },
        {
          tag: "Capitulo 1",
          prompt: "¿Cual de los siguientes elementos aparece en el texto como recurso del sistema?",
          options: [
            "Ciclos de CPU.",
            "Comisiones de ventas.",
            "Campañas de publicidad.",
            "Presupuesto anual."
          ],
          answer: 0,
          explanation: "El texto enumera recursos como CPU, memoria, almacenamiento, ancho de banda, aplicaciones y perifericos."
        },
        {
          tag: "Capitulo 1",
          prompt: "¿Que significa, segun el texto, que el uso de un recurso supere su capacidad?",
          options: [
            "Que el sistema necesita menos usuarios.",
            "Que el administrador ha fallado en la primera regla.",
            "Que el problema se resuelve solo con reiniciar.",
            "Que la seguridad deja de ser importante."
          ],
          answer: 1,
          explanation: "Si ya no puede garantizarse el acceso normal a los servicios, se incumple la primera regla."
        },
        {
          tag: "Capitulo 1",
          prompt: "¿Que conjunto de tareas surge directamente de la primera regla?",
          options: [
            "Seguridad, copias de seguridad, recuperacion, control del rendimiento y planificacion de capacidad.",
            "Solo instalacion inicial del sistema operativo.",
            "Unicamente soporte ofimatico a usuarios.",
            "Redaccion de contratos y compras administrativas."
          ],
          answer: 0,
          explanation: "El texto vincula la primera regla con seguridad, recuperacion, rendimiento y capacidad."
        },
        {
          tag: "Capitulo 1",
          prompt: "¿Por que los sistemas necesitan administracion permanente aunque Linux sea facil de instalar?",
          options: [
            "Porque Linux no sirve para empresas.",
            "Porque los entornos reales cambian y la infraestructura debe adaptarse a cada organizacion.",
            "Porque todos los usuarios deben ser programadores avanzados.",
            "Porque la instalacion es la parte mas importante de todo el trabajo."
          ],
          answer: 1,
          explanation: "La facilidad de instalacion no elimina la necesidad de adaptar, mantener y priorizar servicios."
        },
        {
          tag: "Capitulo 1",
          prompt: "¿Que diferencia principal establece el texto entre operador y administrador de sistemas?",
          options: [
            "El operador diseña politicas y el administrador solo ejecuta rutinas.",
            "El operador sigue procedimientos definidos; el administrador los diseña y mejora.",
            "No existe diferencia funcional entre ambos cargos.",
            "El operador trabaja en Linux y el administrador solo en Windows."
          ],
          answer: 1,
          explanation: "El operador realiza tareas rutinarias y el administrador define procedimientos, planifica y decide."
        },
        {
          tag: "Capitulo 1",
          prompt: "¿Que subraya el capitulo sobre el trabajo del administrador de sistemas dentro de la empresa?",
          options: [
            "Que rara vez se relaciona con redes, bases de datos o soporte.",
            "Que suele solaparse con redes, bases de datos, soporte tecnico y otros sistemas.",
            "Que debe limitarse al hardware del servidor principal.",
            "Que no necesita documentar nada si tiene experiencia."
          ],
          answer: 1,
          explanation: "El texto remarca que el rol suele mezclarse con otras areas tecnicas de la organizacion."
        },
        {
          tag: "Capitulo 1",
          prompt: "¿Que papel cumple la documentacion en la administracion de sistemas?",
          options: [
            "Solo se consulta cuando todo ha fallado.",
            "Es una fuente basica de trabajo y aprendizaje continuo.",
            "Sustituye las pruebas y la planificacion.",
            "Tiene valor unicamente para el fabricante."
          ],
          answer: 1,
          explanation: "La documentacion oficial y especializada es una base de consulta permanente para el administrador."
        },
        {
          tag: "Capitulo 1",
          prompt: "¿Por que insiste el texto en el estudio continuo del administrador?",
          options: [
            "Porque la documentacion reemplaza toda experiencia practica.",
            "Porque los entornos cambian y el administrador debe investigar y ampliar conocimientos.",
            "Porque la unica forma de aprender Linux es memorizar comandos sueltos.",
            "Porque asi evita hablar con directivos y usuarios."
          ],
          answer: 1,
          explanation: "La evolucion constante de sistemas y necesidades obliga a estudiar y seguir aprendiendo."
        },
        {
          tag: "Capitulo 2",
          prompt: "¿Cual es la idea central con la que comienza el capitulo sobre analisis de requisitos?",
          options: [
            "Todo problema tecnico debe resolverse comprando hardware nuevo.",
            "Un problema mal entendido lleva a una solucion equivocada.",
            "Los usuarios siempre saben cual es la solucion correcta.",
            "El analisis de requisitos solo sirve para programadores."
          ],
          answer: 1,
          explanation: "El capitulo advierte que comprender mal el problema conduce a decisiones malas."
        },
        {
          tag: "Capitulo 2",
          prompt: "¿Que ejemplo usa el texto para mostrar la diferencia entre sintoma y problema real?",
          options: [
            "Un usuario pide un equipo nuevo cuando el problema puede ser la falta de memoria.",
            "Un operador cambia todas las contraseñas a la vez.",
            "Un servidor web se reinicia automaticamente cada hora.",
            "Un usuario cambia de impresora sin autorizacion."
          ],
          answer: 0,
          explanation: "La peticion de un equipo nuevo puede ocultar un problema mas preciso y simple."
        },
        {
          tag: "Capitulo 2",
          prompt: "¿Como define el texto el analisis de requisitos?",
          options: [
            "Como un proceso de traducir resultados deseados en especificaciones concretas.",
            "Como una politica exclusiva de seguridad de red.",
            "Como una forma de documentar copias de seguridad.",
            "Como una auditoria contable del departamento tecnico."
          ],
          answer: 0,
          explanation: "La funcion del analisis de requisitos es convertir objetivos en especificaciones utiles para decidir."
        },
        {
          tag: "Capitulo 2",
          prompt: "¿Que debe entender el administrador para analizar bien un problema?",
          options: [
            "Solo el sintoma tecnico inmediato.",
            "Que quieren realmente usuarios y directivos, y que resultados esperan.",
            "Unicamente que servidor esta encendido.",
            "Solo el costo del hardware nuevo."
          ],
          answer: 1,
          explanation: "El texto centra el analisis en expectativas, prioridades y resultados deseados."
        },
        {
          tag: "Capitulo 2",
          prompt: "Antes de aceptar un puesto de administrador, ¿que recomienda revisar el texto?",
          options: [
            "Solo el salario y el horario.",
            "Lineas de autoridad, sistemas a cargo, seguridad, recuperacion y rendimiento.",
            "Unicamente el modelo de los equipos.",
            "Solo la estetica del departamento."
          ],
          answer: 1,
          explanation: "Conviene aclarar autoridad, politicas, soporte, recuperacion y situacion heredada."
        },
        {
          tag: "Capitulo 2",
          prompt: "¿Para que sirve una especificacion o acuerdo de nivel de servicio?",
          options: [
            "Para sustituir toda la documentacion tecnica.",
            "Para definir prioridades, responsabilidades y criterios de funcionamiento.",
            "Para evitar hablar con los usuarios.",
            "Para reducir el numero de servicios ofrecidos."
          ],
          answer: 1,
          explanation: "Ese acuerdo sirve para ordenar expectativas y medir si el servicio funciona como se espera."
        },
        {
          tag: "Capitulo 2",
          prompt: "¿Cual es el primer paso importante en el analisis de requisitos, segun el resumen?",
          options: [
            "Comprar herramientas nuevas.",
            "Identificar a las partes implicadas.",
            "Reinstalar el sistema operativo.",
            "Crear usuarios temporales."
          ],
          answer: 1,
          explanation: "Antes de decidir, hay que saber a quien afecta el servicio y quien juzga el resultado."
        },
        {
          tag: "Capitulo 2",
          prompt: "¿Que servicios cita el texto como ejemplos de prioridades altas?",
          options: [
            "Fondos de pantalla y grupos de noticias recreativos.",
            "Correo corporativo, DNS, encaminamiento basico y sistemas de transacciones.",
            "Solo las paginas publicas de marketing.",
            "Cualquier servicio con mas trafico social."
          ],
          answer: 1,
          explanation: "El texto da prioridad a los servicios que sostienen operaciones criticas del negocio."
        },
        {
          tag: "Capitulo 2",
          prompt: "Si alguien pide instalar un servidor web, ¿que propone el texto hacer primero?",
          options: [
            "Instalarlo de inmediato y preguntar despues.",
            "Analizar objetivo, acceso, riesgos, recursos y mantenimiento del contenido.",
            "Delegarlo siempre en personal administrativo.",
            "Ignorar la solicitud hasta el siguiente trimestre."
          ],
          answer: 1,
          explanation: "La solucion debe elegirse despues de entender para que se necesita realmente el servicio."
        },
        {
          tag: "Capitulo 2",
          prompt: "¿Que valor tiene el analisis de requisitos en el trabajo cotidiano?",
          options: [
            "Solo sirve al inicio de un proyecto grande.",
            "Permite revisar cada peticion para evitar respuestas superficiales.",
            "Se aplica unicamente a puestos nuevos.",
            "Sustituye por completo las pruebas tecnicas."
          ],
          answer: 1,
          explanation: "El resumen aclara que tambien se aplica a las solicitudes diarias de usuarios y directivos."
        },
        {
          tag: "Capitulo 2",
          prompt: "¿Ademas de mantener sistemas, que otra funcion estrategica se atribuye al administrador?",
          options: [
            "Mejorar procesos operativos y automatizar tareas repetitivas.",
            "Evitar toda comunicacion con directivos y usuarios.",
            "Delegar todas las decisiones tecnicas en terceros.",
            "Limitar el crecimiento tecnologico de la empresa."
          ],
          answer: 0,
          explanation: "El administrador tambien puede aumentar la eficiencia mediante automatizacion y mejoras operativas."
        },
        {
          tag: "Capitulo 2",
          prompt: "¿Que traduce el administrador de sistemas a partir de normas y objetivos de la direccion?",
          options: [
            "Campañas de marketing y encuestas comerciales.",
            "Procedimientos, planes, recomendaciones y prioridades tecnicas.",
            "Unicamente scripts de respaldo.",
            "Solo cambios de contraseñas de usuarios."
          ],
          answer: 1,
          explanation: "El resumen explica que la direccion fija normas y el administrador las convierte en acciones tecnicas concretas."
        },
        {
          tag: "Capitulo 2",
          prompt: "¿Para que sirven las preguntas abiertas durante el analisis de requisitos?",
          options: [
            "Para retrasar el proyecto sin necesidad.",
            "Para revelar necesidades reales y preocupaciones de fondo.",
            "Para evitar documentar las decisiones.",
            "Para reemplazar cualquier medicion del servicio."
          ],
          answer: 1,
          explanation: "Las preguntas abiertas ayudan a descubrir que preocupaciones o necesidades hay realmente."
        },
        {
          tag: "Capitulo 2",
          prompt: "¿Que relacion establece el texto entre recuperacion y valoracion de riesgos?",
          options: [
            "No tienen relacion directa.",
            "La planificacion de la recuperacion surge de comprender riesgos y consecuencias de fallos.",
            "La recuperacion solo depende de reinstalar Linux.",
            "La valoracion de riesgos sustituye las copias de seguridad."
          ],
          answer: 1,
          explanation: "El resumen enlaza la recuperacion con el analisis de riesgos y la comprension del impacto de los fallos."
        },
        {
          tag: "Capitulo 2",
          prompt: "¿Por que no todos los servicios deben recibir la misma prioridad?",
          options: [
            "Porque algunos sostienen operaciones criticas del negocio y otros no.",
            "Porque los servicios mas visibles siempre valen mas.",
            "Porque la prioridad depende solo de la antiguedad del servidor.",
            "Porque solo importa el trafico web publico."
          ],
          answer: 0,
          explanation: "El texto distingue servicios criticos para el negocio, como DNS, correo o transacciones, y les da prioridad."
        },
        {
          tag: "Capitulo 2",
          prompt: "¿Que debe definir el administrador para saber si un esfuerzo tuvo exito?",
          options: [
            "Solo el nombre del proyecto.",
            "Una medida o criterio que permita evaluar el resultado.",
            "Un listado de usuarios nuevos.",
            "La marca del hardware comprado."
          ],
          answer: 1,
          explanation: "El capitulo insiste en definir criterios para medir si el servicio cumplio sus objetivos."
        },
        {
          tag: "Conclusion",
          prompt: "¿Que idea resume mejor el conjunto del texto?",
          options: [
            "La administracion de sistemas se reduce al mantenimiento tecnico del hardware.",
            "La administracion de sistemas garantiza disponibilidad, seguridad y evolucion alineadas con las necesidades reales.",
            "La tarea principal del administrador es estudiar documentacion historica.",
            "La mejor practica es responder siempre a sintomas inmediatos."
          ],
          answer: 1,
          explanation: "La conclusion une la primera regla con el analisis de requisitos como metodo de trabajo."
        },
        {
          tag: "Capitulo 1",
          prompt: "Si dos servicios compiten por CPU y memoria y uno de ellos sostiene operaciones criticas, ¿que decision encaja mejor con la primera regla del administrador?",
          options: [
            "Mantener ambos servicios con la misma prioridad para evitar conflictos politicos.",
            "Proteger primero el acceso al servicio critico y revisar capacidad, prioridades y rendimiento.",
            "Apagar temporalmente los dos servicios hasta tener hardware nuevo.",
            "Esperar a que los usuarios definan por si mismos que proceso debe seguir activo."
          ],
          answer: 1,
          explanation: "La primera regla obliga a sostener el acceso a los recursos y servicios mas importantes, y eso exige priorizar y gestionar capacidad."
        },
        {
          tag: "Capitulo 2",
          prompt: "¿Por que la frase 'necesitamos un servidor mas potente' no deberia aceptarse como requisito final sin mas analisis?",
          options: [
            "Porque los servidores potentes no existen para Linux.",
            "Porque expresa una solucion propuesta, no una necesidad demostrada ni un resultado medible.",
            "Porque toda mejora debe pasar primero por el departamento comercial.",
            "Porque los requisitos tecnicos solo pueden redactarlos los usuarios finales."
          ],
          answer: 1,
          explanation: "El analisis de requisitos distingue entre la solucion que alguien imagina y la necesidad real que debe demostrarse y medirse."
        },
        {
          tag: "Capitulo 2",
          prompt: "En un entorno heredado sin responsables claros ni documentacion reciente, ¿que accion inicial se ajusta mejor al analisis de requisitos?",
          options: [
            "Cambiar cuanto antes la infraestructura para dejarla uniforme.",
            "Aclarar lineas de autoridad, servicios criticos, riesgos y expectativas antes de rediseñar nada.",
            "Suspender todos los servicios no esenciales hasta conocer mejor el entorno.",
            "Limitarse a revisar solo el inventario de hardware disponible."
          ],
          answer: 1,
          explanation: "El texto recomienda entender autoridad, responsabilidades, servicios y criterios de exito antes de decidir cambios mayores."
        },
        {
          tag: "Capitulo 2",
          prompt: "¿Que vuelve util a un acuerdo de nivel de servicio durante una incidencia real?",
          options: [
            "Que evita documentar las decisiones tomadas durante la crisis.",
            "Que fija prioridades, responsabilidades y criterios medibles para decidir que recuperar primero.",
            "Que garantiza automaticamente que nunca habra fallos.",
            "Que reemplaza la necesidad de copias de seguridad y pruebas."
          ],
          answer: 1,
          explanation: "Un SLA es util porque traduce expectativas en criterios concretos para decidir y evaluar el servicio."
        },
        {
          tag: "Capitulo 1",
          prompt: "Si una aplicacion poco critica degrada correo y DNS durante horas punta, ¿que enfoque coincide mejor con el texto?",
          options: [
            "Mantener todos los servicios con la misma prioridad para no intervenir demasiado.",
            "Asignar prioridad a los servicios esenciales del negocio y revisar recursos del servicio secundario.",
            "Desactivar el correo hasta que termine la carga de la aplicacion menos importante.",
            "Esperar a la siguiente actualizacion del sistema operativo para corregir el problema."
          ],
          answer: 1,
          explanation: "El material insiste en priorizar segun impacto real sobre el negocio, no segun comodidad o visibilidad."
        },
        {
          tag: "Capitulo 2",
          prompt: "¿Por que la automatizacion aparece como una funcion estrategica del administrador y no solo como una comodidad tecnica?",
          options: [
            "Porque elimina la necesidad de analizar requisitos en nuevas solicitudes.",
            "Porque reduce trabajo manual repetitivo, mejora consistencia y libera tiempo para tareas criticas.",
            "Porque sustituye completamente el soporte a usuarios y directivos.",
            "Porque evita documentar procesos y responsabilidades."
          ],
          answer: 1,
          explanation: "Automatizar no es solo ahorrar tiempo: tambien mejora la calidad operativa y permite concentrarse en decisiones de mas valor."
        },
        {
          tag: "Capitulo 2",
          prompt: "¿Que riesgo aparece cuando el administrador responde solo al sintoma que plantea el usuario sin investigar mas?",
          options: [
            "Que termine resolviendo el problema equivocado y gastando recursos en una solucion superficial.",
            "Que el sistema operativo quede automaticamente desactualizado.",
            "Que el usuario pierda permiso para usar aplicaciones de red.",
            "Que la documentacion oficial deje de ser valida."
          ],
          answer: 0,
          explanation: "El capitulo de requisitos advierte justo eso: un sintoma mal interpretado puede llevar a una solucion tecnicamente correcta pero inutil."
        },
        {
          tag: "Capitulo 2",
          prompt: "¿Cual de estas opciones representa mejor una necesidad real que una simple peticion tecnica?",
          options: [
            "Comprar otro servidor de inmediato para la web corporativa.",
            "Garantizar que el sitio este disponible para clientes externos en horario comercial con tiempo minimo de recuperacion.",
            "Instalar mas memoria RAM en todos los equipos de la oficina.",
            "Mover todos los servicios a una distribucion distinta sin revisar impacto."
          ],
          answer: 1,
          explanation: "Una necesidad real describe el resultado esperado y su prioridad; una peticion tecnica ya presupone la solucion."
        },
        {
          tag: "Capitulo 2",
          prompt: "Si la direccion exige alta disponibilidad pero no define tiempos aceptables de caida ni servicios prioritarios, ¿que falta todavia para decidir bien?",
          options: [
            "Solo falta elegir el proveedor de hardware mas conocido.",
            "Faltan criterios concretos de exito, prioridad y recuperacion para traducir el objetivo en decisiones tecnicas.",
            "Falta instalar Linux en estaciones de trabajo de oficina.",
            "Falta nombrar un operador para que el analisis deje de ser necesario."
          ],
          answer: 1,
          explanation: "Sin criterios medibles de servicio, disponibilidad y prioridad no puede derivarse una arquitectura o un plan coherente."
        },
        {
          tag: "Capitulo 1",
          prompt: "¿Que relacion correcta plantea el texto entre conocer el negocio y tomar decisiones tecnicas?",
          options: [
            "La tecnica va primero y el contexto del negocio solo importa al final.",
            "Las decisiones tecnicas deben alinearse con impacto, prioridades y objetivos reales del negocio.",
            "El negocio solo influye en compras de hardware, no en operacion diaria.",
            "Conocer el negocio es util solo en proyectos grandes, no en solicitudes cotidianas."
          ],
          answer: 1,
          explanation: "El texto insiste en que el administrador traduce normas y objetivos de negocio en acciones tecnicas concretas."
        },
        {
          tag: "Conclusion",
          prompt: "¿Que enfoque demuestra mejor que un administrador entendio tanto la primera regla como el analisis de requisitos?",
          options: [
            "Aplicar siempre la misma solucion tecnica para acelerar la respuesta.",
            "Priorizar el acceso a servicios criticos, medir impacto y elegir soluciones segun necesidades reales.",
            "Responder primero a quien reclama con mas insistencia, aunque el servicio no sea esencial.",
            "Delegar todas las decisiones complejas hasta que el problema crezca lo suficiente."
          ],
          answer: 1,
          explanation: "La combinacion correcta es comprender necesidades, priorizar impacto y sostener el acceso a los recursos realmente importantes."
        }
      ],
      commands: [
        {
          tag: "Directorios",
          prompt: "¿Que comando muestra la ruta del directorio actual?",
          options: [
            "<code>pwd</code>",
            "<code>ps</code>",
            "<code>grep</code>",
            "<code>mv</code>"
          ],
          answer: 0,
          explanation: "<code>pwd</code> muestra el directorio de trabajo actual."
        },
        {
          tag: "Archivos",
          prompt: "¿Que comando lista archivos, incluyendo ocultos, con formato detallado?",
          options: [
            "<code>ls -la</code>",
            "<code>cat -r</code>",
            "<code>pwd -a</code>",
            "<code>man ls -h</code>"
          ],
          answer: 0,
          explanation: "<code>ls -la</code> muestra archivos ocultos y detalles en formato largo."
        },
        {
          tag: "Directorios",
          prompt: "Si quieres cambiarte al directorio <code>/var/log</code>, ¿que comando usarias?",
          options: [
            "<code>mv /var/log</code>",
            "<code>cd /var/log</code>",
            "<code>ls /var/log</code>",
            "<code>pwd /var/log</code>"
          ],
          answer: 1,
          explanation: "<code>cd</code> sirve para cambiar de directorio."
        },
        {
          tag: "Copias",
          prompt: "¿Que comando copia un archivo llamado <code>datos.txt</code> a <code>copia.txt</code>?",
          options: [
            "<code>cp datos.txt copia.txt</code>",
            "<code>mv datos.txt copia.txt</code>",
            "<code>cat datos.txt > copia.txt</code>",
            "<code>mkdir datos.txt copia.txt</code>"
          ],
          answer: 0,
          explanation: "<code>cp origen destino</code> crea una copia del archivo."
        },
        {
          tag: "Archivos",
          prompt: "¿Que comando mueve o renombra un archivo?",
          options: [
            "<code>mv</code>",
            "<code>grep</code>",
            "<code>chmod</code>",
            "<code>pwd</code>"
          ],
          answer: 0,
          explanation: "<code>mv</code> se usa tanto para mover como para renombrar."
        },
        {
          tag: "Borrado",
          prompt: "¿Que hace el comando <code>rm -r carpeta/</code>?",
          options: [
            "Renombra la carpeta de forma recursiva.",
            "Copia la carpeta y su contenido.",
            "Elimina la carpeta y su contenido de forma recursiva.",
            "Muestra la ruta de la carpeta."
          ],
          answer: 2,
          explanation: "<code>rm -r</code> borra directorios y su contenido recursivamente."
        },
        {
          tag: "Directorios",
          prompt: "¿Que comando crea una ruta completa como <code>/srv/web/app</code> aunque falten directorios intermedios?",
          options: [
            "<code>mkdir -p /srv/web/app</code>",
            "<code>touch -p /srv/web/app</code>",
            "<code>cp -p /srv/web/app</code>",
            "<code>du -p /srv/web/app</code>"
          ],
          answer: 0,
          explanation: "La opcion <code>-p</code> de <code>mkdir</code> crea directorios intermedios si no existen."
        },
        {
          tag: "Lectura",
          prompt: "¿Que comando muestra el contenido de un archivo de texto en pantalla?",
          options: [
            "<code>cat /etc/hosts</code>",
            "<code>mv /etc/hosts</code>",
            "<code>pwd /etc/hosts</code>",
            "<code>mkdir /etc/hosts</code>"
          ],
          answer: 0,
          explanation: "<code>cat</code> imprime el contenido de un archivo en la salida estandar."
        },
        {
          tag: "Busqueda",
          prompt: "Si quieres buscar la palabra error dentro de un archivo de log, ¿que comando encaja mejor?",
          options: [
            "<code>grep \"error\" /var/log/syslog</code>",
            "<code>pwd error /var/log/syslog</code>",
            "<code>mv error /var/log/syslog</code>",
            "<code>chmod error /var/log/syslog</code>"
          ],
          answer: 0,
          explanation: "<code>grep</code> busca patrones de texto dentro de archivos."
        },
        {
          tag: "Permisos",
          prompt: "¿Que suele expresar el comando <code>chmod 644 archivo.txt</code>?",
          options: [
            "Cambiar el propietario del archivo.",
            "Eliminar el archivo de forma segura.",
            "Modificar los permisos del archivo.",
            "Buscar el archivo por nombre."
          ],
          answer: 2,
          explanation: "<code>chmod</code> modifica los permisos de acceso a un archivo o directorio."
        },
        {
          tag: "Propietarios",
          prompt: "¿Que hace <code>chown ana:ops respaldo.tar</code>?",
          options: [
            "Cambia propietario y grupo del archivo.",
            "Comprime el archivo con tar.",
            "Cambia sus permisos a solo lectura.",
            "Muestra el historial del archivo."
          ],
          answer: 0,
          explanation: "<code>chown usuario:grupo archivo</code> reasigna propietario y grupo."
        },
        {
          tag: "Procesos",
          prompt: "¿Que comando muestra una lista amplia de procesos en ejecucion?",
          options: [
            "<code>ps aux</code>",
            "<code>du -sh</code>",
            "<code>mkdir aux</code>",
            "<code>cp aux</code>"
          ],
          answer: 0,
          explanation: "<code>ps aux</code> lista procesos del sistema con bastante detalle."
        },
        {
          tag: "Procesos",
          prompt: "¿Que comando suele utilizarse para observar procesos y consumo de recursos en tiempo real?",
          options: [
            "<code>top</code>",
            "<code>find</code>",
            "<code>tar</code>",
            "<code>touch</code>"
          ],
          answer: 0,
          explanation: "<code>top</code> muestra procesos en tiempo real y su consumo."
        },
        {
          tag: "Disco",
          prompt: "¿Que comando muestra el espacio usado y disponible de los sistemas de archivos en formato legible?",
          options: [
            "<code>df -h</code>",
            "<code>du -h</code>",
            "<code>ps -h</code>",
            "<code>ls -h</code>"
          ],
          answer: 0,
          explanation: "<code>df -h</code> muestra espacio libre y usado por sistema de archivos."
        },
        {
          tag: "Disco",
          prompt: "Si quieres conocer el tamaño total de un directorio de forma resumida, ¿que comando elegirias?",
          options: [
            "<code>du -sh /home/ian</code>",
            "<code>df -sh /home/ian</code>",
            "<code>ps -sh /home/ian</code>",
            "<code>man /home/ian</code>"
          ],
          answer: 0,
          explanation: "<code>du -sh</code> calcula el tamaño total de un directorio de forma resumida y legible."
        },
        {
          tag: "Servicios",
          prompt: "¿Que comando consultarias para ver el estado de un servicio gestionado por systemd, por ejemplo SSH?",
          options: [
            "<code>systemctl status ssh</code>",
            "<code>statusctl ssh</code>",
            "<code>service ssh grep</code>",
            "<code>journalctl ssh status</code>"
          ],
          answer: 0,
          explanation: "<code>systemctl status nombre-servicio</code> muestra el estado del servicio."
        },
        {
          tag: "Logs",
          prompt: "¿Que comando encaja mejor para revisar los registros de un servicio como Nginx con systemd?",
          options: [
            "<code>journalctl -u nginx</code>",
            "<code>grep nginx top</code>",
            "<code>systemctl -u nginx</code>",
            "<code>catctl nginx</code>"
          ],
          answer: 0,
          explanation: "<code>journalctl -u servicio</code> filtra el journal por unidad o servicio."
        },
        {
          tag: "Documentacion",
          prompt: "Si quieres abrir la ayuda manual de un comando como tar, ¿que usarias?",
          options: [
            "<code>man tar</code>",
            "<code>help tar.gz</code>",
            "<code>grep tar</code>",
            "<code>journalctl tar</code>"
          ],
          answer: 0,
          explanation: "<code>man</code> abre la documentacion manual de un comando."
        },
        {
          tag: "Busqueda",
          prompt: "¿Que comando buscaria archivos <code>.txt</code> dentro de <code>/home</code>?",
          options: [
            "<code>find /home -name \"*.txt\"</code>",
            "<code>grep /home *.txt</code>",
            "<code>du /home *.txt</code>",
            "<code>ps /home *.txt</code>"
          ],
          answer: 0,
          explanation: "<code>find</code> sirve para localizar archivos y directorios segun condiciones."
        },
        {
          tag: "Copias",
          prompt: "¿Que comando crea un archivo comprimido <code>backup.tar.gz</code> a partir de una carpeta?",
          options: [
            "<code>tar -czf backup.tar.gz carpeta/</code>",
            "<code>gzip backup.tar.gz carpeta/</code>",
            "<code>cp -czf backup.tar.gz carpeta/</code>",
            "<code>mv backup.tar.gz carpeta/</code>"
          ],
          answer: 0,
          explanation: "<code>tar -czf</code> crea un tar comprimido en formato gzip."
        },
        {
          tag: "Redirecciones",
          prompt: "¿Que hace la redireccion <code>&gt;</code> en un comando como <code>echo \"hola\" &gt; saludo.txt</code>?",
          options: [
            "Muestra el historial del archivo.",
            "Redirige la salida y escribe o sobreescribe el archivo destino.",
            "Busca la palabra hola dentro del archivo.",
            "Comprime el archivo saludo.txt."
          ],
          answer: 1,
          explanation: "La redireccion <code>&gt;</code> envia la salida a un archivo, creando o sobreescribiendo su contenido."
        },
        {
          tag: "Redirecciones",
          prompt: "¿Que hace la redireccion <code>&gt;&gt;</code> en Linux?",
          options: [
            "Agrega la salida al final de un archivo existente.",
            "Borra el archivo antes de escribir.",
            "Mueve el archivo a otro directorio.",
            "Muestra las ultimas lineas del archivo."
          ],
          answer: 0,
          explanation: "<code>&gt;&gt;</code> añade la salida al final del archivo sin reemplazar lo que ya estaba."
        },
        {
          tag: "Pipes",
          prompt: "¿Que funcion cumple el simbolo <code>|</code> en GNU/Linux?",
          options: [
            "Une la salida de un comando con la entrada del siguiente.",
            "Borra dos archivos a la vez.",
            "Crea directorios en paralelo.",
            "Muestra permisos detallados."
          ],
          answer: 0,
          explanation: "La tuberia o pipe conecta la salida estandar de un comando con la entrada del siguiente."
        },
        {
          tag: "Lectura",
          prompt: "¿Que comando suele mostrar las primeras lineas de un archivo?",
          options: [
            "<code>head</code>",
            "<code>tail</code>",
            "<code>top</code>",
            "<code>sort</code>"
          ],
          answer: 0,
          explanation: "<code>head</code> permite ver el inicio de un archivo."
        },
        {
          tag: "Lectura",
          prompt: "¿Que comando suele mostrar las ultimas lineas de un archivo de log?",
          options: [
            "<code>tail</code>",
            "<code>head</code>",
            "<code>find</code>",
            "<code>pwd</code>"
          ],
          answer: 0,
          explanation: "<code>tail</code> es util para revisar las lineas finales de un log o archivo en crecimiento."
        },
        {
          tag: "Campos",
          prompt: "¿Que hace un comando como <code>cut -d \",\" -f1 datos/usuarios.txt</code>?",
          options: [
            "Comprime el archivo usuarios.txt.",
            "Extrae el primer campo usando la coma como delimitador.",
            "Ordena alfabeticamente el archivo completo.",
            "Cambia los permisos del primer campo."
          ],
          answer: 1,
          explanation: "<code>cut</code> permite extraer columnas; aqui toma el campo 1 delimitado por comas."
        },
        {
          tag: "Conteo",
          prompt: "¿Que suele hacer un comando como <code>wc -l archivo.txt</code>?",
          options: [
            "Cuenta lineas del archivo.",
            "Muestra el tamaño del disco.",
            "Ejecuta el archivo como script.",
            "Cambia el propietario del archivo."
          ],
          answer: 0,
          explanation: "<code>wc -l</code> cuenta cuantas lineas contiene un archivo o la salida recibida."
        },
        {
          tag: "Scripts",
          prompt: "¿Que suele indicar el comando <code>chmod +x script.sh</code>?",
          options: [
            "Que se agrega permiso de ejecucion al script.",
            "Que el script sera comprimido.",
            "Que se cambia el grupo del script.",
            "Que se movera a otro directorio."
          ],
          answer: 0,
          explanation: "<code>chmod +x</code> habilita el permiso de ejecucion sobre el archivo indicado."
        },
        {
          tag: "Scripts",
          prompt: "Si un script esta en el directorio actual y ya tiene permiso de ejecucion, ¿como suele ejecutarse?",
          options: [
            "<code>./script.sh</code>",
            "<code>mv script.sh</code>",
            "<code>pwd script.sh</code>",
            "<code>ls ./script.sh</code>"
          ],
          answer: 0,
          explanation: "La forma comun de ejecutar un script en el directorio actual es <code>./script.sh</code>."
        },
        {
          tag: "Filtros",
          prompt: "En el material de comandos aparece un ejemplo con <code>grep \"Chile\" datos/usuarios.txt &gt; procesados/chilenos.txt</code>. ¿Que logra?",
          options: [
            "Busca Chile y guarda las coincidencias en otro archivo.",
            "Cambia el nombre del archivo usuarios.txt a chilenos.txt.",
            "Elimina las lineas que contienen Chile.",
            "Mueve todo el directorio procesados a datos."
          ],
          answer: 0,
          explanation: "Ese ejemplo filtra lineas con la palabra Chile y redirige el resultado al archivo de salida."
        },
        {
          tag: "Directorios",
          prompt: "En el material de comandos se usa <code>mkdir -p laboratorio_avanzado/{datos,procesados,logs}</code>. ¿Que idea representa mejor?",
          options: [
            "Crear varias carpetas de trabajo en una sola instruccion.",
            "Comprimir tres carpetas dentro de otra.",
            "Borrar toda la estructura del laboratorio.",
            "Mover datos a una carpeta de logs."
          ],
          answer: 0,
          explanation: "Ese ejemplo crea de una vez una estructura de directorios para organizar datos, resultados y logs."
        },
        {
          tag: "Edicion",
          prompt: "¿Que comando del material se utiliza para editar un archivo directamente desde la terminal?",
          options: [
            "<code>nano notas.txt</code>",
            "<code>uniq notas.txt</code>",
            "<code>wc -l notas.txt</code>",
            "<code>pwd notas.txt</code>"
          ],
          answer: 0,
          explanation: "<code>nano</code> es un editor de texto de terminal y en el material aparece como herramienta para modificar archivos."
        },
        {
          tag: "Lectura",
          prompt: "¿Que comando del material conviene para revisar un archivo largo pagina por pagina sin imprimirlo completo de una vez?",
          options: [
            "<code>less usuarios.txt</code>",
            "<code>mv usuarios.txt</code>",
            "<code>rmdir usuarios.txt</code>",
            "<code>cp usuarios.txt</code>"
          ],
          answer: 0,
          explanation: "<code>less</code> permite inspeccionar archivos largos de forma mas comoda que <code>cat</code>."
        },
        {
          tag: "Directorios",
          prompt: "¿Que comando elimina un directorio vacio, segun los comandos vistos en el material?",
          options: [
            "<code>rmdir temporal</code>",
            "<code>rm -r temporal</code>",
            "<code>tail temporal</code>",
            "<code>uniq temporal</code>"
          ],
          answer: 0,
          explanation: "<code>rmdir</code> elimina directorios vacios y es uno de los comandos confirmados por el material."
        },
        {
          tag: "Ordenamiento",
          prompt: "Si quieres ordenar alfabeticamente un listado de nombres, ¿que comando del material corresponde?",
          options: [
            "<code>sort nombres.txt</code>",
            "<code>chmod nombres.txt</code>",
            "<code>head nombres.txt</code>",
            "<code>cd nombres.txt</code>"
          ],
          answer: 0,
          explanation: "<code>sort</code> ordena lineas y en el material aparece como herramienta para procesar archivos de texto."
        },
        {
          tag: "Ordenamiento",
          prompt: "¿Que comando del material elimina duplicados contiguos despues de ordenar un archivo?",
          options: [
            "<code>uniq ordenados.txt</code>",
            "<code>mv ordenados.txt</code>",
            "<code>cat ordenados.txt</code>",
            "<code>pwd ordenados.txt</code>"
          ],
          answer: 0,
          explanation: "<code>uniq</code> se usa para quitar duplicados contiguos y normalmente se combina con <code>sort</code>."
        },
        {
          tag: "Procesamiento",
          prompt: "¿Que comando del material sirve para procesar columnas usando reglas mas flexibles que <code>cut</code>?",
          options: [
            "<code>awk -F \",\" '{print $3}' datos/usuarios.txt</code>",
            "<code>mv -F \",\" datos/usuarios.txt</code>",
            "<code>pwd -F \",\" datos/usuarios.txt</code>",
            "<code>cat -F \",\" datos/usuarios.txt</code>"
          ],
          answer: 0,
          explanation: "<code>awk</code> permite trabajar con campos y reglas de procesamiento mas expresivas."
        },
        {
          tag: "Scripts",
          prompt: "¿Que linea del material indica que un script debe ejecutarse con Bash?",
          options: [
            "<code>#!/bin/bash</code>",
            "<code>#/bin/script</code>",
            "<code>#!/nano/bash</code>",
            "<code>bash://inicio</code>"
          ],
          answer: 0,
          explanation: "La cabecera <code>#!/bin/bash</code> es el shebang que define Bash como interprete del script."
        },
        {
          tag: "Redirecciones",
          prompt: "¿Que operador del material sirve para redirigir errores a un archivo?",
          options: [
            "<code>2&gt;</code>",
            "<code>&gt;&gt;</code>",
            "<code>|</code>",
            "<code>-f</code>"
          ],
          answer: 0,
          explanation: "<code>2&gt;</code> redirige la salida de error estandar a un archivo."
        },
        {
          tag: "Pipes",
          prompt: "Necesitas contar cuantas lineas del archivo mencionan Chile sin crear archivos intermedios. ¿Que opcion es la mas directa?",
          options: [
            "<code>grep \"Chile\" datos/usuarios.txt | wc -l</code>",
            "<code>grep \"Chile\" datos/usuarios.txt &gt; wc -l</code>",
            "<code>wc -l | grep \"Chile\" datos/usuarios.txt</code>",
            "<code>sort datos/usuarios.txt | uniq Chile</code>"
          ],
          answer: 0,
          explanation: "La pipe entrega la salida filtrada de <code>grep</code> a <code>wc -l</code> para contar coincidencias sin crear archivos temporales."
        },
        {
          tag: "Procesamiento",
          prompt: "Quieres obtener la tercera columna de un CSV y quedarte solo con los roles unicos ordenados. ¿Que tuberia encaja mejor con el material?",
          options: [
            "<code>awk -F \",\" '{print $3}' datos/usuarios.txt | sort | uniq</code>",
            "<code>uniq datos/usuarios.txt | awk -F \",\" '{print $3}' | sort</code>",
            "<code>cut -d \",\" -f3 datos/usuarios.txt | uniq | pwd</code>",
            "<code>head -n 3 datos/usuarios.txt | sort | awk</code>"
          ],
          answer: 0,
          explanation: "Primero se extrae el campo, luego se ordena y al final se eliminan duplicados contiguos con <code>uniq</code>."
        },
        {
          tag: "Redirecciones",
          prompt: "Si <code>bitacora.txt</code> ya contiene informacion y quieres agregar una linea nueva al final sin borrar lo anterior, ¿que opcion corresponde?",
          options: [
            "<code>echo \"Nuevo evento\" &gt;&gt; bitacora.txt</code>",
            "<code>echo \"Nuevo evento\" &gt; bitacora.txt</code>",
            "<code>echo \"Nuevo evento\" | bitacora.txt</code>",
            "<code>echo \"Nuevo evento\" 2&gt; bitacora.txt</code>"
          ],
          answer: 0,
          explanation: "<code>&gt;&gt;</code> agrega contenido al final; <code>&gt;</code> lo reemplazaria."
        },
        {
          tag: "Redirecciones",
          prompt: "Quieres reemplazar por completo el contenido de <code>reporte.txt</code> con una nueva linea generada desde consola. ¿Que instruccion encaja mejor?",
          options: [
            "<code>echo \"Reporte limpio\" &gt; reporte.txt</code>",
            "<code>echo \"Reporte limpio\" &gt;&gt; reporte.txt</code>",
            "<code>echo \"Reporte limpio\" | reporte.txt</code>",
            "<code>echo \"Reporte limpio\" 2&gt; reporte.txt</code>"
          ],
          answer: 0,
          explanation: "<code>&gt;</code> crea o sobreescribe el archivo con la salida producida por <code>echo</code>."
        },
        {
          tag: "Directorios",
          prompt: "Necesitas preparar en una sola orden la estructura <code>datos</code>, <code>procesados</code> y <code>logs</code> dentro de <code>laboratorio_avanzado</code>. ¿Que comando coincide con el material?",
          options: [
            "<code>mkdir -p laboratorio_avanzado/{datos,procesados,logs}</code>",
            "<code>mkdir laboratorio_avanzado datos procesados logs</code>",
            "<code>cp -p laboratorio_avanzado/{datos,procesados,logs}</code>",
            "<code>rmdir -p laboratorio_avanzado/{datos,procesados,logs}</code>"
          ],
          answer: 0,
          explanation: "Ese ejemplo del material crea la estructura completa de trabajo en una sola instruccion."
        },
        {
          tag: "Lectura",
          prompt: "Tienes un archivo largo y primero quieres ver su inicio rapido, luego navegarlo con mas control. ¿Que secuencia tiene mas sentido con los comandos del material?",
          options: [
            "<code>head -n 5 usuarios.txt</code> y despues <code>less usuarios.txt</code>",
            "<code>tail -n 5 usuarios.txt</code> y despues <code>pwd usuarios.txt</code>",
            "<code>nano usuarios.txt</code> y despues <code>chmod usuarios.txt</code>",
            "<code>uniq usuarios.txt</code> y despues <code>mkdir usuarios.txt</code>"
          ],
          answer: 0,
          explanation: "<code>head</code> da una vista rapida del inicio y <code>less</code> permite revisar el archivo largo con desplazamiento."
        },
        {
          tag: "Filtros",
          prompt: "Necesitas guardar solo las lineas de Chile en un archivo procesado y luego revisar el resultado en pantalla. ¿Que secuencia encaja mejor?",
          options: [
            "<code>grep \"Chile\" datos/usuarios.txt &gt; procesados/chilenos.txt</code> y despues <code>cat procesados/chilenos.txt</code>",
            "<code>cat datos/usuarios.txt &gt; grep \"Chile\"</code> y despues <code>pwd procesados/chilenos.txt</code>",
            "<code>sort datos/usuarios.txt</code> y despues <code>grep procesados/chilenos.txt</code>",
            "<code>mkdir procesados/chilenos.txt</code> y despues <code>tail Chile</code>"
          ],
          answer: 0,
          explanation: "Primero se filtra y redirige la salida; despues se puede revisar el archivo generado con <code>cat</code>."
        },
        {
          tag: "Procesamiento",
          prompt: "¿Que flujo sirve para obtener la segunda columna de un CSV, ordenarla y eliminar duplicados?",
          options: [
            "<code>cut -d \",\" -f2 datos/usuarios.txt | sort | uniq</code>",
            "<code>uniq datos/usuarios.txt | cut -d \",\" -f2 | sort</code>",
            "<code>awk datos/usuarios.txt | pwd | uniq</code>",
            "<code>tail -n 2 datos/usuarios.txt | sort | chmod</code>"
          ],
          answer: 0,
          explanation: "Se extrae primero el campo deseado, luego se ordena y finalmente se limpian duplicados contiguos."
        },
        {
          tag: "Procesamiento",
          prompt: "¿En que situacion conviene preferir <code>awk</code> sobre <code>cut</code> segun la logica del material?",
          options: [
            "Cuando solo quieres abrir un archivo para editarlo manualmente.",
            "Cuando necesitas reglas mas flexibles para seleccionar e imprimir campos o transformar la salida.",
            "Cuando el objetivo es dar permiso de ejecucion a un script.",
            "Cuando solo necesitas cambiar de directorio."
          ],
          answer: 1,
          explanation: "El propio material presenta <code>awk</code> como una herramienta mas flexible que <code>cut</code> para procesar campos."
        },
        {
          tag: "Scripts",
          prompt: "Quieres dejar listo un script de Bash y poder ejecutarlo desde el directorio actual. ¿Que opcion resume el proceso correcto?",
          options: [
            "Agregar <code>#!/bin/bash</code>, ejecutar <code>chmod +x reporte.sh</code> y lanzarlo como <code>./reporte.sh</code>.",
            "Abrirlo con <code>less</code>, guardarlo con <code>&gt;</code> y ejecutarlo con <code>pwd reporte.sh</code>.",
            "Ordenarlo con <code>sort</code>, quitar duplicados con <code>uniq</code> y luego moverlo con <code>mv</code>.",
            "Usar <code>tail</code> para activar Bash y <code>cat</code> para dar permisos de ejecucion."
          ],
          answer: 0,
          explanation: "El material relaciona el shebang, el permiso de ejecucion y la ejecucion directa del script desde la ruta actual."
        },
        {
          tag: "Errores",
          prompt: "Necesitas capturar el error de un <code>ls</code> fallido en un archivo para revisarlo despues. ¿Que comando del material corresponde?",
          options: [
            "<code>ls carpeta_que_no_existe 2&gt; errores.txt</code>",
            "<code>ls carpeta_que_no_existe &gt;&gt; errores.txt</code>",
            "<code>ls carpeta_que_no_existe | errores.txt</code>",
            "<code>ls carpeta_que_no_existe -f errores.txt</code>"
          ],
          answer: 0,
          explanation: "<code>2&gt;</code> envia la salida de error estandar al archivo especificado."
        },
        {
          tag: "Lectura",
          prompt: "Si quieres comprobar rapidamente si un archivo generado tiene el encabezado esperado, ¿que comando del material encaja mejor?",
          options: [
            "<code>head -n 2 procesados/reporte.txt</code>",
            "<code>tail -n 2 procesados/reporte.txt</code>",
            "<code>chmod -n 2 procesados/reporte.txt</code>",
            "<code>mkdir -n 2 procesados/reporte.txt</code>"
          ],
          answer: 0,
          explanation: "Para validar el comienzo de un archivo, <code>head</code> es la opcion mas directa del material."
        }
      ]
    };

    const referenceIndex = [
      {
        sourceKey: "resumen",
        sourceLabel: "material/resumen-estudio.txt",
        title: "Idea central del material",
        text: "La mision principal del administrador es mantener el acceso a los recursos del sistema y hacerlo alineado con los requisitos del negocio y de los usuarios."
      },
      {
        sourceKey: "resumen",
        sourceLabel: "material/resumen-estudio.txt",
        title: "Primera regla y disponibilidad",
        text: "La primera regla consiste en proporcionar y mantener acceso a archivos, aplicaciones, perifericos, ancho de banda, ciclos de CPU, memoria y almacenamiento, incluso frente a fallos o crecimiento de demanda."
      },
      {
        sourceKey: "resumen",
        sourceLabel: "material/resumen-estudio.txt",
        title: "Analisis de requisitos",
        text: "El analisis de requisitos traduce resultados deseados en especificaciones concretas. La direccion fija normas y el administrador las convierte en procedimientos, planes, recomendaciones y prioridades tecnicas."
      },
      {
        sourceKey: "resumen",
        sourceLabel: "material/resumen-estudio.txt",
        title: "Nivel de servicio y prioridades",
        text: "Un acuerdo de nivel de servicio ayuda a definir prioridades, aclarar responsabilidades y medir si el servicio funciona como se espera."
      },
      {
        sourceKey: "transcripcion",
        sourceLabel: "material/transcripcion-material.txt",
        title: "Paginas 1-2: primera regla",
        text: "La primera regla del administrador de sistemas consiste en proporcionar y mantener acceso a los recursos del sistema. El mantenimiento del acceso trasciende el mantenimiento del propio sistema."
      },
      {
        sourceKey: "transcripcion",
        sourceLabel: "material/transcripcion-material.txt",
        title: "Paginas 5-6: operador y administrador",
        text: "El operador sigue procedimientos escritos para copias de seguridad, altas de usuarios, restauracion de archivos y tareas rutinarias. El administrador crea esos procedimientos, controla el rendimiento, planifica ampliaciones y selecciona software y equipo."
      },
      {
        sourceKey: "transcripcion",
        sourceLabel: "material/transcripcion-material.txt",
        title: "Paginas 10-13: problema real y sintomas",
        text: "Un planteamiento elegante sobre el problema equivocado arroja una solucion equivocada. Los usuarios suelen plantear sintomas y el administrador debe descubrir la necesidad real."
      },
      {
        sourceKey: "transcripcion",
        sourceLabel: "material/transcripcion-material.txt",
        title: "Paginas 13-18: prioridades y autoridades",
        text: "Correo corporativo, DNS, encaminamiento basico y sistemas de transacciones suelen ser prioritarios. Tambien hay que identificar partes implicadas, lineas de autoridad y criterios de exito."
      },
      {
        sourceKey: "transcripcion",
        sourceLabel: "material/transcripcion-material.txt",
        title: "Paginas 20-21: actualizaciones y analisis operativo",
        text: "Toda actualizacion, expansion o nueva instalacion procede de algun requisito. El administrador puede mejorar procesos, automatizar tareas repetitivas y reducir trabajo manual."
      },
      {
        sourceKey: "comandosDoc",
        sourceLabel: "material/comandos-linux-practica.docx",
        title: "Creacion de estructuras de trabajo",
        text: "Ejemplo con mkdir -p laboratorio_avanzado/{datos,procesados,logs} para crear de una sola vez una estructura completa de directorios."
      },
      {
        sourceKey: "comandosDoc",
        sourceLabel: "material/comandos-linux-practica.docx",
        title: "Filtros y redirecciones",
        text: "Ejemplo con grep \"Chile\" datos/usuarios.txt > procesados/chilenos.txt para filtrar informacion y guardar la salida en un archivo nuevo."
      },
      {
        sourceKey: "comandosDoc",
        sourceLabel: "material/comandos-linux-practica.docx",
        title: "Extraccion de campos",
        text: "Uso de cut -d \",\" -f1 para extraer columnas o campos de archivos delimitados por comas."
      },
      {
        sourceKey: "claseDoc",
        sourceLabel: "material/semana-5-automatizacion-linux.docx",
        title: "Automatizacion en GNU/Linux",
        text: "Clase enfocada en automatizacion con comandos avanzados, pipes, redirecciones y scripts basicos dentro de GNU/Linux."
      },
      {
        sourceKey: "claseDoc",
        sourceLabel: "material/semana-5-automatizacion-linux.docx",
        title: "Comandos de lectura de archivos",
        text: "Se repasan comandos como cat, head y tail para ver archivos y logs, junto con tuberias para encadenar procesamiento."
      },
      {
        sourceKey: "claseDoc",
        sourceLabel: "material/semana-5-automatizacion-linux.docx",
        title: "Objetivo de aprendizaje",
        text: "Utilizar comandos avanzados, tuberias y scripts basicos para resolver tareas de trabajo en sistemas GNU/Linux."
      },
      {
        sourceKey: "claseDoc",
        sourceLabel: "material/semana-5-automatizacion-linux.docx",
        title: "Procesamiento de texto",
        text: "El material confirma comandos para procesar texto como sort, uniq, wc y awk, ademas de cut para trabajar con campos."
      },
      {
        sourceKey: "claseDoc",
        sourceLabel: "material/semana-5-automatizacion-linux.docx",
        title: "Edicion desde terminal",
        text: "Tambien aparecen nano para editar archivos, chmod para permisos y shebang #!/bin/bash para scripts de Bash."
      },
      {
        sourceKey: "claseDoc",
        sourceLabel: "material/semana-5-automatizacion-linux.docx",
        title: "Lectura y revision",
        text: "La lectura de archivos se cubre con cat, head, tail y less, mientras las redirecciones incluyen >, >> y 2>."
      }
    ];

    const kaliScenarios = [
      {
        id: "navigation",
        label: "Moverse",
        summary: "pwd, ls -la y cd",
        title: "Navegacion basica en Kali",
        description: "Revisar en que carpeta estas, listar archivos y entrar a otra ruta.",
        note: "Usa estos comandos cuando necesites ubicarte, ver archivos ocultos o cambiar de directorio.",
        lines: [
          { kind: "comment", text: "# Simulacion de terminal tipo Kali Linux" },
          { kind: "command", text: "kali@kali:~$ pwd" },
          { kind: "output", text: "/home/kali" },
          { kind: "command", text: "kali@kali:~$ ls -la" },
          { kind: "output", text: "drwxr-xr-x  7 kali kali 4096 abr 19 09:10 .\ndrwxr-xr-x  3 root root 4096 abr 19 08:40 ..\n-rw-r--r--  1 kali kali  220 abr 19 08:40 .bash_logout\n-rw-r--r--  1 kali kali 3526 abr 19 08:40 .bashrc\ndrwxr-xr-x  2 kali kali 4096 abr 19 09:10 Documentos" },
          { kind: "command", text: "kali@kali:~$ cd /var/log" },
          { kind: "command", text: "kali@kali:/var/log$ pwd" },
          { kind: "output", text: "/var/log" }
        ]
      },
      {
        id: "organize",
        label: "Organizar archivos",
        summary: "mkdir, cp, mv y rmdir",
        title: "Preparar y ordenar archivos",
        description: "Crear carpetas, copiar un archivo, moverlo y eliminar un directorio vacio al final.",
        note: "Este caso usa comandos del material para preparar una estructura simple de trabajo y dejarla ordenada.",
        lines: [
          { kind: "command", text: "kali@kali:~$ mkdir -p laboratorio/datos" },
          { kind: "command", text: "kali@kali:~$ cp usuarios.txt laboratorio/datos/usuarios.txt" },
          { kind: "command", text: "kali@kali:~$ mv laboratorio/datos/usuarios.txt laboratorio/usuarios-respaldo.txt" },
          { kind: "command", text: "kali@kali:~$ rmdir laboratorio/datos" },
          { kind: "command", text: "kali@kali:~$ ls -la laboratorio" },
          { kind: "output", text: "drwxr-xr-x 2 kali kali 4096 abr 19 09:18 .\ndrwxr-xr-x 7 kali kali 4096 abr 19 09:18 ..\n-rw-r--r-- 1 kali kali   64 abr 19 09:18 usuarios-respaldo.txt" }
        ]
      },
      {
        id: "reading",
        label: "Leer archivos",
        summary: "cat, head, tail y less",
        title: "Leer y revisar archivos largos",
        description: "Ver el archivo completo, revisar su inicio, su final y luego navegarlo de forma mas comoda.",
        note: "cat es directo; head y tail sirven para extremos; less ayuda a inspeccionar archivos largos con mas control.",
        lines: [
          { kind: "command", text: "kali@kali:~/documentos$ cat usuarios.txt" },
          { kind: "output", text: "ana,Chile,ops\nmarco,Peru,soporte\nsofia,Chile,desarrollo\nivan,Argentina,seguridad" },
          { kind: "command", text: "kali@kali:~/documentos$ head -n 2 usuarios.txt" },
          { kind: "output", text: "ana,Chile,ops\nmarco,Peru,soporte" },
          { kind: "command", text: "kali@kali:~/documentos$ tail -n 2 usuarios.txt" },
          { kind: "output", text: "sofia,Chile,desarrollo\nivan,Argentina,seguridad" },
          { kind: "command", text: "kali@kali:~/documentos$ less usuarios.txt" },
          { kind: "output", text: "usuarios.txt\nana,Chile,ops\nmarco,Peru,soporte\nsofia,Chile,desarrollo\nivan,Argentina,seguridad\n(END)" }
        ]
      },
      {
        id: "filtering",
        label: "Filtrar y contar",
        summary: "grep, pipes y wc",
        title: "Filtrar datos y contar resultados",
        description: "Buscar coincidencias dentro de un archivo y medir cuantas lineas cumplen la condicion.",
        note: "La tuberia | conecta la salida de grep con wc -l para obtener un conteo directo.",
        lines: [
          { kind: "command", text: "kali@kali:~/laboratorio$ grep \"Chile\" datos/usuarios.txt | wc -l" },
          { kind: "output", text: "2" },
          { kind: "command", text: "kali@kali:~/laboratorio$ grep \"Chile\" datos/usuarios.txt > procesados/chilenos.txt" },
          { kind: "command", text: "kali@kali:~/laboratorio$ cat procesados/chilenos.txt" },
          { kind: "output", text: "ana,Chile,ops\nsofia,Chile,desarrollo" }
        ]
      },
      {
        id: "processing",
        label: "Procesar columnas",
        summary: "cut, sort, uniq y awk",
        title: "Extraer y ordenar campos",
        description: "Trabajar columnas de un archivo delimitado y ordenar resultados para resumir informacion.",
        note: "cut y awk trabajan por campos; sort y uniq ayudan a resumir listas cuando hay valores repetidos.",
        lines: [
          { kind: "command", text: "kali@kali:~/laboratorio$ cut -d \",\" -f1 datos/usuarios.txt > nombres.txt" },
          { kind: "command", text: "kali@kali:~/laboratorio$ sort nombres.txt > nombres-ordenados.txt" },
          { kind: "command", text: "kali@kali:~/laboratorio$ uniq nombres-ordenados.txt" },
          { kind: "output", text: "ana\nivan\nmarco\nsofia" },
          { kind: "command", text: "kali@kali:~/laboratorio$ awk -F \",\" '{print $3}' datos/usuarios.txt" },
          { kind: "output", text: "ops\nsoporte\ndesarrollo\nseguridad" }
        ]
      },
      {
        id: "editing",
        label: "Editar notas",
        summary: "nano, echo, > y >>",
        title: "Editar y completar archivos desde terminal",
        description: "Abrir un archivo con nano y luego crear o ampliar contenido usando redirecciones.",
        note: "nano se usa para editar; echo con > crea o reemplaza, y echo con >> agrega lineas al final.",
        lines: [
          { kind: "command", text: "kali@kali:~/notas$ nano bitacora.txt" },
          { kind: "output", text: "GNU nano 7.2                                bitacora.txt\n\nInicio de bitacora\n^G Ayuda  ^O Guardar  ^X Salir" },
          { kind: "command", text: "kali@kali:~/notas$ echo \"Inicio de bitacora\" > bitacora.txt" },
          { kind: "command", text: "kali@kali:~/notas$ echo \"Segundo evento\" >> bitacora.txt" },
          { kind: "command", text: "kali@kali:~/notas$ cat bitacora.txt" },
          { kind: "output", text: "Inicio de bitacora\nSegundo evento" }
        ]
      },
      {
        id: "scripts",
        label: "Scripts",
        summary: "nano, shebang y chmod",
        title: "Preparar un script de Bash",
        description: "Crear un script, definir el interprete con shebang y dejar el archivo con permiso de ejecucion.",
        note: "El material menciona scripts basicos, el shebang #!/bin/bash y chmod para permisos.",
        lines: [
          { kind: "command", text: "kali@kali:~/scripts$ nano reporte.sh" },
          { kind: "output", text: "#!/bin/bash\necho \"Reporte generado\"" },
          { kind: "command", text: "kali@kali:~/scripts$ chmod +x reporte.sh" },
          { kind: "command", text: "kali@kali:~/scripts$ cat reporte.sh" },
          { kind: "output", text: "#!/bin/bash\necho \"Reporte generado\"" }
        ]
      },
      {
        id: "errors",
        label: "Capturar errores",
        summary: "ls y 2>",
        title: "Redirigir errores a un archivo",
        description: "Provocar un error de listado y guardarlo en un archivo usando la redireccion de errores.",
        note: "El operador 2> envia la salida de error estandar a un archivo en lugar de mostrarla en pantalla.",
        lines: [
          { kind: "command", text: "kali@kali:~/laboratorio$ ls carpeta_que_no_existe 2> errores.txt" },
          { kind: "command", text: "kali@kali:~/laboratorio$ cat errores.txt" },
          { kind: "output", text: "ls: cannot access 'carpeta_que_no_existe': No such file or directory" }
        ]
      }
    ];

    const practicalChallengeBank = [
      {
        tag: "Navegacion",
        prompt: "Quieres saber en que carpeta estas trabajando antes de tocar archivos. ¿Que opcion corresponde?",
        options: [
          "<code>pwd</code>",
          "<code>ls -la</code>",
          "<code>cd /var/log</code>",
          "<code>cat archivo.txt</code>"
        ],
        answer: 0,
        explanation: "<code>pwd</code> imprime la ruta actual y te orienta antes de seguir."
      },
      {
        tag: "Listado",
        prompt: "Necesitas ver archivos ocultos y detalles como permisos y fechas. ¿Que comando eliges?",
        options: [
          "<code>ls -la</code>",
          "<code>head -n 2 archivo.txt</code>",
          "<code>uniq archivo.txt</code>",
          "<code>nano archivo.txt</code>"
        ],
        answer: 0,
        explanation: "<code>ls -la</code> muestra archivos ocultos y un listado detallado."
      },
      {
        tag: "Archivos",
        prompt: "Quieres copiar <code>usuarios.txt</code> a una carpeta de respaldo sin borrar el original. ¿Que opcion corresponde?",
        options: [
          "<code>cp usuarios.txt respaldo/usuarios.txt</code>",
          "<code>mv usuarios.txt respaldo/usuarios.txt</code>",
          "<code>rmdir respaldo/usuarios.txt</code>",
          "<code>cut -d \",\" -f1 usuarios.txt</code>"
        ],
        answer: 0,
        explanation: "<code>cp</code> copia el archivo; <code>mv</code> lo moveria o renombraria."
      },
      {
        tag: "Archivos",
        prompt: "Quieres renombrar o mover un archivo a otra ubicacion. ¿Que comando del material usas?",
        options: [
          "<code>mv origen.txt destino.txt</code>",
          "<code>cp origen.txt destino.txt</code>",
          "<code>pwd destino.txt</code>",
          "<code>grep destino.txt</code>"
        ],
        answer: 0,
        explanation: "<code>mv</code> sirve para mover o renombrar archivos."
      },
      {
        tag: "Directorios",
        prompt: "La carpeta <code>temporal</code> ya esta vacia y quieres borrarla. ¿Que opcion corresponde?",
        options: [
          "<code>rmdir temporal</code>",
          "<code>tail temporal</code>",
          "<code>chmod temporal</code>",
          "<code>awk temporal</code>"
        ],
        answer: 0,
        explanation: "<code>rmdir</code> elimina directorios vacios."
      },
      {
        tag: "Lectura",
        prompt: "Quieres revisar solo el inicio de un archivo largo. ¿Que comando del material es el adecuado?",
        options: [
          "<code>head -n 5 archivo.txt</code>",
          "<code>tail -n 5 archivo.txt</code>",
          "<code>less archivo.txt</code>",
          "<code>uniq archivo.txt</code>"
        ],
        answer: 0,
        explanation: "<code>head</code> muestra las primeras lineas."
      },
      {
        tag: "Lectura",
        prompt: "Quieres revisar el final de un log sin abrir el archivo completo. ¿Que comando corresponde?",
        options: [
          "<code>tail -n 10 auth.log</code>",
          "<code>head -n 10 auth.log</code>",
          "<code>cd auth.log</code>",
          "<code>sort auth.log</code>"
        ],
        answer: 0,
        explanation: "<code>tail</code> muestra las ultimas lineas y es muy util en logs."
      },
      {
        tag: "Lectura",
        prompt: "Quieres recorrer un archivo largo de manera mas comoda que con <code>cat</code>. ¿Que eliges?",
        options: [
          "<code>less usuarios.txt</code>",
          "<code>wc -l usuarios.txt</code>",
          "<code>chmod usuarios.txt</code>",
          "<code>mkdir usuarios.txt</code>"
        ],
        answer: 0,
        explanation: "<code>less</code> permite navegar archivos largos de forma interactiva."
      },
      {
        tag: "Filtros",
        prompt: "Quieres encontrar las lineas que contienen la palabra Chile. ¿Que comando es el correcto?",
        options: [
          "<code>grep \"Chile\" datos/usuarios.txt</code>",
          "<code>pwd \"Chile\" datos/usuarios.txt</code>",
          "<code>mv \"Chile\" datos/usuarios.txt</code>",
          "<code>chmod \"Chile\" datos/usuarios.txt</code>"
        ],
        answer: 0,
        explanation: "<code>grep</code> filtra lineas por patron."
      },
      {
        tag: "Campos",
        prompt: "Necesitas extraer solo la primera columna de un archivo separado por comas. ¿Que opcion coincide con el material?",
        options: [
          "<code>cut -d \",\" -f1 datos/usuarios.txt</code>",
          "<code>sort -d \",\" -f1 datos/usuarios.txt</code>",
          "<code>cd -d \",\" -f1 datos/usuarios.txt</code>",
          "<code>tail -d \",\" -f1 datos/usuarios.txt</code>"
        ],
        answer: 0,
        explanation: "<code>cut</code> usa delimitador y campo para extraer columnas."
      },
      {
        tag: "Ordenamiento",
        prompt: "Quieres ordenar alfabeticamente una lista de nombres. ¿Que comando del material corresponde?",
        options: [
          "<code>sort nombres.txt</code>",
          "<code>uniq nombres.txt</code>",
          "<code>awk nombres.txt</code>",
          "<code>nano nombres.txt</code>"
        ],
        answer: 0,
        explanation: "<code>sort</code> organiza lineas segun el orden indicado, por defecto alfabetico."
      },
      {
        tag: "Ordenamiento",
        prompt: "Despues de ordenar un archivo, quieres quitar duplicados consecutivos. ¿Que comando usas?",
        options: [
          "<code>uniq ordenados.txt</code>",
          "<code>mkdir ordenados.txt</code>",
          "<code>cd ordenados.txt</code>",
          "<code>head ordenados.txt</code>"
        ],
        answer: 0,
        explanation: "<code>uniq</code> elimina duplicados contiguos, por eso suele ir despues de <code>sort</code>."
      },
      {
        tag: "Conteo",
        prompt: "Quieres saber cuantas lineas tiene un archivo o un resultado filtrado. ¿Que opcion corresponde?",
        options: [
          "<code>wc -l archivo.txt</code>",
          "<code>tail -l archivo.txt</code>",
          "<code>nano -l archivo.txt</code>",
          "<code>mv -l archivo.txt</code>"
        ],
        answer: 0,
        explanation: "<code>wc -l</code> cuenta lineas."
      },
      {
        tag: "Procesamiento",
        prompt: "Necesitas imprimir la tercera columna usando reglas mas flexibles que <code>cut</code>. ¿Que comando del material corresponde?",
        options: [
          "<code>awk -F \",\" '{print $3}' datos/usuarios.txt</code>",
          "<code>cat -F \",\" '{print $3}' datos/usuarios.txt</code>",
          "<code>pwd -F \",\" '{print $3}' datos/usuarios.txt</code>",
          "<code>head -F \",\" '{print $3}' datos/usuarios.txt</code>"
        ],
        answer: 0,
        explanation: "<code>awk</code> es mas potente para trabajar con campos y reglas de salida."
      },
      {
        tag: "Edicion",
        prompt: "Quieres abrir un archivo para editarlo desde la terminal. ¿Que opcion es correcta?",
        options: [
          "<code>nano notas.txt</code>",
          "<code>less notas.txt</code>",
          "<code>uniq notas.txt</code>",
          "<code>sort notas.txt</code>"
        ],
        answer: 0,
        explanation: "<code>nano</code> es el editor de terminal mencionado en el material."
      },
      {
        tag: "Redirecciones",
        prompt: "Quieres crear o reemplazar el contenido de un archivo con texto generado en consola. ¿Que operador necesitas?",
        options: [
          "<code>&gt;</code>",
          "<code>|</code>",
          "<code>2&gt;</code>",
          "<code>-f</code>"
        ],
        answer: 0,
        explanation: "<code>&gt;</code> redirige la salida a un archivo y lo crea o sobreescribe."
      },
      {
        tag: "Redirecciones",
        prompt: "Quieres agregar una linea al final de un archivo sin borrar lo anterior. ¿Que operador corresponde?",
        options: [
          "<code>&gt;&gt;</code>",
          "<code>&gt;</code>",
          "<code>|</code>",
          "<code>-n</code>"
        ],
        answer: 0,
        explanation: "<code>&gt;&gt;</code> anexa contenido al final del archivo."
      },
      {
        tag: "Errores",
        prompt: "Quieres guardar la salida de error de un comando en un archivo. ¿Que operador del material corresponde?",
        options: [
          "<code>2&gt;</code>",
          "<code>&gt;&gt;</code>",
          "<code>|</code>",
          "<code>&amp;</code>"
        ],
        answer: 0,
        explanation: "<code>2&gt;</code> redirige el error estandar a un archivo."
      },
      {
        tag: "Scripts",
        prompt: "¿Que linea debe ir al inicio de un script para indicar Bash como interprete?",
        options: [
          "<code>#!/bin/bash</code>",
          "<code>#/bin/bash</code>",
          "<code>#!/nano/bash</code>",
          "<code>bash://script</code>"
        ],
        answer: 0,
        explanation: "<code>#!/bin/bash</code> es el shebang correcto para Bash."
      },
      {
        tag: "Permisos",
        prompt: "Quieres dar permiso de ejecucion a un script llamado <code>reporte.sh</code>. ¿Que opcion corresponde?",
        options: [
          "<code>chmod +x reporte.sh</code>",
          "<code>cat +x reporte.sh</code>",
          "<code>uniq +x reporte.sh</code>",
          "<code>grep +x reporte.sh</code>"
        ],
        answer: 0,
        explanation: "<code>chmod +x</code> agrega permiso de ejecucion al archivo."
      }
    ];

    const LEGACY_COMMAND_PROMPTS = new Set([
      "¿Que hace el comando <code>rm -r carpeta/</code>?",
      "¿Que hace <code>chown ana:ops respaldo.tar</code>?",
      "¿Que comando muestra una lista amplia de procesos en ejecucion?",
      "¿Que comando suele utilizarse para observar procesos y consumo de recursos en tiempo real?",
      "¿Que comando muestra el espacio usado y disponible de los sistemas de archivos en formato legible?",
      "Si quieres conocer el tamaño total de un directorio de forma resumida, ¿que comando elegirias?",
      "¿Que comando consultarias para ver el estado de un servicio gestionado por systemd, por ejemplo SSH?",
      "¿Que comando encaja mejor para revisar los registros de un servicio como Nginx con systemd?",
      "Si quieres abrir la ayuda manual de un comando como tar, ¿que usarias?",
      "¿Que comando buscaria archivos <code>.txt</code> dentro de <code>/home</code>?",
      "¿Que comando crea un archivo comprimido <code>backup.tar.gz</code> a partir de una carpeta?"
    ]);

    questionBank.commands = questionBank.commands.filter((question) => !LEGACY_COMMAND_PROMPTS.has(question.prompt));

    Object.entries(questionBank).forEach(([sectionKey, questions]) => {
      questions.forEach((question, index) => {
        question.id = `${sectionKey}-${index}`;
      });
    });

    const questionRotation = {
      theory: [],
      commands: []
    };

    function getQuestionLimit(sectionKey, requestedCount = QUESTION_COUNTS[sectionKey]) {
      return Math.min(requestedCount, questionBank[sectionKey].length);
    }

    const form = document.getElementById("quiz-form");
    const questionList = document.getElementById("question-list");
    const totalQuestions = document.getElementById("total-questions");
    const commandsTotalStat = document.getElementById("commands-total-stat");
    const versionCounter = document.getElementById("quiz-version");
    const progressText = document.getElementById("progress-text");
    const progressBar = document.getElementById("progress-bar");
    const statusCopy = document.getElementById("status-copy");
    const results = document.getElementById("results");
    const scoreNumber = document.getElementById("score-number");
    const scoreSummary = document.getElementById("score-summary");
    const chapterBreakdown = document.getElementById("chapter-breakdown");
    const reviewList = document.getElementById("review-list");
    const theoryQuizCount = document.getElementById("theory-quiz-count");
    const resetTop = document.getElementById("reset-top");
    const resetBottom = document.getElementById("reset-bottom");
    const commandsExamCount = document.getElementById("commands-exam-count");
    const commandsExamForm = document.getElementById("commands-exam-form");
    const commandsExamQuestionList = document.getElementById("commands-exam-question-list");
    const commandsExamProgressText = document.getElementById("commands-exam-progress-text");
    const commandsExamProgressBar = document.getElementById("commands-exam-progress-bar");
    const commandsExamStatusCopy = document.getElementById("commands-exam-status-copy");
    const commandsExamResults = document.getElementById("commands-exam-results");
    const commandsExamScoreNumber = document.getElementById("commands-exam-score-number");
    const commandsExamScoreSummary = document.getElementById("commands-exam-score-summary");
    const commandsExamBreakdown = document.getElementById("commands-exam-breakdown");
    const commandsExamReviewList = document.getElementById("commands-exam-review-list");
    const commandsExamResetTop = document.getElementById("commands-exam-reset-top");
    const commandsExamResetBottom = document.getElementById("commands-exam-reset-bottom");
    const searchInput = document.getElementById("search-input");
    const searchFilters = document.getElementById("search-filters");
    const searchResults = document.getElementById("search-results");
    const searchHelper = document.getElementById("search-helper");
    const searchSourceCount = document.getElementById("search-source-count");
    const searchExamples = document.getElementById("search-examples");
    const commandDetailCard = document.getElementById("command-detail-card");
    const commandDetailTitle = document.getElementById("command-detail-title");
    const commandDetailDescription = document.getElementById("command-detail-description");
    const commandDetailExample = document.getElementById("command-detail-example");
    const commandDetailSteps = document.getElementById("command-detail-steps");
    const commandDetailSearch = document.getElementById("command-detail-search");
    const commandDetailScenario = document.getElementById("command-detail-scenario");
    const terminalScenarios = document.getElementById("terminal-scenarios");
    const terminalTitle = document.getElementById("terminal-title");
    const terminalScreen = document.getElementById("terminal-screen");
    const terminalNote = document.getElementById("terminal-note");
    const terminalCommandCount = document.getElementById("terminal-command-count");
    const terminalStepKind = document.getElementById("terminal-step-kind");
    const terminalStepTitle = document.getElementById("terminal-step-title");
    const terminalStepDescription = document.getElementById("terminal-step-description");
    const terminalDetailList = document.getElementById("terminal-detail-list");
    const materialCommandList = document.getElementById("material-command-list");
    const terminalPrev = document.getElementById("terminal-prev");
    const terminalNext = document.getElementById("terminal-next");
    const terminalReplay = document.getElementById("terminal-replay");
    const terminalStepCurrent = document.getElementById("terminal-step-current");
    const terminalStepTotal = document.getElementById("terminal-step-total");
    const practiceGrid = document.getElementById("practice-grid");
    const practiceProgress = document.getElementById("practice-progress");
    const practiceCount = document.getElementById("practice-count");
    const practiceReset = document.getElementById("practice-reset");

    let activeQuestions = [];
    let activeCommandExamQuestions = [];
    let activeCommandGuideKey = COMMAND_GUIDES[0].key;
    let version = 0;
    let activeSource = "all";
    let activeTerminalScenario = kaliScenarios[0].id;
    let activeTerminalLineIndex = getFirstInteractiveLineIndex(kaliScenarios[0]);
    let terminalTypingTimer = null;
    let activePracticeChallenges = [];
    let practiceAnswers = {};

    const initialTheoryCount = getQuestionLimit("theory", THEORY_QUIZ_COUNT);
    const initialCommandCount = getQuestionLimit("commands", COMMAND_EXAM_COUNT);

    searchSourceCount.textContent = `${Object.keys(SEARCH_SOURCES).length - 1} fuentes`;
    terminalCommandCount.textContent = `${kaliScenarios.length} escenarios`;
    practiceCount.textContent = `${PRACTICE_CHALLENGE_COUNT} retos`;
    totalQuestions.textContent = String(initialTheoryCount);
    theoryQuizCount.textContent = `${initialTheoryCount} preguntas`;
    commandsTotalStat.textContent = String(initialCommandCount);
    commandsExamCount.textContent = `${initialCommandCount} preguntas`;

    function shuffleArray(items) {
      const copy = [...items];
      for (let index = copy.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
      }
      return copy;
    }

    function normalizeText(text) {
      return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    }

    function escapeHtml(text) {
      return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");
    }

    function refillQuestionRotation(sectionKey, excludeIds = new Set()) {
      const replenishment = shuffleArray(
        questionBank[sectionKey].filter((question) => !excludeIds.has(question.id))
      );

      questionRotation[sectionKey].push(...replenishment);
    }

    function truncateText(text, maxLength = 240) {
      if (text.length <= maxLength) {
        return text;
      }
      return `${text.slice(0, maxLength - 1).trim()}…`;
    }

    function getSearchCorpus() {
      return [
        ...COMMAND_GUIDES.map((guide) => ({
          sourceKey: "guiaComandos",
          sourceLabel: "Guia practica",
          kind: "guide",
          title: guide.title,
          description: guide.description,
          text: `${guide.description} ${guide.steps.join(" ")} ${guide.aliases.join(" ")} ${guide.example} ${guide.label}`,
          keywords: guide.aliases.join(" "),
          command: guide.label,
          example: guide.example,
          steps: guide.steps,
          scenarioId: guide.scenarioId,
          guideKey: guide.key
        })),
        ...referenceIndex,
        ...kaliScenarios.map((scenario) => ({
          sourceKey: "kaliSim",
          sourceLabel: "Simulacion Kali",
          title: scenario.title,
          text: `${scenario.description} ${scenario.note} ${scenario.lines.map((line) => line.text).join(" ")}`
        }))
      ];
    }

    function buildExcerpt(text, query) {
      const trimmedText = text.trim();
      if (!query) {
        return truncateText(trimmedText, 220);
      }

      const normalizedText = normalizeText(trimmedText);
      const terms = normalizeText(query).split(/\s+/).filter(Boolean);
      const firstIndex = terms.reduce((bestIndex, term) => {
        const currentIndex = normalizedText.indexOf(term);
        if (currentIndex === -1) {
          return bestIndex;
        }
        if (bestIndex === -1) {
          return currentIndex;
        }
        return Math.min(bestIndex, currentIndex);
      }, -1);

      if (firstIndex === -1) {
        return truncateText(trimmedText, 220);
      }

      const start = Math.max(0, firstIndex - 72);
      const end = Math.min(trimmedText.length, firstIndex + 180);
      const prefix = start > 0 ? "…" : "";
      const suffix = end < trimmedText.length ? "…" : "";
      return `${prefix}${trimmedText.slice(start, end).trim()}${suffix}`;
    }

    function getEntryScore(entry, terms, normalizedQuery) {
      const sourceText = normalizeText(entry.sourceLabel);
      const titleText = normalizeText(entry.title);
      const bodyText = normalizeText(entry.text);
      const keywordText = normalizeText(entry.keywords || "");
      let score = 0;
      let matchedTerms = 0;

      terms.forEach((term) => {
        let matched = false;

        if (titleText.includes(term)) {
          score += 8;
          matched = true;
        }

        if (sourceText.includes(term)) {
          score += 4;
          matched = true;
        }

        if (bodyText.includes(term)) {
          score += 3;
          matched = true;
        }

        if (keywordText.includes(term)) {
          score += 10;
          matched = true;
        }

        if (matched) {
          matchedTerms += 1;
        }
      });

      if (normalizedQuery && (titleText.includes(normalizedQuery) || bodyText.includes(normalizedQuery))) {
        score += 10;
      }

      if (normalizedQuery && keywordText.includes(normalizedQuery)) {
        score += 14;
      }

      if (entry.kind === "guide" && matchedTerms > 0) {
        score += 8;
      }

      return {
        score,
        matchedTerms,
        fullMatch: matchedTerms === terms.length
      };
    }

    function getCommandGuideByKey(key) {
      return COMMAND_GUIDES.find((guide) => guide.key === key) || COMMAND_GUIDES[0];
    }

    function getCommandGuideByLabel(label) {
      return COMMAND_GUIDES.find((guide) => guide.label === label) || null;
    }

    function focusGuideSearch(guide) {
      searchInput.value = guide.aliases[0] || guide.label;
      activeSource = "guiaComandos";
      renderSearchFilters();
      renderSearchResults(searchInput.value.trim());
      searchInput.focus();
      searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    function activateScenario(scenarioId) {
      const scenario = kaliScenarios.find((item) => item.id === scenarioId);
      if (!scenario) {
        return;
      }
      activeTerminalScenario = scenario.id;
      activeTerminalLineIndex = getFirstInteractiveLineIndex(scenario);
      renderTerminalScenarios();
      renderTerminalOutput();
      terminalScreen.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    function renderCommandGuide() {
      const guide = getCommandGuideByKey(activeCommandGuideKey);
      commandDetailTitle.textContent = `${guide.title} · ${guide.label}`;
      commandDetailDescription.textContent = guide.description;
      commandDetailExample.textContent = guide.example;
      commandDetailSteps.innerHTML = guide.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("");
      commandDetailSearch.disabled = false;
      commandDetailScenario.disabled = !guide.scenarioId;
      commandDetailCard.dataset.guideKey = guide.key;
    }

    function renderMaterialCommandList() {
      materialCommandList.innerHTML = [
        ...MATERIAL_COMMANDS.map((command) => {
          const guide = getCommandGuideByLabel(command);
          const activeClass = guide && guide.key === activeCommandGuideKey ? " active" : "";
          return `<button type="button" class="command-chip${activeClass}" data-guide-key="${guide ? guide.key : ""}"><code>${escapeHtml(command)}</code></button>`;
        }),
        ...MATERIAL_CONCEPTS.map((concept) => {
          const guide = getCommandGuideByLabel(concept);
          const activeClass = guide && guide.key === activeCommandGuideKey ? " active" : "";
          return `<button type="button" class="command-chip concept${activeClass}" data-guide-key="${guide ? guide.key : ""}"><code>${escapeHtml(concept)}</code></button>`;
        })
      ].join("");

      materialCommandList.querySelectorAll(".command-chip").forEach((button) => {
        button.addEventListener("click", () => {
          if (!button.dataset.guideKey) {
            return;
          }
          activeCommandGuideKey = button.dataset.guideKey;
          renderMaterialCommandList();
          renderCommandGuide();
        });
      });
    }

    function getFirstInteractiveLineIndex(scenario) {
      const foundIndex = scenario.lines.findIndex((line) => line.kind !== "comment");
      return foundIndex === -1 ? 0 : foundIndex;
    }

    function getStudyLineIndexes(scenario) {
      return scenario.lines
        .map((line, index) => (line.kind === "comment" ? null : index))
        .filter((index) => index !== null);
    }

    function extractCommandText(lineText) {
      const promptIndex = lineText.indexOf("$");
      if (promptIndex !== -1) {
        return lineText.slice(promptIndex + 1).trim();
      }
      return lineText.trim();
    }

    function parseTerminalPrompt(lineText) {
      const match = lineText.match(/^([^:]+@[^:]+):([^$]+)\$\s*(.*)$/);
      if (!match) {
        return null;
      }

      return {
        userHost: match[1],
        path: match[2],
        command: match[3]
      };
    }

    function renderTerminalLineContent(line, isActive) {
      if (line.kind === "command") {
        const parsed = parseTerminalPrompt(line.text);
        if (parsed) {
          return `
            <span class="terminal-prompt">
              <span class="terminal-prompt-user">${escapeHtml(parsed.userHost)}</span><span class="terminal-prompt-separator">:</span><span class="terminal-prompt-path">${escapeHtml(parsed.path)}</span><span class="terminal-prompt-symbol">$</span>
            </span>
            <span class="terminal-command-text terminal-text">${isActive ? "" : escapeHtml(parsed.command)}</span>${isActive ? '<span class="terminal-cursor" aria-hidden="true"></span>' : ""}
          `;
        }
      }

      return `<span class="terminal-text">${isActive ? "" : escapeHtml(line.text)}</span>`;
    }

    function getAnimatedTerminalText(line) {
      if (!line) {
        return "";
      }

      if (line.kind === "command") {
        const parsed = parseTerminalPrompt(line.text);
        return parsed ? parsed.command : line.text;
      }

      return line.text;
    }

    function getPreviousCommandLine(scenario, lineIndex) {
      for (let index = lineIndex - 1; index >= 0; index -= 1) {
        if (scenario.lines[index].kind === "command") {
          return scenario.lines[index].text;
        }
      }
      return "";
    }

    function buildInsight(kind, title, description, details) {
      return { kind, title, description, details };
    }

    function getCommandInsight(commandLine) {
      const rawCommand = extractCommandText(commandLine);

      if (rawCommand === "pwd") {
        return buildInsight(
          "Comando",
          "pwd muestra la carpeta actual",
          "Se usa para confirmar tu ubicacion exacta dentro del sistema de archivos antes de seguir trabajando.",
          [
            "No modifica nada: solo imprime la ruta activa.",
            "Es util cuando cambias varias veces de directorio y quieres verificar donde estas.",
            "En la simulacion devuelve una ruta como /home/kali o /var/log."
          ]
        );
      }

      if (rawCommand.startsWith("ls -la")) {
        return buildInsight(
          "Comando",
          "ls -la lista todo con detalle",
          "Este comando muestra archivos visibles y ocultos junto con permisos, propietario, tamano y fecha.",
          [
            "-l activa el formato largo con detalles.",
            "-a incluye archivos ocultos como .bashrc.",
            "Sirve para inspeccionar rapidamente una carpeta antes de copiar, mover o editar archivos."
          ]
        );
      }

      if (rawCommand.startsWith("cd ")) {
        return buildInsight(
          "Comando",
          "cd cambia de directorio",
          "La shell pasa a trabajar en otra ruta y desde ese momento los comandos relativos apuntan a esa ubicacion.",
          [
            "En el ejemplo entras a /var/log para revisar registros.",
            "Despues de usar cd conviene confirmar con pwd.",
            "Cambiar de carpeta no genera salida cuando todo sale bien."
          ]
        );
      }

      if (rawCommand.startsWith("cp ")) {
        return buildInsight(
          "Comando",
          "cp copia un archivo o una ruta",
          "Se usa para duplicar contenido en otra ubicacion sin borrar el original.",
          [
            "El primer argumento es el origen y el segundo el destino.",
            "Es util para respaldos rapidos o para preparar archivos antes de editarlos.",
            "A diferencia de mv, deja el archivo original intacto."
          ]
        );
      }

      if (rawCommand.startsWith("mv ")) {
        return buildInsight(
          "Comando",
          "mv mueve o renombra",
          "Este comando cambia la ubicacion de un archivo o le pone otro nombre.",
          [
            "Si el destino es otra carpeta, mueve el archivo.",
            "Si el destino es otro nombre en la misma carpeta, lo renombra.",
            "Es muy usado para reorganizar resultados de trabajo."
          ]
        );
      }

      if (rawCommand.startsWith("rmdir ")) {
        return buildInsight(
          "Comando",
          "rmdir elimina carpetas vacias",
          "Solo funciona si el directorio no tiene contenido dentro.",
          [
            "Es una forma segura de borrar carpetas vacias.",
            "Si el directorio tiene archivos, fallara y tendras que vaciarlo antes.",
            "En el escenario se usa despues de mover el archivo fuera de la carpeta."
          ]
        );
      }

      if (rawCommand.startsWith("grep -i")) {
        return buildInsight(
          "Comando",
          "grep -i busca sin distinguir mayusculas",
          "Aqui se usa para encontrar la palabra error dentro de un log y enviar el resultado a otro comando.",
          [
            "grep filtra lineas que contienen un patron.",
            "-i ignora diferencias entre mayusculas y minusculas.",
            "La tuberia | entrega esas coincidencias a tail -n 5."
          ]
        );
      }

      if (rawCommand.startsWith("grep -n")) {
        return buildInsight(
          "Comando",
          "grep -n muestra coincidencias con numero de linea",
          "Es util cuando necesitas encontrar un patron y saber en que linea aparece dentro del archivo.",
          [
            "-n agrega el numero de linea a la salida.",
            "Permite ubicar rapidamente fallos o eventos para revisarlos despues con otro comando.",
            "En el ejemplo busca el patron Failed en auth.log."
          ]
        );
      }

      if (rawCommand.startsWith("grep ")) {
        return buildInsight(
          "Comando",
          "grep filtra contenido por patron",
          "Se usa para localizar lineas especificas, por ejemplo registros de Chile o eventos concretos de un log.",
          [
            "Puede trabajar solo o combinado con redirecciones y tuberias.",
            "En el material se usa para guardar coincidencias en otro archivo.",
            "Es una base muy comun para analisis rapido de texto."
          ]
        );
      }

      if (rawCommand.startsWith("tail -n")) {
        return buildInsight(
          "Comando",
          "tail -n muestra las ultimas lineas",
          "Sirve para revisar el final de un archivo o de un conjunto de coincidencias, algo muy util en bitacoras.",
          [
            "-n 5 limita la salida a cinco lineas.",
            "Se usa mucho junto a grep para no saturarte con demasiados resultados.",
            "Ayuda a enfocarte en lo mas reciente."
          ]
        );
      }

      if (rawCommand.startsWith("mkdir -p")) {
        return buildInsight(
          "Comando",
          "mkdir -p crea una estructura completa",
          "Permite construir directorios intermedios sin que falle si alguna parte de la ruta aun no existe.",
          [
            "-p evita errores por carpetas faltantes.",
            "En el material se usa para preparar datos, procesados y logs de una sola vez.",
            "Es ideal para dejar un laboratorio ordenado desde el inicio."
          ]
        );
      }

      if (rawCommand.startsWith("ls -R")) {
        return buildInsight(
          "Comando",
          "ls -R recorre directorios de forma recursiva",
          "Muestra la estructura interna de una carpeta y sus subdirectorios en una sola salida.",
          [
            "-R significa recursivo.",
            "Te ayuda a verificar que la estructura creada realmente quedo como esperabas.",
            "Es util despues de mkdir -p o al revisar proyectos con varias carpetas."
          ]
        );
      }

      if (rawCommand.startsWith("chmod +x")) {
        return buildInsight(
          "Comando",
          "chmod +x agrega permiso de ejecucion",
          "Convierte un archivo, normalmente un script, en algo que puede ejecutarse directamente desde la shell.",
          [
            "+x activa el permiso de ejecucion.",
            "No cambia el contenido del script; solo su forma de uso.",
            "Despues de esto ya puedes invocarlo con ./nombre-del-script."
          ]
        );
      }

      if (rawCommand.startsWith("./")) {
        return buildInsight(
          "Comando",
          "./script.sh ejecuta un script local",
          "El prefijo ./ le dice a la shell que el archivo esta en el directorio actual y debe ejecutarlo desde ahi.",
          [
            "Solo funciona si el archivo tiene permiso de ejecucion.",
            "Es la forma normal de lanzar scripts propios desde la carpeta actual.",
            "Se usa mucho en automatizacion y tareas repetitivas."
          ]
        );
      }

      if (rawCommand.startsWith("systemctl status")) {
        return buildInsight(
          "Comando",
          "systemctl status consulta el estado de un servicio",
          "Muestra si el servicio esta activo, desde cuando, y da pistas rapidas sobre su salud.",
          [
            "systemctl administra servicios con systemd.",
            "status entrega un resumen del estado actual.",
            "Es uno de los primeros pasos al diagnosticar problemas en un servicio."
          ]
        );
      }

      if (rawCommand.startsWith("journalctl -u")) {
        return buildInsight(
          "Comando",
          "journalctl -u revisa logs de un servicio",
          "Filtra el journal del sistema para una unidad concreta y te deja ver eventos recientes relacionados.",
          [
            "-u apunta a una unidad o servicio especifico.",
            "Suele usarse justo despues de systemctl status.",
            "Te ayuda a encontrar errores, reinicios y mensajes importantes."
          ]
        );
      }

      if (rawCommand.startsWith("tar -czf")) {
        return buildInsight(
          "Comando",
          "tar -czf crea un respaldo comprimido",
          "Empaqueta una carpeta o conjunto de archivos en un solo archivo tar.gz.",
          [
            "-c crea el archivo tar.",
            "-z aplica compresion gzip.",
            "-f indica el nombre del archivo resultante."
          ]
        );
      }

      if (rawCommand.startsWith("du -sh")) {
        return buildInsight(
          "Comando",
          "du -sh resume el tamano total",
          "Calcula el espacio utilizado por un archivo o directorio y lo muestra en formato legible.",
          [
            "-s resume el total sin detallar cada subcarpeta.",
            "-h lo presenta en KB, MB o GB segun corresponda.",
            "Es ideal para comprobar si un backup o carpeta pesa demasiado."
          ]
        );
      }

      if (rawCommand.startsWith("find ")) {
        return buildInsight(
          "Comando",
          "find localiza archivos por nombre o criterio",
          "Busca dentro de una ruta y devuelve coincidencias que cumplan la condicion indicada.",
          [
            "En el ejemplo recorre el directorio actual con .",
            "-name compara con un patron literal o con comodines.",
            "Es muy util cuando no recuerdas donde quedo un archivo."
          ]
        );
      }

      if (rawCommand.startsWith("cat ")) {
        return buildInsight(
          "Comando",
          "cat muestra el contenido completo",
          "Imprime un archivo en pantalla tal como esta guardado, sin filtrar ni resumir.",
          [
            "Es rapido y directo para archivos pequenos.",
            "Tambien sirve para verificar lo que escribiste con echo y redirecciones.",
            "En archivos muy largos conviene combinarlo con otras herramientas o usar head y tail."
          ]
        );
      }

      if (rawCommand.startsWith("less ")) {
        return buildInsight(
          "Comando",
          "less permite navegar un archivo largo",
          "A diferencia de cat, esta pensado para revisar contenido extenso con desplazamiento controlado.",
          [
            "Es muy util cuando el archivo no cabe comodo en pantalla.",
            "Permite leer sin imprimirlo todo de golpe.",
            "Suele usarse para revisar logs, listados o archivos de configuracion."
          ]
        );
      }

      if (rawCommand.startsWith("head -n")) {
        return buildInsight(
          "Comando",
          "head -n muestra las primeras lineas",
          "Te deja inspeccionar el inicio de un archivo sin abrirlo completo.",
          [
            "-n 2 indica cuantas lineas quieres ver.",
            "Es util para comprobar encabezados o validar el formato de un archivo.",
            "Suele combinarse con logs o archivos CSV."
          ]
        );
      }

      if (rawCommand.startsWith("cut -d")) {
        return buildInsight(
          "Comando",
          "cut extrae campos de un archivo delimitado",
          "Separa cada linea usando un delimitador y devuelve solo la columna que te interesa.",
          [
            "-d \",\" define la coma como separador.",
            "-f1 pide el primer campo.",
            "En el material sirve para sacar nombres o columnas especificas de usuarios.txt."
          ]
        );
      }

      if (rawCommand.startsWith("sort ")) {
        return buildInsight(
          "Comando",
          "sort ordena lineas",
          "Se usa para ordenar alfabeticamente o numericamente el contenido de un archivo o una lista de resultados.",
          [
            "Es muy comun antes de usar uniq.",
            "Ayuda a resumir datos repetidos o desordenados.",
            "Tambien puede combinarse con redirecciones para guardar el resultado ordenado."
          ]
        );
      }

      if (rawCommand.startsWith("uniq ")) {
        return buildInsight(
          "Comando",
          "uniq elimina duplicados contiguos",
          "Se usa normalmente despues de sort para dejar una lista sin repeticiones inmediatas.",
          [
            "Funciona mejor cuando la entrada ya esta ordenada.",
            "Es util para resumir nombres, categorias o eventos repetidos.",
            "En el escenario se aplica sobre un archivo previamente ordenado."
          ]
        );
      }

      if (rawCommand.startsWith("awk ")) {
        return buildInsight(
          "Comando",
          "awk procesa campos con reglas mas flexibles",
          "Permite separar columnas y decidir exactamente que imprimir o transformar.",
          [
            "-F define el separador de campos.",
            "{print $3} pide el tercer campo de cada linea.",
            "Es mas potente que cut cuando necesitas logica adicional."
          ]
        );
      }

      if (rawCommand.startsWith("echo ")) {
        return buildInsight(
          "Comando",
          "echo genera texto desde la consola",
          "Es una forma simple de escribir un mensaje o una linea que luego puedes redirigir a un archivo.",
          [
            "Con > reemplaza el contenido destino.",
            "Con >> agrega una nueva linea al final.",
            "Sirve mucho para pruebas rapidas y bitacoras simples."
          ]
        );
      }

      if (rawCommand.startsWith("nano ")) {
        return buildInsight(
          "Comando",
          "nano abre un editor de texto en terminal",
          "Sirve para crear o modificar archivos sin salir de la consola.",
          [
            "Es una herramienta amigable para editar archivos simples.",
            "En el material se usa junto a scripts y notas de trabajo.",
            "Suele acompañarse luego con cat para verificar el contenido guardado."
          ]
        );
      }

      if (rawCommand.startsWith("ls ") && rawCommand.includes("2>")) {
        return buildInsight(
          "Comando",
          "2> redirige el error estandar",
          "Este comando provoca un error y lo envía a un archivo en vez de dejarlo en pantalla.",
          [
            "2> representa la salida de error estandar.",
            "Es util para capturar fallos y revisarlos despues.",
            "En este caso ls intenta listar una carpeta que no existe."
          ]
        );
      }

      if (rawCommand.startsWith("wc -l")) {
        return buildInsight(
          "Comando",
          "wc -l cuenta lineas",
          "Mide cuantas lineas hay en un archivo o en la salida recibida, algo muy util para contar coincidencias.",
          [
            "-l significa line count.",
            "En este caso cuenta cuantas lineas quedaron en chilenos.txt.",
            "Ayuda a obtener un indicador rapido sin revisar el contenido manualmente."
          ]
        );
      }

      if (rawCommand.startsWith("ps aux")) {
        return buildInsight(
          "Comando",
          "ps aux muestra una foto de los procesos",
          "Entrega una lista detallada de los procesos activos con usuario, CPU, memoria y comando de origen.",
          [
            "ps consulta procesos del sistema.",
            "aux amplia la vista a todos los usuarios y procesos relevantes.",
            "Es muy util para detectar que esta corriendo y con que consumo aproximado."
          ]
        );
      }

      if (rawCommand === "top") {
        return buildInsight(
          "Comando",
          "top muestra actividad en tiempo real",
          "Presenta una vista dinamica del sistema con carga, CPU, memoria y procesos activos.",
          [
            "Es ideal para diagnostico rapido cuando el equipo parece lento.",
            "A diferencia de ps aux, no es una foto fija sino una vista que se actualiza.",
            "Sirve para detectar consumo anormal de CPU o memoria."
          ]
        );
      }

      return buildInsight(
        "Comando",
        "Explicacion del comando",
        "Esta linea representa una orden de consola incluida en la simulacion del material.",
        [
          "Observa el comando principal y las opciones que lo acompañan.",
          "Si la orden usa >, >> o |, significa que combina salida o la envía a otro destino.",
          "La salida inferior te muestra el efecto de esa orden en un caso practico."
        ]
      );
    }

    function getOutputInsight(previousCommandLine, outputText) {
      const rawCommand = extractCommandText(previousCommandLine || "");

      if (outputText.includes("#!/bin/bash")) {
        return buildInsight(
          "Salida",
          "Contenido de un script con shebang",
          "La salida muestra la cabecera del script y confirma que Bash fue definido como interprete.",
          [
            "#!/bin/bash debe ir al inicio del archivo.",
            "Debajo suelen venir las instrucciones del script.",
            "Despues, chmod +x deja el archivo listo para ejecutarse."
          ]
        );
      }

      if (rawCommand === "pwd") {
        return buildInsight(
          "Salida",
          "Ruta devuelta por pwd",
          "Esta linea es la respuesta de la shell indicando exactamente en que carpeta estas trabajando.",
          [
            "Si la ruta cambia, significa que el cd anterior funciono.",
            "Saber la ruta actual evita errores al crear, mover o leer archivos.",
            `Valor observado: ${outputText.split("\n")[0]}`
          ]
        );
      }

      if (rawCommand.startsWith("ls -la") || rawCommand.startsWith("ls -R")) {
        return buildInsight(
          "Salida",
          "Listado de archivos y directorios",
          "La salida confirma que la carpeta contiene los archivos o subdirectorios esperados.",
          [
            "Los directorios suelen empezar con d en listados largos.",
            "Los nombres ocultos aparecen gracias a -a.",
            "En modo recursivo puedes validar rapidamente la estructura completa."
          ]
        );
      }

      if (rawCommand.startsWith("grep") || rawCommand.startsWith("tail -n") || rawCommand.startsWith("head -n") || rawCommand.startsWith("cat ")) {
        return buildInsight(
          "Salida",
          "Texto filtrado o visualizado",
          "Esta salida muestra solo el contenido que el comando anterior decidio revelar: todo, el inicio, el final o un conjunto filtrado.",
          [
            "Si ves menos lineas, es porque el comando limito la vista a lo necesario.",
            "Esto ayuda a revisar datos sin abrir archivos completos.",
            `Primer resultado mostrado: ${outputText.split("\n")[0]}`
          ]
        );
      }

      if (rawCommand.startsWith("less ")) {
        return buildInsight(
          "Salida",
          "Vista de navegacion en less",
          "La salida representa una vista parcial del archivo, pensada para desplazarte y leer sin saturar la pantalla.",
          [
            "less no necesita imprimirlo todo al mismo tiempo.",
            "La marca (END) indica que llegaste al final del archivo.",
            "Es una opcion mas comoda para archivos extensos."
          ]
        );
      }

      if (rawCommand.startsWith("nano ")) {
        return buildInsight(
          "Salida",
          "Pantalla del editor nano",
          "Esta salida simula la interfaz de nano mientras editas un archivo dentro de la terminal.",
          [
            "En la parte inferior suelen verse atajos como guardar o salir.",
            "El contenido central es el archivo que estas modificando.",
            "Es una herramienta simple y muy usada para edicion rapida."
          ]
        );
      }

      if (rawCommand.startsWith("systemctl status")) {
        return buildInsight(
          "Salida",
          "Estado resumido del servicio",
          "La respuesta indica si el servicio esta cargado, habilitado y activo, ademas de su estado reciente.",
          [
            "Active: active (running) significa que el servicio esta funcionando.",
            "Loaded muestra desde donde se cargo la unidad.",
            "Si estuviera detenido o fallando, aqui apareceria la primera pista."
          ]
        );
      }

      if (rawCommand.startsWith("journalctl -u")) {
        return buildInsight(
          "Salida",
          "Eventos recientes del journal",
          "Aqui ves mensajes concretos del servicio seleccionado, utiles para diagnosticar comportamiento o fallos.",
          [
            "Cada linea suele traer fecha, host, proceso y mensaje.",
            "Los errores o reinicios destacan problemas puntuales.",
            "Es una fuente clave para depuracion rapida."
          ]
        );
      }

      if (rawCommand.startsWith("du -sh") || rawCommand.startsWith("wc -l")) {
        return buildInsight(
          "Salida",
          "Medicion resumida",
          "La salida devuelve una cifra util para tomar decisiones rapidas: tamano o numero de lineas.",
          [
            "No necesitas abrir el archivo para medirlo.",
            "Es una forma de validar resultados de procesos previos.",
            `Resultado resumido: ${outputText.split("\n")[0]}`
          ]
        );
      }

      if (rawCommand.startsWith("ps aux") || rawCommand === "top") {
        return buildInsight(
          "Salida",
          "Actividad del sistema",
          "Esta vista muestra procesos o recursos del sistema y sirve para diagnosticar carga, consumo y procesos activos.",
          [
            "Fijate en columnas como CPU, MEM o COMMAND.",
            "En top tambien importa la carga general y la memoria libre.",
            "Es una lectura util para soporte y administracion diaria."
          ]
        );
      }

      return buildInsight(
        "Salida",
        "Resultado del comando anterior",
        "Esta parte representa la respuesta de la consola despues de ejecutar la orden seleccionada.",
        [
          "La salida puede ser informativa, una lista, una medicion o un estado.",
          "Leer bien la salida es tan importante como recordar el comando.",
          "Relaciona siempre esta respuesta con la linea de comando que esta justo encima."
        ]
      );
    }

    function stopTerminalTyping() {
      if (terminalTypingTimer) {
        window.clearInterval(terminalTypingTimer);
        terminalTypingTimer = null;
      }
    }

    function animateTerminalCurrentLine(line) {
      stopTerminalTyping();
      const target = terminalScreen.querySelector(".terminal-hit.active .terminal-text");
      if (!target) {
        return;
      }

      const text = getAnimatedTerminalText(line);

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        target.textContent = text;
        return;
      }

      target.textContent = "";
      let currentIndex = 0;
      const intervalDelay = text.length > 90 ? 10 : 18;

      terminalTypingTimer = window.setInterval(() => {
        currentIndex += 1;
        target.textContent = text.slice(0, currentIndex);
        if (currentIndex >= text.length) {
          stopTerminalTyping();
        }
      }, intervalDelay);
    }

    function preparePracticeChallenge(challenge) {
      const shuffledOptions = shuffleArray(
        challenge.options.map((text, index) => ({
          text,
          isCorrect: index === challenge.answer
        }))
      );

      return {
        ...challenge,
        options: shuffledOptions.map((option) => option.text),
        answer: shuffledOptions.findIndex((option) => option.isCorrect)
      };
    }

    function pickPracticeChallenges() {
      return shuffleArray(practicalChallengeBank)
        .slice(0, PRACTICE_CHALLENGE_COUNT)
        .map((challenge) => preparePracticeChallenge(challenge));
    }

    function updatePracticeProgress() {
      const total = activePracticeChallenges.length;
      const answered = activePracticeChallenges.filter((challenge) => practiceAnswers[challenge.uid] !== undefined).length;
      const correct = activePracticeChallenges.filter((challenge) => practiceAnswers[challenge.uid] === challenge.answer).length;
      practiceProgress.textContent = `${answered} de ${total} retos respondidos. ${correct} correctos.`;
    }

    function renderPracticeChallenges() {
      practiceGrid.innerHTML = activePracticeChallenges.map((challenge) => {
        const selectedAnswer = practiceAnswers[challenge.uid];
        const isAnswered = selectedAnswer !== undefined;
        const isCorrect = selectedAnswer === challenge.answer;

        const optionsMarkup = challenge.options.map((option, optionIndex) => {
          let optionClass = "practice-option";
          if (isAnswered && optionIndex === challenge.answer) {
            optionClass += " correct";
          } else if (isAnswered && optionIndex === selectedAnswer && selectedAnswer !== challenge.answer) {
            optionClass += " wrong";
          }

          return `
            <button
              type="button"
              class="${optionClass}"
              data-challenge-id="${challenge.uid}"
              data-option-index="${optionIndex}"
              ${isAnswered ? "disabled" : ""}
            >
              ${option}
            </button>
          `;
        }).join("");

        const feedbackClass = isAnswered ? `practice-feedback visible ${isCorrect ? "good" : "bad"}` : "practice-feedback";
        const feedbackText = isAnswered
          ? `${isCorrect ? "Correcto." : "Respuesta incorrecta."} ${challenge.explanation}`
          : "";

        return `
          <article class="practice-card">
            <span class="practice-tag">${challenge.tag}</span>
            <h3>${challenge.prompt}</h3>
            <p>Elige el comando u operador que mejor resuelve el caso.</p>
            <div class="practice-options">${optionsMarkup}</div>
            <div class="${feedbackClass}">${feedbackText}</div>
          </article>
        `;
      }).join("");

      practiceGrid.querySelectorAll(".practice-option").forEach((button) => {
        button.addEventListener("click", () => {
          const challengeId = Number(button.dataset.challengeId);
          const optionIndex = Number(button.dataset.optionIndex);
          if (practiceAnswers[challengeId] !== undefined) {
            return;
          }
          practiceAnswers[challengeId] = optionIndex;
          renderPracticeChallenges();
          updatePracticeProgress();
        });
      });
    }

    function buildPracticeSet() {
      activePracticeChallenges = pickPracticeChallenges().map((challenge, index) => ({
        ...challenge,
        uid: index
      }));
      practiceAnswers = {};
      renderPracticeChallenges();
      updatePracticeProgress();
    }

    function getTerminalInsight(scenario, lineIndex) {
      const line = scenario.lines[lineIndex];
      if (!line) {
        return buildInsight(
          "Comando",
          "Selecciona una linea",
          "Toca cualquier linea de la simulacion para ver una explicacion mas detallada.",
          []
        );
      }

      if (line.kind === "comment") {
        return buildInsight(
          "Contexto",
          scenario.title,
          scenario.description,
          [
            scenario.note,
            "Cada escenario representa una situacion comun del material de estudio.",
            "Puedes tocar comandos y salidas para entenderlos paso a paso."
          ]
        );
      }

      if (line.kind === "command") {
        return getCommandInsight(line.text);
      }

      return getOutputInsight(getPreviousCommandLine(scenario, lineIndex), line.text);
    }

    function prepareQuestion(question, sectionKey) {
      const shuffledOptions = shuffleArray(
        question.options.map((text, index) => ({
          text,
          isCorrect: index === question.answer
        }))
      );

      return {
        ...question,
        sectionKey,
        options: shuffledOptions.map((option) => option.text),
        answer: shuffledOptions.findIndex((option) => option.isCorrect)
      };
    }

    function pickQuestions(sectionKey, amount = QUESTION_COUNTS[sectionKey]) {
      const targetAmount = getQuestionLimit(sectionKey, amount);
      if (!targetAmount) {
        return [];
      }

      const selectedQuestions = [];
      const selectedIds = new Set();

      while (selectedQuestions.length < targetAmount) {
        if (!questionRotation[sectionKey].length) {
          refillQuestionRotation(sectionKey, selectedIds);
        }

        const nextQuestion = questionRotation[sectionKey].shift();

        if (!nextQuestion || selectedIds.has(nextQuestion.id)) {
          continue;
        }

        selectedQuestions.push(nextQuestion);
        selectedIds.add(nextQuestion.id);

        if (
          !questionRotation[sectionKey].length &&
          selectedQuestions.length < targetAmount &&
          selectedQuestions.length < questionBank[sectionKey].length
        ) {
          refillQuestionRotation(sectionKey, selectedIds);
        }

        if (selectedIds.size === questionBank[sectionKey].length) {
          break;
        }
      }

      return selectedQuestions.map((question) => prepareQuestion(question, sectionKey));
    }

    function renderSection(sectionKey, sectionQuestions, startNumber, options = {}) {
      if (!sectionQuestions.length) {
        return "";
      }

      const {
        inputNamePrefix = "q",
        questionIdPrefix = "question"
      } = options;

      const meta = SECTION_CONFIG[sectionKey];
      const cards = sectionQuestions.map((question, index) => {
        const displayIndex = startNumber + index;
        const options = question.options.map((option, optionIndex) => {
          return `
            <label class="choice">
              <input type="radio" name="${inputNamePrefix}${question.uid}" value="${optionIndex}">
              <span>${option}</span>
            </label>
          `;
        }).join("");

        return `
          <article class="question" id="${questionIdPrefix}-${question.uid}">
            <div class="question-head">
              <div>
                <div class="eyebrow question-eyebrow">Pregunta ${displayIndex}</div>
                <h3>${question.prompt}</h3>
              </div>
              <span class="badge">${question.tag}</span>
            </div>
            <div class="choices">${options}</div>
          </article>
        `;
      }).join("");

      return `
        <section class="section-block ${sectionKey === "commands" ? "commands" : ""}">
          <div class="section-head">
            <div>
              <span class="eyebrow">${meta.badge}</span>
              <h2>${meta.label}</h2>
              <p>${meta.description}</p>
            </div>
            <div class="section-count">${sectionQuestions.length} preguntas</div>
          </div>
          <div class="question-cluster">${cards}</div>
        </section>
      `;
    }

    function renderQuestionSet(targetNode, questions, sectionOrder, options = {}) {
      let startNumber = 1;
      targetNode.innerHTML = sectionOrder.map((sectionKey) => {
        const sectionQuestions = questions.filter((question) => question.sectionKey === sectionKey);
        const markup = renderSection(sectionKey, sectionQuestions, startNumber, options);
        startNumber += sectionQuestions.length;
        return markup;
      }).join("");

      targetNode.querySelectorAll(".question").forEach((node, index) => {
        node.style.animationDelay = `${index * 38}ms`;
      });
    }

    function renderQuestions() {
      renderQuestionSet(questionList, activeQuestions, SECTION_ORDER);
    }

    function renderCommandExamQuestions() {
      renderQuestionSet(commandsExamQuestionList, activeCommandExamQuestions, ["commands"], {
        inputNamePrefix: "cq",
        questionIdPrefix: "commands-exam-question"
      });
    }

    function getAnsweredCount(formNode) {
      return formNode.querySelectorAll('input[type="radio"]:checked').length;
    }

    function updateProgressState(questions, formNode, progressTextNode, progressBarNode, statusNode, defaultText, readyText) {
      const total = questions.length;
      const answered = getAnsweredCount(formNode);
      const percent = total ? (answered / total) * 100 : 0;
      progressTextNode.textContent = `${answered} de ${total} respondidas`;
      progressBarNode.style.width = `${percent}%`;

      if (answered === total && total > 0) {
        statusNode.textContent = readyText;
      } else {
        statusNode.textContent = defaultText;
      }
    }

    function updateProgress() {
      updateProgressState(
        activeQuestions,
        form,
        progressText,
        progressBar,
        statusCopy,
        "Cada nueva version usa solo teoria del texto y rota preguntas sin repetirlas hasta agotar el banco.",
        "Todo listo. Ya puedes corregir esta version de teoria."
      );
    }

    function updateCommandExamProgress() {
      updateProgressState(
        activeCommandExamQuestions,
        commandsExamForm,
        commandsExamProgressText,
        commandsExamProgressBar,
        commandsExamStatusCopy,
        "Cada nuevo examen usa solo comandos y operadores del material, sin repetir preguntas hasta agotar el banco.",
        "Todo listo. Ya puedes corregir este examen de comandos."
      );
    }

    function clearMissingMarks(rootNode) {
      rootNode.querySelectorAll(".question.missing").forEach((node) => {
        node.classList.remove("missing");
      });
    }

    function markMissingQuestions(questions, formNode, questionIdPrefix, inputNamePrefix) {
      questions.forEach((question) => {
        const article = document.getElementById(`${questionIdPrefix}-${question.uid}`);
        const checked = formNode.querySelector(`input[name="${inputNamePrefix}${question.uid}"]:checked`);
        if (article) {
          article.classList.toggle("missing", !checked);
        }
      });
    }

    function collectAnswers(questions, formNode, inputNamePrefix) {
      return questions.map((question) => {
        const checked = formNode.querySelector(`input[name="${inputNamePrefix}${question.uid}"]:checked`);
        return checked ? Number(checked.value) : null;
      });
    }

    function countCorrectAnswers(questions, answers) {
      return answers.reduce((total, answer, index) => {
        return total + Number(answer === questions[index].answer);
      }, 0);
    }

    function getFeedback(score, grouped) {
      const weakSections = Object.entries(grouped)
        .filter(([, values]) => values.correct / values.total < 0.6)
        .map(([sectionKey]) => SECTION_CONFIG[sectionKey].label.toLowerCase());

      if (score >= 9) {
        return "Dominas bien el contenido. Mantén el ritmo con nuevas versiones para reforzar memoria y velocidad.";
      }
      if (score >= 7) {
        return weakSections.length
          ? `Base solida. Conviene reforzar ${weakSections.join(" y ")}.`
          : "Base solida. Sigue alternando versiones para afianzar los detalles.";
      }
      if (score >= 5) {
        return weakSections.length
          ? `Vas encaminado, pero te conviene repasar ${weakSections.join(" y ")} antes de la evaluacion.`
          : "Vas encaminado, pero aun necesitas practicar otra ronda antes de la evaluacion.";
      }
      return "Necesitas repasar el resumen y seguir practicando con varias versiones antes de evaluarte.";
    }

    function renderResults(correctCount, answers) {
      const total = activeQuestions.length;
      const percentage = (correctCount / total) * 100;
      const score = ((correctCount / total) * 10).toFixed(1);

      const grouped = activeQuestions.reduce((accumulator, question, index) => {
        const current = accumulator[question.sectionKey] || { total: 0, correct: 0 };
        current.total += 1;
        if (answers[index] === question.answer) {
          current.correct += 1;
        }
        accumulator[question.sectionKey] = current;
        return accumulator;
      }, {});

      scoreNumber.textContent = score;
      scoreSummary.textContent = `Aciertos: ${correctCount} de ${total} (${percentage.toFixed(0)}%). ${getFeedback(Number(score), grouped)}`;

      chapterBreakdown.innerHTML = SECTION_ORDER
        .filter((sectionKey) => grouped[sectionKey])
        .map((sectionKey) => {
          const values = grouped[sectionKey];
          return `<li><strong>${SECTION_CONFIG[sectionKey].label}:</strong> ${values.correct}/${values.total} correctas</li>`;
        })
        .join("");

      reviewList.innerHTML = activeQuestions.map((question, index) => {
        const userAnswerIndex = answers[index];
        const isCorrect = userAnswerIndex === question.answer;
        const userAnswer = question.options[userAnswerIndex] || "Sin respuesta";
        const correctAnswer = question.options[question.answer];

        return `
          <article class="review-item ${isCorrect ? "" : "wrong"}">
            <h3>${index + 1}. ${question.prompt}</h3>
            <p><strong>Bloque:</strong> ${SECTION_CONFIG[question.sectionKey].label} · <strong>Tema:</strong> ${question.tag}</p>
            <p><strong>Tu respuesta:</strong> ${userAnswer}</p>
            <p><strong>Respuesta correcta:</strong> ${correctAnswer}</p>
            <p>${question.explanation}</p>
          </article>
        `;
      }).join("");

      results.classList.add("visible");
      results.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function getCommandExamFeedback(score) {
      if (score >= 9) {
        return "Dominio fuerte de los comandos del material. Ya puedes practicar velocidad y precision.";
      }
      if (score >= 7) {
        return "Buen nivel. Conviene reforzar redirecciones, pipes y detalles de uso para afinar el examen.";
      }
      if (score >= 5) {
        return "Vas avanzando, pero todavia te conviene repasar comandos, operadores y casos practicos del material.";
      }
      return "Necesitas repasar la seccion de comandos del material antes de repetir este examen.";
    }

    function renderCommandExamResults(correctCount, answers) {
      const total = activeCommandExamQuestions.length;
      const percentage = total ? (correctCount / total) * 100 : 0;
      const score = total ? ((correctCount / total) * 10).toFixed(1) : "0.0";

      const grouped = activeCommandExamQuestions.reduce((accumulator, question, index) => {
        const current = accumulator[question.tag] || { total: 0, correct: 0 };
        current.total += 1;
        if (answers[index] === question.answer) {
          current.correct += 1;
        }
        accumulator[question.tag] = current;
        return accumulator;
      }, {});

      commandsExamScoreNumber.textContent = score;
      commandsExamScoreSummary.textContent = `Aciertos: ${correctCount} de ${total} (${percentage.toFixed(0)}%). ${getCommandExamFeedback(Number(score))}`;

      commandsExamBreakdown.innerHTML = Object.entries(grouped)
        .map(([tag, values]) => `<li><strong>${tag}:</strong> ${values.correct}/${values.total} correctas</li>`)
        .join("");

      commandsExamReviewList.innerHTML = activeCommandExamQuestions.map((question, index) => {
        const userAnswerIndex = answers[index];
        const isCorrect = userAnswerIndex === question.answer;
        const userAnswer = question.options[userAnswerIndex] || "Sin respuesta";
        const correctAnswer = question.options[question.answer];

        return `
          <article class="review-item ${isCorrect ? "" : "wrong"}">
            <h3>${index + 1}. ${question.prompt}</h3>
            <p><strong>Bloque:</strong> Comandos del material · <strong>Tema:</strong> ${question.tag}</p>
            <p><strong>Tu respuesta:</strong> ${userAnswer}</p>
            <p><strong>Respuesta correcta:</strong> ${correctAnswer}</p>
            <p>${question.explanation}</p>
          </article>
        `;
      }).join("");

      commandsExamResults.classList.add("visible");
      commandsExamResults.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function renderSearchFilters() {
      searchFilters.innerHTML = Object.entries(SEARCH_SOURCES).map(([key, value]) => {
        const activeClass = key === activeSource ? " active" : "";
        return `<button type="button" class="filter-chip${activeClass}" data-source="${key}">${value.label}</button>`;
      }).join("");

      searchFilters.querySelectorAll(".filter-chip").forEach((button) => {
        button.addEventListener("click", () => {
          activeSource = button.dataset.source;
          renderSearchFilters();
          renderSearchResults(searchInput.value.trim());
        });
      });
    }

    function renderSearchExamples() {
      searchExamples.innerHTML = SEARCH_EXAMPLES.map((example) => {
        return `<button type="button" class="search-example" data-query="${escapeHtml(example)}">${escapeHtml(example)}</button>`;
      }).join("");

      searchExamples.querySelectorAll(".search-example").forEach((button) => {
        button.addEventListener("click", () => {
          searchInput.value = button.dataset.query;
          renderSearchResults(button.dataset.query);
          searchInput.focus();
        });
      });
    }

    function filterReferenceEntries(query) {
      const normalizedQuery = normalizeText(query);
      const terms = normalizedQuery.split(/\s+/).filter(Boolean);

      let entries = getSearchCorpus();
      if (activeSource !== "all") {
        entries = entries.filter((entry) => entry.sourceKey === activeSource);
      }

      if (!terms.length) {
        return entries;
      }

      return entries
        .map((entry) => ({
          entry,
          ...getEntryScore(entry, terms, normalizedQuery)
        }))
        .filter((item) => item.matchedTerms > 0)
        .sort((left, right) => {
          if (left.fullMatch !== right.fullMatch) {
            return Number(right.fullMatch) - Number(left.fullMatch);
          }
          if (left.matchedTerms !== right.matchedTerms) {
            return right.matchedTerms - left.matchedTerms;
          }
          return right.score - left.score;
        })
        .map((item) => item.entry);
    }

    function renderSearchResults(query = "") {
      const entries = filterReferenceEntries(query);
      const normalizedQuery = normalizeText(query);
      const isSearching = normalizedQuery.length > 0;

      if (!entries.length) {
        searchHelper.textContent = "No hubo coincidencias con esa busqueda. Prueba otra palabra o cambia el filtro de fuente.";
        searchResults.innerHTML = `
          <article class="search-empty">
            <strong>Sin resultados.</strong>
            <p>Intenta buscar terminos como primera regla, recuperacion, nivel de servicio, grep, pipes, cut, chmod o automatizacion.</p>
          </article>
        `;
        return;
      }

      const displayedEntries = isSearching ? entries.slice(0, 10) : entries.slice(0, 8);
      searchHelper.textContent = isSearching
        ? `Se encontraron ${entries.length} coincidencias. Puedes buscar una tarea como crear carpeta o guardar errores y veras el comando sugerido con pasos de uso.`
        : "Resultados destacados del material disponible. Escribe una accion o pulsa una sugerencia para ver como hacerlo.";

      searchResults.innerHTML = displayedEntries.map((entry) => {
        if (entry.kind === "guide") {
          const scenarioAction = entry.scenarioId
            ? `<button type="button" class="guide-action" data-scenario-id="${entry.scenarioId}">Ver escenario relacionado</button>`
            : "";

          return `
            <article class="search-card guide-card">
              <span class="search-source">${entry.sourceLabel}</span>
              <h3>${escapeHtml(entry.title)}</h3>
              <p>${escapeHtml(entry.description || entry.text.split(". ")[0])}</p>
              <div class="search-command-line">${escapeHtml(entry.example)}</div>
              <ul class="search-step-list">${entry.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ul>
              <div class="search-card-actions">
                <button type="button" class="guide-action" data-guide-key="${entry.guideKey}">Seleccionar comando</button>
                ${scenarioAction}
              </div>
            </article>
          `;
        }

        return `
          <article class="search-card">
            <span class="search-source">${entry.sourceLabel}</span>
            <h3>${escapeHtml(entry.title)}</h3>
            <p>${escapeHtml(buildExcerpt(entry.text, query))}</p>
          </article>
        `;
      }).join("");

      searchResults.querySelectorAll("[data-guide-key]").forEach((button) => {
        button.addEventListener("click", () => {
          activeCommandGuideKey = button.dataset.guideKey;
          renderMaterialCommandList();
          renderCommandGuide();
          materialCommandList.scrollIntoView({ behavior: "smooth", block: "center" });
        });
      });

      searchResults.querySelectorAll("[data-scenario-id]").forEach((button) => {
        button.addEventListener("click", () => {
          activateScenario(button.dataset.scenarioId);
        });
      });
    }

    function renderTerminalScenarios() {
      terminalScenarios.innerHTML = kaliScenarios.map((scenario) => {
        const activeClass = scenario.id === activeTerminalScenario ? " active" : "";
        return `
          <button type="button" class="scenario-chip${activeClass}" data-scenario="${scenario.id}">
            <strong>${escapeHtml(scenario.label)}</strong>
            <span>${escapeHtml(scenario.summary)}</span>
          </button>
        `;
      }).join("");

      terminalScenarios.querySelectorAll(".scenario-chip").forEach((button) => {
        button.addEventListener("click", () => {
          activateScenario(button.dataset.scenario);
        });
      });
    }

    function moveTerminalStep(direction) {
      const scenario = kaliScenarios.find((item) => item.id === activeTerminalScenario) || kaliScenarios[0];
      const studyIndexes = getStudyLineIndexes(scenario);
      const currentPosition = studyIndexes.indexOf(activeTerminalLineIndex);
      const nextPosition = Math.max(0, Math.min(studyIndexes.length - 1, currentPosition + direction));
      activeTerminalLineIndex = studyIndexes[nextPosition];
      renderTerminalOutput();
    }

    function renderTerminalOutput() {
      const scenario = kaliScenarios.find((item) => item.id === activeTerminalScenario) || kaliScenarios[0];
      const studyIndexes = getStudyLineIndexes(scenario);
      const currentPosition = Math.max(0, studyIndexes.indexOf(activeTerminalLineIndex));
      terminalTitle.textContent = `kali@kali: ~ · ${scenario.title}`;
      terminalStepCurrent.textContent = String(currentPosition + 1);
      terminalStepTotal.textContent = String(studyIndexes.length);
      terminalPrev.disabled = currentPosition === 0;
      terminalNext.disabled = currentPosition === studyIndexes.length - 1;

      terminalScreen.innerHTML = scenario.lines.map((line, index) => {
        if (index > activeTerminalLineIndex) {
          return "";
        }

        const activeClass = index === activeTerminalLineIndex ? " active" : "";
        return `
          <button type="button" class="terminal-line terminal-hit ${line.kind}${activeClass}" data-line-index="${index}">
            ${renderTerminalLineContent(line, index === activeTerminalLineIndex)}
          </button>
        `;
      }).join("");

      terminalScreen.querySelectorAll(".terminal-hit").forEach((button) => {
        button.addEventListener("click", () => {
          activeTerminalLineIndex = Number(button.dataset.lineIndex);
          renderTerminalOutput();
        });
      });

      animateTerminalCurrentLine(scenario.lines[activeTerminalLineIndex]);

      const insight = getTerminalInsight(scenario, activeTerminalLineIndex);
      terminalStepKind.textContent = insight.kind;
      terminalStepTitle.textContent = insight.title;
      terminalStepDescription.textContent = insight.description;
      terminalDetailList.innerHTML = insight.details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join("");
      terminalNote.innerHTML = `<strong>Escenario:</strong> ${escapeHtml(scenario.description)}<br><strong>Idea clave:</strong> ${escapeHtml(scenario.note)}`;
    }

    function buildQuiz(scrollToTop = false) {
      version += 1;
      const selectedQuestions = pickQuestions("theory", THEORY_QUIZ_COUNT);

      activeQuestions = selectedQuestions.map((question, index) => ({
        ...question,
        uid: index
      }));

      renderQuestions();
      form.reset();
      clearMissingMarks(questionList);
      results.classList.remove("visible");
      totalQuestions.textContent = String(activeQuestions.length);
      theoryQuizCount.textContent = `${activeQuestions.length} preguntas`;
      versionCounter.textContent = String(version);
      updateProgress();

      if (scrollToTop) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }

    function buildCommandExam(scrollIntoView = false) {
      activeCommandExamQuestions = pickQuestions("commands", COMMAND_EXAM_COUNT).map((question, index) => ({
        ...question,
        uid: index
      }));

      renderCommandExamQuestions();
      commandsExamForm.reset();
      clearMissingMarks(commandsExamQuestionList);
      commandsExamResults.classList.remove("visible");
      commandsExamCount.textContent = `${activeCommandExamQuestions.length} preguntas`;
      commandsTotalStat.textContent = String(activeCommandExamQuestions.length);
      updateCommandExamProgress();

      if (scrollIntoView) {
        commandsExamForm.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    form.addEventListener("change", () => {
      clearMissingMarks(questionList);
      if (results.classList.contains("visible")) {
        results.classList.remove("visible");
      }
      updateProgress();
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const answers = collectAnswers(activeQuestions, form, "q");

      if (answers.some((answer) => answer === null)) {
        markMissingQuestions(activeQuestions, form, "question", "q");
        statusCopy.textContent = "Faltan preguntas por responder. Revisa las resaltadas antes de corregir.";
        const firstMissingIndex = answers.findIndex((answer) => answer === null);
        const firstMissing = activeQuestions[firstMissingIndex];
        document.getElementById(`question-${firstMissing.uid}`).scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }

      renderResults(countCorrectAnswers(activeQuestions, answers), answers);
    });

    commandsExamForm.addEventListener("change", () => {
      clearMissingMarks(commandsExamQuestionList);
      if (commandsExamResults.classList.contains("visible")) {
        commandsExamResults.classList.remove("visible");
      }
      updateCommandExamProgress();
    });

    commandsExamForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const answers = collectAnswers(activeCommandExamQuestions, commandsExamForm, "cq");

      if (answers.some((answer) => answer === null)) {
        markMissingQuestions(activeCommandExamQuestions, commandsExamForm, "commands-exam-question", "cq");
        commandsExamStatusCopy.textContent = "Faltan preguntas por responder. Revisa las resaltadas antes de corregir el examen.";
        const firstMissingIndex = answers.findIndex((answer) => answer === null);
        const firstMissing = activeCommandExamQuestions[firstMissingIndex];
        document.getElementById(`commands-exam-question-${firstMissing.uid}`).scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }

      renderCommandExamResults(countCorrectAnswers(activeCommandExamQuestions, answers), answers);
    });

    searchInput.addEventListener("input", () => {
      renderSearchResults(searchInput.value.trim());
    });

    terminalPrev.addEventListener("click", () => moveTerminalStep(-1));
    terminalNext.addEventListener("click", () => moveTerminalStep(1));
    terminalReplay.addEventListener("click", () => renderTerminalOutput());
    commandDetailSearch.addEventListener("click", () => {
      focusGuideSearch(getCommandGuideByKey(activeCommandGuideKey));
    });
    commandDetailScenario.addEventListener("click", () => {
      const guide = getCommandGuideByKey(activeCommandGuideKey);
      if (guide.scenarioId) {
        activateScenario(guide.scenarioId);
      }
    });
    practiceReset.addEventListener("click", () => buildPracticeSet());
    resetTop.addEventListener("click", () => buildQuiz(true));
    resetBottom.addEventListener("click", () => buildQuiz(true));
    commandsExamResetTop.addEventListener("click", () => buildCommandExam(true));
    commandsExamResetBottom.addEventListener("click", () => buildCommandExam(true));

    renderMaterialCommandList();
    renderCommandGuide();
    renderSearchExamples();
    renderSearchFilters();
    renderSearchResults("");
    renderTerminalScenarios();
    renderTerminalOutput();
    buildPracticeSet();
    buildQuiz(false);
    buildCommandExam(false);