export default function main() {
  // Content script for one.dat.com
  console.warn('Content script loaded on one.dat.com!');

  // Пример: добавить стили или функциональность на страницу
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded on one.dat.com');

    // Здесь можно добавить ваш код для взаимодействия со страницей
    // Например:
    // const element = document.querySelector('.some-class');
    // if (element) {
    //   element.style.backgroundColor = 'yellow';
    // }
  });
  return () => { /* cleanup */ }
}


