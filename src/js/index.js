const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon =>{
    pokemon.addEventListener('click', () =>{
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const PokemonAtivoNaListagem = document.querySelector('.ativo')
        PokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionavelNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionavelNaListagem.classList.add('ativo')
    })
})