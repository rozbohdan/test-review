const SWITCHER_ACTION = 'themeSwitcherAction'

class ThemeSwitcher {
  static attach() {
    const switcher = new ThemeSwitcher()
    switcher.init()
  }

  init() {
    this.applyListener()
  }

  applyListener() {
    document.querySelector('*').addEventListener('click', e => {
      const element = e.target
      const body = document.querySelector('body')

      if (this.isCallThemeSwitcherElement(element)) {
        if (this.isDarkTheme(body)) {
          this.switchLightTheme(body)
        } else {
          this.switchDarkTheme(body)
        }
      }
    })
  }

  isCallThemeSwitcherElement(element) {
    return element && SWITCHER_ACTION in element.dataset
  }

  switchLightTheme(body) {
    body.classList.remove('theme-dark')
  }

  switchDarkTheme(body) {
    body.classList.add('theme-dark')
  }

  isDarkTheme(body) {
    return body.classList.contains('theme-dark')
  }
}

ThemeSwitcher.attach()
