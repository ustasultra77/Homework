'use strict';
function showMessage() {
    alert ( 'Введите слово или нажмите Отмена: ')
}

showMessage();

document.cookie = 'value=words';
console.log(document.cookie);

function setCookie(name, value, options = {}) {

    options = {
      path: '/',
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
  }
  
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };
  console.log(document.cookie);

  let word = ['qqq', 'zzz', 'eee'];
  word.push('aaa');
  
  console.log(word.push);

  
 word.includes(item, 0);
 console.log(word.includes(item));