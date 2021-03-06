var camera, scene, renderer, controls;
var geometry, material, sphere;

init();
animate();
// render();

/**
 * Initialize the three.js scene with a sphere.
 */
function init() {

  // Create camera
  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
  camera.position.z = 1;

  // Create sphere
  geometry = new THREE.SphereGeometry(0.5, 50, 50);
  material = new THREE.MeshNormalMaterial();
  sphere = new THREE.Mesh( geometry, material );

  // Create scene and add the sphere to it
  scene = new THREE.Scene();
  scene.add( sphere );

  // Create renderer
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  controls = new THREE.OrbitControls( camera );
  controls.addEventListener( 'change', function() { return render(camera); } );

  render(camera);
}

/**
 * Render the scene and animate the sphere to make it rotate,
 * and update controls.
 */
function animate() {
  requestAnimationFrame( animate );
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.02;
  controls.update();
}

/**
 * Render the scene with the given camera.
 */
function render(cam) {
  renderer.render( scene, cam );
}