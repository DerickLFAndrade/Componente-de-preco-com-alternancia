var card1 = document.getElementById("card1")
var card2 = document.getElementById("card2")
var card3 = document.getElementById("card3")
card1.addEventListener('click', mudaCor1)
card2.addEventListener('click', mudaCor2)
card3.addEventListener('click', mudaCor3)
function mudaCor1() {
    var plano = document.getElementById('pl')
    var rs = document.getElementById('rs')
    var preços = document.getElementById('preços')
    var grupoL = document.getElementById('grupoLista')
    var lista1 = document.getElementById('lista1')
    var lista2 = document.getElementById('lista2')
    var lista3 = document.getElementById('lista3')
    var link = document.getElementById('link')
    var linka = document.getElementById('linka')
   
    lista1.style.borderColor = 'rgb(235, 228, 228)'
    lista2.style.borderColor = 'rgb(235, 228, 228)'
    grupoL.style.borderColor = 'rgb(235, 228, 228)'

    lista1.style.color = 'white'
    lista2.style.color = 'white'
    lista3.style.color = 'white'

    lista1.style.background = 'hsl(236, 72%, 79%)'
    lista2.style.background = 'hsl(236, 72%, 79%)'
    lista3.style.background = 'hsl(236, 72%, 79%)'

    lista1.style.fontWeight = 'unset'
    lista2.style.fontWeight = 'unset'
    lista3.style.fontWeight = 'unset'

    preços.style.color = 'white'
    rs.style.color = 'white'
    plano.style.color = 'white'

    card1.style.background = 'hsl(236, 72%, 79%)'
    link.style.background = 'white'
    linka.style.color = 'hsl(236, 72%, 79%)'
  }
function mudaCor2() {
    var plano = document.getElementById('pl')
    var rs = document.getElementById('rs')
    var preços = document.getElementById('preços')
    var grupoL = document.getElementById('grupoLista1')
    var lista1 = document.getElementById('lista4')
    var lista2 = document.getElementById('lista5')
    var lista3 = document.getElementById('lista6')
    var link = document.getElementById('link')
    var linka = document.getElementById('linka')

    lista1.style.borderColor = 'rgb(235, 228, 228)'
    lista2.style.borderColor = 'rgb(235, 228, 228)'
    grupoL.style.borderColor = 'rgb(235, 228, 228)'

    lista1.style.color = 'white'
    lista2.style.color = 'white'
    lista3.style.color = 'white'

    lista1.style.background = 'hsl(236, 72%, 79%)'
    lista2.style.background = 'hsl(236, 72%, 79%)'
    lista3.style.background = 'hsl(236, 72%, 79%)'

    lista1.style.fontWeight = 'unset'
    lista2.style.fontWeight = 'unset'
    lista3.style.fontWeight = 'unset'

    preços.style.color = 'white'
    rs.style.color = 'white'
    plano.style.color = 'white'

    card1.style.background = 'hsl(236, 72%, 79%)'
    link.style.background = 'white'
    linka.style.color = 'hsl(236, 72%, 79%)'
}
function mudaCor3() {
    var plano = document.getElementById('pl')
    var rs = document.getElementById('rs')
    var preços = document.getElementById('preços')
    var grupoL = document.getElementById('grupoLista')
    var lista1 = document.getElementById('lista1')
    var lista2 = document.getElementById('lista2')
    var lista3 = document.getElementById('lista3')
    var link = document.getElementById('link')
    var linka = document.getElementById('linka')

    lista1.style.borderColor = 'rgb(235, 228, 228)'
    lista2.style.borderColor = 'rgb(235, 228, 228)'
    grupoL.style.borderColor = 'rgb(235, 228, 228)'

    lista1.style.color = 'white'
    lista2.style.color = 'white'
    lista3.style.color = 'white'

    lista1.style.background = 'hsl(236, 72%, 79%)'
    lista2.style.background = 'hsl(236, 72%, 79%)'
    lista3.style.background = 'hsl(236, 72%, 79%)'

    lista1.style.fontWeight = 'unset'
    lista2.style.fontWeight = 'unset'
    lista3.style.fontWeight = 'unset'

    preços.style.color = 'white'
    rs.style.color = 'white'
    plano.style.color = 'white'

    card1.style.background = 'hsl(236, 72%, 79%)'
    link.style.background = 'white'
    linka.style.color = 'hsl(236, 72%, 79%)'
}
