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
 
     return $(template);
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

var findParentByClassName = function(element, targetClass) {
  //alert('findParentByClassName');
  if (element) {
        var currentParent = element.parentElement;
        while (currentParent.className != targetClass && currentParent.className !== null) {
            currentParent = currentParent.parentElement;
        }
        return currentParent;
   }
};

//Ask Raj about this...copied it.
var getSongItem = function(element) {
  //alert('getSongItem');
   switch (element.className) {
        case 'album-song-button':
        case 'ion-play':
        case 'ion-pause':
            return findParentByClassName(element, 'song-item-number');
        case 'album-view-song-item':
            return element.querySelector('.song-item-number');
        case 'song-item-title':
        case 'song-item-duration':
            return findParentByClassName(element, 'album-view-song-item').querySelector('.song-item-number');
        case 'song-item-number':
            return element;
        default:
            return;
    }  
 };

var clickHandler = function(targetElement) {
  var songItem = getSongItem(targetElement);  

  if (currentlyPlayingSong === null) {
         songItem.innerHTML = pauseButtonTemplate;
         currentlyPlayingSong = songItem.getAttribute('data-song-number');
 } else if (currentlyPlayingSong === songItem.getAttribute('data-song-number')) {
         songItem.innerHTML = playButtonTemplate;
         currentlyPlayingSong = null;
 } else if (currentlyPlayingSong !== songItem.getAttribute('data-song-number')) {
         var currentlyPlayingSongElement = document.querySelector('[data-song-number="' + currentlyPlayingSong + '"]');
         currentlyPlayingSongElement.innerHTML = currentlyPlayingSongElement.getAttribute('data-song-number');
         songItem.innerHTML = pauseButtonTemplate;
         currentlyPlayingSong = songItem.getAttribute('data-song-number');
}
    
};

var songListContainer = document.getElementsByClassName('album-view-song-list')[0];
var songRows = document.getElementsByClassName('album-view-song-item');

var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

var currentlyPlayingSong = null;

 window.onload = function() {
     // Defines the HTML that wraps into the table  (not sure whare the class comes from)
     setCurrentAlbum(albumPicasso);

   //On the entire Table elements put an event
    songListContainer.addEventListener('mouseover', function(event) {
      // The event target is the event you click on, show the 
      //console.log(event.target);
      if (event.target.parentElement.className === 'album-view-song-item') {
        event.target.parentElement.querySelector('.song-item-number').innerHTML = playButtonTemplate;
        var songItem = getSongItem(event.target);

        if (songItem.getAttribute('data-song-number') !== currentlyPlayingSong) {
          songItem.innerHTML = playButtonTemplate;
        }
      }

      
    });
    
     for (var i = 0; i < songRows.length; i++) {
             songRows[i].addEventListener('mouseleave', function(event) {
               // Revert the content back to the number
               //this.children[0].innerHTML = this.children[0].getAttribute('data-song-number');
               // #1
               var songItem = getSongItem(event.target);
               var songItemNumber = songItem.getAttribute('data-song-number');
 
               // #2
//               if (songItemNumber !== currentlyPlayingSong) {
//                   songItem.innerHTML = songItemNumber;
//               }
      });
      songRows[i].addEventListener('click', function(event) {
             // Event handler call
             clickHandler(event.target);
         });
      }
     
 };
