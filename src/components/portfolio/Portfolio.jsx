import React from 'react'
import './portfolio.css'
import  DebuggerClient  from '../../assets/Debugger Client.png'
import  UnseenClient  from '../../assets/Unseen Homes screen.png'
import  TicTacClient  from '../../assets/Tic Tac Screen.png'
import  GSDClient  from '../../assets/GSD screen.png'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>

      <div className='.container portfolio__container'>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={GSDClient} alt="GSD" />
          </div>
          <h3>GSD-Task-Force</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/GSD-Task-Force/GSD-Task-Force-client" className='btn' target='_blank'>GitHub</a>
          <a href="https://gsd-task-force.github.io/GSD-Task-Force-client/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={DebuggerClient} alt="Debuggr-Trackr" />
          </div>
          <h3>Debuggr-Trackr Ticket System</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/bilaltahiraziz/Debugger-Client" className='btn' target='_blank'>GitHub</a>
          <a href="https://bilaltahiraziz.github.io/Debugger-Client/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={UnseenClient} alt="UnSeen-Homes" />
          </div>
          <h3>UnSeen-Homes Contractor/Client Tool</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/bilaltahiraziz/UnSeenClient" className='btn' target='_blank'>GitHub</a>
          <a href="https://bilaltahiraziz.github.io/UnSeenClient/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={TicTacClient} alt="TicTacToe" />
          </div>
          <h3>Tic Tac Toe Game</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/bilaltahiraziz/tictactoe-client" className='btn' target='_blank'>GitHub</a>
          <a href="https://bilaltahiraziz.github.io/tictactoe-client/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio