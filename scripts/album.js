// Example Album
 var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };
 
 // Another Example Album
 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

// Silverback
var silverBack = {
     title: 'The Kitty',
     artist: 'SilverBack',
     label: 'EM',
     year: '2016',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Siblings', duration: '1:01' },
         { title: 'Growing up', duration: '5:01' },
         { title: 'Finding a home', duration: '3:21'},
         { title: 'Humans', duration: '3:14' },
         { title: 'Dry vs Wet food', duration: '2:15'}
     ]
 };

// Creates a table row and its cells
 var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      //+ '  <td class="song-item-number">' + songNumber + '</td>'
      + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     var $row = $(template);
     
     var clickHandler = function() {
         // clickHandler logic
     };
     
     var onHover = function(event) {
         // Placeholder for function logic
     };
     var offHover = function(event) {
         // Placeholder for function logic
     };
     $row.find('.song-item-number').click(clickHandler);
     $row.hover(onHover, offHover);
     return $row;
 };

var setCurrentAlbum = function(album) {
     // Sets all the variables from teh designated classes/ Dom objects
     var $albumTitle = $('.album-view-title');
     var $albumArtist = $('.album-view-artist');
     var $albumReleaseInfo = $('.album-view-release-info');
     var $albumImage = $('.album-cover-art');
     var $albumSongList = $('.album-view-song-list');
 
     // Assign the various values to the variables. An object or dictionary call. 
     // Popupulate the DOM with values.
     $albumTitle.text(album.title);
     $albumArtist.text(album.artist);
     $albumReleaseInfo.text(album.year + ' ' + album.label);
     $albumImage.attr('src', album.albumArtUrl)
 
     // Sets the albumSonglist to blank.
    $albumSongList.empty();
 
     // Don't get this part how albumSongList
     for (var i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
         var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
         $albumSongList.append($newRow);
         console.log(albumSongList.innerHTML)
     }
 };

var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

var currentlyPlayingSong = null;

 $(document).ready(function() {
     // Defines the HTML that wraps into the table  (not sure whare the class comes from)
     setCurrentAlbum(albumPicasso);

     
     
 });
