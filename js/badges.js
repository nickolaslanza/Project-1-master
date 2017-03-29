$(document).ready(function() {
  var treehouseAPI = 'https://teamtreehouse.com/nickolasteixeira.json';

  var treehouseOptions = {
    format: 'json'
  };
  
  function displayBadges(data) {
    var badgesHTML = '<h1>' + data.name + '</h1>';
    badgesHTML += '<h2>' + data.points.total + ' points on Treehouse.</h2>';
    badgesHTML += '<ul>';
    $.each(data.badges, function(i, badges){
      badgesHTML += '<li class="inline-badges">';
      badgesHTML += '<a href="' + badges.url + '" target="_blank">';
      badgesHTML += '<img src="' + badges.icon_url + '" class="badges" alt="' + badges.name + '"></a></li>';
    });
    badgesHTML += '</ul>';
    $('.badges-container').html(badgesHTML);
  }

  $.getJSON(treehouseAPI, treehouseOptions, displayBadges);

});
