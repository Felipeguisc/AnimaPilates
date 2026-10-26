import anielleBarril from "../public/studio/anielle-barril.jpg";
import anielleCadillac from "../public/studio/anielle-cadillac.jpg";
import anielleRetrato from "../public/studio/anielle-retrato.jpg";
import espacoReformer from "../public/studio/espaco-reformer.jpg";
import espacoVisaoGeral from "../public/studio/espaco-visao-geral.jpg";

export const photos = {
  retrato: {
    src: anielleRetrato,
    alt: "Anielle Pereira, fisioterapeuta do Ânima Pilates, ajoelhada no estúdio em Lages, de óculos e roupa terracota, sorrindo e segurando um magic circle.",
  },
  cadillac: {
    src: anielleCadillac,
    alt: "Anielle Pereira em exercício de Pilates no Cadillac, em equilíbrio lateral sobre a mesa, com uma perna elevada e o braço estendido.",
  },
  barril: {
    src: anielleBarril,
    alt: "Anielle Pereira em inversão no ladder barrel do Ânima Pilates, com as pernas abertas e as mãos apoiadas no chão.",
  },
  visaoGeral: {
    src: espacoVisaoGeral,
    alt: "Visão geral do estúdio Ânima Pilates na Rua Fauta Rath, em Lages, com Cadillac, reformer, barril, tatames pretos e janelas ao fundo.",
  },
  reformer: {
    src: espacoReformer,
    alt: "Reformer com torre, barrel, bola suíça e demais aparelhos de Pilates no estúdio Ânima Pilates em Lages.",
  },
} as const;

export const photoPublicPaths = {
  retrato: "/studio/anielle-retrato.jpg",
  cadillac: "/studio/anielle-cadillac.jpg",
  barril: "/studio/anielle-barril.jpg",
  visaoGeral: "/studio/espaco-visao-geral.jpg",
  reformer: "/studio/espaco-reformer.jpg",
} as const;
