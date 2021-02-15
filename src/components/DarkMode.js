const DarkMode = () => {

 let clickedClass = "clicked"
 const body = document.body
 const lightTheme = "light"
 const darkTheme = "dark"
 let theme

 if (localStorage) {
    theme = localStorage.getItem("theme")
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme)
  } else {
    body.classList.add(lightTheme)
  }

  const switchTheme = e => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme)
      e.target.classList.remove(clickedClass)
      localStorage.setItem("theme", "light")
      theme = lightTheme
    } else {
      body.classList.replace(lightTheme, darkTheme)
      e.target.classList.add(clickedClass)
      localStorage.setItem("theme", "dark")
      theme = darkTheme
    }
  }

 return (
    <div 
      className={`dark-mode ${theme === "dark" ? clickedClass : ""}`}
      onClick={e => switchTheme(e)}
    >
     <svg className="" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
     <span>Dark Mode</span>
    </div>
 )
}

export default DarkMode