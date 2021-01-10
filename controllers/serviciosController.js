const fs = require('fs');
const path = require('path');

const coberturasFilePath = path.join(__dirname, '../data/coberturas.json');
let coberturas = JSON.parse(fs.readFileSync(coberturasFilePath, 'utf-8'));



let mutualesProvinciales = [

  'Amas',
  'Amsa',
  ' Amuppol',
  'Aoma',
  'Asociacion Mutual 12 De Agosto',
  'Asociacion Proteger',
  'Caruso',
  'Cec',
  'Circulo De Suboficiales De La Fuerza Aerea',
  'Fraternidad Ferroviaria',
  'Funarg Otros Convenios',
  'Funarg S.A. Art',
  'La Bancaria',
  'Mañana S.A.',
  'Mupim',
  ' Mutual 21 De Setiembre',
  'Mutual Cruz Del Plata',
  'Organización Seral Servicios De Sepelios A Empresas',
  'Penitenciaria Provincial',
  'Servicio Modelo',
  'Sindicato De Choferes De Camiones De Mendoza',
  'Sindicato De Estaciones De Servicios',
  'Sind. De Trabajadores De La Ind. Del Hielo (Stihmpra)',
  'Sipemom/Ospemom',
  'Sitravi',
  'Triunfo Seguros',
  'U.O Y U.P Union Obrera Y Empleado Del Plastico Unión De Trabajadores Gastronómicos',


]


let mutualesNacionales = [

  'APRES',
  'Aseguradora de Riesgos de Trabajo Interacción S.A.',
  'Asoc. de Agentes de Loteria y Afines – AALARA',
  'Asoc. Mutual Circulo de Subof. Del Ejercito -AMCIRSE',
  'Asoc. Mutual del Pers. Jerarq. De Bcos. Oficiales Nacionales Jerarq.',
  'Salud',
  'Asoc. Mutual del Personal de Sancor',
  'Asoc. Mutual Patagónica',
  'Asoc. Mutual Protección Solidaria Permanente',
  'Asoc. Mutual Ruralista -AMUR',
  'Asoc. Mutual Sancor',
  'Asoc. Mutual y Frat. para Empl. del Bco.Sant. Rio – MEBSAN',
  'Asoc. Viajantes y Vendedores de la Argentina de Ind. Comercio y Serv.',
  'Asociación de Superv. de la Industria Metalúrgica – ASIMRA',
  'Beneficio S.A.',
  'Bonacorsi Seguros de Personas S.A.',
  'CIBA Gestora de la Mutual Apoyo Solidario',
  'Circulo de Suboficiales de Gendarmería Nacional',
  'Circulo de Suboficiales de Prefectura Naval',
  'Circulo de Suboficiales del Ejercito – CIRSE',
  'Colón Seguros S.A.',
  'DIGNA S.A.',
  'Direccion de Salud y Acción Social de la Armada – DIBA',
  'Dirección Gral. de Acción Social del Servicio Penitenciario Bonaerense',
  'El Triunfo Coop. De Seguros Ltda.',
  'Empleados del Mercado Central de Bs. As.',
  'Federacion Argentina de Trab. de la Imprenta, Diarios, y Afines -FATIDA',
  'Federacion Gremial Personal de la Ind. de Carne y Derivados',
  'Fedracion Argentina de Aguas Gaseosas – FATAGA',
  'Horizonte ART',
  'Inst. Autarq. Pcial. De Obra Social – IAPOS SANTA FE',
  'Inst. Autarq. Pcial. del Seguro – IAPS RIO NEGRO',
  'Instituto de Seguros S.A.',
  'INSTUTUTO DE PREVENCION Y SEGURIDAD SOCIAL DE TUCUMAN',
  'I.P.P.S.T.',
  'JARDIN DEL PILAR',
  'La Reciproca – SMSV CIA. ARG. DE SEG. DE VIDA S.A.',
  'Liderar ART',
  'Mañana S.A.',
  'Naser Group – Repatriaciones',
  'NOVARA SALUD',
  'Obra social de Agentes de Propaganda Medica – APM',
  'Obra Social de Docentes Particulares – OSDOP',
  'Obra Social de Empl. Del Tabaco de la Rep.Argentina – JUBILADOS',
  'Obra Social de Vialidad Nacional',
  'Obra Social del Pers. Adm. Tec. de la Constr. y Afines – OSPATCA',
  'Obra Social del Pers. De la Construccion – OSPECON',
  'Obra Social del Pers. Sup. y Prof. De Empr. Aerocomerciales',
  'Obra Social del Personal de Casa Particulares',
  'Perfumistas',
  'Personal de FF AA y de Seguridad – CIA MERCANTIL ASEGURADORA S.A.',

  'Pieve Seguros S.A.',
  'Prevencion ART',
  'Previnca Seguros S.A.',
  'Sanatorio Modelo Quilmes',
  'Siempre Servicios Sociales',
  'Sindicato Argentino de la Industria fideera – SATIF',
  'Sindicato de Obreros Maritimos Unidos – SOMU',
  'Sindicato Federacion Grafica Bonaerense',
  'Sindicato Obreros y Empleados de la Ind. del Chacinado y Afines',
  'Sindicato Trab. de la Industria del hielo y Afines – STIHMPRA',
  'Sindicato Unico de Empleados del Tabaco RA – SUETRA',
  'Sindicato Unico de Trab. del Estado de la Cdad. De BS.As. – SUTECBA',
  'Socios de SMSV Seguros de Vida',
  'Union Argentina de Trabajadores Rurales y Estibadores -UATRE',
  'Union de Empleado de la Justicia de la Nacion',
  'Union de sindicatos de la Ind. Maderera dela R.A. – USIMRA',
  'Union de Trabajadores de Entidades Deportivas y Civiles -UTEDYC',
  'Union del Personal Civil de las Fuerzas Armadas -PECIFA',
  'Union Ferroviaria',
  'Union Obrera de la Construcción de la R.A. – UOCRA',
  'Union Obrera Metalurgica de la R.A. – Secc.Matanza',
  'UNION OBRERA METALURGICA UOM',
  'Union Trabajadores de Sociedades de Autores R.A.',


]

let coberturaDirecta = [
  'Cooperativa Eléctrica de Godoy Cruz',
  'Andes Pre paga (servicios de sepelio)',
  'Prevenir',
  'Supervielle (servicios para jubilados y pensionados)',
  'Pami: subsidio de fallecimiento a cuenta del servicio fúnebre que elijas como parte de pago.'

]
let serviciosController = {

  raiz: (req, res, next) => {
    res.render('servicios', { mutualesProvinciales, mutualesNacionales })
  },

  coberturaSearch: (req, res,next) => {
    // Do the magic
    const resultado = [];
    coberturas.forEach(cobertura => {
      if (cobertura.nombre.toLowerCase().includes(req.query.keywords.toLowerCase().trim())
        || cobertura.tipo.toLowerCase().includes(req.query.keywords.toLowerCase().trim())) {
        resultado.push(cobertura);
      }
   
    });
    res.render("coberturas", { resultado, search: req.query.keywords });
  },

}
module.exports = serviciosController