<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="shortcut icon" href="icone.ico" type="image/x-icon">
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Planos</title>
</head>

<body>

    <div class="container-fluid" id="containerPrincipal">
       <div id="area"> 
            <input type="button" value="" id="anual">
            <input type="button" value="" id="mensal">
       </div>
       
        <div id="titulo">
            <h1><b>Preços</b></h1>
        </div>
        <span>
            <h2 id="M"><b>Mensal</b></h2>
            <h2 id="A"><b>Anual</b></h2>
            
        </span>



        <svg id="backImg" xmlns="http://www.w3.org/2000/svg" width="375" height="658">
            <g fill="none" fill-rule="evenodd" stroke="#D0D5F6" stroke-width="2">
                <path
                    d="M592.71-101C70.623-79.38 17.478-39.688 13.273 18.074c-6.307 86.643 231.598 17.186 136.358 198-95.241 180.813-181.818 185.29-136.358 298C58.233 626.784 178.96 685.954 319.21 641.2c93.501-29.836 144.652-140.545 153.453-332.126" />
                <path
                    d="M214.7-101C134.617-82.012 92.926-47.154 89.628 3.575c-4.948 76.093 181.679 15.094 106.966 173.89C121.882 336.262 54.36 340.192 89.628 439.18c35.269 98.986 129.974 150.95 239.995 111.646C402.97 524.622 443.096 427.395 450 259.141" />
                <path
                    d="M250.935-103c-60.604 16.56-92.153 46.963-94.65 91.208-3.743 66.367 137.488 13.165 80.949 151.664-56.54 138.5-107.638 141.927-80.948 228.261 26.69 86.335 98.359 131.656 181.618 97.376C393.41 442.655 423.775 357.855 429 211.108" />
            </g>
        </svg>




        <div id="cards" class="card-group">

            <div class="card"  id="card1">

                <div class="card-body">
                    <h5 id="pl" class="card-title">Básico</h5>
                    <h1 id="rs">R$</h1>
                    <h1 id="preços" class="card-text"><b>19,99</b></h1>
                </div>
                <ul class="list-group list-group-flush" id="grupoLista">

                    <li class="list-group-item" id="lista1">500Gb/Armazenamento</li>
                    <li class="list-group-item" id="lista2">2 usuários permitidos</li>
                    <li class="list-group-item" id="lista3">Envie até 3GB</li>

                </ul>
                <div class="card-body">
                    <div id="link">
                        <a href="#" id="linka" class="card-link"><b>SAIBA MAIS</b></a>
                    </div>
                </div>
            </div>

            <div class="content" id="contentar"></div>

            <div class="card"  id="card2">

                <div class="card-body">
                    <h5 id="pl2" class="card-title">Profissional</h5>
                    <h1 id="rs2">R$</h1>
                    <h1 id="preços2" class="card-text"><b>24,99</b></h1>
                </div>
                <ul class="list-group list-group-flush" id="grupoLista2">
                    <li class="list-group-item" id="lista4">1TB/Armazenamento</li>
                    <li class="list-group-item" id="lista5">5 usuários permitidos</li>
                    <li class="list-group-item" id="lista6">Envie até 10GB</li>
                </ul>
                <div class="card-body">
                    <div id="link2">
                        <a href="#" id="linka2" class="card-link"><b>SAIBA MAIS</b></a>
                    </div>
                </div>
            </div>

            <div class="content" id="contentar"></div>

            <div class="card"  id="card3">

                <div class="card-body">
                    <h5 id="pl3" class="card-title">Mestre</h5>
                    <h1 id="rs3">R$</h1>
                    <h1 id="preços3" class="card-text"><b>39,99</b></h1>
                </div>
                <ul class="list-group list-group-flush" id="grupoLista3">
                    <li class="list-group-item" id="lista7">2TB/Armazenamento</li>
                    <li class="list-group-item" id="lista8">10 usuários permitidos</li>
                    <li class="list-group-item" id="lista9">Envie até 20GB</li>
                </ul>
                <div class="card-body">
                    <div id="link3">
                        <a href="#" id="linka3" class="card-link"><b>SAIBA MAIS</b></a>
                    </div>
                </div>
            </div>


        </div>

    </div>
    </div>
    </div>

    <script src="Js.js"></script>
</body>

</html>