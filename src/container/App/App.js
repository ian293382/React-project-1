import React from 'react';
import './App.css';
import Logo from './logo.png'

import Board_1 from './board_1.gif'

function App() {
  const [searchStart, setIsSearchStart] = React.useState(false)
  return (
    <div>
      <header style={{
        padding: 60,
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <div>
            <img src={Logo} />
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
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
              <button className='sign-in-btn' >Sign In</button>
            </div>
          </div>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '220px',
          alignItems: 'center',
        }}>
          <div>
            <div style={{
              fontSize: '48px',
              fontWeight: '600',

            }}>Let's Get Cookie</div>
            <div style={{
              marginTop: '65px',
              fontSize: '16px',
              lineHeight: '32px',
            }}>
              <div>Explore the best recipes from around the World.</div>
              <div>Make cooking enjoyable again. </div>
            </div>
            <button style={{
              marginTop: '65px',
              padding: '10px 25px 10px 25px',
              backgroundColor: '#3B7844',
              border: 'none',
              color: 'white',
              borderRadius: '5',
              outline: 'none',
              cursor: 'pointer'
            }}>Explore Recipes</button>
            
          </div>
          <div>
            {/* <img src={Chess} /> */}
          
            <img src={Board_1} alt="Chess"/>
          </div>
        </div>
   
      </header>
    </div>
  );
}

export default App;
