// #1 option

var video = document.querySelector("#videoElement");
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

if (navigator.getUserMedia) {       
  navigator.getUserMedia({video: true}, handleVideo, videoError);
}
function handleVideo(stream) {
  video.src = window.URL.createObjectURL(stream);
}
function videoError(e) {
  // do something
}

// #2nd option

// window.onload = function() {

//   // Normalize the various vendor prefixed versions of getUserMedia.
//   navigator.getUserMedia = (navigator.getUserMedia ||
//                             navigator.webkitGetUserMedia ||
//                             navigator.mozGetUserMedia || 
//                             navigator.msGetUserMedia);


//   // Check that the browser supports getUserMedia.
//   // If it doesn't show an alert, otherwise continue.
//   if (navigator.getUserMedia) {
//     // Request the camera.
//     navigator.getUserMedia(
//       // Constraints
//       {
//         video: true
//       },

//       // Success Callback
//       function(localMediaStream) {
//         // Get a reference to the video element on the page.
//         var vid = document.getElementById('camera-stream');

//         // Create an object URL for the video stream and use this 
//         // to set the video source.
//         vid.src = window.URL.createObjectURL(localMediaStream);
//       },

//       // Error Callback
//       function(err) {
//         // Log the error to the console.
//         console.log('The following error occurred when trying to use getUserMedia: ' + err);
//       }
//     );

//   } else {
//     alert('Sorry, your browser does not support getUserMedia');
//   }
// }

// #3rd option

// var video = document.querySelector('video');
// navigator.mediaDevices.getUserMedia({video:true}).then(function(mediaStream){
//     window.stream = mediaStream;
//     video.src = URL.createObjectURL(mediaStream);
//     video.play();
// });