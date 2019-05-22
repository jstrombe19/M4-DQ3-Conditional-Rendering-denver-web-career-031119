import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

const renderShit = {
  profile: Profile(),
  photo: Photos(),
  cocktail: Cocktails(),
  pokemon: <Pokemon />
}

class MainBox extends React.Component {
  state = {
    activeIcon: ''
  }


  setActiveIcon = iconId => {
    this.setState({ activeIcon: iconId })
  }

  displayThis = () => {
    return renderShit[this.state.activeIcon]
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    // const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar  setActiveIcon={this.setActiveIcon} activeIcon={this.state.activeIcon} renderShit={renderShit}/>
        {this.displayThis()}
      </div>
    )
  }

}

export default MainBox
