<h1>Manual para implantação da aplicação</h1>

<h3>Introdução</h3>
<p>O projeto foi elaborado seguindo as instruções do enunciado do teste, o backend (api) foi desenvolvida utilizando .NetCore ^3.1 e o banco de dados relacional escolhido foi o SQL SERVER.</p>

<p>O framework escolhido para o desenvolvimento do frontend da aplicação foi o Angular (9).
Durante o desenvolvimento surgiu a necessidade de incluir algumas bibliotecas externas, que tem o objetivo de auxiliar e facilitar algumas etapas do desenvolvimento.</p>

<p>Biblioteca escolhidas:</p>
    <code>
        axios": "^0.19.2",
        "bootstrap": "4.1.1",
        "express": "^4.17.1",
        "file-saver": "^2.0.2",
        "html2pdf.js": "^0.9.2",
        "ng-starrating": "^1.0.20",
        "ng2-search-filter": "^0.5.1",
        "ngx-bar-rating": "^2.0.0",
        "ngx-bootstrap": "^5.6.1",
        "ngx-toastr": "^12.0.1",
    </code>

<h3>Para executar a API (dotnet core) será necessário instalar alguns pacotes:</h3>

Instalar as ferramentas:
    Primeiro, você precisará instalar as [ferramentas de linha de comando do EF Core:](https://docs.microsoft.com/pt-br/ef/core/miscellaneous/cli/)
        - Geralmente, é recomendável usar as [ferramentas da CLI do .NET Core:](https://docs.microsoft.com/pt-br/ef/core/miscellaneous/cli/dotnet), que funcionam em todas as plataformas.
        - Se você estiver mais confortável trabalhando no Visual Studio ou tiver experiência com migrações do EF6, também poderá usar as [ferramentas do Console do Gerenciador de Pacotes:](https://docs.microsoft.com/pt-br/ef/core/miscellaneous/cli/powershell).


<h2> O  banco de dados relacional escolhido, foi o SQL Server, realizei toda a migração e testes em uma 
hospedagem web (free), desta forma, não será necessário realizar algumas instalações e migrações, mas caso desejem, fiquem a vontade! [Link para instalações das migrações](https://docs.microsoft.com/pt-br/ef/core/managing-schemas/migrations/?tabs=dotnet-core-cli) 
</h2>


