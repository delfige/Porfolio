import React , { useState }from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contacto() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      text: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Verifica si los campos están vacíos
      if (!formData.name || !formData.email || !formData.text) {
        toast.error('Todos los campos son obligatorios.');
        return;
      }
  
      
      try {
        
        await new Promise((resolve) => setTimeout(resolve, 1000));
  
        // Muestra una notificación de éxito
        toast.success('¡Formulario enviado exitosamente!');
      } catch (error) {
        // Muestra una notificación de error en caso de problemas
        toast.error('Error al enviar el formulario. Por favor, inténtalo de nuevo.');
      }
    };
  
    return (
      <div className="backgroud-contacto">
        <div className="container-cont">

        
        <form className="form" onSubmit={handleSubmit}>
        <h2 className='txt-contacto'>Contacto</h2>
        <h2 className='txt-contacto1'>Envia un mail 💜 </h2>
          <label>
            <h2 className="h2-form">Nombre y apellido:</h2>
            <input type="text" name="name" value={formData.name} onChange={handleChange} min={2} />
          </label>
          <br />
          <label>
            <h2 className="h2-form">Email:</h2>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <br />
          <label>
            <h2 className="h2-form">Dejame tu mensaje:</h2>
            <input className="mensaje" type="text" name="text" value={formData.text} onChange={handleChange} />
          </label>
          <br />
          <button className='btn' type='submit'>
            enviar
          </button>
          
        </form>
        <div >
            <div className='div-iconos'>
            <img className='icon-c' src="cel.png" alt="" />
            <p>2314-222222</p>
            </div>
            <div className='div-iconos'>
            <img className='icon-c' src="correo.png" alt="" />
            <p>delfinagerea@gmail.com</p>
            </div>
        
        </div>
        <ToastContainer />
        </div>
      </div>
    );
  }
  




export default Contacto;

