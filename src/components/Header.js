import React from 'react'


const Header = ({pseudo}) => {
    const formatPseudo = pseudo => /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`
    //On fait un regex de maniere à si c'est une voyelle, ce soit un apostrophe dans le header
    console.log(formatPseudo(pseudo))
    return (
        <header>
            <h1>La boite à recette {formatPseudo(pseudo)}</h1>
        </header>
    )
}

export default Header