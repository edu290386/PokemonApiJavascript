const ability = document.querySelector(".ability");
const buttonPokemon = document.querySelector("button");
const h1 = document.querySelector("h1");


const poketype = {
    electric: "yellow",
    normal: "pink",
    ground: "brown",
    rock: "grey",
    
}

const getAbilitys = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json();
    renderCard(data);
}

const getDescription = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    const data = await response.json();
    return data.flavor_text_entries[id];
}

buttonPokemon.addEventListener( "click", () => {
    const idPokemon = Math.floor(Math.random()*150 +1);
    getAbilitys(idPokemon)
})

const renderCard = (pokemon) => {
    const pokemonCard = document.querySelector("main");
    const namePokemon = pokemon.name;
    const identifierPokemon = pokemon.id;
    console.log(identifierPokemon);
    pokemonCard.innerHTML = `
        <article class="container">
            <section class="card">
                <h3>Your Result</h3>
                <div class="circle">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg">
                </div>
                <h1>${firstLetter(namePokemon)}</h1>
                <p class="description">${getDescription(pokemon.id)}</p>
            </section>
            <section class="information">
                <h2>Summary</h2>
                <div class="ability">  
                </div>    
            </section>
        </article>
        `

}

const firstLetter = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
}