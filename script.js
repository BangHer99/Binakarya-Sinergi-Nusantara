


const fname = document.getElementById('fname');
const lname = document.getElementById('gmail');
const msg = document.getElementById('msg');
const submit = document.getElementById('submit');


submit.addEventListener('submit',(e)=>{
    e.preventDefault();
 

    Email.send({
        SecureToken : "35fed31c-090e-4781-9548-21b8ddc54817", //add your token here
        To : document.getElementById("gmail").value, 
        From : "binakaryasinerginusantara@gmail.com",
        Subject : "PT Binakarya Sinergi Nusantara",
        Body : "Name : " + document.getElementById("fname").value
              +"<br/> Email : " + document.getElementById("gmail").value //"im Interested with your product"
              +"<br/> Message : " + document.getElementById("msg").value
    }).then(
      message => alert("Success Sent Messages")
    );
});
  
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0';
    } else {
        sidebar.style.left = '-250px';
    }
}
// document.addEventListener('DOMContentLoaded', function() {
//     jsPlumb.ready(function() {
//       var instance = jsPlumb.getInstance({
//         Endpoint: ["Dot", {radius: 2}],
//         Connector:"StateMachine",
//         HoverPaintStyle: {stroke: "#1e8151", strokeWidth: 2 },
//         ConnectionOverlays: [
//           ["Arrow", {
//             location: 1,
//             id: "arrow",
//             length: 14,
//             foldback: 0.8
//           }],
//           ["Label", { label: " ", id: "label", cssClass: "aLabel" }]
//         ],
//         Container: "flowchart"
//       });
  
//       instance.registerConnectionType("basic", { anchor:"Continuous", connector:"StateMachine" });
  
//       var windows = jsPlumb.getSelector(".statemachine-demo .w");
  
//       instance.draggable(windows);
  
//       instance.bind("connection", function (info) {
//         info.connection.getOverlay("label").setLabel(info.connection.id);
//       });
  
//       instance.connect({ source: "window1", target: "window2", type:"basic" });
//       instance.connect({ source: "window1", target: "window3", type:"basic" });
//       instance.connect({ source: "window2", target: "window4", type:"basic" });
//       instance.connect({ source: "window3", target: "window4", type:"basic" });
//     });
//   });
  
// document.addEventListener("DOMContentLoaded", function() {
//     var gallery = document.querySelector('.interview');
//     var galleryTop = gallery.getBoundingClientRect().top;
  
//     function checkGallery() {
//       if (galleryTop - window.innerHeight < 0) {
//         gallery.classList.add('show');
//         var imageContainers = document.querySelectorAll('.interview-img');
//         imageContainers.forEach(function(container, index) {
//           setTimeout(function() {
//             container.classList.add('slide-in');
//           }, index * 5); // Menambahkan jeda antara setiap animasi untuk efek slide-in yang bertahap
//         });
//         window.removeEventListener('scroll', checkGallery);
//       }
//     }
  
//     window.addEventListener('scroll', checkGallery);
//   });
  