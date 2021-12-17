export const ToggleThemeHandler = () => {
  localStorage.getItem('Theme')
    ? localStorage.removeItem('Theme')
    : localStorage.setItem('Theme', 'DarkTheme');
  document.body.classList.toggle('DarkTheme');
};