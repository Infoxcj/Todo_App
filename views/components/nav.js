const navbar = document.querySelector('#navbar');

const createNavHome = () => {
  navbar.innerHTML = `
  <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
  <p class="font-bold text-xl text-white">ToDo List</p>
  <!-- version movil -->
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 md:hidden text-white cursor-pointer p-1 hover:bg-green-600 rounded-lg">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
  <!-- version escritorio -->
  <div class="hidden md:flex flex-row gap-4">
    <a href="/login/" class="transition ease-in-out text-white font-bold hover:bg-green-800 py-2 px-4 rounded-lg">Login</a>
    <a href="/signup" class="transition ease-in-out text-white font-bold bg-green-300 hover:bg-green-600 py-2 px-4 rounded-lg">Sing Up</a>
    <a class="nav-link" href="app.html" target="_blank" rel="noopener noreferrer">App</a>
  </div>
  <!-- menu movil -->
  <div class="bg-green-900/60 fixed top-16 right-0 left-0 bottom-0 justify-center items-center gap-4 hidden">
    <a href="/login/" class="transition ease-in-out text-white font-bold hover:bg-green-800 py-2 px-4 rounded-lg">Login</a>
    <a href="/signup" class="transition ease-in-out text-white font-bold bg-green-300 hover:bg-green-600 py-2 px-4 rounded-lg">Sing Up</a>
  </div>
</div>
`;
};

if (window.location.pathname === '/') {
  createNavHome();
};

const navBtn = navbar.children[0].children[1];

navBtn.addEventListener('click', e => {
  const menuMobile = navbar.children[0].children[3];
  if (!navBtn.classList.contains('active')) {
    navBtn.classList.add('active');
    navBtn.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />'
    menuMobile.classList.remove('hidden');
    menuMobile.classList.add('flex');
  } else {
    navBtn.classList.add('active');
    navBtn.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />'
    menuMobile.classList.add('hidden');
    menuMobile.classList.remove('flex');
  }
});
