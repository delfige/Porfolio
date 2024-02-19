import { Link } from 'react-router-dom';
function Main() {
    return(
        <div className="divp">
        <div className="div-main">
          <img className="img-main" src="/img-principal.png" alt="" />
          <div className="contenedor-main">

          <h2 className="h2-main">Hola!, mi nombre es Delfina Gerea!</h2>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>
          <Link  to="/contacto">
          <button className="btn" to="/contacto">
            Contactame!
          </button>
          </Link>
          </div>
        </div>
    
        <section className="skill">
          <div className="centered-text">
            <p>Skills & tools</p>
            <section className="s-skill">
              <div>
                <img className="img-skill" src="/html-5.png" alt="" />
                <p className="txt-skill" > HTML</p>
              </div>
              <div>
                <img className="img-skill"  src="/css-3.png" alt="" />
                <p className="txt-skill"> css</p>
              </div>
              <div>
                <img className="img-skill"  src="/js.png" alt="" />
                <p className="txt-skill"> JScript </p>
              </div>
              <div>
                <img className="img-skill"  src="/react.png" alt="" />
                <p className="txt-skill"> React </p>
              </div>
              <div>
                <img className="img-skill"  src="/responsive.png" alt="" />
                <p className="txt-skill"> Responsive </p>

              </div>
              <div>
                <img className="img-skill"  src="/sass.png" alt="" />
                <p className="txt-skill"> SASS </p>
              </div>
              <div>
                <img className="img-skill"  src="/figma.png" alt="" />
                <p className="txt-skill">  Figma </p>
              </div>
              <div>
                <img className="img-skill"  src="/github-white.png" alt="" />
                <p className="txt-skill"> Github </p>
              </div>
            </section>
          </div>
        </section>
    
      
    
      </div>
        

        
        
    );
}

export default Main;




