import React from 'react'

const Card = ({details}) => {  

    const ingredients = details.ingredients
    .split(',') // Pemet de mettre les éléments éléments après chaque virgule dans un tableau  pour ne pas tout avoir sur la même ligne
    .map(item => <li key={item}>{item}</li>) //On boucle pour mettre en liste chauque élément du tableau

    const instructions = details.instructions
    .split('\n') 
    .map(item => <li key={item}>{item}</li>) 

    const requireImage = chemin => {//Si l'image prévue n'est pas trouvée, alors il charge une image par défaut (default.jpeg)
        try { 
            return require(`../img/${chemin}`)
        } catch(err) {
            return require(`../img/default.jpeg`)
        }
    }

 

    return (  
        <div className='card'>
          <div className='image'>
              <img src={requireImage (details.image)} alt={details.nom} /> 
          </div>
          <div className='recette'>
              <h2>{details.nom}</h2>
              <ul className='liste-ingredients'>
                  {ingredients}
              </ul>
              <ol className='liste-instructions'>
                  {instructions}
              </ol>
          </div>
        </div>
    )
}

export default Card