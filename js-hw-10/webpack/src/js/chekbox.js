import refs from './refs'

const theme = {
  darkTheme: 'dark-theme',
  lightTheme: 'light-theme'
}

function changeTheme() {
  if (this.checked) {
    refs.body.classList = theme.darkTheme;
    localStorage.setItem('darkTheme', this.checked)
    localStorage.removeItem('lightTheme')
  } else {
    refs.body.classList = theme.lightTheme;
    localStorage.setItem('lightTheme', this.checked)
    localStorage.removeItem('darkTheme')
  }

}

let themIsOn = localStorage.getItem('darkTheme');

if (themIsOn) {
  refs.chekbox.checked = true
  refs.body.classList = theme.darkTheme;
} else {
  refs.chekbox.checked = false
  refs.body.classList = theme.lightTheme;
}


refs.chekbox.addEventListener('change', changeTheme)
