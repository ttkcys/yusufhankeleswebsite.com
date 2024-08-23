let nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            nav.classList.toggle('nav-scroll', window.scrollY > 0);
        });

        let AddNavLinkA = document.querySelectorAll('.nav-links li a');
        AddNavLinkA.forEach(item =>{
            item.addEventListener('click', () =>{
                removeActive();
                item.classList.add('active');
            });
        });
        const removeActive = () => AddNavLinkA.forEach(item =>{
            item.classList.remove('active');
        });

        let menuBars = document.querySelector('nav button');
        let navLinks = document.querySelector('.nav-links');
        menuBars.addEventListener('click', () =>{
            navLinks.classList.toggle('nav-link-block');
        });