import $ from 'jquery';
import axios from 'axios';

$(() => {
  axios.post('https://analytics.jnn.icu/post/views', {
    'u': document.URL
  }).then((resp) => {
    // console.debug(resp)
    $('.post-views').removeAttr('style');
    $('.post-views-count').text(resp.data.views + 1)
  }).catch(() => {
    console.warn('fail to fetch post views');
  });
});