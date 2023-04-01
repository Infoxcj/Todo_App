const div = document.querySelector('#notification');

export const createNotification = (isError, message) => {
  if (isError) {
    div.innerHTML = `
      <div class="max-w-7xl mx-auto px-4 flex justify-center">
        <p class="bg-yellow-400 p-4 w-3/12 rounded-lg font-bold">${message}</p>
      </div>
    `
  } else {
    div.innerHTML = `
      <div class="max-w-7xl mx-auto px-4 flex justify-center">
        <p class="bg-green-500 p-4 w-3/12 rounded-lg font-bold">${message}</p>
      </div>
    `
  }
};