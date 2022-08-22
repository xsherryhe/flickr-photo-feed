
function enablePrevNextArrows() {
  console.log('called')
  document.querySelectorAll('.arrow').forEach(arrow => {
    arrow.addEventListener('click', changePhotos);
  })
}
document.addEventListener('turbo:load', () => enablePrevNextArrows());

function changePhotos(e) {
  const photos = document.querySelectorAll('.photo'),
        currId = Number(document.querySelector('.photo:not(.hidden)').id.slice(5)),
        upcomingId = currId + 1 * (e.target.classList.contains('previous') ? -1 : 1);

  photos.forEach(photo => photo.classList.add('hidden'));
  document.querySelectorAll('.arrow').forEach(arrow => arrow.classList.add('hidden-with-space'));

  document.querySelector('#photo' + String(upcomingId)).classList.remove('hidden');
  if(upcomingId > 0) 
    document.querySelector('.arrow.previous').classList.remove('hidden-with-space');
  if(upcomingId < photos.length - 1) 
    document.querySelector('.arrow.next').classList.remove('hidden-with-space');
}
