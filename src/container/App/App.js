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

import About from '../About/About';
import Recipes from '../Recipes/Recipes';
import Cooking from '../Cooking/Cooking';

function App() {
  const [searchStart, setIsSearchStart] = React.useState(false)
  const [pathname, setPathname] = React.useState('/')

  React.useEffect(() => {
    const pn = window.location.pathname
    setPathname(pn)
  },[])

  return (
    <div>
      <StyledAppHeader>
        <StyledAppHeaderNavigationBar>
          <div>
            <a href='/'><img src={Logo} /></a>
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
                <li><a href='/recipes'>Recipes</a></li>
                <li>Dinner TV</li>
                <li><a href='/cooking'>Cooking School</a></li>
                <li><a href='/about'>About</a></li>
              </ul>
            </div>
            <div>
              <StyledSignInButton >Sign In</StyledSignInButton>
            </div>
          </div>
        </StyledAppHeaderNavigationBar>
        <StyledAppHeaderContent>
          {pathname === '/' &&
            <React.Fragment>
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
           
              </React.Fragment>
            }
            {
              pathname === '/about' && <About/>
            }

            {
              pathname === '/recipes' && <Recipes/>
            }

            {
              pathname === '/cooking' && <Cooking/>
            }

        </StyledAppHeaderContent>
   
      </StyledAppHeader>
    </div>
  );
}

export default App;

