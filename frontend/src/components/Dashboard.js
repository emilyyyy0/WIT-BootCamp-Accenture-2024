import { useNavigate } from 'react-router-dom';
import React from 'react';

const Dashboard = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };

  const ClickableCard = ({ children }) => (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center justify-center cursor-pointer transform transition-transform duration-150 active:scale-95"
      onClick={() => {}}
    >
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
          <h1 className="text-5xl font-bold text-purple-600 animate-bounce">Dashboard</h1>
          <div className="w-10 h-10"></div>
        </div>

        <div className="flex items-center justify-left mb-8 bg-transparent">
          <img
            src="/images/theodore.png"
            alt="Theodore"
            className="w-20 h-20 mr-4"
          />
          <h2 className="text-4xl font-semibold text-green-600">Hello Theodore</h2>
        </div>

        <div className="flex flex-wrap">
          <div className="flex flex-col w-full md:w-2/5 p-2">
            <h2 className="text-3xl font-medium mb-4 bg-transparent text-orange-500">Your veggie patch</h2>
            <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
              <img src="/images/veggie-patch.png" alt="Veggie Patch" className="w-full h-auto object-cover" />
            </div>
          </div>

          <div className="flex flex-col w-full md:w-3/5 p-2">
            <h2 className="text-3xl font-medium mb-4 bg-transparent text-orange-500">Your recent viewed lessons</h2>
            <div className="flex-1 grid md:grid-cols-2 gap-4 mb-8">
              <ClickableCard>
                <img src="/images/recent-view.png" alt="Recent View" className="w-full h-auto object-cover" />
              </ClickableCard>
              <div className="grid grid-rows-2 gap-4">
                <ClickableCard>
                  <img src="/images/lesson2.png" alt="Lesson 2" className="w-full h-auto" />
                </ClickableCard>
                <ClickableCard>
                  <img src="/images/lesson3.png" alt="Lesson 3" className="w-full h-auto" />
                </ClickableCard>
              </div>
            </div>

            <h2 className="text-3xl font-medium mb-4 bg-transparent text-orange-500">This week's work progress</h2>
            <div className="bg-transparent rounded-lg shadow-lg overflow-hidden">
              <img src="/images/progress.png" alt="Progress" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

//Using card
// import { useNavigate } from 'react-router-dom';
// import React from 'react';

// const Dashboard = () => {
//   const navigate = useNavigate();

//   const navigateHome = () => {
//     navigate('/');
//   };

//   const Card = ({ children, className }) => (
//     <div
//     className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-150 active:scale-95"
//     onClick={() => {}}
//   >
//     {children}
//   </div>
//   );

//   const CardContent = ({ children }) => (
//     <div className="p-4 flex-1 flex items-center justify-center">
//       {children}
//     </div>
//   );

//   return (
//     <div className="min-h-screen flex" style={{ backgroundColor: 'transparent', marginLeft: '200px', marginRight: '200px' }}>
//       <div className="flex-1 p-4 max-w-full h-full mx-auto">
//         <div className="flex justify-between items-center mb-8">
//           <button
//             onClick={navigateHome}
//             className="p-2 bg-customGreen text-white rounded hover:bg-opacity-75"
//           >
//             <img
//               src="/images/home-icon.png"
//               alt="Home"
//               className="w-10 h-10"
//             />
//           </button>
//           <h1 className="text-5xl font-bold text-purple-600 animate-bounce">Dashboard</h1>
//           <div className="w-10 h-10"></div>
//         </div>

//         <div className="flex items-center justify-left mb-8 bg-transparent">
//           <img
//             src="/images/theodore.png"
//             alt="Theodore"
//             className="w-20 h-20 mr-4"
//           />
//           <h2 className="text-4xl font-semibold text-green-600">Hello Theodore</h2>
//         </div>

//         <div className="flex flex-wrap -mx-2 items-stretch">
//           <div className="w-full md:w-1/3 px-2 mb-4 flex flex-col">
//             <h2 className="text-3xl font-medium mb-4 bg-transparent text-orange-500">Your veggie patch</h2>
//             <Card className="flex-1 h-250 max-w-full">
//               <CardContent>
//                 <img src="/images/veggie-patch.png" alt="Veggie Patch" className="max-w-full max-h-full object-cover" />
//               </CardContent>
//             </Card>
//           </div>

//           <div className="w-full md:w-2/3 px-2 flex flex-col">
//             <div className="flex-1 mb-4">
//               <h2 className="text-3xl font-medium mb-4 bg-transparent text-orange-500">Your recent viewed lessons</h2>
//               <div className="flex-1 grid md:grid-cols-2 gap-4">
                // <Card className="flex-1 max-h-96 max-w-full">
                //   <CardContent>
                //     <img 
                //       src="/images/pruh.png" 
                //       alt="Recent view" 
                //       className="max-w-full max-h-full object-cover object-center"
                //     />
                //   </CardContent>
                // </Card>
//                 <div className="flex flex-col flex-1 grid grid-rows-2 gap-4">
//                   <Card className="flex-1 max-h-48 max-w-full">
//                     <CardContent>
//                       <img src="/images/letread.png" alt="Let's read" className="max-w-full max-h-full object-cover object-center" />
//                     </CardContent>
//                   </Card>
//                   <Card className="flex-1 max-h-48 max-w-full">
//                     <CardContent>
//                       <img src="/images/number.png" alt="Numbers" className="max-w-full max-h-full object-cover object-center" />
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h2 className="text-3xl font-medium mb-4 bg-transparent text-orange-500">This week's work progress</h2>
//               <Card className="flex-1 max-h-96 max-w-full">
//                 <CardContent>
//                   <img src="/images/progress.png" alt="Progress" className="max-w-full max-h-full object-cover" />
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;