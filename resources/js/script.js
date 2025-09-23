function loadNavbar() {
  
  const container = document.getElementById('navbar-container');
  
  if (!container) return;

  const nav = document.createElement('nav');
  
  nav.className = 'navbar navbar-expand-xl navbar-light bg-light fixed-top';

  const navWrapper = document.createElement('div');
  
  navWrapper.className = 'container-fluid';
  
  const brand = document.createElement('a');
  
  brand.className = 'navbar-brand';
  brand.href = '#';
  brand.textContent = 'My Villanova Navbar';

  const toggler = document.createElement('button');
  
  toggler.className = 'navbar-toggler';
  toggler.type = 'button';
  toggler.setAttribute('data-bs-toggle', 'collapse');
  toggler.setAttribute('data-bs-target', '#navbarBasic');
  toggler.setAttribute('aria-controls', 'navbarBasic');
  toggler.setAttribute('aria-expanded', 'false');
  toggler.setAttribute('aria-label', 'Toggle navigation');

  const togglerIcon = document.createElement('span');
  
  togglerIcon.className = 'navbar-toggler-icon';
  toggler.appendChild(togglerIcon);

  const collapseDiv = document.createElement('div');
  
  collapseDiv.className = 'collapse navbar-collapse';
  collapseDiv.id = 'navbarBasic';

  const ul = document.createElement('ul');
  ul.className = 'navbar-nav me-auto mb-2 mb-xl-0';

  const navItems = [
    { text: 'Home', href: 'index.html' },
    { text: 'Sports', href: 'Sports.html' }
  ];

  navItems.forEach(item => {
    
    const li = document.createElement('li');
    
    li.className = 'nav-item';

    const a = document.createElement('a');
    
    a.className = 'nav-link';
    a.href = item.href;
    a.textContent = item.text;

    li.appendChild(a);
    ul.appendChild(li);
  });

  collapseDiv.appendChild(ul);

  navWrapper.appendChild(brand);
  navWrapper.appendChild(toggler);
  navWrapper.appendChild(collapseDiv);
  
  nav.appendChild(navWrapper);
  
  container.appendChild(nav);
}