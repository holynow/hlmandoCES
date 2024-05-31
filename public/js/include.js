const include = {
  meta: function () {
    document.write(`<meta charset="UTF-8" />`);
    document.write(`<meta http-equiv="X-UA-Compatible" content="IE=edge" />`);
    document.write(`<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />`);
  },
 
  styles: function () {
    document.write(`<link rel="stylesheet" href="css/reset.css">`);
    document.write(`<link rel="stylesheet" href="css/font.css">`);
    document.write(`<link rel="stylesheet" href="css/jquery.fancybox.css">`);
    document.write(`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"/>`);
    document.write(`<link rel="stylesheet" href="css/style.css">`);
  },
  scripts: function () {
    document.write(`<script src="js/jquery-2.2.4.min.js"></script>`);
    document.write(`<script src="js/jquery.fancybox.min.js"></script>`);
    document.write(`<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>`);
    document.write(`<script src="js/ui.js" defer></script>`);
  },
  footer: function () {
    document.write('<div class="footer">');
    document.write('<h2 class="copy">HL Mando <Br> HL Klemove</h2>');
    document.write('<div class="footer-inner">');
    document.write('<div class="left-area">');
    document.write('<ul class="footer-cont-list">');
    document.write('<li>21 Pangyo-ro 255beon-gil, Bundang-gu, Seongnam-si, Gyeonggi-do, Korea</li>');
    document.write('<li>TEL 02-6244-2114</li>');
    document.write('<li>FAX 02-6244-2997</li>');
    document.write('</ul>');
    document.write('<ul class="footer-cont-list">');
    document.write('<li>29930 Hudson Drive Novi, MI 48377, USA</p>');
    document.write('<li>TEL 1-248-668-4300 </p>');
    document.write('<li>FAX 1-248-668-4301</p>');
    document.write('</ul>');
    document.write('</div> ');
    document.write('<div class="right-area">');
    document.write('<div class="btn-wrap">');
    document.write('<button type="button" class="site-map"><span>FAMILY SITE</span></button>');
    document.write('</div>');
    document.write('<ul class="site-map-list">');
    document.write('<li><a href="https://www.instagram.com/hl__world/" target="_blank">Instagram</a></li>');
    document.write('<li><a href="https://www.facebook.com/hlworld/?ref=nf&hc_ref=ARTEzaD5GPmRGfheMV4mtLY_m4sHMtqNYhFhpmQwK_U5ZbQFWoxVj6YyBB9ZVQzyips&__xts__[0]=68.ARAWo7TJsHQZteOtxg6q8SxT4rn73VKvE160yjadTuE6A6fR3ZbDgscK4MxeL6azMCV881eTaB02nIf956D6abDmWA93sAsN1UGCMNLW972iUirpIBE24lQWRn5m0zA5fpLsRxKQX85eS58jSbC79c_kA82ZtE3ipDANo9TVXv0WNvZdfqHMkbP_ia4KC-XElBHEGauqZwNYfZim_JHKJJQnJzjMLHVlm2iOhuKqEeOpRVfV6qAIAh15sUZtGPFFbNHD3Ja3R4DTmlUlQIeJj7jni1zIw7VpGbNSggtxppY6zn3dPedCi2Hl9sROKiOP8w" target="_blank">Facebook</a></li>');
    document.write('<li><a href="https://kr.linkedin.com/company/hlmando?trk=public_post_reshare_feed-actor-image" target="_blank">Linkedin</a></li>');
    document.write('</ul>');
    document.write('<p>Copy right 2022 HL Mando Corp.</p>');
    document.write('<p>ALL RIGHTS RESERVED</p>');
    document.write('</div>');
    document.write('</div>');
    document.write('</div>');
    document.write('</div>');
  }
};
