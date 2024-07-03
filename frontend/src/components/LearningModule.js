// // LearningModule/Dashboard.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const LearningModule = () => {
//   const navigate = useNavigate();

//   const navigateHome = () => {
//     navigate('/');
//   };

//   const Card = ({ children }) => (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden">
//       {children}
//     </div>
//   );
  
//   const CardContent = ({ children }) => (
//     <div className="p-4">
//       {children}
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-transparent p-6">
//       <div className="max-w-4xl mx-auto">
//         <div className="flex justify-between items-center mb-8">
//             <button
//               onClick={navigateHome}
//               className="p-2 bg-customGreen text-white rounded hover:bg-opacity-75"
//             >
//               <img
//                 src="/images/home-icon.png"
//                 alt="Home"
//                 className="w-10 h-10"
//               />
//             </button>
//             <h1 className="text-5xl font-bold text-purple-600 animate-bounce">Learning Module</h1>
//             <div className="w-10 h-10"></div>
//           </div>
//         <header className="flex items-center mb-6">
//           <img src="/api/placeholder/40/40" alt="User avatar" className="w-10 h-10 rounded-full mr-3" />
//           <h1 className="text-2xl font-semibold text-gray-700">Hi Theodore</h1>
//         </header>

//         <h2 className="text-xl font-medium mb-4 text-gray-600">Keep Working!</h2>

//         <div className="grid grid-cols-3 gap-4 mb-6">
//           <Card>
//             <CardContent className="p-4 flex items-center">
//               <img src="/api/placeholder/24/24" alt="Broccoli" className="w-6 h-6 mr-2" />
//               <span className="text-sm">Learn how to pruh-nowns pronounce</span>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent className="p-4 flex items-center">
//               <span className="text-sm">Nuhm-buhs numbers 1 2 3</span>
//               <img src="/api/placeholder/24/24" alt="Carrot" className="w-6 h-6 ml-2" />
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent className="p-4 flex items-center">
//               <span className="text-sm">Match the Picture</span>
//               <img src="/api/placeholder/24/24" alt="Arrow" className="w-6 h-6 ml-2" />
//             </CardContent>
//           </Card>
//         </div>

//         <h2 className="text-xl font-medium mb-4 text-gray-600">Words ~</h2>

//         <div className="grid grid-cols-5 gap-4 mb-6">
//           <Card>
//             <CardContent className="p-4 flex flex-col items-center">
//               <img src="/api/placeholder/24/24" alt="Chat" className="w-6 h-6 mb-2" />
//               <span className="text-sm text-center">Chat with friends</span>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent className="p-4 flex flex-col items-center">
//               <span className="text-lg font-bold mb-2">Trace!</span>
//               <span className="text-sm text-center">ABC</span>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent className="p-4 flex flex-col items-center">
//               <img src="/api/placeholder/24/24" alt="Bowl" className="w-6 h-6 mb-2" />
//               <span className="text-sm text-center">Learn</span>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent className="p-4 flex flex-col items-center">
//               <img src="/api/placeholder/24/24" alt="Broccoli" className="w-6 h-6 mb-2" />
//               <span className="text-sm text-center">Learn how to pruh-nowns pronounce</span>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent className="p-4 flex flex-col items-center">
//               <img src="/api/placeholder/24/24" alt="Book" className="w-6 h-6 mb-2" />
//               <span className="text-sm text-center">Let's Read</span>
//             </CardContent>
//           </Card>
//         </div>

//         <h2 className="text-xl font-medium mb-4 text-gray-600">Numbers ~</h2>

//         <div className="grid grid-cols-5 gap-4">
//           <Card>
//             <CardContent className="p-4">
//               {/* Empty card */}
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent className="p-4">
//               {/* Empty card */}
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent className="p-4">
//               {/* Empty card */}
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent className="p-4">
//               {/* Empty card */}
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent className="p-4 flex flex-col items-center">
//               <span className="text-sm text-center">Nuhm-buhs numbers</span>
//               <span className="text-lg font-bold">1 2 3</span>
//               <img src="/api/placeholder/24/24" alt="Carrot" className="w-6 h-6 mt-2" />
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );

//   // return (
//   //   <div className="flex flex-col items-center justify-start h-screen pt-10">

//   //       <h1 className="text-4xl font-bold mb-8">Learning Module</h1>
      
//   //     <div style={{ position: 'absolute', top: '10px', left: '100px' }}> {/* New container for the button */}
//   //       <button
//   //           onClick={navigateHome}
//   //           className="px-4 py-2 bg-customGreen text-white rounded hover:bg-customGreen"
//   //       >
//   //           <img
//   //           src="/images/home-icon.png" // Path to your home icon image
//   //           alt="Home"
//   //           className="w-10 h-10 hover:opacity-75"
//   //           />
//   //       </button>
//   //       </div>
//   //   </div>
//   // );
// };

// export default LearningModule;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const LearningModule = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };

  const Card = ({ children }) => (
    <div
    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-150 active:scale-95"
    onClick={() => {}}
  >
    {children}
  </div>
  );

  const CardContent = ({ children }) => (
    <div className="p-4">
      {children}
    </div>
  );

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: 'transparent', marginLeft: '200px', marginRight: '200px' }}>
      <div className="flex-1 p-4 max-w-full h-full mx-auto">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={navigateHome}
            className="p-2 bg-customGreen text-white rounded hover:bg-opacity-75"
          >
            <img
              src="/images/home-icon.png"
              alt="Home"
              className="w-10 h-10"
            />
          </button>
          <h1 className="text-5xl font-bold text-black animate-bounce">Learning Module</h1>
          <div className="w-10 h-10"></div>
        </div>
        <header className="flex items-center mb-6">
          <img
            src="/images/theodore.png"
            alt="Theodore"
            className="w-15 h-15 mr-4"
          />

          <h1 className="text-4xl font-semibold text-black">Hi Theodore</h1>
        </header>

        <h2 className="text-2xl font-medium mb-4 text-gray-500 text-left">Keep Working!</h2>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="p-4 flex items-center">
              <img 
              src="/images/number.png" 
              alt="Numbers" 
              className="w-full h-full object-cover object-center"
            />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center">
            <img 
              src="/images/pruh.png" 
              alt="pruh-nows" 
              className="w-full h-full object-cover object-center"
            />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center">
            <img 
              src="/images/matchpic.png" 
              alt="Match the picture" 
              className="w-full h-full object-cover object-center"
            />
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-medium mb-4 text-gray-500 text-left">Words ~</h2>

        <div className="grid grid-cols-5 gap-4 mb-6">
          <Card>
            <CardContent className="p-4 flex flex-col items-center">
            <img 
              src="/images/chat.png" 
              alt="Chat with friends" 
              className="w-full h-full object-cover object-center"
            />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex flex-col items-center">
              <img 
                src="/images/trace.png" 
                alt="Trace" 
                className="w-full h-full object-cover object-center"
              />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex flex-col items-center">
              <img 
                src="/images/learn.png" 
                alt="Learn" 
                className="w-full h-full object-cover object-center"
              />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex flex-col items-center">
              <img 
                src="/images/pruh.png" 
                alt="Pruh" 
                className="w-full h-full object-cover object-center"
              />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex flex-col items-center">
              <img 
                src="/images/letread.png" 
                alt="Let's read" 
                className="w-full h-full object-cover object-center"
              />
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-medium mb-4 text-gray-500 text-left">Numbers ~</h2>

        <div className="grid grid-cols-5 gap-4">
          <Card>
            <CardContent className="p-4">
              {/* Empty card */}
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              {/* Empty card */}
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              {/* Empty card */}
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              {/* Empty card */}
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex flex-col items-center">
              <img 
                  src="/images/number.png" 
                  alt="Numbers" 
                  className="w-full h-full object-cover object-center"
                />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LearningModule;


