# projectMovie
Projeto utilizando React Native com o objetivo de aplicar e fixar os conhecimentos na linguagem.

Foi consumida uma lista de filme onde o nome e a imagem que representa cada filme na lista estão vindo de um arquivo JSON presento no próprio porjeto.
As imagens são geradas a partir da URL, sendo assim para carregar as imagens do projeto é necessário estar conectado na internet.

A lista do arquivo JSON é percorrida utilizando o método "map" do JavaScript, dessa forma o que identica cada filme é seu "id"(propriedade KEY que é passada no componente Filmes que foi criado).
O compoente Filme tem o papel de organizar o que é listado a partir do componente ListaFilme, dessa forma o seu principal papel é manter o código mais organizado.
