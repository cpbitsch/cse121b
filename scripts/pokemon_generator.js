input = ""

function output(element) {
    let pokemon = document.createElement("article")
    let pokemonName = document.createElement("h3")
    pokemonName.innerHTML = element.name
    if (pokemonName == "eevee"){
        pokemonName = "The Best Pokemon"
    }
    pokemonName.innerHTML = "Name: " + pokemonName.innerHTML.charAt(0).toUpperCase() + pokemonName.innerHTML.slice(1)
    let pokemonId = document.createElement("h4")
    pokemonId.innerHTML = "ID: " + element.id
    let pokemonSprite = document.createElement("img")
    pokemonSprite.setAttribute("src", element.sprites.front_default)
    pokemonSprite.setAttribute("alt", element.name)
    document.getElementById("pokemon").appendChild(pokemon)
    pokemon.appendChild(pokemonName)
    pokemon.appendChild(pokemonId)
    pokemon.appendChild(pokemonSprite)
    document.getElementById("pokemon").appendChild(pokemon)
}

async function get_pokemon(input) {
    input = document.getElementById("input_pokemon").value
    input = input.toLowerCase()
    let url = `https://pokeapi.co/api/v2/pokemon/${input}`
    let response = await fetch(url)
    pokemon = await response.json()
    output(pokemon)
}

window.onload = function(){
    document.getElementById("button").addEventListener("click", get_pokemon)
}
