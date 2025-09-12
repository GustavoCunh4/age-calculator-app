# 🎂 Calculadora de Idade

Uma aplicação web moderna e responsiva para calcular idade e tempo até eventos futuros, construída com React, TypeScript e Tailwind CSS.

## ✨ Funcionalidades

- **Cálculo de Idade**: Calcule sua idade exata em anos, meses e dias
- **Contagem Regressiva**: Calcule o tempo restante até um evento futuro específico
- **Interface Responsiva**: Design moderno que funciona perfeitamente em desktop e mobile
- **Validação de Dados**: Validação inteligente de datas para evitar erros
- **Navegação Intuitiva**: Interface simples e fácil de usar

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca principal para interface
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool moderno e rápido
- **Tailwind CSS** - Framework CSS utilitário
- **React Router DOM** - Roteamento para SPA
- **React Hook Form** - Gerenciamento de formulários
- **ESLint** - Linting para qualidade do código

## 📦 Instalação

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para instalação

1. Clone o repositório:
```bash
git clone https://github.com/SEU_USUARIO/age-calculator-app.git
cd age-calculator-app
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Abra seu navegador e acesse `http://localhost:5173`

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter ESLint

## 📱 Como Usar

### Calculadora de Idade
1. Acesse a aba "Idade"
2. Digite sua data de nascimento (dia, mês e ano)
3. Clique em "Calcular" para ver sua idade exata

### Calculadora de Evento Futuro
1. Acesse a aba "Evento futuro"
2. Digite a data do evento desejado
3. Clique em "Calcular" para ver o tempo restante

## 🎨 Interface

A aplicação possui um design moderno e limpo com:
- Cores suaves e profissionais
- Animações sutis
- Layout responsivo
- Feedback visual para validações
- Navegação por abas intuitiva

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Card.tsx        # Card principal da aplicação
│   ├── DateField.tsx   # Campo de entrada de data
│   ├── DateForm.tsx    # Formulário de data
│   └── Result.tsx      # Exibição dos resultados
├── hooks/              # Custom hooks
│   └── useAgeCalculator.ts
├── pages/              # Páginas da aplicação
│   ├── Home.tsx        # Página principal (cálculo de idade)
│   └── Event.tsx       # Página de eventos futuros
├── styles/             # Estilos globais
│   └── index.css
├── utils/              # Utilitários
│   └── date.ts         # Funções de manipulação de data
└── App.tsx             # Componente raiz
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ por [Seu Nome]

## 🔗 Links Úteis

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
