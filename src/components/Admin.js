import React, { Component } from 'react'
import AjouterRecette from './AjouterRecette'
import AdminForm from './AdminForm'
import firebase from 'firebase/app'
import base, {firebaseApp} from '../base'


class Admin extends Component {
	

    render () { //On met dans une constante les props qu'on importe
        const {recettes, ajouterRecette, majRecette, chargerExemple, supprimerRecette} = this.props

        const logout = <button onClick={this.logout}>Déconnexion</button>
        

       
        return (
					<div className='cards'> 
							<AjouterRecette ajouterRecette={ajouterRecette} />
							{
								Object.keys(recettes)
								.map(key => <AdminForm
									key={key}
									id={key}
									majRecette={majRecette}
									supprimerRecette={supprimerRecette}
									recettes={recettes} />)
							}
							<footer>
								<button onClick={chargerExemple}>Remplir</button>
							</footer>
					</div> 
        )
    }
}

export default Admin