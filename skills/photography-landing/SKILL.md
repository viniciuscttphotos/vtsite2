# Photography Landing Page Skill

Cria landing pages profissionais para fotógrafos e videomakers.

## Quando Usar
- `/photography-landing` - Iniciar novo projeto de landing page para fotógrafo
- Criar portfólios para profissionais de eventos, casamentos, ensaios, etc.

## Fluxo de Trabalho

### 1. Coleta de Informações
```
- Nome do fotógrafo
- Especialidade (eventos, casamentos, ensaios, etc.)
- Localização
- Links importantes (Instagram, loja, WhatsApp)
- Paleta de cores preferida (ou usar padrão: preto + dourado)
```

### 2. Estrutura One Page
```
1. Hero - Foto impactante + CTA principal
2. Sobre - Apresentação breve
3. Especialidades/Serviços - Cards com ícones
4. Galeria - Grid responsivo com lightbox
5. Depoimentos - Carrossel ou grid de citações
6. CTA Final - Chamada para ação
7. Rodapé - Links sociais + contato
```

### 3. Stack Técnica
```
- HTML5 semântico
- CSS3 com custom properties
- JavaScript vanilla (lightbox, menu mobile, scroll suave)
- Google Fonts (Bebas Neue + Inter)
- Font Awesome para ícones
```

### 4. Paleta Padrão (Escuro + Dourado)
```
--bg-primary: #0A0A0A
--bg-secondary: #141414
--text-primary: #FFFFFF
--text-secondary: #B0B0B0
--accent: #D4AF37
--accent-hover: #B8960F
```

### 5. CTAs Obrigatórios
```
- Botão "Ver Portfólio" → scroll para galeria
- Botão "Comprar/Contratar" → link externo (loja/WhatsApp)
- Links sociais no rodapé
```

### 6. Checklist de Qualidade
```
☐ Menu sticky com CTA destacado
☐ Scroll suave entre seções
☐ Lightbox funcional na galeria
☐ Responsivo (mobile-first)
☐ Imagens otimizadas (<500KB hero, <250KB galeria)
☐ Links externos com target="_blank"
☐ Meta tags SEO completas
☐ Favicon configurado
```

## Exemplo de Prompts
- "Cria uma landing page para um fotógrafo de casamentos em São Paulo"
- "Faz um portfólio one page para um videomaker de eventos"
- "Implementa o site do projeto.md para o Vinicius"

## Arquivos Gerados
- `index.html` - Estrutura completa
- `style.css` - Estilos com CSS custom properties
- `script.js` - Interatividade (lightbox, menu, scroll)
- `AGENTS.md` - Instruções para agentes de IA