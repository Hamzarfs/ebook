import React from 'react';

// const BreadCrum = (props) => {
//   return (
//     <section
//       className="page-heading"
//       style={{
//         backgroundImage: `url(${props.backgroundImage || ''})`, // Set background image from prop
//         backgroundSize: 'cover', // Ensure background covers entire section
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className="overlay">
//         <div className="container text-center">
//           <h1>{props.title}</h1>
//           <p>
//             {props.desc || ''}
//           </p>
//           {/* {props.buttonText && (
//                <button onClick={props.onClick} style={{ cursor: 'pointer' }}>
//               {props.buttonText}
//               </button> */}

// {props.buttonText && (
//    <button onClick={props.onClick} className="btn" style={{ cursor: 'pointer' }}>
//     {props.buttonText}
//     </button> 
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Default props for fallback values
// BreadCrum.defaultProps = {
//   buttonText: '',
//   buttonLink: '#',
//   backgroundImage: '',

// };
const BreadCrum = (props) => {
    return (
      <section
        className={`page-heading ${props.className || ''}`} // Add className prop here
        style={{
          backgroundImage: `url(${props.backgroundImage || ''})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="overlay">
          <div className="container text-center">
            <h1>{props.title}</h1>
            <p>{props.desc || ''}</p>
  
            {props.buttonText && (
              <button onClick={props.onClick} className="btn" style={{ cursor: 'pointer' }}>
                {props.buttonText}
              </button>
            )}
          </div>
        </div>
      </section>
    );
  };
  
  // Default props for fallback values
  BreadCrum.defaultProps = {
    buttonText: '',
    buttonLink: '#',
    backgroundImage: '',
    className: '', // Default className
  };
  

export default BreadCrum;



