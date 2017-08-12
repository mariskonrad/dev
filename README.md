# dev

## aula 01 - 06/08/2017

1. linkar CSS e JS com HTML

  CSS:
  ```
  <link rel="stylesheet" type="text/css" href="index.css">
  ```

  JS:
  ```
  <script type="text/javascript" src="index.js"></script>
  ```

1. browser recebe o HTML "morto" e cria uma representação "viva", o DOM (Document Object Model), uma árvore de elementos, que pode ser manipulada via JS.

1. seletores: forma de identificar os elementos.
  - `button`: identifica todos os elementos de tag `<button>`
  - `#button-ok`: identifica o elemento com `id="button-ok"`

1. função: bloco de código com um nome, e possivelmente parâmetros
  - definida com:
    ```
    function formatarNome(nome) {
      return nome.replace(/\b\w/g, function(l){ return l.toUpperCase() })
    }
    ```

  - chamada com:
    ```
    var nomeFormatado = formatarNome('maris konrad')
    ```

1. objeto: uma variável que agrupa diversos valores relacionados à mesma coisa, relacionados entre si. Inclusive os valores podem ser funções. Esses valores são acessados usando *dot notation*, como `objeto.valor`.
  - `console`: tem a função `log`, a função `clear` etc
  - `document`: tem a função `getElementById` etc
  - os elementos de input tem a função `addEventListener`, a propriedade `value` etc

1. formas do JS acessar o DOM:
  - por id do elemento: `document.getElementById('button-ok')`
  - existem outras formas além de `getElementById`


## aula 02 - 08/08/17

1. markdown: sintaxe básica de markdown. Markdown é uma linguagem de marcação usada para estrutrar texto. Existem ferramentas que convertem texto em markdown para HTML, como o Markdown Preview do Atom e Github.

1. github: criamos repositório.

1. git:
    - `git init`: rodar uma vez no projeto para iniciar o repositório git. Cria a pasta `.git`
    - `git status`: mostra o estado de cada arquivo, se foi alterado, se foi criado etc.
    - `git diff`: mostra o que foi alterado em cada arquivo, linhas adicionadas e linhas removidas.
    - `git add`: seleciona quais arquivos queremos fazer commit. Se quiser selecionar todos os arquivos da pasta do projeto, rodar `git add .`
    - `git commit`: cria o ponto no histórico do projeto. Esse comando vai abrir um editor de texto para digitar a mensagem do commit. Para especificar a mensagem diretamente no comando, usar `git commit -m 'mensagem do commit'`.
    - `git log`: mostra o histórico de commits.
    - `git pull`: baixa as alterações que estão no repositório remoto (GitHub).
    - `git push`: envia as alterações locais para o repositório remoto.
