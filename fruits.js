// Array of fruits with their details
const fruits = [
    {
        nome: "Abacate Breda",
        descricao: "Variedade de abacate com frutos grandes e saborosos.",
        imagem: "images/fotos/Abacate-Breda-230x230.webp"
    },
    {
        nome: "Abacate Breda Enxertado",
        descricao: "Abacate Breda enxertado para melhor produtividade.",
        imagem: "images/fotos/Abacate-Breda-230x230.webp"
    },
    {
        nome: "Abacate Fortuna",
        descricao: "Variedade de abacate com excelente sabor e textura.",
        imagem: "images/fotos/Abacate-Fortuna-230x230.webp"
    },
    {
        nome: "Abacate Fortuna Enxertado",
        descricao: "Abacate Fortuna enxertado para maior produtividade.",
        imagem: "images/fotos/Abacate-Fortuna-230x230.webp"
    },
    {
        nome: "Abacate Quintal",
        descricao: "Variedade tradicional de abacate para quintais.",
        imagem: "images/fotos/Abacate-1-230x230.jpg"
    },
    {
        nome: "Abacate Quintal Enxertado",
        descricao: "Abacate Quintal enxertado para melhor desenvolvimento.",
        imagem: "images/fotos/Abacate-1-230x230.jpg"
    },
    {
        nome: "Abiu Amarelo",
        descricao: "Fruta nativa brasileira com polpa doce e amarela.",
        imagem: "images/fotos/Abiu-Amarelo-230x230.webp"
    },
    {
        nome: "Abiu Roxo",
        descricao: "Variedade rara de abiu com casca roxa.",
        imagem: "images/fotos/Abiu-Roxo-230x230.webp"
    },
    {
        nome: "Açaí",
        descricao: "Palmeira nativa da Amazônia, fruto muito nutritivo.",
        imagem: "images/fotos/Acai-230x230.jpg"
    },
    {
        nome: "Amora Gigante",
        descricao: "Variedade de amora com frutos grandes e doces.",
        imagem: "images/fotos/Amora-Gigante-230x230.webp"
    },
    {
        nome: "Amora Preta",
        descricao: "Amora tradicional com frutos pretos e saborosos.",
        imagem: "images/fotos/Amora-Preta-230x230.jpg"
    },
    {
        nome: "Araçá",
        descricao: "Fruta nativa brasileira com sabor ácido e doce.",
        imagem: "images/fotos/Araca-2-230x230.webp"
    },
    {
        nome: "Araçá Boi",
        descricao: "Variedade grande de araçá, ideal para sucos.",
        imagem: "images/fotos/Araca-Boi-Fruta-230x230.jpg"
    },
    {
        nome: "Atemóia",
        descricao: "Híbrido entre a cherimóia e a fruta-do-conde.",
        imagem: "images/fotos/Atemoia-1-230x230.webp"
    },
    {
        nome: "Atemóia Enxertada",
        descricao: "Atemóia enxertada para melhor produtividade.",
        imagem: "images/fotos/Atemoia-1-230x230.webp"
    },
    {
        nome: "Avocado Hass",
        descricao: "Variedade premium de abacate com casca rugosa.",
        imagem: "images/fotos/Avocado-Hass-230x230.webp"
    },
    {
        nome: "Avocado Hass Enxertado",
        descricao: "Avocado Hass enxertado para produção precoce.",
        imagem: "images/fotos/Avocado-Hass-230x230.webp"
    },
    {
        nome: "Bacupari",
        descricao: "Fruta nativa brasileira com sabor único.",
        imagem: "images/fotos/Bacupar-230x230.webp"
    },
    {
        nome: "Banana Catarina",
        descricao: "Variedade de banana com frutos grandes.",
        imagem: "images/fotos/Banana-Nanica-230x230.jpg"
    },
    {
        nome: "Banana Maçã",
        descricao: "Banana com sabor e aroma de maçã.",
        imagem: "images/fotos/Banana-maca-230x230.webp"
    },
    {
        nome: "Banana Nanica",
        descricao: "Variedade de banana mais comum no Brasil.",
        imagem: "images/fotos/Banana-Nanica-230x230.jpg"
    },
    {
        nome: "Banana Prata",
        descricao: "Banana mais resistente e duradoura.",
        imagem: "images/fotos/Banana-Prata-230x230.webp"
    },
    {
        nome: "Banana Prata Enxertada",
        descricao: "Banana Prata enxertada para melhor produção.",
        imagem: "images/fotos/Banana-Prata-230x230.webp"
    },
    {
        nome: "Cabeludinha",
        descricao: "Fruta nativa com casca aveludada.",
        imagem: "images/fotos/Cabeludinha-230x230.webp"
    },
    {
        nome: "Cacau",
        descricao: "Árvore que produz o fruto do chocolate.",
        imagem: "images/fotos/Cacau-1-230x230.jpg"
    },
    {
        nome: "Cajá Manga",
        descricao: "Fruta tropical com sabor ácido e doce.",
        imagem: "images/fotos/Caja-manga-230x230.webp"
    },
    {
        nome: "Cajá Mirim",
        descricao: "Variedade menor de cajá, muito saborosa.",
        imagem: "images/fotos/Caja-manga-mirim-230x230.jpg"
    },
    {
        nome: "Caju Anão",
        descricao: "Variedade de caju com porte reduzido.",
        imagem: "images/fotos/caju-anao-230x230.webp"
    },
    {
        nome: "Calabura",
        descricao: "Fruta nativa com sabor doce e suculento.",
        imagem: "images/fotos/Calabura-230x230.jpg"
    },
    {
        nome: "Cambucá",
        descricao: "Fruta nativa brasileira em risco de extinção.",
        imagem: "images/fotos/Cambuca-230x230.webp"
    },
    {
        nome: "Cambuci",
        descricao: "Fruta nativa da Mata Atlântica.",
        imagem: "images/fotos/cambuci-2-230x230.webp"
    },
    {
        nome: "Camu-camu",
        descricao: "Fruta amazônica com alto teor de vitamina C.",
        imagem: "https://via.placeholder.com/300x200?text=Camu-camu"
    },
    {
        nome: "Carambola Doce",
        descricao: "Variedade de carambola com sabor mais doce.",
        imagem: "images/fotos/carambola-doce-fruta-230x230.webp"
    },
    {
        nome: "Carambola Doce Enxertada",
        descricao: "Carambola doce enxertada para melhor produção.",
        imagem: "https://via.placeholder.com/300x200?text=Carambola+Doce+Enxertada"
    },
    {
        nome: "Castanha Do Pará",
        descricao: "Árvore que produz a castanha-do-pará.",
        imagem: "images/fotos/Castanha-do-para-230x230.webp"
    },
    {
        nome: "Cereja",
        descricao: "Fruta de clima temperado, muito apreciada.",
        imagem: "images/fotos/Cereja-230x230.webp"
    },
    {
        nome: "Cereja do Rio Grande",
        descricao: "Variedade de cereja adaptada ao Brasil.",
        imagem: "images/fotos/Cereja-do-rio-grande-225x230.jpg"
    },
    {
        nome: "Côco Anão",
        descricao: "Variedade de coco com porte reduzido.",
        imagem: "images/fotos/Coco-anao-230x230.jpg"
    },
    {
        nome: "Cupuaçu",
        descricao: "Fruta amazônica com polpa cremosa.",
        imagem: "images/fotos/Cupuacu-230x230.webp"
    },
    {
        nome: "Framboesa",
        descricao: "Fruta de clima temperado, muito nutritiva.",
        imagem: "images/fotos/Framboesa-230x230.webp"
    },
    {
        nome: "Fruta do Conde",
        descricao: "Fruta tropical com polpa cremosa e doce.",
        imagem: "images/fotos/Fruta-do-conde-230x230.jpg"
    },
    {
        nome: "Fruta Pão",
        descricao: "Fruta tropical com alto valor nutritivo.",
        imagem: "images/fotos/Fruta-pao-230x230.webp"
    },
    {
        nome: "Gabiroba",
        descricao: "Fruta nativa brasileira com sabor único.",
        imagem: "images/fotos/Gabiroba-230x230.webp"
    },
    {
        nome: "Goiaba Branca",
        descricao: "Variedade de goiaba com polpa branca.",
        imagem: "images/fotos/Goiaba-branca-230x230.jpg"
    },
    {
        nome: "Goiaba Paluma",
        descricao: "Variedade de goiaba vermelha muito produtiva.",
        imagem: "images/fotos/Goiaba-Paluma-230x230.webp"
    },
    {
        nome: "Goiaba Tailandesa",
        descricao: "Variedade de goiaba com frutos grandes.",
        imagem: "images/fotos/Goiaba-tailandesa-230x230.jpg"
    },
    {
        nome: "Goiaba Vermelha",
        descricao: "Variedade tradicional de goiaba vermelha.",
        imagem: "images/fotos/goiaba-vermelha-fruta-230x230.webp"
    },
    {
        nome: "Graviola",
        descricao: "Fruta tropical com polpa cremosa e doce.",
        imagem: "images/fotos/Graviola-230x230.webp"
    },
    {
        nome: "Grumixama",
        descricao: "Fruta nativa brasileira com sabor doce.",
        imagem: "images/fotos/Grumixama-230x230.webp"
    },
    {
        nome: "Jabuticaba Híbrida",
        descricao: "Variedade melhorada de jabuticaba.",
        imagem: "images/fotos/Jabuticaba-Hibrida-2-230x230.jpg"
    },
    {
        nome: "Jabuticaba Sabará",
        descricao: "Variedade tradicional de jabuticaba.",
        imagem: "images/fotos/Jabuticaba-Sabara-230x230.webp"
    },
    {
        nome: "Jaca Dura",
        descricao: "Variedade de jaca com polpa mais firme.",
        imagem: "images/fotos/jaca-dura-230x230.jpg"
    },
    {
        nome: "Jaca Mole",
        descricao: "Variedade de jaca com polpa mais macia.",
        imagem: "images/fotos/jaca-mole-230x230.png"
    },
    {
        nome: "Jambo Amarelo",
        descricao: "Variedade de jambo com frutos amarelos.",
        imagem: "images/fotos/Jambo-Amarelo-230x230.webp"
    },
    {
        nome: "Jambo Roxo",
        descricao: "Variedade de jambo com frutos roxos.",
        imagem: "images/fotos/Jambo-Roxo-Fruta-230x230.jpg"
    },
    {
        nome: "Jambolão",
        descricao: "Fruta nativa brasileira com sabor único.",
        imagem: "images/fotos/Jambolao-230x230.webp"
    },
    {
        nome: "Kinkan",
        descricao: "Fruta cítrica pequena e ornamental.",
        imagem: "images/fotos/kinkan-fruta-230x230.jpg"
    },
    {
        nome: "Laranja Bahia",
        descricao: "Variedade de laranja sem sementes.",
        imagem: "images/fotos/Laranja-Bahia-230x230.webp"
    },
    {
        nome: "Laranja Champagne",
        descricao: "Variedade de laranja com sabor suave.",
        imagem: "images/fotos/Laranja-Champagne-230x230.jpg"
    },
    {
        nome: "Laranja Charmute",
        descricao: "Variedade de laranja muito doce.",
        imagem: "images/fotos/Laranja-Charmute-230x230.webp"
    },
    {
        nome: "Laranja Cidra",
        descricao: "Variedade de laranja para doces.",
        imagem: "images/fotos/Laranja-Cidra-230x230.webp"
    },
    {
        nome: "Laranja Lima",
        descricao: "Variedade de laranja com sabor suave.",
        imagem: "images/fotos/Laranja-Lima-230x230.jpg"
    },
    {
        nome: "Laranja Pêra Coroa",
        descricao: "Variedade de laranja pêra muito produtiva.",
        imagem: "images/fotos/Laranja-Pera-Coroa-230x230.jpg"
    },
    {
        nome: "Laranja Pêra Natal",
        descricao: "Variedade de laranja pêra precoce.",
        imagem: "images/fotos/Laranja-Pera-Natal-230x230.webp"
    },
    {
        nome: "Laranja Pêra Rio",
        descricao: "Variedade tradicional de laranja pêra.",
        imagem: "images/fotos/Laranja-Pera-Rio-230x230.png"
    },
    {
        nome: "Laranja Sanguina",
        descricao: "Variedade de laranja com polpa vermelha.",
        imagem: "images/fotos/Laranja-Sanguina-230x230.jpg"
    },
    {
        nome: "Laranja Selecta",
        descricao: "Variedade de laranja muito doce.",
        imagem: "images/fotos/Laranja-Selecta-230x230.jpg"
    },
    {
        nome: "Laranja Serra D'Água",
        descricao: "Variedade de laranja para sucos.",
        imagem: "images/fotos/Laranja-Serra-D-Agua-230x230.jpg"
    },
    {
        nome: "Lichia Bengal",
        descricao: "Variedade de lichia com frutos grandes.",
        imagem: "images/fotos/Lichia-Bengal-230x230.webp"
    },
    {
        nome: "Lima Da Pérsia",
        descricao: "Variedade de lima muito aromática.",
        imagem: "images/fotos/Lima-Da-persia-fruta-230x230.jpg"
    },
    {
        nome: "Limão Cravo",
        descricao: "Variedade de limão com casca avermelhada.",
        imagem: "images/fotos/Limao-Cravo-230x230.jpg"
    },
    {
        nome: "Limão Galego",
        descricao: "Variedade de limão com frutos pequenos.",
        imagem: "images/fotos/Limao-Galego-230x230.webp"
    },
    {
        nome: "Limão Siciliano",
        descricao: "Variedade de limão com frutos grandes.",
        imagem: "images/fotos/Limao-Siciliano-230x230.webp"
    },
    {
        nome: "Limão Taiti",
        descricao: "Variedade de limão mais comum no Brasil.",
        imagem: "images/fotos/Limao-Taiti-230x230.jpg"
    },
    {
        nome: "Longana",
        descricao: "Fruta exótica com sabor doce e suave.",
        imagem: "images/fotos/Longana-2-230x230.webp"
    },
    {
        nome: "Macadâmia",
        descricao: "Árvore que produz nozes de macadâmia.",
        imagem: "images/fotos/Macadamia-230x230.webp"
    },
    {
        nome: "Manga Bourbon",
        descricao: "Variedade de manga com sabor intenso.",
        imagem: "images/fotos/Manga-bourbon-230x230.webp"
    },
    {
        nome: "Manga Bourbon Enxertada",
        descricao: "Manga Bourbon enxertada para melhor produção.",
        imagem: "images/fotos/Manga-bourbon-230x230.webp"
    },
    {
        nome: "Manga Espada",
        descricao: "Variedade de manga alongada e doce.",
        imagem: "images/fotos/Manga-espada-230x230.webp"
    },
    {
        nome: "Manga Espada Enxertada",
        descricao: "Manga Espada enxertada para melhor desenvolvimento.",
        imagem: "images/fotos/Manga-espada-230x230.webp"
    },
    {
        nome: "Manga Haden",
        descricao: "Variedade de manga com casca colorida.",
        imagem: "images/fotos/Manga-Haden-230x230.webp"
    },
    {
        nome: "Manga Haden Enxertada",
        descricao: "Manga Haden enxertada para maior produtividade.",
        imagem: "images/fotos/Manga-Haden-230x230.webp"
    },
    {
        nome: "Manga Keitt",
        descricao: "Variedade de manga tardia e doce.",
        imagem: "images/fotos/Manga-Keitt-230x230.jpg"
    },
    {
        nome: "Manga Keitt Enxertada",
        descricao: "Manga Keitt enxertada para melhor produção.",
        imagem: "images/fotos/Manga-Keitt-230x230.jpg"
    },
    {
        nome: "Manga Manteiga",
        descricao: "Variedade de manga com polpa cremosa.",
        imagem: "images/fotos/Manga-Manteiga-230x230.jpg"
    },
    {
        nome: "Manga Manteiga Enxertada",
        descricao: "Manga Manteiga enxertada para melhor desenvolvimento.",
        imagem: "images/fotos/Manga-Manteiga-230x230.jpg"
    },
    {
        nome: "Manga Palmer",
        descricao: "Variedade de manga muito produtiva.",
        imagem: "images/fotos/Manga-Palmer-fruta-no-pe-230x230.webp"
    },
    {
        nome: "Manga Palmer Enxertada",
        descricao: "Manga Palmer enxertada para produção precoce.",
        imagem: "images/fotos/Manga-Palmer-fruta-no-pe-230x230.webp"
    },
    {
        nome: "Manga Rubí",
        descricao: "Variedade de manga com polpa vermelha.",
        imagem: "images/fotos/Manga-Rubi-2-230x230.jpg"
    },
    {
        nome: "Manga Rubi Enxertada",
        descricao: "Manga Rubi enxertada para melhor produtividade.",
        imagem: "images/fotos/Manga-Rubi-2-230x230.jpg"
    },
    {
        nome: "Manga Tommy Atkins",
        descricao: "Variedade de manga muito resistente.",
        imagem: "images/fotos/Manga-Tommy-atkins-230x230.webp"
    },
    {
        nome: "Manga Tommy Atkins Enxertada",
        descricao: "Manga Tommy Atkins enxertada para melhor produção.",
        imagem: "images/fotos/Manga-Tommy-atkins-230x230.webp"
    },
    {
        nome: "Mangostão Amarelo",
        descricao: "Variedade de mangostão com casca amarela.",
        imagem: "images/fotos/Mangostao-Amarelo-230x230.jpg"
    },
    {
        nome: "Mangostin Legítimo",
        descricao: "Variedade tradicional de mangostão.",
        imagem: "images/fotos/Mangostao-Legitimo-230x230.webp"
    },
    {
        nome: "Mexerica",
        descricao: "Variedade de tangerina muito doce.",
        imagem: "images/fotos/Mexerica-230x230.jpg"
    },
    {
        nome: "Nêspera",
        descricao: "Fruta de clima temperado, muito saborosa.",
        imagem: "images/fotos/Nespera-230x230.jpg"
    },
    {
        nome: "Noz Pecan",
        descricao: "Árvore que produz nozes pecan.",
        imagem: "images/fotos/Noz-pecan-230x230.jpg"
    },
    {
        nome: "Pêra",
        descricao: "Fruta de clima temperado, muito versátil.",
        imagem: "images/fotos/Pera-230x230.webp"
    },
    {
        nome: "Pêra Asiática",
        descricao: "Variedade de pêra com formato arredondado.",
        imagem: "images/fotos/Pera-Asiatica-230x230.jpg"
    },
    {
        nome: "Pêra D'água",
        descricao: "Variedade de pêra com polpa suculenta.",
        imagem: "images/fotos/Pera-D-Agua-230x230.webp"
    },
    {
        nome: "Pêssego",
        descricao: "Fruta de clima temperado, muito aromática.",
        imagem: "images/fotos/Pessego-230x230.jpg"
    },
    {
        nome: "Pitanga",
        descricao: "Fruta nativa brasileira com sabor único.",
        imagem: "images/fotos/Pitanga-230x230.webp"
    },
    {
        nome: "Pitomba",
        descricao: "Fruta nativa brasileira com sabor doce.",
        imagem: "images/fotos/Pitomba-230x230.webp"
    },
    {
        nome: "Rambutão",
        descricao: "Fruta exótica com casca peluda.",
        imagem: "images/fotos/Rambutao-230x230.webp"
    },
    {
        nome: "Romã",
        descricao: "Fruta com sementes vermelhas e suculentas.",
        imagem: "images/fotos/Roma-230x230.webp"
    },
    {
        nome: "Tamarindo",
        descricao: "Fruta com polpa ácida e doce.",
        imagem: "images/fotos/Tamarindo-230x230.jpg"
    },
    {
        nome: "Tangerina Dekopon",
        descricao: "Variedade de tangerina sem sementes.",
        imagem: "images/fotos/Laranja-Decopom-2-230x230.webp"
    },
    {
        nome: "Uva Isabel",
        descricao: "Variedade de uva para sucos e vinhos.",
        imagem: "images/fotos/Uva-Isabel-230x230.jpg"
    },
    {
        nome: "Uva Moscatel",
        descricao: "Variedade de uva muito aromática.",
        imagem: "images/fotos/Uva-Moscatel-230x230.png"
    },
    {
        nome: "Uva Niágara Branca",
        descricao: "Variedade de uva branca muito doce.",
        imagem: "images/fotos/Uva-Niagra-Brnca-1-230x230.jpg"
    },
    {
        nome: "Uva Niágara Rosa",
        descricao: "Variedade de uva rosa muito saborosa.",
        imagem: "images/fotos/Uva-Niagara-Rosa-230x230.jpg"
    },
    {
        nome: "Uva Thompson",
        descricao: "Variedade de uva sem sementes.",
        imagem: "images/fotos/Uva-Thompson-230x230.jpg"
    },
    {
        nome: "Uvaia",
        descricao: "Fruta nativa brasileira com sabor ácido.",
        imagem: "images/fotos/Uvaia-230x230.jpg"
    }
]; 