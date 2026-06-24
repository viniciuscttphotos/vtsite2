# Vinicius Theodoro Fotografia - Agente Instructions

## Projeto
Site landing page para o fotógrafo Vinicius Theodoro, especializado em eventos noturnos (shows, baladas, festas) em Curitiba/PR.

**Links importantes:**
- Loja Banlek: https://banlek.com/lowlight
- WhatsApp: +554199764-4023

## Stack Tecnológica
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e animações (sem frameworks)
- **JavaScript Vanilla** - Menu mobile, lightbox, scroll suave
- **Google Fonts** - Bebas Neue (títulos) + Inter (corpo)
- **Font Awesome** - Ícones sociais e decorativos

## Paleta de Cores
| Cor | Hex | Uso |
|-----|-----|-----|
| Preto | `#0A0A0A` | Fundo principal |
| Preto suave | `#141414` | Seções alternadas |
| Branco | `#FFFFFF` | Textos principais |
| Cinza claro | `#B0B0B0` | Textos secundários |
| Dourado | `#D4AF37` | Destaques, botões, ícones |
| Dourado escuro | `#B8960F` | Hover, efeitos |

## Estrutura do Site (One Page)
1. **Hero** - Foto impactante de show/balada com CTAs
2. **Sobre** - Apresentação do Vinicius
3. **Especialidades** - Shows, Baladas, Festas, Eventos
4. **Galeria** - Grid de fotos com lightbox
5. **Depoimentos** - 3 citações de clientes
6. **CTA Final** - Chamada para loja Banlek
7. **Rodapé** - Links sociais (Instagram, YouTube, WhatsApp)

## CTAs (Links para Banlek)
- Botão no Hero (secundário)
- Botão fixo na Navbar
- CTA Final "Ir para a Loja"

Todos os links externos devem abrir em nova aba (`target="_blank"`).

## Funcionalidades Essenciais
- Menu sticky com botão "Comprar Fotos" destacado
- Scroll suave entre seções
- Galeria com lightbox (expande imagem ao clicar)
- Responsivo (desktop, tablet, mobile)
- Animações sutis em hover

## Imagens
- Hero: 1920x1080, <500KB
- Galeria: 800x800 (1:1), <250KB cada
- Otimizar para web sem perder qualidade visual

## Convenções de Código
- Arquivo principal: `index.html`
- Estilos: `style.css`
- Scripts: `script.js`
- Usar CSS custom properties para cores
- Sem dependências externas além de fontes/ícones CDN

## Documentação
Ver `projeto.md` para especificação completa do projeto.