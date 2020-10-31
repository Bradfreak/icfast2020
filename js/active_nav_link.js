window.onload = (e) => {
    // DOM elements
    const navBar = document.querySelector('.main_nav')
    const navItems = navBar.querySelectorAll('li')

    const setActiveNavItem = () => {
        // Get the window location
        let windowLocation = window.location.href

        let isActiveLinkSet = false
        navItems.forEach(item => {
            // Grab the a tag from the nav item
            let navLink = item.querySelector('a')

            // If the current window location corresponds to this a tag's href,
            // Then set this as an active nav item
            if (navLink.href === windowLocation) {
                item.classList.add('active')
                isActiveLinkSet = true
            } else {
                item.classList.remove('active')
            }
        })

        // If no nav item is set as active, set the first nav item as default
        if (!isActiveLinkSet) {
            navItems[0].classList.add('active')
        }
    }

    setActiveNavItem()
}
