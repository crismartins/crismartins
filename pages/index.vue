<template>
    <div>
        <HomeHero id="home" />

        <HomePortfolio 
            v-if="locale == 'en'"
            id="portfolio"
            :projects="projectList" 
        />
        <HomePortfolio 
            v-if="locale == 'pt'"
            id="portfolio"
            :projects="listaProjetos" 
        />

        <HomeAboutMe id="about" />

        <HomeServices id="services" />
        
    </div>
</template>

<script setup>
import { useI18n, useHead, reactive } from '#imports'
const { locale } = useI18n()
useHead({
    htmlAttrs: {
        lang: locale
    }
})

const projectList = reactive([
    {
        id: 1,
        image: '/images/portfolio/ahoy_cover.png', 
        gallery: [ 
            {image: '/images/portfolio/recruitment-app/login.png', title: 'Login screen'},
            {image: '/images/portfolio/recruitment-app/dashboard.png', title: 'Dashboard screen'},
            {image: '/images/portfolio/recruitment-app/professionals_list.png', title: 'Professionals list'},
            {image: '/images/portfolio/recruitment-app/process.png', title: 'Recruitment steps'}
        ],
        name: 'Web application for management and recruitment on tech area', 
        client: '2022/2023 - Ahoy by Belago', 
        description: `<p>AHOY is a company specialized in recruiting and placing professionals in the Information Technology (IT) field. It was born from the desire of the Belago Technologies Group to bring the multinational experience of the Group in operations in England, the United States, and Russia to the Brazilian market.</p> <p>The objective of this project proposal was to conceptualize the interface design for a comprehensive job management system. This system serves as a central hub for overseeing candidate profiles and client interactions within Ahoy. The primary goal is to optimize the efficiency of our recruitment team by implementing an intuitive interface that prioritizes clarity and enhances the overall user experience of the platform.</p> <p>The client's needs assessment and screen planning were systematically organized through meetings held after each delivery phase or addition of new features, following a priority schedule established by the client.</p><p>The final delivery also included a comprehensive design system and documentation detailing the screen flow and user journey, presented through a visual organizational chart.</p>`,
        stacks: [
            {logo: 'skill-icons:xd', name: 'Adobe Xd'},
            {logo: 'skill-icons:illustrator', name: 'Adobe Illustrator'}
        ],
        tags: [
            'UX/UI', 'Web Application'
        ],
        live_url: ''
    },
    {
        id: 2,
        image: '/images/portfolio/bon_cover.png', 
        gallery: [ 
            {image: '/images/portfolio/bon-website/Balance-of-Nature.png', title: 'Home page'},
            {image: '/images/portfolio/bon-website/Balance-of-Nature_mobile.png', title: 'WMobile version'}
        ],
        name: 'Homepage Development', 
        client: '2022/2023 - Balance of Nature', 
        description: `<p>Balance of Nature is an American company based in St. George, Utah, specializing in dietary supplements. Their product range includes capsules containing a blend of fruits and vegetables, as well as a mix of fibers and seasonings.</p><p>While providing frontend development services for the company, the objective of this project was to create a new and highly optimized version of the website's homepage.</p><p>As a result of this project, the website's performance improved by over XX% on both desktop and mobile devices (smartphones). This enhancement led to an increased visitor retention rate on the website and, consequently, boosted the company's online sales.</p>`,
        stacks: [
            {logo: 'devicon:html5', name: 'HTML 5'},
            {logo: 'devicon:css3', name: 'CSS 3'},
            {logo: 'devicon:javascript', name: 'Javascript'},
            {logo: 'devicon:vuejs', name: 'Vue.js'},
            {logo: 'logos:nuxt-icon', name: 'Nuxt.js'},
            {logo: 'devicon:gitlab', name: 'Gitlab'}
        ],
        tags: [
            'Landing Page', 'Website', 'Web Responsive', 'Optimization'
        ],
        live_url: 'https://balanceofnature.com'
    },
    {
        id: 3,
        image: '/images/portfolio/onr_app_cover.png', 
        gallery: [ 
            {image: '/images/portfolio/onr-app/home.png', title: 'Homepage'},
            {image: '/images/portfolio/onr-app/home_logged.png', title: 'Logged homepage'},
            {image: '/images/portfolio/onr-app/profile.png', title: 'Profile options'},
            {image: '/images/portfolio/onr-app/service_consulting.png', title: 'Service page - Quick consultation'},
            {image: '/images/portfolio/onr-app/service.png', title: 'Service page'}
        ],
        name: 'Mobile application for Electronic Property Registration Service', 
        client: '2023 - Onr', 
        description: '<p>The National Operator of the Electronic Property Registration System (ONR) is a non-profit entity with a special legal nature (autonomous social service). It is comprised of all Property Registration Officials from the States and the Federal District. </p><p>The proposal for this project aimed to redesign the key screens of the application, emphasizing usability and enhancing the visual appeal of the user interface.</p><p>As a result of this project, the client received the redesign of the requested screens in the form of an interactive and navigable prototype in Figma.</p>',
        stacks: [
            {logo: 'devicon:figma', name: 'Figma'}
        ],
        tags: [
            'UX/UI', 'Mobile'
        ],
        live_url: 'https://onr.org.br/'
    },
    {
        id: 4,
        image: '/images/portfolio/planing_pocker_cover.png', 
        gallery: [ 
            {image: '/images/portfolio/planing-pocker/login.png', title: 'Login via Google'},
            {image: '/images/portfolio/planing-pocker/select_options.png', title: 'Opções de início de planejamento'},
            {image: '/images/portfolio/planing-pocker/start_planning.png', title: 'Selecting cards'},
            {image: '/images/portfolio/planing-pocker/entering_room.png', title: 'Entering in a new room'},
            {image: '/images/portfolio/planing-pocker/enter_room.png', title: 'Accessing created room'},
            {image: '/images/portfolio/planing-pocker/before_start.png', title: 'Planning screen'},
            {image: '/images/portfolio/planing-pocker/planing_started_ready.png', title: 'Estimativas selecionadas pelos membros do time'},
            {image: '/images/portfolio/planing-pocker/participants_vote.png', title: 'Results'}
        ],
        name: 'Web application for Sprint planning', 
        client: '2023 - Personal project', 
        description: `<p>Interface design and frontend development for a personal project of a Sprint planning tool, created in collaboration with a full-stack developer.</p><p>In this project, my role included creating a simple logo for the project's identity, planning, designing the entire interface for usability, and developing the frontend for some screens, including responsive adaptation for mobile devices.</p>`,
        stacks: [
            {logo: 'devicon:figma', name: 'Figma'},
            {logo: 'devicon:javascript', name: 'Javascript'},
            {logo: 'devicon:html5', name: 'HTML 5'},
            {logo: 'devicon:css3', name: 'CSS 3'},
            {logo: 'devicon:sass', name: 'Sass'},
            {logo: 'devicon:vuejs', name: 'Vue.js'},
            {logo: 'logos:nuxt-icon', name: 'Nuxt.js'},
            {logo: 'devicon:github', name: 'Github'}
        ],
        tags: [
            'UX/UI','Logotype', 'Web Application', 'Web responsive'
        ],
        live_url: ''
    },
    {
        id: 5,
        image: '/images/portfolio/hourglass_cover.png', 
        gallery: [ 
            {image: '/images/portfolio/hourglass/login.png', title: 'Login screen'},
            {image: '/images/portfolio/hourglass/dashboard.png', title: 'Dashboard'},
            {image: '/images/portfolio/hourglass/history.png', title: 'History'},
            {image: '/images/portfolio/hourglass/reports.png', title: 'Reports'}
        ],
        name: 'Time tracking and time management system.', 
        client: '2023 - Personal project', 
        description: '<p>Creation of visual identity and interface for a time tracking and management system for both companies and freelancers.</p><p>This project originated from a personal need to track the time dedicated to client projects, enabling the generation of reports and the accounting of earnings, allowing for effective management of hours dedicated to freelance projects and long-term contracts.</p><p>The project is still in the planning phase, but due to personal needs, it will commence development soon.</p>',
        stacks: [
            {logo: 'devicon:figma', name: 'Figma'}
        ],
        tags: [
            'UX/UI','Logotype'
        ],
        live_url: ''
    },
    {
        id: 6,
        image: '/images/portfolio/cute_faces_cover.png', 
        gallery: [ 
            {image: '/images/portfolio/cute-faces/cute_faces_heroes.png', title: 'Collection brand'},
            {image: '/images/portfolio/cute-faces/quadro_1.png', title: 'Hero 1'},
            {image: '/images/portfolio/cute-faces/quadro_2.png', title: 'Hero 2'},
            {image: '/images/portfolio/cute-faces/quadro_3.png', title: 'Hero 3'},
            {image: '/images/portfolio/cute-faces/quadro_4.png', title: 'Hero 4'},
            {image: '/images/portfolio/cute-faces/quadro_5.png', title: 'Hero 5'},
            {image: '/images/portfolio/cute-faces/quadro_6.png', title: 'Hero 6'},
            {image: '/images/portfolio/cute-faces/quadro_7.png', title: 'Hero 7'},
            {image: '/images/portfolio/cute-faces/quadro_8.png', title: 'Hero 8'}
        ],
        name: 'Illustrations for decorative frame collection', 
        client: '2023 - Spark B.',
        description: `<p>Creation of illustrations for a collection of artwork for a boys' nursery, inspired by superheroes.</p><p>Focused on decorating baby boys' rooms, these illustrations aimed to capture the simplicity of forms while highlighting the details of each hero represented by a baby's face.</p>`,
        stacks: [
            {logo: 'skill-icons:illustrator', name: 'Adobe Illustrator'}
        ],
        tags: [
            'Illustration','Vector'
        ],
        live_url: ''
    },
    {
        id: 7,
        image: '/images/portfolio/sparkb_cover.png', 
        gallery: [ 
            {image: '/images/portfolio/sparkb/brand.png', title: 'Logotype'},
            {image: '/images/portfolio/sparkb/guia_instalacao_e_cuidados_frente.png', title: 'Instalation manual front'},
            {image: '/images/portfolio/sparkb/guia_instalacao_e_cuidados_verso.png', title: 'Instalation manual back'},
            {image: '/images/portfolio/sparkb/frente-cartao-semente.png', title: 'Thak you card front'},
            {image: '/images/portfolio/sparkb/verso-cartao-semente.png', title: 'Thak you card back'},
            {image: '/images/portfolio/sparkb/embalagem_personalizada.png', title: 'Product packaging'},
            {image: '/images/portfolio/sparkb/website.png', title: 'Custom theme'}
        ],
        name: 'Creation of visual identity and theme customization for an online store.', 
        client: '2022/2023 - Spark B.',
        description: `<p>Spark B is an upcoming company with its primary goal of selling decorative art prints, emphasizing customer service and quality.</p><p>In this project, the entire brand visual identity was developed, along with the customization of the WooCommerce-powered online store (WordPress), adopting a more playful and modern approach in line with the brand's concepts.</p>`,
        stacks: [
            {logo: 'skill-icons:illustrator', name: 'Adobe Illustrator'},
            {logo: 'skill-icons:photoshop', name: 'Adobe Photoshop'},
            {logo: 'skill-icons:wordpress', name: 'Wordpress'},
            {logo: 'devicon:html5', name: 'HTML 5'},
            {logo: 'devicon:css3', name: 'CSS 3'}
        ],
        tags: [
            'UX/UI','Logotype', 'Website', 'Web Responsive'
        ],
        live_url: 'https://sparkb.com.br'
    },
    {
        id: 8,
        image: '/images/portfolio/curitiba_app_cover.png', 
        gallery: [ 
            {image: '/images/portfolio/curitiba-app/splash.png', title: 'Splash Screen'},
            {image: '/images/portfolio/curitiba-app/tela_inicial.png', title: 'Login page'},
            {image: '/images/portfolio/curitiba-app/onboard.png', title: 'Onboard page'},
            {image: '/images/portfolio/curitiba-app/inicio.png', title: 'Initial screen'},
            {image: '/images/portfolio/curitiba-app/onibus_buscar.png', title: 'Find bus'},
            {image: '/images/portfolio/curitiba-app/onibus_postos.png', title: 'Bus stops'},
            {image: '/images/portfolio/curitiba-app/onibus_trajeto.png', title: 'Bus path'},
            {image: '/images/portfolio/curitiba-app/iss.png', title: 'Taxes payment'},
            {image: '/images/portfolio/curitiba-app/noticias_lista.png', title: 'News list'},
            {image: '/images/portfolio/curitiba-app/noticias_aberto.png', title: 'Opened news'},
            {image: '/images/portfolio/curitiba-app/curitiba_le.png', title: 'Books list'},
            {image: '/images/portfolio/curitiba-app/agenda.png', title: 'Events page'},
            {image: '/images/portfolio/curitiba-app/transito.png', title: 'Trafic consulting'}
        ],
        name: 'Curitiba App mobile application', 
        client: '2021/2022 - ICI via Belago', 
        description: '<p>The Curitiba APP is an aggregator of applications and services provided by the Municipal Government of Curitiba. It will elevate the interaction between citizens and the public administration to a new level of connectivity, centralizing access to key public services in one place.</p><p>The project aimed to give the application a complete makeover, improve the user experience, and create a more modern interface design.</p><p>At the end of the project, a new visual identity was developed for the application, achieving a perfect balance between clarity, simplicity, and modernity. This was accomplished through the optimization of the user journey for each task, as presented in a navigable prototype.</p>',
        stacks: [
            {logo: 'skill-icons:xd', name: 'Adobe Xd'},
            {logo: 'skill-icons:illustrator', name: 'Adobe Illustrator'}

        ],
        tags: [
            'UX/UI', 'Mobile', 'Icon design'
        ],
        live_url: 'https://play.google.com/store/apps/details?id=br.org.curitiba.ici.appcuritiba&hl=pt&gl=US'
    },
    {
        id: 9,
        image: '/images/portfolio/chat_156_cover.png', 
        gallery: [ 
            {image: '/images/portfolio/chat_156/login.png', title: 'Login'},
            {image: '/images/portfolio/chat_156/espera.png', title: 'Waiting for attendance'},
            {image: '/images/portfolio/chat_156/espera2.png', title: 'Attendance in minutes'},
            {image: '/images/portfolio/chat_156/chat_iniciado.png', title: 'Chat started'},
            {image: '/images/portfolio/chat_156/imagem.png', title: 'Image upload'},
            {image: '/images/portfolio/chat_156/imagem2.png', title: 'Sended image'},
            {image: '/images/portfolio/chat_156/encerrado_cidadao.png', title: 'Chat closed'},
            {image: '/images/portfolio/chat_156/avaliacao.png', title: 'Chat rate'}
        ],
        name: 'Chat 156', 
        client: '2021 - ICI via Belago', 
        description: `<p>The Chat 156 is one of the largest channels for communication and public service requests for the city of Curitiba's municipal government.</p><p>The objective of this project was to modernize, enhance the usability, and improve the performance of Chat 156. Its clean interface facilitated better communication and understanding for users on the platform.</p>`,
        stacks: [
            {logo: 'skill-icons:xd', name: 'Adobe Xd'},
            {logo: 'skill-icons:illustrator', name: 'Adobe Illustrator'},
            {logo: 'devicon:html5', name: 'HTML 5'},
            {logo: 'devicon:css3', name: 'CSS 3'},
            {logo: 'file-icons:tortoisesvn', name: 'Tortoise SVN'}
        ],
        tags: [
            'UX/UI', 'Chat', 'Web application'
        ],
        live_url: 'https://156.curitiba.pr.gov.br/'
    },
    {
        id: 10,
        image: '/images/portfolio/mago_jardineiro_cover.png', 
        gallery: [ 
            {image: '/images/portfolio/mago-jardineiro/home.png', title: 'Homepage'},
            {image: '/images/portfolio/mago-jardineiro/home_mobile.png', title: 'Homepage mobile'},
            {image: '/images/portfolio/mago-jardineiro/open_menu.png', title: 'Open menu'}
        ],
        name: 'One Page Website', 
        client: '2021 - Mago Jardineiro', 
        description: '<p>Ademar da Silva Brasileiro earned the nickname "Gardener Wizard" due to his deep connection with the plant kingdom, a bond rooted in his childhood spent on a farm. It was there that he learned the art of nurturing life from his grandparents.</p><p>The objective of this project was to create a unique design for a one-page website, aiming to provide an introduction to the professional and showcase the courses and lectures they offer.</p><p>As final deliverables, the client received a navigable prototype developed in Adobe XD.</p>',
        stacks: [
            {logo: 'skill-icons:xd', name: 'Adobe Xd'},
            {logo: 'skill-icons:photoshop', name: 'Adobe Photoshop'},
            {logo: 'skill-icons:illustrator', name: 'Adobe Illustrator'}
        ],
        tags: [
            'UX/UI', 'Landing Page', 'Website', 'Responsive'
        ],
        live_url: 'https://magojardineiro.com.br'
    },
    {
        id: 11,
        image: '/images/portfolio/ambience_cover.png', 
        gallery: [ 
            {image: '/images/portfolio/ambience/cadastro.png', title: 'Register'},
            {image: '/images/portfolio/ambience/login.png', title: 'Login'},
            {image: '/images/portfolio/ambience/projetos.png', title: 'Projects'},
            {image: '/images/portfolio/ambience/projeto_novo.png', title: 'New project'},
            {image: '/images/portfolio/ambience/etapa_1.png', title: 'Environment'},
            {image: '/images/portfolio/ambience/etapa_2.png', title: 'Design style'},
            {image: '/images/portfolio/ambience/etapa_3.png', title: 'Substyle'},
            {image: '/images/portfolio/ambience/etapa_4.png', title: 'Environment size'},
            {image: '/images/portfolio/ambience/etapa_5.png', title: 'Environment pictures'},
            {image: '/images/portfolio/ambience/etapa_6.png', title: 'Project requested successfully'}
        ],
        name: 'Application for interior design requests', 
        client: '2020 - Idealização MVP',
        description: '<p>Ambience was conceived as an experimental Minimum Viable Product (MVP) designed for online interior design project requests. Through this platform, clients would provide essential project information, and in return, they would receive their completed design via email.</p><p>Although it has been discontinued, the primary screens for accessing and requesting a new room project were designed. This project could also be revisited in the event of new opportunities or demand in the field of interior design.</p>',
        stacks: [
            {logo: 'skill-icons:xd', name: 'Adobe Xd'},
            {logo: 'skill-icons:illustrator', name: 'Adobe Illustrator'}
        ],
        tags: [
            'UX/UI', 'Web application'
        ],
        live_url: ''
    },
    {
        id: 12,
        image: '/images/portfolio/ebanx_lp_cover.png', 
        gallery: [ 
            {image: '/images/portfolio/ebanx-lp/lp_desktop.png', title: 'Landing page desktop version'},
            {image: '/images/portfolio/ebanx-lp/lp_mobile.png', title: 'Landing page mobile version'}
        ],
        name: 'Landing Page for a global event.', 
        client: '2019 - Ebanx', 
        description: '<p>EBANX is a Brazilian fintech company founded in 2012, providing payment solutions that connect Latin American consumers with global businesses. In 2018, it was considered the leader in international payments in Brazil.</p><p>The proposal for this project was the development of a landing page for a global event using the webflow tool.</p>',
        stacks: [
            {logo: 'skill-icons:xd', name: 'Adobe Xd'},
            {logo: 'skill-icons:webflow', name: 'Webflow'}
        ],
        tags: [
            'Landing Page', 'Webflow', 'Web responsive'
        ],
        live_url: ''
    },
    {
        id: 13,
        image: '/images/portfolio/alegra_website_cover.png', 
        gallery: [ 
            {image: '/images/portfolio/alegrafoods/alegra-foods_desktop.png', title: 'Homepage desktop version'},
            {image: '/images/portfolio/alegrafoods/alegra-foods_mobile.png', title: 'Homepage mobile version'}
        ],
        name: 'Wordpress website', 
        client: '2018 - Alegrafoods via Páprica.ag', 
        description: `<p>From the union of three major cooperatives emerges a new, genuinely Paraná-based holding company. Inspired by the greatness of its founders, Unium is a brand with over 5,000 cooperators. These are individuals who recognize that cooperation and honest work are the secrets to sustainable growth and increasing the competitiveness of the local and global agribusiness sector.</p><p>In partnership with páprica.ag, the proposal for this project was the development of a WordPress website by creating a theme from scratch, following a prototype created by the partner agency.</p><p>The result was an exclusive and interactive website with mobile responsiveness and integration with the client's internal tools.</p>`,
        stacks: [
            {logo: 'skill-icons:wordpress', name: 'Wordpress'},
            {logo: 'skill-icons:jquery', name: 'JQuery'},
            {logo: 'devicon:html5', name: 'HTML 5'},
            {logo: 'devicon:css3', name: 'CSS 3'},
            {logo: 'devicon:bitbucket', name: 'Bitbucket'}
        ],
        tags: [
            'Website', 'Wordpress', 'Responsive'
        ],
        live_url: 'https://alegrafoods.com.br'
    },
    {
        id: 14,
        image: '/images/portfolio/jobsmonster_cover.png', 
        gallery: [ 
            {image: '/images/portfolio/jobsmonster/home.png', title: 'Homepage desktop'},
            {image: '/images/portfolio/jobsmonster/home_mobile.png', title: 'Homepage mobile'},
            {image: '/images/portfolio/jobsmonster/busca_vagas.png', title: 'Jobs search'},
            {image: '/images/portfolio/jobsmonster/vaga_aberta.png', title: 'Job page'},
            {image: '/images/portfolio/jobsmonster/sobre.png', title: 'About'},
            {image: '/images/portfolio/jobsmonster/planos.png', title: 'Plans'},
            {image: '/images/portfolio/jobsmonster/empresa.png', title: 'Company page'}
        ],
        name: 'Website for searching and posting technology-related job vacancies.', 
        client: '2016/2017 - Personal project', 
        description: '<p>Jobsmonster is an MVP conceived in 2016 with the idea of simplifying the job application process for positions in the technology field.</p><p>After the initial concept, screen designs for the system were developed, but due to time constraints, it was discontinued. However, there is still hope for its return as a completely revamped and innovative project, given the significant number of job websites in the technology field in the current market.</p>',
        stacks: [
            {logo: 'skill-icons:xd', name: 'Adobe Xd'},
            {logo: 'skill-icons:illustrator', name: 'Adobe Illustrator'}
        ],
        tags: [
            'UX/UI', 'Web application', 'Website'
        ],
        live_url: ''
    }
])

const listaProjetos = reactive([
    {
        id: 1,
        image: '/images/portfolio/ahoy_cover.png', 
        gallery: [ 
            {image: '/images/portfolio/recruitment-app/login.png', title: 'Tela de Login'},
            {image: '/images/portfolio/recruitment-app/dashboard.png', title: 'Tela de Dashboard'},
            {image: '/images/portfolio/recruitment-app/professionals_list.png', title: 'Listagem de Profissionais'},
            {image: '/images/portfolio/recruitment-app/process.png', title: 'Etapas de Recrutamento'}
        ],
        name: 'Aplicação web para gestão e recrutamento na área de Tecnologia', 
        client: '2022/2023 - Ahoy by Belago', 
        description: '<p> A AHOY é uma empresa especializada em recrutamento e alocação de profissionais especializados na área de Tecnologia da Informação (TI). Nasceu do desejo, do Grupo Belago Techologies, em trazer para o mercado brasileiro a experiência multinacional do Grupo nas operações da Inglaterra, Estados Unidos e Rússia.</p> <p>A proposta desse projeto foi criar o design de interface para um sistema de gerenciamento de vagas, onde centraliza o controle de candidatos e empresas clientes da Ahoy com o objetivo de aumentar a performance de seus recrutadores através de um sistema intuitivo focado na clareza e experiência do usuário da plataforma.</p> <p>A definição das necessidades do cliente e o planejamento das telas foram organizadas através de reuniões após cada etapa de entrega ou adição de novas funcionalidades seguindo um cronograma de prioridades estipulado pelo cliente.</p> <p>A entrega final ainda contou com um design system e documentação do fluxo de telas e jornada do usuário através de um organograma visual.</p>',
        stacks: [
            {logo: 'skill-icons:xd', name: 'Adobe Xd'},
            {logo: 'skill-icons:illustrator', name: 'Adobe Illustrator'}
        ],
        tags: [
            'UX/UI', 'Sistema Web'
        ],
        live_url: ''
    },
    {
        id: 2,
        image: '/images/portfolio/bon_cover.png', 
        gallery: [ 
            {image: '/images/portfolio/bon-website/Balance-of-Nature.png', title: 'Página inicial'},
            {image: '/images/portfolio/bon-website/Balance-of-Nature_mobile.png', title: 'Adaptação para dispositivos mobile(smartphones)'}
        ],
        name: 'Desenvolvimento de Homepage', 
        client: '2022/2023 - Balance of Nature', 
        description: '<p>Balance of Nature é uma empresa Americana (St. George, UTAH) de suplementos alimentares onde dentre seus produtos estão capsulas de frutas e verduras, e um mix de Fibras e temperos.</p><p>Prestando serviços de desenvolvimento frontend para a empresa, a proposta desse projeto foi desenvolver uma versão nova e mais otimizada para a página inicial do website.</p><p>Como resultado desse projeto o site melhorou a sua performance em mais de XX% tanto em desktop quanto em dispositivos móveis(smartphones), melhorando assim a taxa de retenção de visitantes no website e consequentemente as vedas online da empresa.</p>',
        stacks: [
            {logo: 'devicon:html5', name: 'HTML 5'},
            {logo: 'devicon:css3', name: 'CSS 3'},
            {logo: 'devicon:javascript', name: 'Javascript'},
            {logo: 'devicon:vuejs', name: 'Vue.js'},
            {logo: 'logos:nuxt-icon', name: 'Nuxt.js'},
            {logo: 'devicon:gitlab', name: 'Gitlab'}
        ],
        tags: [
            'Landing Page', 'Website', 'Responsivo', 'Otimização'
        ],
        live_url: 'https://balanceofnature.com'
    },
    {
        id: 3,
        image: '/images/portfolio/onr_app_cover.png', 
        gallery: [ 
            {image: '/images/portfolio/onr-app/home.png', title: 'Tela inicial'},
            {image: '/images/portfolio/onr-app/home_logged.png', title: 'Tela inicial logado'},
            {image: '/images/portfolio/onr-app/profile.png', title: 'Opções do perfil'},
            {image: '/images/portfolio/onr-app/service_consulting.png', title: 'Serviço - Consulta rápida'},
            {image: '/images/portfolio/onr-app/service.png', title: 'Serviço'}
        ],
        name: 'Aplicativo móvel para Serviço de Registro Eletrônico de Imóveis', 
        client: '2023 - Onr', 
        description: '<p>O Operador Nacional do Sistema de Registro Eletrônico de Imóveis (ONR) é uma entidade sem fins lucrativos, de natureza jurídica especial (serviço social autônomo), composta por todos os Oficiais de Registro de Imóveis dos Estados e do Distrito Federal. </p><p>A Proposta deste projeto foi redesenhar as principais telas do aplicativo com foco na usabilidade e com um maior apelo visual na Interface do usuário.</p><p>Como resultado deste projeto o cliente recebeu o redesign das telas solicitadas através de um protótipo interativo e navegável no figma.</p>',
        stacks: [
            {logo: 'devicon:figma', name: 'Figma'}
        ],
        tags: [
            'UX/UI', 'Mobile'
        ],
        live_url: 'https://onr.org.br/'
    },
    {
        id: 4,
        image: '/images/portfolio/planing_pocker_cover.png', 
        gallery: [ 
            {image: '/images/portfolio/planing-pocker/login.png', title: 'Login via Google'},
            {image: '/images/portfolio/planing-pocker/select_options.png', title: 'Opções de início de planejamento'},
            {image: '/images/portfolio/planing-pocker/start_planning.png', title: 'Selecionando as opções de cartas para o planejamento'},
            {image: '/images/portfolio/planing-pocker/entering_room.png', title: 'Entrando em uma nova sala'},
            {image: '/images/portfolio/planing-pocker/enter_room.png', title: 'Acessar uma sala já criada'},
            {image: '/images/portfolio/planing-pocker/before_start.png', title: 'Tela de planejamento'},
            {image: '/images/portfolio/planing-pocker/planing_started_ready.png', title: 'Estimativas selecionadas pelos membros do time'},
            {image: '/images/portfolio/planing-pocker/participants_vote.png', title: 'Resultados'}
        ],
        name: 'Aplicação para planejamento de Sprint', 
        client: '2023 - Projeto pessoal', 
        description: '<p>Design de interface e desenvolvimento frontend para projeto pessoal de Ferramenta para planejamento de Sprint criada em parceiria com um desenvolvedor fullstack e companheiro de trabalho.</p><p>Meu trabalho neste projeto foi gerar um logotipo simples para a identidade do projeto, o planejamento, design e usabilidade de toda a interface e o desenvolvimento frontend de algumas telas e adaptação para dispositivos móveis (responsivo).</p>',
        stacks: [
            {logo: 'devicon:figma', name: 'Figma'},
            {logo: 'devicon:javascript', name: 'Javascript'},
            {logo: 'devicon:html5', name: 'HTML 5'},
            {logo: 'devicon:css3', name: 'CSS 3'},
            {logo: 'devicon:sass', name: 'Sass'},
            {logo: 'devicon:vuejs', name: 'Vue.js'},
            {logo: 'logos:nuxt-icon', name: 'Nuxt.js'},
            {logo: 'devicon:github', name: 'Github'}
        ],
        tags: [
            'UX/UI','Logotipo', 'Sistema Web', 'Responsivo'
        ],
        live_url: ''
    },
    {
        id: 5,
        image: '/images/portfolio/hourglass_cover.png', 
        gallery: [ 
            {image: '/images/portfolio/hourglass/login.png', title: 'Tela de Login'},
            {image: '/images/portfolio/hourglass/dashboard.png', title: 'Dashboard'},
            {image: '/images/portfolio/hourglass/history.png', title: 'Histórico de registros'},
            {image: '/images/portfolio/hourglass/reports.png', title: 'Relatórios'}
        ],
        name: 'Sitema de registro de ponto e gestão de tempo', 
        client: '2023 - Projeto pessoal', 
        description: '<p>Criação de identidade visual e interface parea sistema de ponto e gestão de tempo para empresas e freelancers.</p><p>Este projeto surgiu de uma necessidade pessoal em registrar o tempo de trabalho dedicado a projetos de clientes e assim poder gerar relatórios e contabilizar ganhos em controle de horas dedicadas a projetos freelance e contratos de longo prazo.</p><p>O projeto ainda esta em fase de planejamento mas por necessidades próprias começará a ser desenvolvido em breve.</p>',
        stacks: [
            {logo: 'devicon:figma', name: 'Figma'}
        ],
        tags: [
            'UX/UI','Logotipo'
        ],
        live_url: ''
    },
    {
        id: 6,
        image: '/images/portfolio/cute_faces_cover.png', 
        gallery: [ 
            {image: '/images/portfolio/cute-faces/cute_faces_heroes.png', title: 'Logotipo coleção'},
            {image: '/images/portfolio/cute-faces/quadro_1.png', title: 'Herói 1'},
            {image: '/images/portfolio/cute-faces/quadro_2.png', title: 'Herói 2'},
            {image: '/images/portfolio/cute-faces/quadro_3.png', title: 'Herói 3'},
            {image: '/images/portfolio/cute-faces/quadro_4.png', title: 'Herói 4'},
            {image: '/images/portfolio/cute-faces/quadro_5.png', title: 'Herói 5'},
            {image: '/images/portfolio/cute-faces/quadro_6.png', title: 'Herói 6'},
            {image: '/images/portfolio/cute-faces/quadro_7.png', title: 'Herói 7'},
            {image: '/images/portfolio/cute-faces/quadro_8.png', title: 'Herói 8'}
        ],
        name: 'Illustrações para coleção de quadros infantis', 
        client: '2023 - Spark B.',
        description: '<p>Criação de ilustrações para colecão de quadros para quarto infantil masculino, baseada em heróis.</p><p>Focadas para a decoração de quartos de bebês menino, as ilustrações buscaram captar a simplicidade das formas destacando os detalhes de cada herói representado por um rosto de bebê.</p>',
        stacks: [
            {logo: 'skill-icons:illustrator', name: 'Adobe Illustrator'}
        ],
        tags: [
            'Ilustração','Vetor'
        ],
        live_url: ''
    },
    {
        id: 7,
        image: '/images/portfolio/sparkb_cover.png', 
        gallery: [ 
            {image: '/images/portfolio/sparkb/brand.png', title: 'Criação de logotipo'},
            {image: '/images/portfolio/sparkb/guia_instalacao_e_cuidados_frente.png', title: 'Manual de instalação frente'},
            {image: '/images/portfolio/sparkb/guia_instalacao_e_cuidados_verso.png', title: 'Manual de instalação verso'},
            {image: '/images/portfolio/sparkb/frente-cartao-semente.png', title: 'Cartão semente frente'},
            {image: '/images/portfolio/sparkb/verso-cartao-semente.png', title: 'Cartão semente verso'},
            {image: '/images/portfolio/sparkb/embalagem_personalizada.png', title: 'Embalagem do produto'},
            {image: '/images/portfolio/sparkb/website.png', title: 'Tema personalizado'}
        ],
        name: 'Criação de identidade visual e personalização de tema para loja virtual', 
        client: '2022/2023 - Spark B.',
        description: '<p>Spark B. é uma empresa em desenvolvimento onde o seu principal objetivo é vender quadros decorativos com o foco no atendimento ao cliente e a qualidade.</p><p>Neste projeto foi desenvovida toda a identidade visual da marca assim como a personalização da loja virtual no woocommerce (Wordpress), dando uma abordagem mais divertida e moderna seguindo os conceitos da marca.</p>',
        stacks: [
            {logo: 'skill-icons:illustrator', name: 'Adobe Illustrator'},
            {logo: 'skill-icons:photoshop', name: 'Adobe Photoshop'},
            {logo: 'skill-icons:wordpress', name: 'Wordpress'},
            {logo: 'devicon:html5', name: 'HTML 5'},
            {logo: 'devicon:css3', name: 'CSS 3'}
        ],
        tags: [
            'UX/UI','Logotipo', 'Website', 'Responsivo'
        ],
        live_url: 'https://sparkb.com.br'
    },
    {
        id: 8,
        image: '/images/portfolio/curitiba_app_cover.png', 
        gallery: [ 
            {image: '/images/portfolio/curitiba-app/splash.png', title: 'Splash Screen'},
            {image: '/images/portfolio/curitiba-app/tela_inicial.png', title: 'Tela Acesso'},
            {image: '/images/portfolio/curitiba-app/onboard.png', title: 'Onboard'},
            {image: '/images/portfolio/curitiba-app/inicio.png', title: 'Tela inicial'},
            {image: '/images/portfolio/curitiba-app/onibus_buscar.png', title: 'Buscar Onibus'},
            {image: '/images/portfolio/curitiba-app/onibus_postos.png', title: 'Pontos próximos'},
            {image: '/images/portfolio/curitiba-app/onibus_trajeto.png', title: 'Trajeto de ônibus'},
            {image: '/images/portfolio/curitiba-app/iss.png', title: 'Pagamento de Imposto ISS'},
            {image: '/images/portfolio/curitiba-app/noticias_lista.png', title: 'Lista de notícias'},
            {image: '/images/portfolio/curitiba-app/noticias_aberto.png', title: 'Ntícia selecionada'},
            {image: '/images/portfolio/curitiba-app/curitiba_le.png', title: 'Livros disponíveis para leitura'},
            {image: '/images/portfolio/curitiba-app/agenda.png', title: 'Agenda de eventos'},
            {image: '/images/portfolio/curitiba-app/transito.png', title: 'Consulta de trânsito por bairro'}
        ],
        name: 'Aplicativo móvel Curitiba App', 
        client: '2021/2022 - ICI via Belago', 
        description: '<p>O aplicativo Curitiba APP é um concentrador de aplicativos e serviços da Prefeitura Municipal de Curitiba e colocará a interação entre os cidadãos e a administração pública em um novo nível de conectividade, centralizando o consumo dos principais serviços públicos em um único local.</p><p>O objetivo do projeto foi fazer uma repaginada total no aplicativo, melhorar a experiência do usuário e criar um design mais moderno para a interface.</p><p>Ao final do projeto foi desenvolvida uma nova indentidade visual para a aplicação com um perfeito equilíbrio entre a clareza, simplicidade e modernidade, através da otimização da jornada do usuário para cada conclusão de tarefa apresentada em um protótipo navegável.</p>',
        stacks: [
            {logo: 'skill-icons:xd', name: 'Adobe Xd'},
            {logo: 'skill-icons:illustrator', name: 'Adobe Illustrator'}

        ],
        tags: [
            'UX/UI', 'Mobile', 'Design de ícones'
        ],
        live_url: 'https://play.google.com/store/apps/details?id=br.org.curitiba.ici.appcuritiba&hl=pt&gl=US'
    },
    {
        id: 9,
        image: '/images/portfolio/chat_156_cover.png', 
        gallery: [ 
            {image: '/images/portfolio/chat_156/login.png', title: 'Login'},
            {image: '/images/portfolio/chat_156/espera.png', title: 'Espera atendimento'},
            {image: '/images/portfolio/chat_156/espera2.png', title: 'Atendimento em instantes'},
            {image: '/images/portfolio/chat_156/chat_iniciado.png', title: 'Chat iniciado'},
            {image: '/images/portfolio/chat_156/imagem.png', title: 'Upload de imagem'},
            {image: '/images/portfolio/chat_156/imagem2.png', title: 'Imagem enviada'},
            {image: '/images/portfolio/chat_156/encerrado_cidadao.png', title: 'Chat encerrado'},
            {image: '/images/portfolio/chat_156/avaliacao.png', title: 'Avaliação'}
        ],
        name: 'Chat 156', 
        client: '2021 - ICI via Belago', 
        description: '<p>O Chat 156 é um dos maiores canais de comunicacõa e solicitação de serviços públicos da prefeitura de Curitiba.</p><p>O Objetivo deste projeto foi modernizar, melhorar a usabilidade e performance do Chat 156, onde a sua interface clean proporcionou uma melhor comunicação e entendimento do usuário na plataforma.</p>',
        stacks: [
            {logo: 'skill-icons:xd', name: 'Adobe Xd'},
            {logo: 'skill-icons:illustrator', name: 'Adobe Illustrator'},
            {logo: 'devicon:html5', name: 'HTML 5'},
            {logo: 'devicon:css3', name: 'CSS 3'},
            {logo: 'file-icons:tortoisesvn', name: 'Tortoise SVN'}
        ],
        tags: [
            'UX/UI', 'Chat', 'Aplicação web'
        ],
        live_url: 'https://156.curitiba.pr.gov.br/'
    },
    {
        id: 10,
        image: '/images/portfolio/mago_jardineiro_cover.png', 
        gallery: [ 
            {image: '/images/portfolio/mago-jardineiro/home.png', title: 'Website versão desktop'},
            {image: '/images/portfolio/mago-jardineiro/home_mobile.png', title: 'Website versão responsiva'},
            {image: '/images/portfolio/mago-jardineiro/open_menu.png', title: 'Menu mobile aberto'}
        ],
        name: 'One Page Website', 
        client: '2021 - Mago Jardineiro', 
        description: '<p>Ademar da Silva Brasileiro ganhou o apelido de Mago Jardineiro por ter uma intimidade com o reino vegetal que remete à infância no sítio, onde aprendeu com os avós a cultivar a vida.</p><p>O objetivo deste projeto foi a criacão de um design exclusivo para um website estilo one page, onde busca fazer uma apresentação do profissional assim como os cursos e palestras ministradas pelo mesmo.</p><p>Como entrega final o cliente recebeu um protótipo navegável desenvolvido no Adobe Xd.</p>',
        stacks: [
            {logo: 'skill-icons:xd', name: 'Adobe Xd'},
            {logo: 'skill-icons:photoshop', name: 'Adobe Photoshop'},
            {logo: 'skill-icons:illustrator', name: 'Adobe Illustrator'}
        ],
        tags: [
            'UX/UI', 'Landing Page', 'Website', 'Responsivo'
        ],
        live_url: 'https://magojardineiro.com.br'
    },
    {
        id: 11,
        image: '/images/portfolio/ambience_cover.png', 
        gallery: [ 
            {image: '/images/portfolio/ambience/cadastro.png', title: 'Cadastro'},
            {image: '/images/portfolio/ambience/login.png', title: 'Login'},
            {image: '/images/portfolio/ambience/projetos.png', title: 'Projetos'},
            {image: '/images/portfolio/ambience/projeto_novo.png', title: 'Novo projeto'},
            {image: '/images/portfolio/ambience/etapa_1.png', title: 'Ambiente'},
            {image: '/images/portfolio/ambience/etapa_2.png', title: 'Estilo de design'},
            {image: '/images/portfolio/ambience/etapa_3.png', title: 'Subestilo'},
            {image: '/images/portfolio/ambience/etapa_4.png', title: 'Medidas do ambiente'},
            {image: '/images/portfolio/ambience/etapa_5.png', title: 'Fotos do ambiente'},
            {image: '/images/portfolio/ambience/etapa_6.png', title: 'Projeto solicitado com sucesso'}
        ],
        name: 'Sistema para projetar design de interiores', 
        client: '2020 - Idealização MVP',
        description: '<p>O Ambience teve como objetivo ser um experimento para idealizaçõa de um MVP voltado para projeto de interiores através de solicitações online, onde o as informações essenciais para a criacõa do projeto seriam enviadas pelo cliente através da plataforma e o mesmo receberia seu projeto pronto por e-mail.</p><p>Apesar de descontinuado foram desenhadas as principais telas de acesso e solicitacõa de um novo projeto de ambiente, este também pode ser um projeto a ser retomado em caso de novas oportunidades de demanda na área de design de interiores.</p>',
        stacks: [
            {logo: 'skill-icons:xd', name: 'Adobe Xd'},
            {logo: 'skill-icons:illustrator', name: 'Adobe Illustrator'}
        ],
        tags: [
            'UX/UI', 'Sistema web'
        ],
        live_url: ''
    },
    {
        id: 12,
        image: '/images/portfolio/ebanx_lp_cover.png', 
        gallery: [ 
            {image: '/images/portfolio/ebanx-lp/lp_desktop.png', title: 'Landing page versão desktop'},
            {image: '/images/portfolio/ebanx-lp/lp_mobile.png', title: 'Landing page versão responsiva'}
        ],
        name: 'Landing Page para evento global', 
        client: '2019 - Ebanx', 
        description: '<p>EBANX é uma fintech brasileira fundada em 2012 que oferece soluções de pagamento que conecta consumidores latino-americanos a empresas globais. Foi considerada em 2018 a líder em pagamentos internacionais no Brasil.</p><p>A proposta desse projeto foi o desenvolvimento de uma Landing page para um evento global utilizando a ferramenta webflow. </p>',
        stacks: [
            {logo: 'skill-icons:xd', name: 'Adobe Xd'},
            {logo: 'skill-icons:webflow', name: 'Webflow'}
        ],
        tags: [
            'Landing Page', 'Webflow', 'Responsivo'
        ],
        live_url: ''
    },
    {
        id: 13,
        image: '/images/portfolio/alegra_website_cover.png', 
        gallery: [ 
            {image: '/images/portfolio/alegrafoods/alegra-foods_desktop.png', title: 'Página inicial versão desktop'},
            {image: '/images/portfolio/alegrafoods/alegra-foods_mobile.png', title: 'Versão mobile'}
        ],
        name: 'Website em Wordpress', 
        client: '2018 - Alegrafoods via Páprica.ag', 
        description: '<p>Da união de três grandes cooperativas, nasce uma nova holding genuinamente paranaense. Inspirada na grandeza de seus realizadores, a Unium é uma marca com mais de 5 mil cooperados. Gente que reconhece na cooperação e no trabalho honesto o segredo para o crescimento sustentável e o aumento da competitividade do agronegócio local e global.</p><p>Em parceria com a páprica.ag, a proposto deste projeto foi o desenvolvimento de um website em wordpress através da criacão de um tema do zero seguindo um protótipo criado pela agência parceira.</p><p>O resultado foi um website exclusivo e interativo com adaptação para dispositivos móveis e integração com ferramentas internas dos cliente.</p>',
        stacks: [
            {logo: 'skill-icons:wordpress', name: 'Wordpress'},
            {logo: 'skill-icons:jquery', name: 'JQuery'},
            {logo: 'devicon:html5', name: 'HTML 5'},
            {logo: 'devicon:css3', name: 'CSS 3'},
            {logo: 'devicon:bitbucket', name: 'Bitbucket'}
        ],
        tags: [
            'Website', 'Wordpress', 'Responsivo'
        ],
        live_url: 'https://alegrafoods.com.br'
    },
    {
        id: 14,
        image: '/images/portfolio/jobsmonster_cover.png', 
        gallery: [ 
            {image: '/images/portfolio/jobsmonster/home.png', title: 'Página inicial'},
            {image: '/images/portfolio/jobsmonster/home_mobile.png', title: 'Página inicial Responsivo'},
            {image: '/images/portfolio/jobsmonster/busca_vagas.png', title: 'Busca de vagas'},
            {image: '/images/portfolio/jobsmonster/vaga_aberta.png', title: 'Vaga aberta'},
            {image: '/images/portfolio/jobsmonster/sobre.png', title: 'Sobre'},
            {image: '/images/portfolio/jobsmonster/planos.png', title: 'Planos'},
            {image: '/images/portfolio/jobsmonster/empresa.png', title: 'Empresa aberta'}
        ],
        name: 'Website de busca e publicação de vagas de ', 
        client: '2016/2017 - Projeto pessoal', 
        description: '<p>Jobsmonster é um MVP idealizado em 2016 como uma ideia de facilitar a candidatura para vagas voltadas para a área de tecnologia.</p><p>Após a idealização, foi desenvolvido o design das telas do sistema, mas por escasses de tempo foi descontinuado, embora ainda haja esperanças de retornar como um projeto totalmente reapginado e inovador visto a grande quantidade de sites de empregos na area de tecnologia no mercado atualmente.</p>',
        stacks: [
            {logo: 'skill-icons:xd', name: 'Adobe Xd'},
            {logo: 'skill-icons:illustrator', name: 'Adobe Illustrator'}
        ],
        tags: [
            'UX/UI', 'Sistema web', 'Website'
        ],
        live_url: ''
    }
])
</script>