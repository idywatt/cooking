import React, { Component } from 'react'

class AjouterRecette extends Component {

  state = {
    nom:'' ,
    image:'' ,
    ingredients:'' ,
    instructions:''
  }

    handlechange = event => { //On fait un méthde unique pour le formulaire en prenant en infos le nom et la valeur de l'input
      const {name, value} = event.target
      this.setState({ [name]:value })
    }

    handleSubmit = event => {
      event.preventDefault()
      const recette = {...this.state}
      this.props.ajouterRecette(recette)

      
      Object.keys(recette).forEach(item => { //Pour vider le formulaire dès que la nouvelle recette est ajoutée
        recette[item]=''
      })
      this.setState ({...recette})
    }

    render () {
        return (
          <div className='cards'> 
            <form className='admin-form ajouter-recette' onSubmit={this.handleSubmit}>
              <input value = {this.state.nom}  onChange={this.handlechange} name='nom' type="text" placeholder='Nom de la recette' />
              <input value = {this.state.image} onChange={this.handlechange} name='image' type="text" placeholder="Nom de l'image" />
              <textarea value = {this.state.ingredients} onChange={this.handlechange} name='ingredients' placeholder='Liste des ingédients' rows="3"></textarea>
              <textarea value = {this.state.instructions} onChange={this.handlechange} name='instructions' placeholder='Liste des instructions' rows="15"></textarea>
              <button type='submit'>Ajouter votre recette</button>
            </form>
          </div> 
        )
    }
}

export default AjouterRecette