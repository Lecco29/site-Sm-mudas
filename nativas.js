// Array of native trees with their details
const nativas = [
    {
        nome: "Acácia Javanesa",
        descricao: "Árvore ornamental de rápido crescimento, ideal para sombreamento.",
        imagem: "images/na/Acácia Javanesa.jpg",
        clima: "Tropical/Subtropical",
        tamanho: "60-80 cm",
        crescimento: "Rápido (2-3 anos)"
    },
    {
        nome: "Angico Branco",
        descricao: "Árvore nativa brasileira com flores brancas e madeira de qualidade.",
        imagem: "images/na/Angico Branco.jpg",
        clima: "Tropical",
        tamanho: "60-80 cm",
        crescimento: "Médio (5-8 anos)"
    },
    {
        nome: "Angico Vermelho",
        descricao: "Árvore nativa com flores vermelhas e madeira resistente.",
        imagem: "images/na/Angico Vermelho.jpg",
        clima: "Tropical",
        tamanho: "60-80 cm",
        crescimento: "Médio (5-8 anos)"
    },
    {
        nome: "Aroeira Verdadeira",
        descricao: "Árvore nativa com propriedades medicinais e madeira durável.",
        imagem: "images/na/Aroeira Verdadeira.jpg",
        clima: "Tropical/Subtropical",
        tamanho: "60-80 cm",
        crescimento: "Médio (4-6 anos)"
    },
    {
        nome: "Bombax",
        descricao: "Árvore ornamental com flores grandes e vistosas.",
        imagem: "images/na/Bombax.webp",
        clima: "Tropical",
        tamanho: "60-80 cm",
        crescimento: "Rápido (3-5 anos)"
    },
    {
        nome: "Caesalpinia pluviosa",
        descricao: "Árvore nativa com flores amarelas e crescimento rápido.",
        imagem: "images/na/Caesalpinia pluviosa.jpg",
        clima: "Tropical",
        tamanho: "60-80 cm",
        crescimento: "Rápido (2-4 anos)"
    },
    {
        nome: "Canelinha",
        descricao: "Árvore nativa com casca aromática e madeira nobre.",
        imagem: "images/na/Canelinha.webp",
        clima: "Subtropical",
        tamanho: "60-80 cm",
        crescimento: "Lento (8-12 anos)"
    },
    {
        nome: "Cedro Rosa",
        descricao: "Árvore nativa com madeira de alta qualidade e aroma característico.",
        imagem: "images/na/Cedro Rosa.jpeg",
        clima: "Tropical/Subtropical",
        tamanho: "60-80 cm",
        crescimento: "Médio (6-10 anos)"
    },
    {
        nome: "Copaíba",
        descricao: "Árvore nativa produtora de óleo medicinal.",
        imagem: "images/na/Copaíba.webp",
        clima: "Tropical",
        tamanho: "60-80 cm",
        crescimento: "Lento (10-15 anos)"
    },
    {
        nome: "Fruta do Sabiá",
        descricao: "Árvore nativa com frutos atrativos para pássaros.",
        imagem: "images/na/Fruta do Sabiá.webp",
        clima: "Tropical/Subtropical",
        tamanho: "60-80 cm",
        crescimento: "Médio (4-6 anos)"
    },
    {
        nome: "Gabiroba",
        descricao: "Árvore nativa com frutos comestíveis e flores ornamentais.",
        imagem: "images/na/Gabiroba.webp",
        clima: "Subtropical",
        tamanho: "60-80 cm",
        crescimento: "Médio (3-5 anos)"
    },
    {
        nome: "Ingá Feijão",
        descricao: "Árvore nativa com frutos comestíveis e flores perfumadas.",
        imagem: "images/na/Ingá Feijão.webp",
        clima: "Tropical",
        tamanho: "60-80 cm",
        crescimento: "Rápido (3-5 anos)"
    },
    {
        nome: "Ipê",
        descricao: "Árvore nativa símbolo do Brasil, com flores vistosas.",
        imagem: "images/na/Ipê.webp",
        clima: "Tropical/Subtropical",
        tamanho: "60-80 cm",
        crescimento: "Médio (5-8 anos)"
    },
    {
        nome: "Ipê Amarelo",
        descricao: "Árvore de flores amarelas, símbolo nacional.",
        imagem: "images/na/Ipê amarelo.jpg",
        clima: "Tropical/Subtropical",
        tamanho: "60-80 cm",
        crescimento: "Médio (5-8 anos)"
    },
    {
        nome: "Ipê Branco",
        descricao: "Árvore de flores brancas, muito utilizada em paisagismo.",
        imagem: "images/na/Ipê Branco.webp",
        clima: "Tropical/Subtropical",
        tamanho: "60-80 cm",
        crescimento: "Médio (5-8 anos)"
    },
    {
        nome: "Ipê de Jardim",
        descricao: "Variedade de ipê ideal para paisagismo urbano.",
        imagem: "images/na/Ipê de Jardim.jpg",
        clima: "Tropical/Subtropical",
        tamanho: "60-80 cm",
        crescimento: "Médio (4-6 anos)"
    },
    {
        nome: "Ipê Rosa",
        descricao: "Árvore de flores rosas, muito apreciada.",
        imagem: "images/na/Ipê Rosa Bola.webp",
        clima: "Tropical/Subtropical",
        tamanho: "60-80 cm",
        crescimento: "Médio (5-8 anos)"
    },
    {
        nome: "Ipê Roxo",
        descricao: "Árvore de flores roxas, muito ornamental.",
        imagem: "images/na/Ipê Roxo.webp",
        clima: "Tropical/Subtropical",
        tamanho: "60-80 cm",
        crescimento: "Médio (5-8 anos)"
    },
    {
        nome: "Ipê Roxo Bola",
        descricao: "Variedade de ipê com flores roxas em formato arredondado.",
        imagem: "images/na/Ipê Roxo Bola.webp",
        clima: "Tropical/Subtropical",
        tamanho: "60-80 cm",
        crescimento: "Médio (4-6 anos)"
    },
    {
        nome: "Jacarandá Mimoso",
        descricao: "Árvore ornamental com flores roxas e folhagem delicada.",
        imagem: "images/na/Jacarandá Mimoso.jpg",
        clima: "Tropical/Subtropical",
        tamanho: "60-80 cm",
        crescimento: "Rápido (3-5 anos)"
    },
    {
        nome: "Jequitibá",
        descricao: "Árvore nativa de grande porte e madeira nobre.",
        imagem: "images/na/Jequitibá.jpg",
        clima: "Tropical/Subtropical",
        tamanho: "60-80 cm",
        crescimento: "Lento (15-25 anos)"
    },
    {
        nome: "Jequitibá Rosa",
        descricao: "Uma das maiores árvores da Mata Atlântica.",
        imagem: "images/na/Jequitibá Rosa.jpg",
        clima: "Tropical/Subtropical",
        tamanho: "60-80 cm",
        crescimento: "Lento (15-25 anos)"
    },
    {
        nome: "Jequitibá Branco",
        descricao: "Árvore de grande porte, madeira nobre.",
        imagem: "images/na/Jequitibá Branco.jpg",
        clima: "Tropical/Subtropical",
        tamanho: "60-80 cm",
        crescimento: "Lento (15-25 anos)"
    },
    {
        nome: "Jatobá",
        descricao: "Árvore de madeira dura e frutos comestíveis.",
        imagem: "images/na/Jatobá.jpg",
        clima: "Tropical",
        tamanho: "60-80 cm",
        crescimento: "Lento (10-15 anos)"
    },
    {
        nome: "Pau-Ferro",
        descricao: "Árvore de madeira muito resistente.",
        imagem: "images/na/Pau-Ferro.jpg",
        clima: "Tropical/Subtropical",
        tamanho: "60-80 cm",
        crescimento: "Médio (6-10 anos)"
    },
    {
        nome: "Açaí",
        descricao: "Palmeira nativa da Amazônia, fruto muito nutritivo.",
        imagem: "images/na/Açaí.webp",
        clima: "Tropical Úmido",
        tamanho: "60-80 cm",
        crescimento: "Médio (5-8 anos)"
    },
    {
        nome: "Palmito Pupunha",
        descricao: "Palmeira de rápido crescimento, muito cultivada.",
        imagem: "images/na/Palmito Pupunha.jpg",
        clima: "Tropical Úmido",
        tamanho: "60-80 cm",
        crescimento: "Rápido (3-5 anos)"
    },
    {
        nome: "Oití",
        descricao: "Árvore de sombra e frutos comestíveis.",
        imagem: "images/na/Oití.webp",
        clima: "Tropical",
        tamanho: "60-80 cm",
        crescimento: "Médio (6-10 anos)"
    },
    {
        nome: "Pata de Vaca",
        descricao: "Árvore ornamental de flores exóticas.",
        imagem: "images/na/Pata de Vaca.webp",
        clima: "Tropical/Subtropical",
        tamanho: "60-80 cm",
        crescimento: "Médio (4-6 anos)"
    },
    {
        nome: "Pau-Formiga",
        descricao: "Árvore nativa de madeira resistente.",
        imagem: "images/na/Pau-Formiga.webp",
        clima: "Tropical",
        tamanho: "60-80 cm",
        crescimento: "Médio (5-8 anos)"
    },
    {
        nome: "Quaresmeira",
        descricao: "Árvore nativa com flores roxas e crescimento rápido.",
        imagem: "images/na/Quaresmeira.webp",
        clima: "Tropical/Subtropical",
        tamanho: "60-80 cm",
        crescimento: "Rápido (3-5 anos)"
    },
    {
        nome: "Resedá",
        descricao: "Árvore ornamental com flores coloridas e crescimento rápido.",
        imagem: "images/na/Resedá.jpg",
        clima: "Tropical/Subtropical",
        tamanho: "60-80 cm",
        crescimento: "Rápido (2-4 anos)"
    }
]; 