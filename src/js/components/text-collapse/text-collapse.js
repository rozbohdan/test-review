const COLLAPSE_ACTION = 'collapseAction'

class Collapse {
  static attach() {
    const collapse = new Collapse()
    collapse.init()
  }

  init() {
    this.applyListener()
  }

  applyListener() {
    document.querySelector('*').addEventListener('click', e => {
      const element = e.target

      if (this.isCallCollapseElement(element)) {
        if (this.isOpened(element)) {
          this.closeCollapse(element)
        } else {
          this.openCollapse(element)
        }
      }
    })
  }

  isCallCollapseElement(element) {
    return element && COLLAPSE_ACTION in element.dataset
  }

  openCollapse(element) {
    element.previousElementSibling.classList.add('collapsed')
    element.previousElementSibling.style.maxHeight = element.previousElementSibling.scrollHeight + 'px'
    element.innerHTML = 'Collapse'
  }

  closeCollapse(element) {
    element.previousElementSibling.classList.remove('collapsed')
    element.previousElementSibling.style.maxHeight = '3rem'
    element.innerHTML = 'Show more...'
  }

  isOpened(element) {
    return element.previousElementSibling.classList.contains('collapsed')
  }
}

Collapse.attach()
