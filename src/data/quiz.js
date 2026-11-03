/**
 * Quiz question bank. User-visible copy is neutral professional Spanish.
 * Option order is fixed on purpose: the correct answer is not always first.
 * Each conceptId must exist in the concepts data so the feedback chip can
 * open the matching panel.
 */

export const quizQuestions = [
  {
    id: 'agente-vs-chat',
    prompt: '¿Qué distingue a un agente de un chat?',
    options: [
      'Responde más rápido',
      'Ejecuta acciones con herramientas y completa tareas',
      'Tiene mejor ortografía',
      'Solo funciona con voz',
    ],
    correctIndex: 1,
    explanation:
      'Un agente lee y modifica archivos, ejecuta comandos y verifica resultados.',
    conceptId: 'por-que-un-agente',
  },
  {
    id: 'que-es-token',
    prompt: 'Al enviar un mensaje, ¿qué es un token?',
    options: [
      'Una contraseña',
      'Una carpeta del proyecto',
      'La unidad mínima de texto que el modelo procesa y factura',
      'Un tipo de commit',
    ],
    correctIndex: 2,
    explanation:
      'Cada palabra o fragmento que el modelo lee y escribe se mide en tokens y se factura.',
    conceptId: 'motor-llm',
  },
  {
    id: 'ventana-contexto',
    prompt: '¿Qué ocurre con lo que no entra en la ventana de contexto?',
    options: [
      'No se considera al generar la respuesta',
      'Se guarda para siempre',
      'Se comprime automáticamente',
      'Se envía por correo',
    ],
    correctIndex: 0,
    explanation:
      'La ventana de contexto es limitada: lo que no entra queda fuera de la respuesta.',
    conceptId: 'motor-llm',
  },
  {
    id: 'agents-md',
    prompt: '¿Para qué sirve el archivo AGENTS.md?',
    options: [
      'Para instalar el editor',
      'Para ejecutar pruebas',
      'Para guardar contraseñas',
      'Para dejar instrucciones permanentes que el agente lee en cada sesión',
    ],
    correctIndex: 3,
    explanation:
      'AGENTS.md reúne reglas del proyecto que el agente consulta al inicio de cada sesión.',
    conceptId: 'caparazon-agente',
  },
  {
    id: 'que-es-hook',
    prompt: '¿Qué caracteriza a un hook?',
    options: [
      'Es un modelo más grande',
      'Se dispara automáticamente ante un evento para aplicar un control',
      'Es un tipo de rama',
      'Reemplaza a las pruebas',
    ],
    correctIndex: 1,
    explanation:
      'Un hook ejecuta una acción ante un evento, por ejemplo correr pruebas después de una edición.',
    conceptId: 'caparazon-agente',
  },
  {
    id: 'revisar-diff',
    prompt: 'Antes de aceptar cambios de un agente, lo correcto es:',
    options: [
      'Leer el diff y revisar qué cambió',
      'Confiar y continuar',
      'Borrar el repositorio',
      'Pedir otro párrafo explicativo',
    ],
    correctIndex: 0,
    explanation:
      'El diff muestra el cambio línea por línea y es la base para aceptar o rechazar.',
    conceptId: 'git-con-ia',
  },
  {
    id: 'que-aporta-engram',
    prompt: '¿Qué aporta engram?',
    options: [
      'Un editor de código',
      'Un servicio de hosting',
      'Memoria persistente entre sesiones: decisiones, correcciones y convenciones',
      'Compresión de imágenes',
    ],
    correctIndex: 2,
    explanation:
      'Engram guarda lo importante del proyecto para recuperarlo en la sesión siguiente.',
    conceptId: 'ecosistema-ia',
  },
  {
    id: 'hecho-con-evidencia',
    prompt: 'En un modo de revisión con evidencia, «hecho» significa:',
    options: [
      'Que el agente lo declaró',
      'Que pasó verificaciones con evidencia registrada',
      'Que no hubo errores de tipeo',
      'Que se subió a producción',
    ],
    correctIndex: 1,
    explanation:
      'La revisión con evidencia exige verificaciones registradas, no solo la declaración del agente.',
    conceptId: 'ecosistema-ia',
  },
  {
    id: 'pruebas-antes-despues',
    prompt: '¿Para qué correr las pruebas antes y después de un cambio?',
    options: [
      'Para ocupar el tiempo',
      'Para ahorrar tokens',
      'Para mejorar el diseño',
      'Para saber si el cambio rompió algo',
    ],
    correctIndex: 3,
    explanation:
      'Correr las pruebas antes y después muestra si el cambio introdujo una regresión.',
    conceptId: 'pruebas-con-ia',
  },
  {
    id: 'ahorro-tokens',
    prompt: 'La forma más efectiva de ahorrar tokens es:',
    options: [
      'Dar solo los archivos y el contexto necesarios',
      'Pegar todo el proyecto en el chat',
      'Usar siempre el modelo más grande',
      'Repetir la pregunta',
    ],
    correctIndex: 0,
    explanation:
      'Menos contexto innecesario significa menos tokens y respuestas más enfocadas.',
    conceptId: 'produccion',
  },
  {
    id: 'que-es-harness',
    prompt: '¿Qué es un harness?',
    options: [
      'Un modelo más rápido',
      'Un tipo de commit',
      'El entorno que conecta el modelo con herramientas y el proyecto',
      'Una extensión de VS Code',
    ],
    correctIndex: 2,
    explanation:
      'El harness ejecuta el modelo en un bucle y le da acceso a archivos, terminal y permisos.',
    conceptId: 'harness',
  },
  {
    id: 'loop-agentico',
    prompt: '¿Cómo funciona el loop agéntico?',
    options: [
      'Responde una vez y termina',
      'Itera pensar → actuar → observar hasta cumplir el objetivo',
      'Copia respuestas de internet',
      'Solo escribe código',
    ],
    correctIndex: 1,
    explanation:
      'El loop repite pensar, actuar y observar hasta alcanzar el criterio de éxito.',
    conceptId: 'loop-agentico',
  },
  {
    id: 'ingenieria-contexto',
    prompt: '¿Qué busca la ingeniería de contexto?',
    options: [
      'Pegar el repositorio completo',
      'Elegir la información relevante y no cargar todo el proyecto',
      'Usar el modelo más grande siempre',
      'Eliminar las pruebas',
    ],
    correctIndex: 1,
    explanation:
      'Más señal y menos ruido: elegir el contexto reduce costo y mejora la respuesta.',
    conceptId: 'ingenieria-contexto',
  },
  {
    id: 'para-que-sirve-un-eval',
    prompt: '¿Para qué sirve un eval?',
    options: [
      'Para instalar extensiones',
      'Para comprimir imágenes',
      'Para elegir el color del tema',
      'Medir de forma repetible si un cambio en el agente mejora o empeora',
    ],
    correctIndex: 3,
    explanation:
      'Un eval compara corridas contra una línea base: sin medición repetible no hay evidencia.',
    conceptId: 'evals',
  },
  {
    id: 'riesgo-inyeccion-prompts',
    prompt: '¿Cómo se reduce el riesgo de una inyección de prompts?',
    options: [
      'Tratar el contenido leído como datos y no como instrucciones',
      'Confiar en cualquier MCP server',
      'Ejecutar todo sin permisos',
      'Desactivar las pruebas',
    ],
    correctIndex: 0,
    explanation:
      'El código, las webs y los documentos son datos: las órdenes válidas vienen del usuario y de las reglas del proyecto.',
    conceptId: 'seguridad-permisos',
  },
  {
    id: 'primer-paso-legado',
    prompt: 'En una migración de legado con agentes, el primer paso es:',
    options: [
      'Reescribir todo en un solo cambio',
      'Borrar el código viejo',
      'Congelar el comportamiento actual con pruebas de caracterización',
      'Migrar sin respaldo',
    ],
    correctIndex: 2,
    explanation:
      'Primero se documenta qué hace hoy el sistema; después se migra por partes y con reversión posible.',
    conceptId: 'legado-con-agentes',
  },
];

/** Tier message for a final score (0-based count of correct answers). */
export function quizTierFor(score) {
  if (score >= 14) return 'Excelente: el mapa ya está en la cabeza.';
  if (score >= 11) return 'Buen camino: quedan pocos huecos.';
  if (score >= 7) return 'Repase los conceptos marcados y vuelva.';
  return 'Empiece por el mapa: el recorrido completo lo lleva.';
}
