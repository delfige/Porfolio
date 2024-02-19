import React, { useEffect, useState } from 'react';


function Proyectos() {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    
    fetch('proyectos.json')
      .then(response => response.json())
      .then(data => setProyectos(data))
      .catch(error => console.error('Error al cargar los proyectos:', error));
  }, []);

  return (
    <div className='proyectos'>
      
      
        {proyectos.map(proyecto => (
          <div className='div-proyectos' key={proyecto.id}>
            <img className='proyecto-img' src={proyecto.imagen} alt={proyecto.titulo} />
            <div className='div-descripcion'>
              
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>
            </div>
          </div>
        ))}
      
    </div>
  );
}

export default Proyectos;