/**
 * Single source of truth for the interactive concept map.
 * Add or edit concepts here; the map and panels render from this data.
 * User-visible copy is neutral professional Spanish.
 */

export const VIEWBOX = { width: 1200, height: 800 };

/**
 * Two levels share one page. Each level owns its concepts, positions,
 * connections and journey order; concept ids are unique across levels.
 */

/** Suggested journey order over the base map (1 and 5 are the connected "bosses"). */
const baseJourneyOrder = [
  'por-que-un-agente',
  'motor-llm',
  'estructura-proyecto',
  'git-con-ia',
  'caparazon-agente',
  'ecosistema-ia',
  'pruebas-con-ia',
  'produccion',
];

const baseConcepts = [
  {
    id: 'por-que-un-agente',
    number: 1,
    title: '¿Por qué un agente?',
    mapLabel: ['¿Por qué un agente?'],
    tagline: 'De preguntar y pegar a delegar la tarea completa.',
    position: { x: 170, y: 470 },
    radius: 48,
    connections: ['motor-llm'],
    status: 'published',
    analogy:
      'Hoy usa ChatGPT como portería: se le pregunta y se le responde. Un agente es un asistente que se sienta en su escritorio: edita sus archivos, ejecuta comandos y termina la tarea, no solo la explica.',
    sections: [
      {
        heading: 'ChatGPT vs. agente',
        bullets: [
          'ChatGPT responde: leer, copiar y pegar quedan a mano.',
          'Un agente actúa: aplica los cambios en el proyecto, no solo los explica.',
          'La persona revisa y aprueba; la parte repetitiva corre sola, con supervisión.',
        ],
      },
      {
        heading: '¿Qué cosas puede hacer por mí?',
        intro: 'Tareas típicas en proyectos heredados:',
        bullets: [
          'Refactorizar un módulo VB6 y dejar el cambio listo para revisar (diff).',
          'Generar y ejecutar pruebas hasta que todas pasen, paso a paso.',
          'Documentar una macro heredada de Excel explicando qué hace cada parte.',
        ],
      },
    ],
    teaser: null,
  },
  {
    id: 'motor-llm',
    number: 2,
    title: 'El motor: LLM, tokens, contexto y razonamiento',
    mapLabel: ['LLM, tokens', 'y contexto'],
    tagline: 'Cómo piensa el modelo y qué cuesta cada palabra.',
    position: { x: 400, y: 300 },
    radius: 44,
    connections: ['estructura-proyecto'],
    status: 'published',
    analogy:
      'El LLM es el motor; cada palabra que lee y escribe se mide en tokens; el contexto es su «memoria de escritorio»: solo cuenta lo que entra en la ventana; el razonamiento es pedirle que piense más antes de responder.',
    sections: [
      {
        heading: 'Qué es un token y por qué se factura',
        bullets: [
          'Un token es un trozo de texto: a veces una palabra, a veces la mitad.',
          'Todo lo que el modelo lee y escribe se cobra por token, al dar y al recibir.',
          'Por eso las instrucciones eternas salen caras: instrucciones cortas y en archivos, mejor.',
        ],
      },
      {
        heading: 'La ventana de contexto y por qué «olvida»',
        intro: 'El contexto es el escritorio del modelo: solo cabe lo que entra en la ventana.',
        steps: [
          'Cada mensaje entra en la ventana de contexto; ahí vive todo lo que el modelo «ve».',
          'Cuando la conversación crece, lo más antiguo sale del escritorio: por eso «olvida».',
          'Coloque en archivos del proyecto lo que debe sobrevivir (instrucciones, decisiones) y señale dónde están.',
          'Vuelva a mostrar lo importante cuando haga falta; no espere que el modelo lo recuerde solo.',
        ],
      },
      {
        heading: 'Modelos y esfuerzo de razonamiento',
        bullets: [
          'Elija modelo según la tarea: rápido y económico para lo simple, potente para lógica difícil.',
          'Más esfuerzo de razonamiento significa más lento y más costoso: resérvelo para los problemas que lo necesitan.',
        ],
      },
    ],
    teaser: null,
  },
  {
    id: 'estructura-proyecto',
    number: 3,
    title: 'Estructura del proyecto con IA',
    mapLabel: ['Estructura', 'del proyecto'],
    tagline: 'Un taller ordenado que el agente entiende sin preguntar.',
    position: { x: 610, y: 450 },
    radius: 44,
    connections: ['git-con-ia', 'caparazon-agente'],
    status: 'published',
    analogy:
      'Un proyecto bien estructurado es un taller ordenado: si las herramientas están etiquetadas, el ayudante nuevo encuentra todo sin preguntar.',
    sections: [
      {
        heading: 'El mapa del taller',
        intro: 'Una estructura mínima que un agente recorre sin ayuda:',
        code: [
          'mi-proyecto/',
          '├── src/        código de la aplicación',
          '├── tests/      pruebas automáticas',
          '├── docs/       notas y decisiones',
          '└── AGENTS.md   instrucciones permanentes',
        ],
      },
      {
        heading: 'El archivo de instrucciones permanentes',
        intro: 'AGENTS.md es el cartel fijo del taller: el agente lo lee al entrar, cada vez.',
        bullets: [
          'Qué tecnologías se usan y qué convenciones se respetan.',
          'Cómo se ejecutan las pruebas y el build.',
          'Qué no se debe tocar sin permiso (datos, credenciales, configuración).',
        ],
      },
      {
        heading: 'Reglas de oro',
        bullets: [
          'Cosas pequeñas y separadas: un cambio por vez, fácil de revisar.',
          'Las instrucciones viven en archivos del proyecto, no en el historial del chat.',
          'El agente debe leer el mapa del proyecto, no fiarse de su memoria.',
        ],
      },
    ],
    teaser: null,
  },
  {
    id: 'git-con-ia',
    number: 4,
    title: 'Git con IA',
    mapLabel: ['Git con IA'],
    tagline: 'Ramas, commits y diffs con un copiloto.',
    position: { x: 830, y: 300 },
    radius: 44,
    connections: ['caparazon-agente'],
    status: 'published',
    analogy:
      'Git es el «Ctrl+Z con memoria»: cada commit guarda una versión del proyecto y, si el agente rompe algo, se vuelve atrás sin perder el trabajo.',
    sections: [
      {
        heading: 'Qué es un commit',
        bullets: [
          'Un commit es una instantánea del proyecto: un punto de guardado al que siempre se puede volver.',
          'Cada cambio del agente puede ser un commit; así el trabajo nunca se pierde.',
        ],
      },
      {
        heading: 'El agente propone, usted aprueba',
        bullets: [
          'El agente edita archivos y git muestra el diff: qué cambió, línea por línea.',
          'Revise el diff antes de aceptar y haga un commit por cambio lógico, no una mega-entrega.',
        ],
      },
      {
        heading: 'Una rama para experimentar',
        bullets: [
          'Una branch es un galpón aparte: se prueba ahí sin riesgo; si sale mal, se descarta.',
          'Para empezar: pida al agente que le explique la salida de git status y git diff.',
        ],
      },
    ],
    teaser: null,
  },
  {
    id: 'caparazon-agente',
    number: 5,
    title: 'Agents.md, skills, hooks y MCPs',
    mapLabel: ['Agents.md, skills,', 'hooks y MCPs'],
    tagline: 'El caparazón que convierte un chat en un equipo de trabajo.',
    position: { x: 800, y: 610 },
    radius: 56,
    connections: ['produccion'],
    status: 'published',
    analogy:
      'Como una app WinForms se personaliza con referencias y complementos, un agente se extiende: instrucciones permanentes, recetas reutilizables, controles automáticos y conectores hacia sus sistemas.',
    sections: [
      {
        heading: 'AGENTS.md y CLAUDE.md — las reglas permanentes',
        bullets: [
          'Un archivo de instrucciones que el agente lee al inicio de cada sesión; el nombre cambia según la herramienta, la idea es la misma.',
          'Qué poner: la estructura del proyecto, las convenciones de código y qué no debe tocar.',
        ],
      },
      {
        heading: 'Skills y hooks — recetas y controles',
        bullets: [
          'Skills: manuales paso a paso y reutilizables que el agente carga cuando los necesita.',
          'Hooks: controles automáticos que se disparan en eventos (ejecutar pruebas tras una edición, bloquear una carpeta prohibida).',
        ],
      },
      {
        heading: 'MCPs — el enchufe universal de herramientas',
        bullets: [
          'Un protocolo de conectores que permite al agente operar herramientas externas: la base de datos, el gestor de tareas, la nube.',
          'Piense en puertos estándar: un mismo enchufe para conectar el agente a sus sistemas.',
        ],
      },
    ],
    teaser: null,
  },
  {
    id: 'ecosistema-ia',
    number: 6,
    title: 'El ecosistema: engram y gentle-ai',
    mapLabel: ['Memoria y control'],
    tagline: 'La memoria que sobrevive y el revisor que pide evidencia.',
    position: { x: 1085, y: 215 },
    radius: 44,
    connections: ['caparazon-agente', 'pruebas-con-ia'],
    status: 'published',
    analogy:
      'El agente trabaja por guardias: una sesión termina y otra arranca. Engram es el cuaderno del equipo que sobrevive entre guardias con las decisiones del proyecto; gentle-ai es el supervisor que no deja declarar «done» sin pasar el control.',
    sections: [
      {
        heading: 'engram — la memoria que sobrevive',
        bullets: [
          'Guarda decisiones, correcciones y convenciones del proyecto como observaciones recordadas, no en el historial del chat que desaparece.',
          'En la sesión siguiente el agente (o usted) las recupera: menos repetir explicaciones y menos tokens en cada consulta.',
          'Qué guardar: decisiones de arquitectura, causas raíz de los bugs corregidos y convenciones del equipo. Si pronto va a importar, guárdelo.',
        ],
      },
      {
        heading: 'gentle-ai — el supervisor del proyecto',
        bullets: [
          'Mantiene indexadas las skills disponibles e inyecta en cada tarea las que corresponden (skill registry).',
          'Revisa los cambios publicados antes de dar el trabajo por terminado: pide evidencia y verificaciones alternas; un caso se cierra con criterios verificados, no con una declaración.',
          'Promueve el flujo estructurado (SDD): propuesta, specs, diseño, tareas, apply, verify y archive; cada fase deja un artefacto en el que la siguiente se apoya.',
        ],
      },
      {
        heading: '¿Cuándo vale la pena?',
        bullets: [
          'Rinde en proyectos de varias sesiones: producción, trabajo en equipo, refactorizaciones largas; olvidar lo de ayer ahí cuesta dinero real.',
          'Conviene empezar liviano: primero la memoria (engram); el flujo de revisión y SDD crece a medida que el proyecto se vuelve crítico.',
        ],
      },
    ],
    teaser: null,
  },
  {
    id: 'pruebas-con-ia',
    number: 7,
    title: 'Probar con IA',
    mapLabel: ['Probar con IA'],
    tagline: 'Pruebas generadas y mantenidas con ayuda.',
    position: { x: 1030, y: 430 },
    radius: 44,
    connections: [],
    status: 'published',
    analogy:
      'Si no mide, no sabrá si un cambio del agente rompió algo: las pruebas automáticas son su red de seguridad.',
    sections: [
      {
        heading: 'Qué es una prueba automática',
        bullets: [
          'Es código que comprueba otro código: «dada esta entrada, espero este resultado».',
          'El agente puede escribirlas y también ejecutarlas por usted.',
        ],
      },
      {
        heading: 'El ciclo con el agente',
        bullets: [
          'Pida que ejecute las pruebas antes y después de cada cambio: verde o rojo.',
          'Si algo se rompe, el mismo agente lo corrige hasta volver al verde.',
        ],
      },
      {
        heading: 'Buenas prácticas',
        bullets: [
          'Pruebas pequeñas e independientes: una comprobación clara en cada una.',
          'Nunca pruebe solo con datos de producción.',
          'Una prueba que no puede fallar no prueba nada: verifíquela con un caso que falle.',
        ],
      },
    ],
    teaser: null,
  },
  {
    id: 'produccion',
    number: 8,
    title: 'Producción: buenas prácticas y ahorro de tokens',
    mapLabel: ['Producción y', 'buenas prácticas'],
    tagline: 'Salir a producción sin fundir la factura.',
    position: { x: 1060, y: 660 },
    radius: 44,
    connections: [],
    status: 'published',
    analogy:
      'Antes de emitir los planos, el arquitecto los revisa: usted supervisa, el agente ejecuta — y cada token es material que se paga.',
    sections: [
      {
        heading: 'Usted supervisa, el agente ejecuta',
        bullets: [
          'Revise cada cambio antes de aceptarlo: commits pequeños, fáciles de auditar.',
          'Backup y git antes de los cambios grandes; nada llega a producción sin pasar por pruebas.',
        ],
      },
      {
        heading: 'El presupuesto de tokens',
        bullets: [
          'Los tokens son material facturable: pida de a poco y solo los archivos necesarios, no el repositorio entero.',
          'Instrucciones concisas con archivos de contexto (AGENTS.md) en lugar de pegar todo el material en el chat.',
          'Elija el modelo más pequeño que resuelva la tarea; reserve el potente para los problemas difíciles.',
        ],
      },
      {
        heading: 'La regla de oro',
        bullets: [
          'Si un resultado no lo convence, no lo acepte: itere con el agente hasta que quede legible.',
          'La responsabilidad final del código que sale a producción siempre es humana.',
        ],
      },
    ],
    teaser: null,
  },
];

/** Suggested journey order over the intermediate map (left to right). */
const intermedioJourneyOrder = [
  'harness',
  'loop-agentico',
  'cache',
  'claude-code',
  'codex',
  'opencode',
  'vscode-extensiones',
];

const intermedioConcepts = [
  {
    id: 'harness',
    number: 1,
    title: 'El harness: el arnés del agente',
    mapLabel: ['El harness'],
    tagline: 'El programa que pone al modelo a trabajar sobre su proyecto.',
    position: { x: 140, y: 380 },
    radius: 50,
    connections: ['loop-agentico'],
    status: 'published',
    analogy:
      'El modelo es el motor; el harness es el chasis con volante, pedales y tablero que lo pone a trabajar sobre SU proyecto.',
    sections: [
      {
        heading: 'Qué es',
        bullets: [
          'Es el programa que ejecuta el modelo en un bucle y lo conecta con su proyecto.',
          'Le da herramientas concretas: leer y escribir archivos, ejecutar comandos en la terminal.',
          'Sin harness, el modelo solo conversa: no puede tocar el código ni ver el resultado.',
        ],
      },
      {
        heading: 'Qué aporta',
        bullets: [
          'Permisos de herramientas: usted decide qué puede leer, escribir o ejecutar.',
          'Sesiones y reglas del proyecto (AGENTS.md o CLAUDE.md) que el agente lee al inicio.',
          'Revisión de cambios antes de aplicarlos: el diff queda a la vista.',
          'Claude Code, Codex y OpenCode son harnesses: el mismo motor, distinto chasis.',
        ],
      },
      {
        heading: 'Cómo elegir',
        bullets: [
          'Defina primero qué necesita: terminal, editor o ambos.',
          'Compare si permite elegir modelo y proveedor, y cómo gestiona permisos.',
          'Pruebe la misma tarea en dos harnesses antes de adoptar uno.',
        ],
      },
    ],
    teaser: null,
  },
  {
    id: 'loop-agentico',
    number: 2,
    title: 'El loop agéntico',
    mapLabel: ['El loop agéntico'],
    tagline: 'Piensa, actúa, observa y repite hasta cumplir el objetivo.',
    position: { x: 330, y: 220 },
    radius: 50,
    connections: ['cache'],
    status: 'published',
    analogy:
      'Como un operario que mira, prueba y corrige: el agente no responde una vez, itera hasta cumplir el objetivo.',
    sections: [
      {
        heading: 'El ciclo',
        bullets: [
          'Piensa: decide el siguiente paso con el contexto disponible.',
          'Actúa: lee un archivo, ejecuta un comando o edita el código.',
          'Observa: recibe la salida real de esa acción.',
          'Repite hasta cumplir el objetivo o agotar el límite.',
        ],
      },
      {
        heading: 'Parar a tiempo',
        bullets: [
          'Defina de antemano el criterio de éxito: pruebas que deben pasar, archivos que deben cambiar.',
          'Fije un límite de intentos o de tiempo; un bucle abierto consume tokens sin avanzar.',
          'Detecte la repetición: si repite la misma acción sin cambio, cambie de enfoque o pida ayuda.',
          'Vigile el alcance: el agente no debe tocar archivos ajenos a la tarea.',
        ],
      },
      {
        heading: 'Cómo dirigirlo',
        bullets: [
          'Pida un objetivo verificable, no un deseo vago: «las pruebas pasan», no «que funcione».',
          'Revise los resultados intermedios: diffs y salidas de terminal.',
          'Use las pruebas como señal de parada: verde significa objetivo cumplido.',
        ],
      },
    ],
    teaser: null,
  },
  {
    id: 'cache',
    number: 3,
    title: 'Caché: no pagar dos veces lo mismo',
    mapLabel: ['Caché'],
    tagline: 'Reutilizar contexto procesado ahorra latencia y costo.',
    position: { x: 520, y: 380 },
    radius: 48,
    connections: ['claude-code'],
    status: 'published',
    analogy:
      'Es la memoria de trabajo del modelo: lo que ya leyó no se vuelve a procesar (ni a pagar) si no cambió.',
    sections: [
      {
        heading: 'Qué se reutiliza',
        bullets: [
          'El proveedor guarda fragmentos de contexto ya procesados.',
          'Si el prefijo se repite, la respuesta llega más rápido y cuesta menos.',
          'El ahorro depende del proveedor y del tamaño del prefijo reutilizado.',
        ],
      },
      {
        heading: 'Cómo aprovecharla',
        bullets: [
          'Deje primero el contenido estable: reglas del proyecto, documentación, archivos base.',
          'Evite editar el inicio del contexto en medio de una tarea: invalida lo cacheado.',
          'Agrupe solicitudes que comparten el mismo contexto.',
        ],
      },
      {
        heading: 'Cuándo se invalida',
        bullets: [
          'Cualquier cambio en el contenido cacheado obliga a procesarlo de nuevo.',
          'Los cambios al final del contexto afectan menos que los del principio.',
          'Mida el costo real antes de asumir un ahorro.',
        ],
      },
    ],
    teaser: null,
  },
  {
    id: 'claude-code',
    number: 4,
    title: 'Claude Code',
    mapLabel: ['Claude Code'],
    tagline: 'El harness de terminal de Anthropic, con reglas y permisos explícitos.',
    position: { x: 720, y: 250 },
    radius: 56,
    connections: ['codex', 'opencode', 'vscode-extensiones'],
    status: 'published',
    analogy:
      'Un agente de terminal con la disciplina de un equipo de obra: permisos, reglas y revisión en cada paso.',
    sections: [
      {
        heading: 'Qué es',
        bullets: [
          'Es el harness de terminal de Anthropic para trabajar sobre el repositorio.',
          'Lee y edita archivos, ejecuta comandos y sigue las reglas de CLAUDE.md.',
          'Trabaja en sesión: conserva el hilo de la tarea y muestra los cambios.',
        ],
      },
      {
        heading: 'Piezas clave',
        bullets: [
          'CLAUDE.md: instrucciones permanentes del proyecto.',
          'Subagents y skills: recetas especializadas para tareas concretas.',
          'Hooks: controles automáticos que se disparan en eventos.',
          'MCP y permisos explícitos: conectores externos y límites de qué archivos y comandos puede usar.',
        ],
      },
      {
        heading: 'Cuándo conviene',
        bullets: [
          'Refactorizaciones de varios archivos y flujos con git.',
          'Sesiones largas donde importa conservar contexto y reglas.',
          'Requiere comodidad con la terminal y revisión de diffs.',
        ],
      },
    ],
    teaser: null,
  },
  {
    id: 'codex',
    number: 5,
    title: 'Codex',
    mapLabel: ['Codex'],
    tagline: 'El agente de OpenAI para trabajar en el repositorio.',
    position: { x: 930, y: 130 },
    radius: 48,
    connections: [],
    status: 'published',
    analogy:
      'El mismo oficio, otra marca de herramientas: un agente para trabajar en el repositorio desde terminal o IDE.',
    sections: [
      {
        heading: 'Qué es',
        bullets: [
          'Es el agente de programación de OpenAI para el repositorio.',
          'Tiene variantes de terminal, editor y ejecución en la nube.',
          'Trabaja con el contexto del proyecto y devuelve cambios revisables.',
        ],
      },
      {
        heading: 'Diferencias prácticas',
        bullets: [
          'El aislamiento (sandbox) define qué puede tocar durante la ejecución.',
          'Las corridas en la nube sirven para tareas largas o en segundo plano.',
          'Verifique cómo gestiona permisos y diffs antes de adoptarlo.',
        ],
      },
      {
        heading: 'Cuándo conviene',
        bullets: [
          'Equipos que ya usan modelos de OpenAI y su facturación.',
          'Tareas que se benefician de ejecución aislada o remota.',
          'Compare con Claude Code en la misma tarea antes de elegir.',
        ],
      },
    ],
    teaser: null,
  },
  {
    id: 'opencode',
    number: 6,
    title: 'OpenCode',
    mapLabel: ['OpenCode'],
    tagline: 'Agente de terminal de código abierto y agnóstico de proveedor.',
    position: { x: 1030, y: 340 },
    radius: 48,
    connections: [],
    status: 'published',
    analogy:
      'Un taller abierto: el mismo agente, pero usted elige el motor y las herramientas.',
    sections: [
      {
        heading: 'Qué es',
        bullets: [
          'Es un agente de terminal de código abierto.',
          'Es agnóstico de proveedor: puede apuntar a distintos modelos y proveedores.',
          'Trabaja sobre el proyecto con herramientas de archivos y terminal.',
        ],
      },
      {
        heading: 'Qué gana',
        bullets: [
          'Libertad para cambiar de modelo según la tarea o el costo.',
          'Configuración de agentes y skills adaptada a su equipo.',
          'Plugins para ampliar herramientas y flujos.',
        ],
      },
      {
        heading: 'Qué mirar',
        bullets: [
          'La madurez y el soporte dependen de la configuración elegida.',
          'Mantenga las mismas reglas y disciplina de revisión que en otros harnesses.',
          'Pruebe la integración con su proveedor antes de estandarizar.',
        ],
      },
    ],
    teaser: null,
  },
  {
    id: 'vscode-extensiones',
    number: 7,
    title: 'VS Code y extensiones',
    mapLabel: ['VS Code'],
    tagline: 'El agente dentro del editor, con el diff a la vista.',
    position: { x: 940, y: 560 },
    radius: 52,
    connections: [],
    status: 'published',
    analogy:
      'El tablero del taller dentro del editor: ver el cambio mientras ocurre, sin salir de la ventana.',
    sections: [
      {
        heading: 'Dos familias',
        bullets: [
          'Autocompletado y chat (estilo Copilot): sugieren mientras escribe.',
          'Agentes con herramientas en el editor (estilo Cline o Continue): leen, editan y ejecutan.',
        ],
      },
      {
        heading: 'Ventaja del editor',
        bullets: [
          'Diff visual y aceptar o rechazar por bloque.',
          'Cómodo para quien ya trabaja todo el día en VS Code.',
          'El contexto del archivo abierto está a mano.',
        ],
      },
      {
        heading: 'Cuidado',
        bullets: [
          'El autocompletado no reemplaza un agente con acceso al proyecto.',
          'Los permisos y la revisión del diff siguen siendo su responsabilidad.',
          'Una extensión con demasiados permisos amplía el riesgo.',
        ],
      },
    ],
    teaser: null,
  },
];

/** Suggested journey order over the advanced map (left to right). */
const avanzadoJourneyOrder = [
  'ingenieria-contexto',
  'evals',
  'seguridad-permisos',
  'observabilidad',
  'agentes-paralelos',
  'sdd-escala',
  'herramientas-propias',
  'legado-con-agentes',
];

const avanzadoConcepts = [
  {
    id: 'ingenieria-contexto',
    number: 1,
    title: 'Ingeniería de contexto',
    mapLabel: ['Contexto y RAG'],
    tagline: 'Elegir qué información entra al modelo y dejar fuera el resto.',
    position: { x: 150, y: 540 },
    radius: 44,
    connections: ['evals'],
    status: 'published',
    analogy:
      'Preparar la carpeta de obra antes de la reunión: llevar los planos que importan, no el archivo completo.',
    sections: [
      {
        heading: 'El problema',
        bullets: [
          'Meter todo el proyecto en la ventana de contexto es caro, lento y diluye lo importante.',
          'La calidad depende de elegir: qué entra, qué queda fuera y por qué.',
          'El contexto se arma a propósito; no se acumula por inercia.',
        ],
      },
      {
        heading: 'Cómo se arma',
        bullets: [
          'Reglas estables: AGENTS.md con convenciones, comandos y límites del proyecto.',
          'Archivos relevantes para la tarea, no el repositorio completo.',
          'Mapa del proyecto (Codegraph) para ubicar símbolos y dependencias sin recorrer todo.',
          'Recuperación de documentos: buscar y adjuntar solo los fragmentos que importan.',
        ],
      },
      {
        heading: 'RAG en una línea',
        bullets: [
          'RAG busca fragmentos relevantes en un índice y adjunta solo esos al modelo.',
          'El índice se mantiene actualizado: si el documento cambia, la recuperación debe reflejarlo.',
          'Más señal y menos ruido: menos tokens y respuestas más precisas.',
        ],
      },
    ],
    teaser: null,
  },
  {
    id: 'evals',
    number: 2,
    title: 'Evals: medir al agente',
    mapLabel: ['Evals'],
    tagline: 'Medir con datos si un cambio mejora o empeora el trabajo del agente.',
    position: { x: 330, y: 680 },
    radius: 44,
    connections: ['seguridad-permisos'],
    status: 'published',
    analogy:
      'Como una planilla de prueba en Excel: mismos datos, mismo cálculo, y se compara el resultado.',
    sections: [
      {
        heading: 'Qué es un eval',
        bullets: [
          'Un conjunto de tareas con un resultado esperado, ejecutado de forma repetible.',
          'Cada corrida se compara contra la misma línea base.',
          'Sin criterio de resultado no hay eval: solo impresiones.',
        ],
      },
      {
        heading: 'Qué medir',
        bullets: [
          'Acierto: cuántas tareas quedan correctas.',
          'Costo y latencia por tarea, no un promedio general que esconde los casos caros.',
          'Cuánto hay que corregir después: el retrabajo también es una métrica.',
        ],
      },
      {
        heading: 'Regresiones',
        bullets: [
          'Cada cambio de prompt, modelo o herramienta se vuelve a medir contra la línea base.',
          'Una mejora en un caso no compensa una regresión en otro.',
          'Una demo no es evidencia; el eval es la evidencia.',
        ],
      },
    ],
    teaser: null,
  },
  {
    id: 'seguridad-permisos',
    number: 3,
    title: 'Seguridad y permisos',
    mapLabel: ['Seguridad'],
    tagline: 'Dar la llave del sector, no la del edificio entero.',
    position: { x: 330, y: 360 },
    radius: 44,
    connections: ['observabilidad'],
    status: 'published',
    analogy:
      'Un operario con llave del taller: conviene darle la llave de su sector, no la del edificio entero.',
    sections: [
      {
        heading: 'Mínimo privilegio',
        bullets: [
          'Permisos por herramienta y por carpeta: el agente accede solo a lo que necesita.',
          'Los comandos destructivos requieren aprobación explícita.',
          'Revise los permisos al cambiar de tarea; no arrastre accesos que ya no hacen falta.',
        ],
      },
      {
        heading: 'Inyección de prompts',
        bullets: [
          'Lo que el agente lee (código, webs, documentos) puede traer instrucciones maliciosas.',
          'Tratar el contenido como datos, nunca como órdenes.',
          'Las instrucciones válidas vienen del usuario y de los archivos de reglas del proyecto.',
        ],
      },
      {
        heading: 'Cadena de suministro',
        bullets: [
          'Los MCP servers y las skills de terceros ejecutan código: revise origen y mantenimiento.',
          'Fijar versiones evita que una actualización cambie el comportamiento sin aviso.',
          'Los secretos quedan fuera del repositorio y fuera del contexto del agente.',
        ],
      },
    ],
    teaser: null,
  },
  {
    id: 'observabilidad',
    number: 4,
    title: 'Observabilidad y trazabilidad',
    mapLabel: ['Observabilidad'],
    tagline: 'El libro de guardia del agente: qué pasó, cuándo y con qué resultado.',
    position: { x: 590, y: 520 },
    radius: 48,
    connections: ['agentes-paralelos', 'sdd-escala'],
    status: 'published',
    analogy:
      'El libro de guardia: quién hizo qué, cuándo y con qué resultado.',
    sections: [
      {
        heading: 'Qué registrar',
        bullets: [
          'Sesiones, comandos ejecutados y diffs aplicados, con hora y autor.',
          'Costo y latencia por tarea para detectar desvíos a tiempo.',
          'Qué herramientas y permisos usó cada corrida.',
        ],
      },
      {
        heading: 'Evidencia',
        bullets: [
          'Los registros de verificación permiten auditar semanas después qué pasó y por qué.',
          'Una traza completa vale más que un resumen: el detalle responde las preguntas.',
          'La evidencia se conserva junto al cambio, no en la memoria de quien lo hizo.',
        ],
      },
      {
        heading: 'Incidentes',
        bullets: [
          'Con trazas se aísla la causa: qué comando, qué archivo, qué decisión.',
          'Sin trazas se adivina, y adivinar cuesta más que registrar.',
          'Cada incidente deja una regla o un control nuevo para no repetirlo.',
        ],
      },
    ],
    teaser: null,
  },
  {
    id: 'agentes-paralelos',
    number: 5,
    title: 'Agentes en paralelo y worktrees',
    mapLabel: ['Paralelo'],
    tagline: 'Varias obras separadas, cada una con su plano, y una revisión al final.',
    position: { x: 790, y: 290 },
    radius: 44,
    connections: ['legado-con-agentes'],
    status: 'published',
    analogy:
      'Varios oficiales en obras separadas, cada uno con su plano; se juntan al final con revisión.',
    sections: [
      {
        heading: 'Cuándo paralelizar',
        bullets: [
          'Solo tareas independientes: módulos, pruebas y documentación que no se pisan.',
          'Nunca dos escritores sobre el mismo archivo: el conflicto se paga después.',
          'Si hay dependencia entre pasos, el paralelismo agrega riesgo sin ganar tiempo.',
        ],
      },
      {
        heading: 'Worktrees',
        bullets: [
          'Cada agente trabaja en una copia aislada del repositorio (worktree) y su propia rama.',
          'El merge se gestiona de forma explícita, con revisión de cada aporte.',
          'Los conflictos se resuelven en la integración, no se esconden en el camino.',
        ],
      },
      {
        heading: 'Orquestador',
        bullets: [
          'Un orquestador reparte tareas, fija presupuesto por worker y verifica resultados.',
          'La integración final se revisa; no se confía en la suma de partes.',
          'Los workers informan evidencia, no solo «listo».',
        ],
      },
    ],
    teaser: null,
  },
  {
    id: 'sdd-escala',
    number: 6,
    title: 'SDD a escala',
    mapLabel: ['SDD'],
    tagline: 'Un plano aprobado por etapas, con constancia en cada una.',
    position: { x: 790, y: 700 },
    radius: 48,
    connections: ['herramientas-propias'],
    status: 'published',
    analogy:
      'Un plano aprobado por etapas: nadie construye sin especificación y cada etapa deja constancia.',
    sections: [
      {
        heading: 'El flujo',
        bullets: [
          'Propuesta → especificación → diseño → tareas → implementación → verificación → archivo.',
          'Cada fase tiene entrada, salida y criterio de cierre.',
          'El archivo conserva el cambio terminado y su contexto.',
        ],
      },
      {
        heading: 'Contratos entre fases',
        bullets: [
          'Cada fase produce un artefacto verificable que la siguiente consume.',
          'Nada se inventa en la implementación: lo que no está en la especificación se discute antes.',
          'Los artefactos viven en el repositorio, no en el chat.',
        ],
      },
      {
        heading: 'Control entre fases',
        bullets: [
          'Se revisa antes de avanzar y el cambio de alcance se documenta.',
          'El porqué de cada decisión queda registrado para quien llegue después.',
          'Un gate entre fases evita construir sobre supuestos no aprobados.',
        ],
      },
    ],
    teaser: null,
  },
  {
    id: 'herramientas-propias',
    number: 7,
    title: 'Construir sus propias herramientas',
    mapLabel: ['Herramientas', 'propias'],
    tagline: 'Fabricar a medida lo que falta; no fabricar lo que ya viene en la caja.',
    position: { x: 980, y: 500 },
    radius: 44,
    connections: ['legado-con-agentes'],
    status: 'published',
    analogy:
      'Si el taller necesita una prensa que no existe, se fabrica a medida — pero no se fabrica lo que ya viene en la caja.',
    sections: [
      {
        heading: 'Cuándo',
        bullets: [
          'Tarea repetitiva, determinista y con reglas claras: conviene un script.',
          'El agente invoca el script; no reescribe la misma lógica en cada sesión.',
          'Si el criterio cambia en cada caso, un script rígido estorba.',
        ],
      },
      {
        heading: 'MCP servers propios',
        bullets: [
          'Exponen sistemas internos (base de datos, ERP, sistema legado) como herramientas.',
          'El contrato es estable: entradas, salidas y errores definidos.',
          'Los permisos se declaran por herramienta, con el mínimo necesario.',
        ],
      },
      {
        heading: 'Skills y hooks propios',
        bullets: [
          'Las skills empaquetan el procedimiento del equipo y se cargan cuando hacen falta.',
          'Los hooks automatizan controles: lint, pruebas y carpetas prohibidas.',
          'El control automático no depende de que alguien se acuerde.',
        ],
      },
      {
        heading: 'Criterio inverso',
        bullets: [
          'Si un «if» lo resuelve, no hace falta un agente.',
          'La herramienta correcta es la más simple que cumple el contrato.',
        ],
      },
    ],
    teaser: null,
  },
  {
    id: 'legado-con-agentes',
    number: 8,
    title: 'Migrar legado con agentes',
    mapLabel: ['Legado'],
    tagline: 'Construir al lado y mudarse por partes, sin demoler lo que funciona.',
    position: { x: 1060, y: 180 },
    radius: 48,
    connections: [],
    status: 'published',
    analogy:
      'No se demuele el edificio en el que se trabaja: se construye al lado y se muda por partes.',
    sections: [
      {
        heading: 'Congelar el comportamiento',
        bullets: [
          'Pruebas de caracterización antes de tocar: primero se comprueba qué hace hoy.',
          'Aplican a VB6, macros y cualquier sistema sin pruebas.',
          'La prueba documenta el comportamiento real, incluidos los defectos aceptados.',
        ],
      },
      {
        heading: 'Patrón estrangulador',
        bullets: [
          'Una interfaz nueva delante y la lógica vieja detrás.',
          'Se migra por partes y lo viejo se retira al final.',
          'El sistema sigue funcionando durante toda la migración.',
        ],
      },
      {
        heading: 'Qué delegar y qué no',
        bullets: [
          'Delegar lo mecánico y repetitivo: traducciones, firmas y documentación.',
          'Las decisiones de negocio y los datos críticos siempre llevan revisión humana.',
          'El agente propone el cambio; la responsabilidad sigue siendo del equipo.',
        ],
      },
      {
        heading: 'Orden seguro',
        bullets: [
          'Una rama, un commit por paso y pruebas en cada corte.',
          'Nunca big-bang: los cortes pequeños se pueden revertir.',
        ],
      },
    ],
    teaser: null,
  },
];

export const levels = {
  base: {
    id: 'base',
    label: 'Base',
    concepts: baseConcepts,
    journeyOrder: baseJourneyOrder,
    hint: 'Seleccione un concepto para comenzar el recorrido. Los conceptos 1 y 5 concentran las conexiones.',
    mapAria:
      'Mapa de conceptos del nivel base: ocho conceptos conectados. Use Tab para recorrer los nodos y Enter para abrir un concepto.',
    statusLabel: `Nivel base: ${baseConcepts.length} conceptos`,
  },
  intermedio: {
    id: 'intermedio',
    label: 'Intermedio',
    concepts: intermedioConcepts,
    journeyOrder: intermedioJourneyOrder,
    hint: 'Seleccione un concepto para comenzar el recorrido. Claude Code (4) conecta las tres herramientas.',
    mapAria:
      'Mapa de conceptos del nivel intermedio: siete conceptos conectados. Use Tab para recorrer los nodos y Enter para abrir un concepto.',
    statusLabel: `Nivel intermedio: ${intermedioConcepts.length} conceptos`,
  },
  avanzado: {
    id: 'avanzado',
    label: 'Avanzado',
    concepts: avanzadoConcepts,
    journeyOrder: avanzadoJourneyOrder,
    hint: 'Seleccione un concepto para comenzar el recorrido. Observabilidad (4) es el centro y Legado (8) cierra el recorrido.',
    mapAria:
      'Mapa de conceptos del nivel avanzado: ocho conceptos conectados. Use Tab para recorrer los nodos y Enter para abrir un concepto.',
    statusLabel: `Nivel avanzado: ${avanzadoConcepts.length} conceptos`,
  },
};

/** Level-scoped journey order, kept as a single map for convenience. */
export const journeyOrder = {
  base: baseJourneyOrder,
  intermedio: intermedioJourneyOrder,
  avanzado: avanzadoJourneyOrder,
};

export const DEFAULT_LEVEL = 'base';
export const LEVEL_IDS = Object.keys(levels);

/** Backwards-compatible alias: the base level concept list. */
export const concepts = baseConcepts;

/** Resolve a level by id, falling back to the default level. */
export function getLevel(id) {
  return levels[id] || levels[DEFAULT_LEVEL];
}

/** Look up a concept across every level (returns undefined when not found). */
export function getConcept(id) {
  for (const levelId of LEVEL_IDS) {
    const found = levels[levelId].concepts.find((c) => c.id === id);
    if (found) return found;
  }
  return undefined;
}

/** Return the level id that owns a concept (null when unknown). */
export function levelOfConcept(id) {
  for (const levelId of LEVEL_IDS) {
    if (levels[levelId].concepts.some((c) => c.id === id)) return levelId;
  }
  return null;
}
