import './styles/style.scss';

//* Assets
import reactImg from './assets/react-img.png';
import vueImg from './assets/vue-img.jpeg';
import angularImg from './assets/angular-img.webp';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <div class="container">
    <div class="panel "
      style="background-image: url(${reactImg})">
      <h3 class="panel__title">React</h3>
    </div>
    <div class="panel "
      style="background-image:url(${vueImg})">
      <h3 class="panel__title">Vue</h3>
    </div>
    <div class="panel "
      style="background-image:url(${angularImg})">
      <h3 class="panel__title">Angular </h3>
    </div>
  </div>
`;

const panels = document.querySelectorAll<HTMLDivElement>('.panel');

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
};

window.onload = () => {
  panels.forEach((item) => {
    item.addEventListener('click', () => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      } else {
        removeActiveClasses();
        item.classList.add('active');
      }
    });
  });
};
