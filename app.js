const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jane Mary',
    age: 28,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/3.jpg'
  },
  {
    name: 'Mike James',
    age: 30,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  },
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
      <ul>
        <li>Name: ${currentProfile.name}</li>
        <li>Age: ${currentProfile.age}</li>
        <li>Location: ${currentProfile.location}</li>
        <li>Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
    `;

    document.getElementById('imageDisplay').className = 'image is-128x128';
    document.getElementById('imageDisplay').innerHTML = `
      <img class="is-rounded" src="${currentProfile.image}" alt="${currentProfile.name} Profile Picture">
    `;
  } else {
    // No more profiles
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ?
      { value: profiles[nextIndex++], done: false } :
      { done: true }
    }
  };
}