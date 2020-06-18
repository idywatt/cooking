import React from'react'

const AdminForm = ({ //Toutes les props importées
    id:key,
    majRecette,
    recettes,
    supprimerRecette
}) => {

  const recette = recettes[key] //Pour savoir dans quel recette je suis avant de la modifier

  const handleChange=(event,key) => { //On fait un méthde unique pour le formulaire en prenant en infos le nom et la valeur de l'input
    const {name, value} = event.target
    const recette = recettes[key]
    recette[name] = value //C'est la valeur qui sera modifiée
    majRecette(key,recette)
  }

  return (
      <div className='card'>
          <form className='admin-form'>
            <input value={recette.nom} name='nom' onChange={e =>handleChange(e,key)} type="text" placeholder='Nom de la recette' />
            <input value={recette.image} name='image' type="text" placeholder="Nom de l'image" />
            <textarea value={recette.ingredients}  name='ingredients' placeholder='Liste des ingédients' rows="3"></textarea>
            <textarea value={recette.instructions} name='instructions' placeholder='Liste des instructions' rows="15"></textarea>
          </form>
          <button onClick={() => supprimerRecette(key)}>Supprimer</button>
      </div>
  )
}

export  default AdminForm