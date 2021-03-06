(() => {
  'use strict';

  const click = document.getElementById('click');
  const messages = document.getElementsByClassName('messages');
  var isClicked = false;

  var contents = [
    {
    src: "https://1.bp.blogspot.com/-4N2T5W6jo_o/VCIiuUHNwEI/AAAAAAAAmeo/_lyIGo3afK4/s800/animal_hiyoko.png",
    name: 'HIYOKO',
    text:'大丈夫だよ、落ち着いてね'
    },
    {
      src: "https://3.bp.blogspot.com/--IJXuiGRidY/WNir5IfLk3I/AAAAAAABC28/81L3mxcIe9EoqcK9uqCXbVxZ4YO36JzlQCLcB/s800/animal_mitsubachi.png",
      name: 'ミツ・バチコ',
      text:'はちみつでも食べてネ'
    },
    {
      src: "https://2.bp.blogspot.com/-uLsKgsN9njE/VCIix1WrktI/AAAAAAAAmfU/SloY2fZacmo/s800/animal_usagi.png",
      name: 'Mr.R',
      text:"Don't Warry. Be happy"
    },
    {
      src: "https://3.bp.blogspot.com/-n0PpkJL1BxE/VCIitXhWwpI/AAAAAAAAmfE/xLraJLXXrgk/s800/animal_hamster.png",
      name: 'ひまわりの種大好き匿名希望',
      text:'ひまわりの種を食べるでチュ'
    },
    {
      src: "https://4.bp.blogspot.com/-7DLdBODmEqc/VCIitQRzAWI/AAAAAAAAmeY/g1fjm8NqyaI/s800/animal_arupaka.png",
      name: 'あるぱかーき',
      text: '私のもふもふでぎゅっとしてあげる～'
    },
    {
      src: "https://2.bp.blogspot.com/-dvDN3SxnRWE/VCIivNhugVI/AAAAAAAAmew/sEC6XC1sGwk/s800/animal_kuma.png",
      name: 'かつてクマと呼ばれていたもの',
      text: '蜂蜜は全てを解決する。蜂蜜を食べるべし。'
    },
    {
      src: "https://1.bp.blogspot.com/-LFh4mfdjPSQ/VCIiwe10YhI/AAAAAAAAme0/J5m8xVexqqM/s800/animal_neko.png",
      name: 'Meow',
      text: 'Meooww...memememe...meow!!'
    },
    {
      src: "https://4.bp.blogspot.com/-CtY5GzX0imo/VCIixcXx6PI/AAAAAAAAmfY/AzH9OmbuHZQ/s800/animal_penguin.png",
      name: 'PenG',
      text: '群れのみんなで集まるといいと思うよ！'
    },
    {
      src: "https://2.bp.blogspot.com/-81gQBAcgSEc/VCIi95CkyYI/AAAAAAAAmhw/z9DvwU2vvmM/s800/icon_others_08.png",
      name: '象',
      text: 'There is always light behind the clouds.'
    },
  ];


  function createContent( data_src , data_name , data_text ) {
    var message = document.createElement('div');
    message.classList.add('message');
    var icon = document.createElement('div');
    icon.classList.add('icon');
    var img = document.createElement('img');
    img.setAttribute('src', data_src);
    img.setAttribute('alt', 'icon');
    var content = document.createElement('div');
    content.classList.add('content');
    var name = document.createElement('div');
    name.classList.add('name');
    name.textContent = data_name;
    var text = document.createElement('div');
    text.classList.add('text');
    text.textContent = data_text;

    //追加データ作成
    message.appendChild(icon);
    icon.appendChild(img);
    message.appendChild(content);
    content.appendChild(name);
    content.appendChild(text);

    return message;
  }

  click.addEventListener('click', function (e) {
    if (isClicked) {
      return;
    }
    isClicked = true;
    const user = createContent("https://1.bp.blogspot.com/-FfjY4DibSI4/VCIiuxKtLRI/AAAAAAAAmes/40lCg_r9U2g/s800/animal_inu.png",
      "あなた", "つらい……");
    messages[0].appendChild(user);

    (async () => {
      for(  let content_data of contents ){
        const message = createContent(content_data.src,
          content_data.name, content_data.text);
        await sleep(3000);
        messages[0].appendChild(message);
      };
    })();
  });


  function sleep(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      },time);
    })
  }



})();
