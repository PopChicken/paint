import $ from 'jquery';
import tocbot from 'tocbot';

$(() => {
  let id = 1;
  $('.js-progress-content').children('h1').each(function() {
    const hyphenated = "frag-" + id;
    $(this).attr('id', hyphenated);
    id++;
  });
  $('.js-post-content').children('h1,h2,h3,h4,h5').each(function() {
    const hyphenated = "frag-" + id;
    $(this).attr('id', hyphenated);
    id++;
  });
  tocbot.init({
    tocSelector: '.toc',
    contentSelector: '.js-progress-content',
    hasInnerContainers: true,
    scrollEndCallback: function (e) {
        
    },
  });
});