 🚀 Exercício 1:

Vamos aprimorar nossos conhecimentos sobre images e volumes, para isso:

    Crie um arquivo HTML chamado missao_trybe.html que tenha a seguinte estrutura:

        Tag <title> com o seguinte texto “Trybe”;

        Tag <H1> com o seguinte texto “Missão da Trybe”;

        Tag <p> com o seguinte texto “Gerar oportunidade para pessoas”;

        Salve o arquivo em qualquer lugar da sua máquina com a extensão html

    Crie um container para manter um servidor httpd:2.4 Apache e vincule sua porta interna com a porta 4545 da sua máquina local.

      R -  docker run -d --name site-trybe -p 4545:80 -v "$(pwd):/usr/local/apache2/htdocs" httpd:2.4

    Após criar o container acesse a página HTML que está rodando no servidor em seu browser.

      R - http://localhost:4545/missao_trybe.html

    Acesse o arquivo missao_trybe.html e acrescente a tag <p> com o seguinte texto “Nosso negócio é GENTE! #VQV”;

    Obtenha o id do container httpd:2.4;

      R - docker ps

    Obtenha o Mounts através da propriedade Source que deve mostrar o volume desse container no Docker Host;

      R - docker inspect <COLOQUE AQUI SEU CONTAINER ID>

    Agora pare o container httpd:2.4;

      R - docker stop ID

    Exclua o seu container;

      R - docker rm ID

    Verifique se a pasta onde você salvo o arquivo html permanece no mesmo lugar;

    Obtenha o IMAGE ID do servidor;

    Depois de obter o IMAGE ID, exclua a imagem.

