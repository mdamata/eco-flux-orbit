# 🌎 EcoFlux Orbit

Projeto desenvolvido para a Global Solution FIAP.

O EcoFlux Orbit é uma plataforma que utiliza tecnologia inteligente para conectar catadores, empresas recicladoras e eventos, promovendo sustentabilidade, geração de renda e eficiência na coleta seletiva.

---

# 📑 Navegação

- [Objetivo do Projeto](#-objetivo-do-projeto)
- [Regra de Negócio](#-regra-de-negócio)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Estrutura de Páginas](#-estrutura-de-páginas)
- [Funcionalidades](#️-funcionalidades)
- [Responsividade](#-responsividade)
- [Acessibilidade](#-acessibilidade)
- [Diferenciais da Solução](#-diferenciais-da-solução)
- [Integrantes](#-integrantes)
- [Roadmap do Projeto](#️-roadmap-do-projeto)
- [Como Executar](#️-como-executar)
- [Status do Projeto](#-status-do-projeto)
- [Impacto Esperado](#-impacto-esperado)

---

# 🎯 Objetivo do Projeto

O EcoFlux Orbit foi criado para solucionar um problema recorrente na reciclagem urbana: a dificuldade dos catadores em identificar locais com maior potencial de coleta.

A plataforma utiliza monitoramento inteligente para identificar eventos e locais com alta concentração de pessoas, direcionando catadores cadastrados para regiões estratégicas.

Dessa forma, aumentamos:

- a eficiência da coleta;
- a geração de renda para catadores;
- o reaproveitamento de resíduos recicláveis;
- a conexão com empresas recicladoras.

---

# 💡 Regra de Negócio

O sistema opera através de monitoramento inteligente de eventos urbanos.

## Fluxo da Plataforma

1. O sistema identifica locais com grande circulação de pessoas.
2. Os catadores cadastrados recebem recomendações de locais estratégicos.
3. Os materiais coletados são entregues em empresas recicladoras parceiras.
4. O catador realiza check-in na empresa.
5. A empresa acumula credenciais para obtenção do Selo Verde.

---

## Fontes de Receita

### Catadores

- Plano Mensal
- Plano Anual

### Empresas Parceiras

- Assinatura Mensal

### Plataforma

- Publicidade Interna
- Assinaturas

---

# 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- GitHub
- Visual Studio Code

---

# 📂 Estrutura de Pastas

```plaintext
📁 EcoFluxOrbit
│
┣ 📁 assets
┃ ┣ 📁 logo
┃ ┃ ┗ 📄 logo.png
┃ ┗ 📁 img
┃   ┣ 📄 hero-bg.jpg
┃   ┣ 📄 integrante1.jpg
┃   ┣ 📄 integrante2.jpg
┃   ┣ 📄 integrante3.jpg
┃   ┗ 📄 integrante4.jpg
│
┣ 📁 css
┃ ┣ 📄 reset.css
┃ ┣ 📄 cabecalho.css
┃ ┣ 📄 navbar.css
┃ ┣ 📄 rodape.css
┃ ┣ 📄 hero.css
┃ ┣ 📄 botao.css
┃ ┣ 📄 card.css
┃ ┣ 📄 sobre.css
┃ ┣ 📄 catadores.css
┃ ┣ 📄 dashboard.css
┃ ┣ 📄 faq.css
┃ ┣ 📄 contato.css
┃ ┣ 📄 integrantes.css
┃ ┗ 📄 main.css
│
┣ 📁 js
┃ ┣ 📄 dashboard.js
┃ ┣ 📄 faq.js
┃ ┣ 📄 contato.js
┃ ┗ 📄 catadores.js
│
┣ 📁 paginas
┃ ┣ 📄 sobre.html
┃ ┣ 📄 catadores.html
┃ ┣ 📄 dashboard.html
┃ ┣ 📄 faq.html
┃ ┣ 📄 contato.html
┃ ┗ 📄 integrantes.html
│
┣ 📄 README.md
┗ 📄 index.html
```

---

# 📄 Estrutura de Páginas

## 🏠 Home

**Arquivo:** `index.html`

Página principal do projeto.

Contém:

- apresentação da solução;
- problema identificado;
- missão do projeto;
- navegação para todas as páginas.

<img width="1918" height="866" alt="image" src="https://github.com/user-attachments/assets/a9a9e54e-a8d5-4443-86f7-d2047ea3193a" />
<img width="1918" height="956" alt="image" src="https://github.com/user-attachments/assets/681fc261-60ee-463e-bc58-58b054b04950" />


---

## 📖 Sobre

**Arquivo:** `paginas/sobre.html`

Explica:

- contexto do projeto;
- funcionamento da solução;
- tecnologias utilizadas;
- roadmap.

<img width="1918" height="956" alt="image" src="https://github.com/user-attachments/assets/ddb1f4ff-e3fa-4ca4-aa51-ee735855ca39" />
<img width="1918" height="956" alt="image" src="https://github.com/user-attachments/assets/19ff7960-b6f9-4d31-9df8-4b505e5b16e9" />



---

## ♻️ Catadores

**Arquivo:** `paginas/catadores.html`

Contém:

- benefícios da plataforma;
- etapas do processo;
- formulário de cadastro;
- informações sobre participação.

<img width="1918" height="956" alt="image" src="https://github.com/user-attachments/assets/64735ca8-3db8-4660-a40f-96cd2707fbdd" />
<img width="1918" height="956" alt="image" src="https://github.com/user-attachments/assets/03f83330-c0cf-4940-b142-5622cdb7cbaa" />
<img width="1918" height="956" alt="image" src="https://github.com/user-attachments/assets/af2afe68-b68a-413f-b912-cb2021b525aa" />


---

## 📊 Dashboard

**Arquivo:** `paginas/dashboard.html`

Apresenta:

- eventos ativos;
- catadores online;
- empresas parceiras;
- volume reciclado;
- ranking de empresas.

Possui atualização dinâmica através de JavaScript.

<img width="1918" height="956" alt="image" src="https://github.com/user-attachments/assets/87c171bb-33ce-4b0f-904f-db91ca7355c7" />
<img width="1918" height="956" alt="image" src="https://github.com/user-attachments/assets/a5fa32c3-b228-44e2-8173-fddf5e9ebda3" />


---

## ❓ FAQ

**Arquivo:** `paginas/faq.html`

Contém:

- perguntas frequentes;
- respostas sobre a plataforma;
- interação dinâmica utilizando JavaScript.

<img width="1918" height="956" alt="image" src="https://github.com/user-attachments/assets/373ba58c-96bb-436c-8c49-a68843367c32" />
<img width="1918" height="956" alt="image" src="https://github.com/user-attachments/assets/d950bb77-41fc-4b59-9924-d29f15054e99" />



---

## 📞 Contato

**Arquivo:** `paginas/contato.html`

Contém:

- formulário validado;
- informações de contato;
- feedback visual ao usuário.

<img width="1918" height="956" alt="image" src="https://github.com/user-attachments/assets/82eb9a3d-7c9b-4d7e-aba9-bc5dde82be1b" />
<img width="1918" height="956" alt="image" src="https://github.com/user-attachments/assets/45ca8436-249a-427c-977f-22fc2ee2774d" />


---

## 👨‍💻 Integrantes

**Arquivo:** `paginas/integrantes.html`

Apresenta:

- foto;
- nome;
- RM;
- turma;
- GitHub;
- LinkedIn.

<img width="1918" height="956" alt="image" src="https://github.com/user-attachments/assets/b3b8ddf9-8e8c-4fc7-a85f-37bb46ff61a6" />


---

# ⚙️ Funcionalidades

- Cadastro de Catadores
- Dashboard Interativo
- FAQ Dinâmico
- Formulário de Contato Validado
- Navegação Responsiva
- Monitoramento de Eventos
- Empresas Parceiras
- Sistema Conceitual de Check-in
- Ranking de Empresas

---

# 📱 Responsividade

O projeto foi desenvolvido seguindo os critérios estabelecidos na documentação do Challenge.

### Mobile

Até 480px

### Tablet

De 481px até 786px

### Desktop

Acima de 786px

---

# ♿ Acessibilidade

O projeto segue boas práticas de acessibilidade:

- HTML semântico;
- imagens com atributo alt;
- contraste adequado;
- navegação intuitiva;
- organização visual responsiva;
- hierarquia correta de títulos.

---

# 🚀 Diferenciais da Solução

- Monitoramento inteligente de eventos.
- Direcionamento estratégico de catadores.
- Dashboard com atualização dinâmica.
- Incentivo ao descarte correto de resíduos.
- Conexão entre catadores e empresas recicladoras.
- Modelo de Selo Verde para empresas participantes.

---

# 👥 Integrantes

## Integrante 1

- Nome: Vinicius Liberato dos Anjos
- RM: 571480
- Turma: 1TDSPY
- GitHub: https://github.com/Liberato02
- LinkedIn: https://br.linkedin.com/in/vinicius-liberato-b826a4312

---

## Integrante 2

- Nome: Jonatan Vieira Feitosa
- RM: 570452
- Turma: 1TDSPY
- GitHub: https://github.com/Jonatanfeitosa
- LinkedIn: https://br.linkedin.com/in/jonatanvieirafeitosa

---

## Integrante 3

- Nome: Fernando Oliveira Francelino Sardinha
- RM: 570196
- Turma: 1TDSPY
- GitHub: https://github.com/tecnando-rpa
- LinkedIn: https://www.linkedin.com/in/fernando-oliveira-1bb875164

---

## Integrante 4

- Nome: Marcelo Candido da Mata Junior
- RM: 569584
- Turma: 1TDSPY
- GitHub: https://github.com/mdamata
- LinkedIn: https://br.linkedin.com/in/marcelo-da-mata

---

# 🗺️ Roadmap do Projeto

1. Pesquisa do problema
2. Levantamento de requisitos
3. Planejamento da solução
4. Desenvolvimento Front-End
5. Implementação das funcionalidades
6. Testes e validações
7. Apresentação do Challenge

---

# ▶️ Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/seu-repositorio/ecoflux-orbit.git
```

2. Abra a pasta do projeto no Visual Studio Code.

3. Execute o arquivo:

```plaintext
index.html
```

4. Navegue pelas páginas do sistema através do menu principal.

---

# 📈 Status do Projeto

🟢 MVP Funcional

Projeto acadêmico desenvolvido para o Challenge FIAP.

---

# 🌱 Impacto Esperado

O EcoFlux Orbit busca aumentar a eficiência da reciclagem urbana através da tecnologia, promovendo benefícios para:

- Catadores
- Empresas recicladoras
- Organizadores de eventos
- Meio ambiente
- Sociedade

---

EcoFlux Orbit © 2026
