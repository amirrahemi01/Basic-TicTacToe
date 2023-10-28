import React, { useEffect } from 'react';

type Props = {
  onChange: () => void;
}

export default function ThemeSwitch() {
  if (document.documentElement.className = "null") {
    document.documentElement.className = "light";
  }

  const setDarkMode = () => {
    document.documentElement.className = 'dark';
    localStorage.setItem('selectedThemeType', 'dark');
  };

  const setLightMode = () => {
    document.documentElement.className = 'light';
    localStorage.setItem('selectedThemeType', 'light');
  };

  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedThemeType");

    if (selectedTheme === "dark") {
      setDarkMode();
    }
  }, []);



  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <>
      <input
        onChange={toggleTheme}
        defaultChecked={localStorage.getItem('selectedThemeType') === 'dark'}
        className="theme-switch"
        type="checkbox"
        id="switch"
      />
      <label className="theme-switch" htmlFor="switch">Toggle</label>
    </>
  )
}