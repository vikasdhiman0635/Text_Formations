import Alert from "./component/Alert";
import Navbar from "./component/Navbar";
import About from './component/About';
import TextForm from './component/TextForm';
import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from './component/NotFoundPage.tsx'
import Profiles from './component/profiles.tsx';
import ProfilePage from './component/ProfilesPage.tsx';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, typealert) => {
    setAlert({
      msg: message,
      type: typealert
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }


  const changeMode = (event) => {
    if (event.target.checked) {
      setMode("dark");
      document.body.style.backgroundColor = 'gray';
      showAlert("Enable dark mode", 'success')
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Enable light mode", 'success')
    }
  }

  const changeModeInGreen = (event) => {
    if (event.target.checked) {
      setMode("green");
      document.body.style.backgroundColor = 'green';
      showAlert("Enable green mode", 'success')
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Enable light mode", 'success')
    }
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <TextForm showAlert={showAlert} heading="Enter the text you analyze below" mode={mode} />,
      errorElement: <NotFoundPage />
    },
    {
      path: '/about', element: <About />
    },
    {
      path: '/profiles', element: <Profiles />
    },
    {
      path: '/profiles/:profileId', element: <ProfilePage />
    }
  ])

  return (
    <>
      <Navbar title="TextUtils" aboutus="About" mode={mode} changeModeInGreen={changeModeInGreen} changeMode={changeMode} />
      <Alert alert={alert} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
