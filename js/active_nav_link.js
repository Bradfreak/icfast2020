window.onload = (e) => {
    const navBar = document.querySelector('.main_nav')
    const navItems = navBar.querySelectorAll('li')

    const setActiveNavItem = () => {
        let windowLocation = window.location.href

        let isActiveLinkSet = false
        navItems.forEach(item => {
            let navLink = item.querySelector('a')

            if (navLink.href === windowLocation) {
                item.classList.add('active')
                isActiveLinkSet = true
            } else {
                item.classList.remove('active')
            }
        })

        if (!isActiveLinkSet) {
            navItems[0].classList.add('active')
        }
    }

    setActiveNavItem()
}