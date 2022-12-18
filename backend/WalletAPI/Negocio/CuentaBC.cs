﻿using Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class CuentaBC
    {
        public void ActualizarSaldo(BD_walletContext db, int id, decimal importe) 
        {
            Cuenta? cuenta = db.Cuenta.Where(a => a.IdCuenta == id).FirstOrDefault();
            if(cuenta != null)
            cuenta.Saldo = cuenta.Saldo + importe;
            db.SaveChanges();
        }

        public int ObtenerAlias(BD_walletContext db, string alias)
        {
            return db.Cuenta.Where(a => a.Alias == alias).FirstOrDefault().IdCuenta;
        }
        public int ObtenerCvu(BD_walletContext db, string cvu)
        {
            return db.Cuenta.Where(a => a.Cvu == cvu).FirstOrDefault().IdCuenta;
        }
        public decimal ObtenerSaldo(BD_walletContext db, int id)
        {
           int? idCuenta = db.Usuarios.FirstOrDefault(a => a.IdUsuario == id).IdCuenta;
            return db.Cuenta.FirstOrDefault(a => a.IdCuenta == idCuenta).Saldo;
        }

        public int NuevaCuenta(BD_walletContext db)
        {
            Cuenta cuenta = new Cuenta();

            cuenta.Cvu = GenerarCvu();
            cuenta.Alias = GenerarAlias();
            cuenta.FechaAlta = DateTime.UtcNow;
            cuenta.Saldo = 0;

            db.Cuenta.Add(cuenta);
            db.SaveChanges();

            return cuenta.IdCuenta;
        }

        public VistaCuenta ObtenerCuenta(BD_walletContext db, int idCuenta)
        {
            Cuenta? cuenta = db.Cuenta.Where(a => a.IdCuenta == idCuenta).FirstOrDefault();
            VistaCuenta? vistaCuenta= new VistaCuenta();
            vistaCuenta.Alias = cuenta.Alias;
            vistaCuenta.Cvu = cuenta.Cvu;
            vistaCuenta.Id = cuenta.IdCuenta;
            return vistaCuenta;
        }
        private string GenerarCvu()
        {
            Random random = new Random();
            string num1 = random.Next(100000000, 999999999).ToString();
            string num2 = random.Next(100000000, 999999999).ToString();
            string num3 = random.Next(1000, 9999).ToString();
            return num1 + num2 + num3;
        }

        private string GenerarAlias()
        {
            int tamaño = palabras.Length;
            Random random = new Random();

            int eleccion = random.Next(0, tamaño);
            string palabra1 = palabras[eleccion];
            
            eleccion = random.Next(0, tamaño);
            string palabra2 = palabras[eleccion];
            
            eleccion = random.Next(0, tamaño);
            string palabra3 = palabras[eleccion];

            return palabra1+"."+palabra2+"."+palabra3;
        }

        string[] palabras = { "pierdo", "motivos", "josh", "dimos", "campeonato", "apúrense", "unico", "reír", "prima", "maricón", "actúa", "periodista", "luchando", "estelar", "escritor", "encontrarás", "dejando", "adecuado", "terrorista", "lady", "hierro", "enterrado", "big", "sincero", "sharon", "representa", "positivo", "mereces", "italia", "fea", "acerques", "petróleo", "encargado", "capítulo", "enseñaré", "cuentos", "breve", "atreves", "súbete", "sed", "patético", "mostrarte", "doctores", "carácter", "tuyos", "plaza", "obispo", "necesite", "muevan", "involucrado", "frankie", "darán", "robin", "ingleses", "usas", "ruedas", "prácticamente", "orejas", "golpeó", "costado", "conducta", "toman", "suban", "médica", "manzana", "jonathan", "escuadrón", "reconozco", "ordenes", "gallina", "cambiando", "borde", "ataques", "actual", "víctor", "polly", "pecados", "invito", "inconsciente", "bastardos", "abrió", "shaun", "oyeron", "intentaba", "cuartel", "consciente", "tranquilízate", "suyos", "residencia", "máxima", "llevarla", "grasa", "células", "retrocedan", "recepción", "medicinas", "explotar", "corona", "callate", "calidad", "ayúdeme", "asesina", "absurdo", "revés", "producto", "nancy", "encontrarla", "dj", "descansa", "copias", "apagar", "profesionales", "práctica", "investigando", "francamente", "calvin", "afganistán", "vecino", "trozo", "tómate", "tercero", "sirven", "saquen", "manual", "enciende", "cercano", "bailando", "atras", "usarlo", "telefono", "registros", "ponlo", "pasta", "lleguen", "saliste", "sabrás", "p", "morgan", "limpieza", "estadounidense", "enojada", "desafortunadamente", "conoció", "pinta", "matamos", "funcionan", "cocinar", "cima", "atractivo", "preguntes", "necesitaré", "lleguemos", "interrumpir", "haberla", "apropiado", "presentimiento", "intentamos", "finales", "evitarlo", "enviaré", "deporte", "bajando", "sucia", "recibimos", "pastillas", "ceremonia", "tina", "muelle", "maletas", "k", "hijas", "desconocido", "conseguiré", "taylor", "refugio", "imagina", "franceses", "convertirse", "arruinado", "vomitar", "pasajeros", "normales", "disfraz", "continúe", "arreglado", "aprende", "venimos", "tenerte", "seguirá", "razonable", "puesta", "masaje", "lágrimas", "gustaria", "extranjero", "dejaremos", "carlos", "apellido", "alguacil", "tracy", "temporal", "rompe", "mayo", "egoísta", "aceite", "platos", "miércoles", "indios", "decimos", "creasy", "bolsas", "anuncio", "tirado", "notado", "mutantes", "imaginas", "habitaciones", "grecia", "entré", "díselo", "césar", "stanley", "holly", "comprado", "cocaína", "amarillo", "acabará", "suceda", "mentes", "maldad", "gustará", "eliminar", "corbata", "burke", "atrapados", "sabíamos", "merezco", "medalla", "lograste", "lionel", "jaula", "dió", "chofer", "informado", "fox", "fatal", "enfadado", "cubierto", "compañera", "ronda", "regina", "cobra", "cantante", "abrazo", "tarjetas", "sentarme", "refería", "indica", "gravedad", "ganando", "estúpidos", "elecciones", "collar", "cincuenta", "programas", "naturalmente", "embajada", "desayunar", "dejaría", "vigila", "quisieras", "intereses", "agárrate", "aéreo", "traición", "seguiré", "salvajes", "prefiere", "podéis", "noel", "mueres", "molestar", "italiano", "dejarla", "corazones", "averiguarlo", "ave", "arreglarlo", "advierto", "vendiendo", "pública", "newman", "monje", "jugamos", "hablarme", "escoger", "andas", "ví", "teddy", "pico", "llevé", "entro", "tenias", "priorato", "perdemos", "industria", "cretino", "cafetería", "cabaña", "aparecer", "tradición", "suelto", "publicidad", "pares", "oídos", "medida", "japoneses", "hitler", "dieta", "capa", "vendrás", "sincronizado", "neil", "historial", "guión", "enano", "devolver", "solitario", "misiles", "hall", "desnuda", "bridget", "brad", "vaquero", "únicos", "trasera", "sano", "piezas", "liga", "gerente", "cindy", "caridad", "armados", "trajeron", "religión", "jon", "fotografías", "sentirse", "rezar", "protege", "preparen", "niñera", "naranja", "matarnos", "jugada", "gandalf", "espérame", "enseñarte", "cohete", "tanques", "sombras", "moverse", "llegara", "cortó", "cierren", "volverán", "usamos", "sabremos", "potter", "maletín", "lenguaje", "jenna", "invitación", "cambian", "rehenes", "margaret", "freddy", "encontremos", "descubrí", "audiencia", "agenda", "wallace", "sígueme", "sensible", "sammy", "reverendo", "queréis", "dex", "cazar", "bodas", "seguiremos", "rosas", "retiro", "primeras", "poderosa", "matthew", "deberia", "cantando", "antiguos", "teme", "smallville", "síganme", "moviendo", "juventud", "equivocas", "trabajadores", "seguí", "salvaste", "pulmones", "payaso", "oírlo", "fama", "engaño", "distrito", "disculparme", "davis", "ciudadano", "robando", "equipaje", "ciencias", "ubicación", "federales", "tratamos", "ofrece", "of", "junio", "extremadamente", "actuando", "traducción", "supiste", "sacarlo", "preparando", "mei", "letras", "típico", "reserva", "propuesta", "plataforma", "mago", "linea", "hank", "dude", "busque", "tabaco", "principios", "lou", "dormida", "costó", "causar", "temer", "subiendo", "rollo", "ns", "hechizo", "gusano", "guau", "grupos", "discos", "despierte", "st", "ocurriendo", "horario", "expedientes", "envié", "dibujos", "concurso", "colt", "autopista", "atacó", "vendedor", "sigas", "rebeldes", "radar", "madame", "expresión", "escuchan", "carla", "use", "resultó", "principe", "hágalo", "greg", "exposición", "demasiadas", "cuidando", "aterrizaje", "apetece", "tomaron", "sorprendente", "responda", "olvidaste", "lobos", "echado", "deberias", "cortado", "citas", "abiertos", "zapato", "preso", "lastimar", "explosivos", "colegas", "telly", "supieras", "secretaria", "queridos", "morirás", "mickey", "cuero", "confesión", "círculo", "sabéis", "química", "obras", "llores", "juegas", "invisible", "fase", "esconde", "capitan", "adulto", "vacía", "siéntense", "pastor", "llegada", "jesse", "gatillo", "debamos", "teléfonos", "saqué", "regresará", "olvidaré", "lucas", "límites", "jovencita", "hong", "dibujo", "británico", "balboa", "psiquiatra", "objetos", "negociar", "hill", "formar", "fiel", "diosa", "descubrió", "ala", "abril", "saldré", "mías", "disfruta", "atender", "tomaremos", "samantha", "rosie", "oreja", "necesitaremos", "motores", "intenciones", "hannah", "cumplido", "brindis", "villa", "trono", "traen", "thunderbird", "sentados", "samurai", "salía", "raras", "producción", "medias", "lavar", "jazz", "extraordinario", "causado", "angie", "serpientes", "revisa", "quedate", "nervios", "estable", "cerdos", "riesgos", "pasaste", "michelle", "madres", "instinto", "episodio", "empezaron", "aniversario", "angela", "anderson", "viera", "viajes", "trabajé", "rango", "preocupación", "métete", "imaginé", "hayamos", "fenómeno", "dolores", "demanda", "damien", "creó", "asegurar", "pesadillas", "niega", "molestia", "kirk", "extremo", "debilidad", "compasión", "camiones", "aproximadamente", "afecta", "administración", "reconocimiento", "recientemente", "practicar", "pierdas", "pandilla", "miss", "mates", "disparando", "británicos", "ayudarlos", "abby", "sueldo", "siguió", "significado", "miente", "medidas", "guitarra", "custodia", "boletos", "ayudado", "sydney", "sentarte", "risa", "quemar", "prometió", "observando", "lectura", "jódete", "considerado", "cometer", "cambié", "asientos", "wong", "shock", "satisfecho", "saludable", "lanzar", "ken", "hoja", "conozca", "concepto", "colgar", "apunta", "renta", "prefieres", "pediré", "mediodía", "influencia", "hacernos", "figura", "ensayo", "coordenadas", "casó", "bart", "albert", "político", "países", "once", "matarlos", "karl", "graduación", "descuida", "toalla", "próximos", "monedas", "mirad", "miraba", "jesus", "griegos", "famosa", "corredor", "atravesar", "aguas", "modales", "guerras", "eternidad", "conocerla", "charlotte", "busquen", "buck", "acuerda", "sentirme", "ralph", "quema", "poema", "ordenó", "espiritual", "costumbre", "comencé", "cabra", "alquiler", "williams", "vencido", "vela", "trataré", "sospechosos", "quinto", "pilotos", "philip", "perdieron", "norman", "josé", "generación", "formación", "estructura", "concéntrate", "complejo", "voces", "virginia", "tragos", "temor", "república", "recursos", "presentación", "pirámide", "oficialmente", "maquillaje", "guardaespaldas", "escucharme", "dejara", "contiene", "bendición", "vuestros", "semejante", "pague", "molestes", "cultura", "comió", "antecedentes", "tendríamos", "representante", "prestado", "posesión", "oir", "nubes", "meterte", "guantes", "esperabas", "enseña", "encontrarme", "consejos", "regreses", "preocupen", "pistolas", "jennifer", "gane", "dana", "sos", "niveles", "lane", "ganaste", "considerando", "capital", "cambie", "ánimo", "utilizar", "lograrlo", "llévate", "gafas", "espíritus", "do", "watson", "ruby", "preguntaste", "pagará", "maíz", "ho", "estacionamiento", "contactos", "aguja", "turner", "trenes", "soporto", "sacaré", "oido", "fortaleza", "donald", "corea", "conversar", "computadoras", "cálmese", "volante", "sucederá", "jessica", "decías", "data", "cuente", "civilización", "cabrones", "arruinar", "vampiro", "tocó", "regresé", "pases", "mitch", "megan", "logan", "fantástica", "facil", "estabamos", "diera", "detenga", "violación", "pam", "hemorragia", "fianza", "docena", "centavo", "célula", "carreras", "callado", "rodilla", "prometes", "profundamente", "posiciones", "hicieras", "furioso", "desperté", "comes", "ciega", "cicatriz", "bebidas", "acércate", "tiró", "policial", "pasear", "masa", "llegues", "global", "escapado", "dinos", "cuarta", "bienes", "aparato", "steven", "sostén", "realizar", "permitiré", "orgullosos", "corten", "comisión", "vidrio", "presa", "ocupados", "morfina", "habrían", "columna", "sacaron", "patas", "oírme", "ocultar", "objeción", "myers", "maneja", "largas", "generalmente", "fuentes", "cubrir", "ataca", "tenis", "santos", "potencial", "plano", "murphy", "levante", "escala", "enfrentar", "cuánta", "sobra", "rumor", "páginas", "órganos", "león", "entras", "decían", "chinos", "brujas", "barbara", "admiro", "voto", "volvieron", "suelte", "reto", "metes", "infarto", "cuyo", "construyó", "boleto", "besar", "portal", "ponemos", "monte", "discusión", "digno", "desean", "darse", "considerar", "bancos", "poción", "perdóneme", "pensabas", "mónica", "generoso", "estatua", "convencer", "conocida", "comenzamos", "aceptado", "woody", "rob", "paige", "importar", "gabrielle", "fracaso", "ciertos", "bomberos", "zé", "sorprendido", "protegido", "presenta", "metí", "entenderlo", "detengan", "conflicto", "códigos", "seco", "sabiendo", "hacerla", "green", "graves", "dejarás", "convencido", "comprende", "bromas", "yeah", "oyen", "moleste", "mencionar", "gastos", "estaríamos", "esperaremos", "encontrarán", "billetes", "arco", "altos", "actores", "talvez", "sitios", "saluda", "quejas", "planeando", "moriremos", "marica", "habrías", "estarían", "dejarán", "castle", "amantes", "acostumbrado", "tyler", "torneo", "planos", "ordeno", "morris", "miré", "maldicion", "kg", "dirías", "confirmado", "vacas", "quirófano", "ponerlo", "origen", "fusión", "deberá", "verdaderos", "serían", "seguía", "sabrán", "pasaje", "necesidades" };

    }

}