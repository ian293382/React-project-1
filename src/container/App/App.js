import React from 'react';
import './App.css';
import Logo from './logo.png'
import Board_1 from './board_1.gif'

import {
  StyledAppHeader,
  StyledAppHeaderNavigationBar,
  StyledSignInButton,
  StyledAppHeaderContent,
  StyledExploreButton,
} from './App.styled'

function App() {
  const [searchStart, setIsSearchStart] = React.useState(false)
  return (
    <div>
      <StyledAppHeader>
        <StyledAppHeaderNavigationBar>
          <div>
            <img src={Logo} />
          </div>
          <div className='navigation-list'>
            <div className='search'><i onClick={() => setIsSearchStart(!searchStart)} className="fas fa-search"></i>
            <input className={searchStart ? 'open' : ''} type='text' placeholder='what you think about?'/>
            </div>
            <div className='navigation'>
              <ul style={{
                display: 'flex',
                listStyle: 'none',
              }}>
                <li>Recipes</li>
                <li>Dinner TV</li>
                <li>Cooking School</li>
                <li>About</li>
              </ul>
            </div>
            <div>
              <StyledSignInButton >Sign In</StyledSignInButton>
            </div>
          </div>
        </StyledAppHeaderNavigationBar>
        <StyledAppHeaderContent>
          <div>
            <div className='content-title'>Let's Get Cookie</div>
            <div className='content-subtitle'>
              <div>Explore the best recipes from around the World.</div>
              <div>Make cooking enjoyable again. </div>
            </div>
            <StyledExploreButton>Explore Recipes</StyledExploreButton>
            
          </div>
          <div>
            {/* <img src={Chess} /> */}
          
            <img src={Board_1} alt="Chess"/>
          </div>
        </StyledAppHeaderContent>
   
      </StyledAppHeader>
    </div>
  );
}

export default App;

