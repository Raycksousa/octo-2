import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


import Principal from './pages/pg-login';
import Register from './pages/pg-register'



export default function MyRoutes() {
	return (
		<BrowserRouter>
		      <Routes>
			<Route path="/"   element={<Principal/>} />
			<Route path="/pg-register"   element={<Register/>} />
			
			
			
		      </Routes>
		</BrowserRouter>
	
	);
}