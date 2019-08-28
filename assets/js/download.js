$(function() {
  var platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'mac';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'windows';
  } else if (!os && /Linux/.test(platform)) {
    os = 'linux';
  }

  var baseUrl = 'https://mirror.wazo.community/iso/.songbird/songbird-latest/';
  $('.download.' + os).show();

  $.get('https://mirror.wazo.community/iso/.songbird/songbird-latest/latest.yml', function(latest) {
    var matches = latest.match(/version: ([0-9]\.[0-9]\.[0-9])/);
    if (!matches) {
      return;
    }

    var version = matches[1];
    var macUrl = baseUrl + 'songbird-' + version + '.dmg';
    var windowsUrl = baseUrl + 'songbird%20Setup%20' + version + '.exe';
    var linuxUrl = baseUrl + 'Songbird-' + version + '.AppImage';

    $('.download-button.mac').attr('href', macUrl).removeClass('disabled');
    $('.download-button.windows').attr('href', windowsUrl).removeClass('disabled');
    $('.download-button.linux').attr('href', linuxUrl).removeClass('disabled');
  });
});
