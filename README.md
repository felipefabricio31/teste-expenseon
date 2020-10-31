<h1>Manual para implantação da aplicação</h1>


<img src="https://user-images.githubusercontent.com/29135156/97783250-3d63b400-1b75-11eb-8e12-adfb297989cb.gif" width="100%" heigth="auto">


<h3>Introdução</h3>
<p>O projeto foi elaborado seguindo as instruções do enunciado do teste, o backend (api) foi desenvolvida utilizando .NetCore ^3.1 e o banco de dados relacional escolhido foi o SQL SERVER.</p>

<p>O framework escolhido para o desenvolvimento do frontend da aplicação foi o Angular (9).
Durante o desenvolvimento surgiu a necessidade de incluir algumas bibliotecas externas, que tem o objetivo de auxiliar e facilitar algumas etapas do desenvolvimento.</p>

<p>Biblioteca escolhidas:</p>
    <blockquote>
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
    </blockquote>

<h3>Para executar a API (dotnet core) será necessário instalar alguns pacotes:</h3>
    <p><b>Instalar as ferramentas:</b></p>
        <p>Primeiro, você precisará instalar as [ferramentas de linha de comando do EF Core:](https://docs.microsoft.com/pt-br/ef/core/miscellaneous/cli/)</p>
        <ul>
            <li>
                Geralmente, é recomendável usar as [ferramentas da CLI do .NET Core:](https://docs.microsoft.com/pt-br/ef/core/miscellaneous/cli/dotnet), que funcionam em todas as plataformas.
            </li>
            <li>
                Se você estiver mais confortável trabalhando no Visual Studio ou tiver experiência com migrações do EF6, também poderá usar as [ferramentas do Console do Gerenciador de Pacotes:](https://docs.microsoft.com/pt-br/ef/core/miscellaneous/cli/powershell).
            </li>
        </ul>

<p> <b>O  banco de dados relacional escolhido, foi o SQL Server, realizei toda a migração e testes em uma 
hospedagem web (free), desta forma, não será necessário realizar algumas instalações e migrações, mas caso desejem, fiquem a vontade! [Link para instalações das migrações](https://docs.microsoft.com/pt-br/ef/core/managing-schemas/migrations/?tabs=dotnet-core-cli)</b>
</p>



# Frontend (WebExpenseOn)

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Servidor de desenvolvimento

Execute  `ng serve --open` para um servidor de desenvolvimento. Navegue para `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
