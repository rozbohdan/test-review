const COLLAPSE        = '[data-collapse]'
const COLLAPSE_ACTION = '[data-collapse-action]'
const COLLAPSE_TEXT   = '[data-collapse-text]'
const OPEN_COLLAPSE   = 'collapseOpen'
const COLLAPSES       = document.querySelectorAll(COLLAPSE)

class Collapse {
  static attach() {
    const collapse = new Collapse()
    collapse.init()
  }

  init() {
    this.applyListener()

    for (let item of COLLAPSES) {
      const itemAction = item.querySelector(COLLAPSE_ACTION)
      const itemText = item.querySelector(COLLAPSE_TEXT)

      if (itemText.scrollHeight >= '49') {
        itemAction.classList.add('show')
      }
    }
  }

  applyListener() {
    document.querySelector('*').addEventListener('click', e => {
      const element = e.target

      if (this.isCallCollapseElement(element)) {
        const text = element.previousElementSibling

        if (this.isOpened(text)) {
          this.closeCollapse(text, element)
        } else {
          this.openCollapse(text, element)
        }
      }
    })
  }

  isCallCollapseElement(element) {
    return element && OPEN_COLLAPSE in element.dataset
  }

  openCollapse(text, element) {
    text.classList.add('collapsed')
    text.style.maxHeight = text.scrollHeight + 'px'
    element.innerHTML = 'Collapse'
  }

  closeCollapse(text, element) {
    text.classList.remove('collapsed')
    text.style.maxHeight = '3rem'
    element.innerHTML = 'Show more...'
  }

  isOpened(text) {
    return text.classList.contains('collapsed')
  }
}

Collapse.attach()
