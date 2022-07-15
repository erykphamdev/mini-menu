import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { data } from './data/data';
import { publicRoutes } from './routes/routes';
import ContentLayout from './Layouts/ContentLayout';
//----------------------------------------
function App() {
   return (
      <BrowserRouter>
         <div className='App'>
            <h1 className="App__heading">Our Menu</h1>
            <nav className='App__nav'>
               <Link className='App__nav-item' to='/'>Home</Link>
               <Link className='App__nav-item' to='/breakfast'>Breakfast</Link>
               <Link className='App__nav-item' to='/lunch'>Lunch</Link>
               <Link className='App__nav-item' to='/shakes'>Shakes</Link>
            </nav>
            <Routes>
               {publicRoutes.map((route, index) => {
                  const ContentPage = route.element;
                  return (
                     <Route
                        key={index}
                        path={route.path}
                        element={
                           <ContentLayout>
                              <ContentPage />
                           </ContentLayout>
                        }
                     />
                  );
               })}
            </Routes>
         </div>
      </BrowserRouter>
   );
}

export default App;
