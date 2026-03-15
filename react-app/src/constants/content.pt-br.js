// Strings e conteúdo — King Burguer em Português
export const NAVBAR = {
  BRAND: 'King Burguer',
  BRAND_SPAN: 'Burguer',
  LINKS: {
    HOME: 'Início',
    MENU: 'Cardápio',
    ABOUT: 'Sobre',
    DIFFERENTIALS: 'Diferenciais',
  },
  CTA: 'Pedir Agora',
}

export const HERO = {
  BADGE: 'O Verdadeiro Sabor Artesanal',
  TITLE: 'A Majestade do Hambúrguer Artesanal',
  TITLE_HIGHLIGHT: 'Hambúrguer',
  SUBTITLE: 'Suculento, premium e feito para reis. Experimente a combinação perfeita de carne nobre, pão fresco e ingredientes selecionados que derretem na boca.',
  CTA: 'Fazer Pedido Agora',
  CTA_MENU: 'Cardápio',
  TRUST: '+2.500 pedidos entregues',
  SCROLL: 'Role para baixo',
}

export const DESTAQUES = {
  BADGE: 'Nosso Cardápio',
  TITLE: 'Os Mais Pedidos',
  TITLE_HIGHLIGHT: 'Pedidos',
  DESC: 'Nossos campeões de venda. Cada hambúrguer é feito com ingredientes selecionados e preparo artesanal.',
  
  ITEMS: [
    {
      id: 'smash',
      title: 'King Smash',
      image: '/Imagens/ezgif-frame-003.jpg',
      desc: '2x smash de carne angus, queijo cheddar, cebola caramelizada, bacon crocante e molho especial da casa.',
      price: 'R$ 34,90',
      tag: '🔥 Mais Vendido',
      tagIcon: 'fire',
      tagLabel: 'Mais Vendido',
    },
    {
      id: 'classic',
      title: 'King Classic',
      image: '/Imagens/ezgif-frame-005.jpg',
      desc: 'Burger 180g blend da casa, alface americana, tomate, queijo prato derretido, picles e maionese artesanal.',
      price: 'R$ 29,90',
      tag: '⭐ Favorito',
      tagIcon: 'star',
      tagLabel: 'Favorito',
    },
    {
      id: 'bbq',
      title: 'King BBQ',
      image: '/Imagens/ezgif-frame-007.jpg',
      desc: '2x blend 120g, onion rings, bacon defumado, cheddar inglês e molho barbecue artesanal com toque de whisky.',
      price: 'R$ 39,90',
      tag: '🆕 Novidade',
      tagIcon: 'new',
      tagLabel: 'Novidade',
    },
  ],
}

export const SOBRE = {
  BADGE: 'Nossa História',
  TITLE: 'Feito com Paixão, Servido com Alma',
  TITLE_HIGHLIGHT: 'Paixão',
  IMAGE: '/Imagens/ezgif-frame-004.jpg',
  
  ACCENT_NUMBER: '+5',
  ACCENT_TEXT: 'anos de tradição',
  
  PARAGRAPHS: [
    'A King Burguer nasceu da paixão por hambúrgueres artesanais de qualidade. Cada detalhe, desde a seleção da carne até o preparo do molho, é cuidadosamente pensado para oferecer uma experiência gastronômica única.',
    'Nosso blend exclusivo é produzido diariamente com cortes nobres, sem conservantes. O pão é assado artesanalmente toda manhã, garantindo maciez e sabor incomparáveis em cada mordida.',
  ],
  
  STATS: [
    { number: '2.500+', label: 'Pedidos entregues' },
    { number: '4.9', label: 'Avaliação média' },
    { number: '100%', label: 'Ingredientes frescos' },
  ],
}

export const DIFERENCIAIS = {
  BADGE: 'Por que nos escolher?',
  TITLE: 'A Experiência King',
  TITLE_HIGHLIGHT: 'Experiência',
  
  ITEMS: [
    {
      id: 'carne',
      icon: '🥩',
      title: 'Carne Premium',
      desc: 'Blend exclusivo com cortes nobres, moído diariamente. Zero conservantes, 100% sabor.',
    },
    {
      id: 'artesanal',
      icon: '👨‍🍳',
      title: 'Preparo Artesanal',
      desc: 'Cada hambúrguer é grelhado na hora, com técnica e carinho. Sem atalhos, sem pressa.',
    },
    {
      id: 'entrega',
      icon: '🚀',
      title: 'Entrega Rápida',
      desc: 'Seu pedido quentinho na sua porta. Embalagem térmica que preserva cada sabor.',
    },
    {
      id: 'ingredientes',
      icon: '🌿',
      title: 'Ingredientes Frescos',
      desc: 'Vegetais orgânicos, queijos artesanais e pão assado do dia. Qualidade que você sente.',
    },
  ],
}

export const CTA_FINAL = {
  TITLE_MAIN: 'Está com fome?',
  TITLE_HIGHLIGHT: 'Faça seu pedido agora!',
  DESC: 'Peça pelo WhatsApp e receba no conforto da sua casa.',
  CTA: 'Pedir pelo WhatsApp',
}

export const FOOTER = {
  BRAND: 'King Burguer',
  TAGLINE: 'A Majestade do Hambúrguer Artesanal',
  
  SECTIONS: {
    HORARIO: {
      title: 'Horário',
      items: ['Terça a Domingo', '18h00 — 23h30'],
    },
    CONTATO: {
      title: 'Contato',
      items: ['(11) 99999-9999', '@kingburguer'],
    },
    ENDERECO: {
      title: 'Endereço',
      items: ['Rua das Delícias, 123', 'São Paulo — SP'],
    },
  },
  
  COPYRIGHT: '© 2026 King Burguer. Todos os direitos reservados.',
}

export const WHATSAPP = {
  PHONE: '5511999999999',
  MESSAGE_ORDER: 'Olá, gostaria de fazer um pedido na King Burguer!',
  MESSAGE_PRODUCT: (product) => `Olá! Quero pedir o ${product}!`,
}
