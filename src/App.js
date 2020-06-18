import React, { Component } from 'react'
// CSS
import './App.css'
import Header from'./components/Header'
import Admin from './components/Admin'
import Card from './components/Card'
import recettes from './recettes'
import AdminForm from'./components/AdminForm'

import base from './base'



class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  componentDidMount () { //On synchronise notre site avec firebase(base de données)
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
      context:this,
      state:'recettes'
    })
  }

  componentWillUnmount () { // ppour desynchroniser la connection entre notre state et firebase quand on change de page pour être sûr de modifier les bonnes infos sur le bon profil
    base.removeBinding(this.ref)
  }

  ajouterRecette = recette => {  //Pour ajouter une recette
    const recettes = {...this.state.recettes}
    recettes[`recette-${Date.now()}`] = recette //Pour être sûr d'avoir un nombre unique en numéro de recette
    this.setState({recettes}) //Modifie et remet à jour les recettes
  }

  majRecette = (key,newRecette) => {  //Pour mettre à jour une recette
    const recettes = {...this.state.recettes}
    recettes[key] = newRecette //Pour être sûr d'avoir un nombre unique en numéro de recette
    this.setState({recettes}) //Modifie et remet à jour les recettes
  }

  supprimerRecette= key =>{
    const recettes = {...this.state.recettes}
    recettes[key] = null
    this.setState({recettes}) 
  }

  chargerExemple = () => this.setState({recettes}) //Fonction qui modifie l'état de la recette 

  render () {

    const cards = Object.keys(this.state.recettes)//On crée un tableau pour avoir les détails de chaque recettes et faire une boucle dessus
    .map(key => <Card key={key} details={this.state.recettes[key]}  />) //On fait une boucle pour avoir le nom de chauque recette


    return ( 
      <div className='box'> 
        <Header pseudo={this.state.pseudo} />
        <div className='cards'>
           { cards }                  
        </div> 
        <Admin
          pseudo={this.state.pseudo}
          recettes={this.state.recettes}
          ajouterRecette={this.ajouterRecette}   
          majRecette={this.majRecette}
          supprimerRecette={this.supprimerRecette}
          chargerExemple={this.chargerExemple} />
      </div>
    )
  }
}

export default App
