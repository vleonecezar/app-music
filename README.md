# App Music 🎵

<div align="center">
  <a href="#-sobre">Sobre</a> | <a href="#-tecnologias">Tecnologias</a> | <a href="#-teste-a-aplicação">Teste a Aplicação</a> 
</div>
<br>

<div align="center">

![155420160-226bd786-58e2-4e22-ad01-188f2cc1bcff](https://user-images.githubusercontent.com/76831929/168934637-e54c8c74-5ec0-435c-b420-7a1ad189f405.png)

</div>

# 👨🏻‍🏫 Sobre
App music é um projeto pessoal que utiliza a api do Deezer. <br />Na tela inicial é exibida a lista das principais músicas do momento (no deezer). 
Cada música é exibida num card com a foto do album, nome do artista, tempo e nome da mesma, além de três botões; um que redireciona o usuário
pro site do deezer numa nova aba com as informações da respectiva música, outro que da play/stop e o último que adiciona a música na view das favoritas (as músicas ficam salvas no local storage através do Redux Persist, podendo assim atualizar a página que a informação não será perdida).
É possível deletar as músicas da lista de favoritas na página das favoritas. Todas as músicas favoritadas estão sinalizadas com um "coração rosa".
Existe também um campo de pesquisa, seja pesquisa de música, nome do artista ou album, será exibido as músicas relacionadas ao texto pesquisado.

# 🤳🏻 Funcionalidades

- Barra de pesquisa de músicas por nome de música, artista ou álbum.
- Menu com as opções Home, Músicas, e Favoritas.
- Músicas representadas por cards com botões:
  - Botão que redireciona para o site do Deezer com a música completa.
  - Botão de Play/Stop.
  - Botão que adiciona e remove música dos favoritos.
- "Pop-up" de um player assim que clica no botão play.

# 🚀 Tecnologias

- <a href="https://pt-br.reactjs.org/" target="_blank">React JS</a> <br>
- <a href="https://styled-components.com/" target="_blank">Styled Components</a> <br>
- <a href="https://redux.js.org/" target="_blank">Redux</a> <br>

# 👨🏻‍💻 Teste a aplicação
Você pode testar a aplicação <a href="https://vleonecezar.github.io/app-music/" target="_blank">clicando aqui</a>. <br>

  ### Clone o repositório
```
  git clone https://github.com/vleonecezar/app-music.git
```
  ### Instale todos os pacotes
```
  npm install
```
  ### Abra a aplicação localmente
```
  npm start
```
  ### Deixe a aplicação pronta para produção
```
  npm run build
```
