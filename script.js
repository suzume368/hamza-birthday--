const button = document.getElementById('wishButton');
const response = document.getElementById('wishResponse');

button.addEventListener('click', () => {
  const wishes = [
    'Hamza bhai, aap hamesha khush raho — happy birthday! ♥',
    'Allah aapko sehat, sukoon aur kamyabi de. Ameen.',
    'Bhai, aap meri zindagi ke sab se pyare logon mein se ho. Bohat saara pyaar! ♥',
    'Aapke saare ache khwab poore hon. Happy birthday, Hamza!'
  ];
  response.textContent = wishes[Math.floor(Math.random() * wishes.length)];
});

// Show a graceful placeholder if either uploaded photo is unavailable.
document.querySelectorAll('.photo-frame img, .memory-card img').forEach((image) => {
  image.addEventListener('error', () => {
    image.hidden = true;
    const fallback = image.nextElementSibling;
    if (fallback) fallback.style.display = 'flex';
  }, { once: true });
});
