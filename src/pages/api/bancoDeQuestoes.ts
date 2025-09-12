import QuestaoModel from "../../../model/questao";
import RespostaModel from "../../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Qual Bicho Transmite a Doença de Chagas?', [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barata'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro'),        
    ]),
    new QuestaoModel(202, 'Qual Fruto é Conhecido no Norte e no Nordeste Como Jerimum?', [
        RespostaModel.errada('Caju'),
        RespostaModel.errada('Côco'),
        RespostaModel.errada('Chuchu'),
        RespostaModel.certa('Abóbora'),        
    ]),
    new QuestaoModel(203, 'Qual é o coletivo de cães?', [
        RespostaModel.errada('Manada'),
        RespostaModel.errada('Alcateia'),
        RespostaModel.errada('Rebanho'),
        RespostaModel.certa('Matilha'),        
    ]),
    new QuestaoModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
        RespostaModel.errada('Equilátero'),
        RespostaModel.errada('Isósceles'),
        RespostaModel.errada('Trapézio'),
        RespostaModel.certa('Escaleno'),        
    ]),
    new QuestaoModel(205, 'Quem foi o último presidente do período do regime militar no Brasil?', [
        RespostaModel.errada('Castro e Silva'),
        RespostaModel.errada('Emílio Médici'),
        RespostaModel.errada('Ernesto Geisel'),
        RespostaModel.certa('João Figueiredo'),        
    ]),
    new QuestaoModel(206, 'Que nome se dá à purificação por meio da água?', [
        RespostaModel.errada('Abnegação'),
        RespostaModel.errada('Abolição'),
        RespostaModel.errada('Abrupção'),
        RespostaModel.certa('Ablução'),        
    ]),
    new QuestaoModel(207, 'Quem compôs o hino da independência?', [
        RespostaModel.errada('Carlos Gomes'),
        RespostaModel.errada('Castro Alves'),
        RespostaModel.errada('Manuel Bandeira'),
        RespostaModel.certa('Dom Pedro I'),        
    ]),
    new QuestaoModel(208, 'Em que país nasceu Carmen Miranda?', [
        RespostaModel.errada('Argentina'),
        RespostaModel.errada('Brasil'),
        RespostaModel.errada('Espanha'),
        RespostaModel.certa('Portugal'),        
    ]),
    new QuestaoModel(209, 'Em que parte do corpo se encontra a epiglote?', [
        RespostaModel.errada('Rim'),
        RespostaModel.errada('Pâncreas'),
        RespostaModel.errada('Estômago'),
        RespostaModel.certa('Pescoço'),        
    ]),
    new QuestaoModel(210, 'Qual montanha se localiza entre a fronteira do Tibete com o Nepal?', [
        RespostaModel.errada('Monte Branco'),
        RespostaModel.errada('Monte Fuji'),
        RespostaModel.errada('Monte Carlo'),
        RespostaModel.certa('Monte Everest'),        
    ]),
    new QuestaoModel(211, 'Qual é o antônimo de "malograr"?', [
        RespostaModel.errada('Fracassar'),
        RespostaModel.errada('Desprezar'),
        RespostaModel.errada('Perder'),
        RespostaModel.certa('Conseguir'),        
    ]),
    new QuestaoModel(212, 'O adjetivo "venoso" está relacionado a?', [
        RespostaModel.errada('Vênia'),
        RespostaModel.errada('Veneno'), // Substituído 'Veia' duplicado por 'Veneno'
        RespostaModel.errada('Vento'),
        RespostaModel.certa('Veia'),        
    ]),
    new QuestaoModel(213, 'Que personagem do folclore brasileiro tem uma perna só?', [
        RespostaModel.errada('Cuca'),
        RespostaModel.errada('Boitatá'),
        RespostaModel.errada('Curupira'),
        RespostaModel.certa('Saci-pererê'),        
    ]),
    new QuestaoModel(214, 'Seguindo a sequência do baralho, que carta vem depois do dez?', [
        RespostaModel.errada('Ás'),
        RespostaModel.errada('Nove'),
        RespostaModel.errada('Rei'),
        RespostaModel.certa('Valete'),        
    ]),
    new QuestaoModel(215, 'A compensação por perda é chamada de...?', [
        RespostaModel.errada('Déficit'),
        RespostaModel.errada('Indexação'),
        RespostaModel.errada('Indébito'),
        RespostaModel.certa('Indenização'),        
    ]),
    new QuestaoModel(216, 'Quem é o patrono do Exército Brasileiro?', [
        RespostaModel.errada('Marquês de Pombal'),
        RespostaModel.errada('Marechal Deodoro'),
        RespostaModel.errada('Barão de Mauá'),
        RespostaModel.certa('Duque de Caxias'),        
    ]),
];

export default questoes;