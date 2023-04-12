const btnImage = document.getElementById('btn-image');

if (btnImage) btnImage.addEventListener('click', (event) => handleClickBtnImage(event));

function handleClickBtnImage(event) {
  const firstSection = event.target.parentElement;
  const secondSection = firstSection?.previousElementSibling;
  firstSection?.classList.add('hide');
  secondSection?.classList.add('show');
  console.log(firstSection, secondSection);
}