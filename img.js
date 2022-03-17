const input = document.querySelector('input#img');
const preview = document.querySelector('.preview');

function updateImageDisplay() {
  while(preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  const curFiles = input.files;
  if(curFiles.length === 0) {
    const para = document.createElement('p');
    para.textContent = 'No files currently selected for upload';
    preview.appendChild(para);
  } else {
    const list = document.createElement('ol');
    preview.appendChild(list);

    for(const file of curFiles) {      
      if(validFileType(file)) {
        const image = document.createElement('img');
        image.src = URL.createObjectURL(file);
        image.classList.add('profile');
        const proDefault = document.querySelector('.account svg');
        const account = document.querySelector('.account');
        account.removeChild(account.children[0]);
        account.appendChild(image);
        document.querySelector('button.btn_name').click();
        document.querySelector('.getImage').classList.add('off');
        document.querySelector('.getManager').classList.remove('off');
      }
    }
  }
}

const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon"
];

function validFileType(file) {
  return fileTypes.includes(file.type);
}

input.addEventListener('change', updateImageDisplay);