import * as moment from 'moment';

function calcularTempo(data: string) {
  var nascimento = moment(data, 'YYYY-MM-DD');
  var hoje = moment();
  var anos = hoje.diff(nascimento, 'years');
  nascimento.add(anos, 'years');
  var meses = hoje.diff(nascimento, 'months');
  if (meses === 0) {
    return anos +  (anos  <= 1 ?' ano': ' anos');
  } else {
    return anos + (anos  <= 1 ?' ano e ': ' anos e ') +meses + (meses  <= 1 ?' mês': ' meses');
  }
}

export const dadosSobre = {
  description: `
      <p>
      Meu nome é Claiver, tenho ${calcularTempo(
        '1998-07-19'
      )}, sou nascido em Belo
      Horizonte-MG , mas atualmente resido em Barueri-SP. Sou um desenvolvedor
      Full Stack, com uma paixão profunda pela tecnologia e o desenvolvimento de
      software. Possuo ${calcularTempo(
        '2021-01-01'
      )} de experiência trabalhando como
      desenvolvedor.
      </p> <br/>
      <p>
      Atualmente me encontro na FegIT, onde tenho a oportunidade de trabalhar com uma ampla
      variedade de tecnologias, incluindo HTML, CSS, JavaScript, TypeScript,
      Angular, NodeJS, .Net, SQL Server, MySQL, MongoDB, AWS entre outras. Tenho habilidades
      para desenvolver soluções completas e integradas, desde a camada de
      front-end até a camada de back-end, utilizando as melhores práticas e
      padrões de desenvolvimento. Além disso, estou sempre em busca de aprender
      novas tecnologias e habilidades para manter-me atualizado e oferecer
      soluções de alta qualidade para meus clientes.
      </p>
    `,
  images: [
    'assets/img/emoji/ca-emoji1.PNG',
    'assets/img/emoji/ca-emoji2.PNG',
    'assets/img/emoji/ca-emoji3.PNG',
    'assets/img/emoji/ca-emoji4.PNG',
    'assets/img/emoji/ca-emoji5.PNG',
    'assets/img/emoji/ca-emoji6.PNG',
    'assets/img/emoji/ca-emoji7.PNG',
    'assets/img/emoji/ca-emoji8.PNG',
    'assets/img/emoji/ca-emoji9.PNG',
  ],
  bio: `💻 Dev Full-Stack
        🔺 Beagá
        📍 Barueri , SP, Brasi`,
  carreira: [
    {
      cargo: 'Full Stack Developer',
      empresa: 'FegIT',
      hrefEmpresa: 'http://www.fegit.com.br/',
      local: 'Barueri, SP',
      experiencia: `Jan 2022 – Momento • ${calcularTempo(
        '2022-01-01'
      )}`,
    },
    {
      cargo: 'Front-end Developer Junior',
      empresa: 'Manabi Technology',
      hrefEmpresa: 'https://manabitechnology.com/',
      local: 'Santana de Parnaíba, SP',
      experiencia: ' Jan 2021 – Jan 2022 • 1 ano',
    },
  ],
};

export const dadosMain = {
  nome: 'Claiver Araujo',
  cargo: 'Full Stack Developer',
  linkedin: 'https://www.linkedin.com/in/claiver-araujo-a87685149/',
  repositorio: 'https://github.com/ClaiverAlmeida/Quem-Sou-Eu',
};

export const dadosCurriculo = [
  {
    title: 'OBJETIVO',
    description: 'Pleno.Net Development / Angular2 a 13 / NodeJS',
  },
  {
    title: 'RESUMO DE CONHECIMENTOS',
    description: ` ·NET Framework, .NET Core, C#, Angular 2 a 13, HTML5, CSS 3, SCSS ,NodeJS;
     ·Arquitetura DDD (DomainDriven Design), TDD, WebAPI, WebService,
     ·WindowsServices, Microservices, WebSocket;
     ·Banco de Dados MongoDB e SQL Server;
     ·GitLab (repositório e deploy automático);
     ·Test com Jest (NodeJs) e XUnit (C#);
     ·AWS: CloudFormation, CodeDeploy, S3 e EC2;
     ·Devops: GitLab e AWS;
     `,
  },
  {
    title: 'FORMAÇÃO ACADÊMICA',
    period: '08/2022 - 07/2024',
    description: ` Tecnólogo em Analise e Desenvolvimento de Sistemas
    UNIP - Universidade Paulista
    `,
  },
  {
    title: 'EXPERIÊNCIA PROFISSIONAL',
    professionalExperience: [
      {
        office: 'Desenvolvedor de Sistemas fullstack ',
        company: 'Fegit 01/2022',
        description: ` C#, .NET Core , Entity Framework Core, Angular 7 a 13, NodeJS, HTML 5, CSS3;
        MongoDB, SQL Server,MySQL;
        AWS com CodeDeploy, CloudFormation, Lambda;
        Testes com Jest e SuperTest (NodeJS) e XUnit (.Net);
        Git;
        `,
      },
      {
        office: 'Desenvolvedor de Front-end Junior ',
        company: 'Manabi Technology 01/2021 - 01/2022',
        description: ` Angular 7 a 13, HTML 5, CSS3, React Native;
        `,
      },
    ],
  },
  {
    title: 'IDIOMAS',
    period: 'Inglês',
    description: ` Básico
    `,
  },
];
