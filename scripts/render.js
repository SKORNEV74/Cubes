$(function () {
	
	// Scene, camera, visualisator

	var scene = new THREE.Scene();

	var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

	var renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(0xEEEEEE);
	renderer.setSize(window.innerWidth, window.innerHeight);

	// Helper axes

	var axes = new THREE.AxesHelper( 20 );
	scene.add(axes);

	// Cubes and spheres

	var cubeGeometry1 = new THREE.CubeGeometry(4,4,4);
	var cubeMaterial1 = new THREE.MeshBasicMaterial({color: 0x000000, wireframe: true});
	var cube1 = new THREE.Mesh(cubeGeometry1,cubeMaterial1);
	scene.add(cube1);

	var cubeGeometry2 = new THREE.CubeGeometry(4,4,4);
	var cubeMaterial2 = new THREE.MeshBasicMaterial({color: 0x000000, wireframe: true});
	var cube2 = new THREE.Mesh(cubeGeometry2,cubeMaterial2);
	cube2.rotation.x = 1.18;
	cube2.rotation.y = 1;
	cube2.rotation.z = 1;
	cube2.position.x = 3;
	scene.add(cube2);

	var cubeGeometry3 = new THREE.CubeGeometry(4,4,4);
	var cubeMaterial3 = new THREE.MeshBasicMaterial({color: 0x000000, wireframe: true});
	var cube3 = new THREE.Mesh(cubeGeometry3,cubeMaterial3);
	cube3.rotation.x = 1.5;
	cube3.rotation.y = 1.5;
	cube3.rotation.z = 1;
	cube3.position.x = -6;
	cube3.position.z = 5;
	scene.add(cube3);


	var sphereGeometry1 = new THREE.SphereGeometry(0.125,20,20);
	var sphereMaterial1 = new THREE.MeshBasicMaterial({color: 0xff0000});
	var sphere1 = new THREE.Mesh(sphereGeometry1,sphereMaterial1);
	sphere1.position.x = 2;
	sphere1.position.y = 2;
	sphere1.position.z = 2;
	scene.add(sphere1);

	var sphereGeometry2 = new THREE.SphereGeometry(0.125,20,20);
	var sphereMaterial2 = new THREE.MeshBasicMaterial({color: 0x00ff00});
	var sphere2 = new THREE.Mesh(sphereGeometry2,sphereMaterial2);
	sphere2.position.x = -2;
	sphere2.position.y = 2;
	sphere2.position.z = 2;
	scene.add(sphere2);

	var sphereGeometry3 = new THREE.SphereGeometry(0.125,20,20);
	var sphereMaterial3 = new THREE.MeshBasicMaterial({color: 0x0000ff});
	var sphere3 = new THREE.Mesh(sphereGeometry3,sphereMaterial3);
	sphere3.position.x = 2;
	sphere3.position.y = 2;
	sphere3.position.z = -2;
	scene.add(sphere3);

	var sphereGeometry4 = new THREE.SphereGeometry(0.125,20,20);
	var sphereMaterial4 = new THREE.MeshBasicMaterial({color: 0xffff00});
	var sphere4 = new THREE.Mesh(sphereGeometry4,sphereMaterial4);
	sphere4.position.x = -2;
	sphere4.position.y = 2;
	sphere4.position.z = -2;
	scene.add(sphere4);

	var sphereGeometry5 = new THREE.SphereGeometry(0.125,20,20);
	var sphereMaterial5 = new THREE.MeshBasicMaterial({color: 0xff00ff});
	var sphere5 = new THREE.Mesh(sphereGeometry5,sphereMaterial5);
	sphere5.position.x = 2;
	sphere5.position.y = -2;
	sphere5.position.z = 2;
	scene.add(sphere5);

	var sphereGeometry6 = new THREE.SphereGeometry(0.125,20,20);
	var sphereMaterial6 = new THREE.MeshBasicMaterial({color: 0x00ffff});
	var sphere6 = new THREE.Mesh(sphereGeometry6,sphereMaterial6);
	sphere6.position.x = -2;
	sphere6.position.y = -2;
	sphere6.position.z = 2;
	scene.add(sphere6);

	var sphereGeometry7 = new THREE.SphereGeometry(0.125,20,20);
	var sphereMaterial7 = new THREE.MeshBasicMaterial({color: 0xff0000});
	var sphere7 = new THREE.Mesh(sphereGeometry7,sphereMaterial7);
	sphere7.position.x = 2;
	sphere7.position.y = -2;
	sphere7.position.z = -2;
	scene.add(sphere7);

	var sphereGeometry8 = new THREE.SphereGeometry(0.125,20,20);
	var sphereMaterial8 = new THREE.MeshBasicMaterial({color: 0x0000ff});
	var sphere8 = new THREE.Mesh(sphereGeometry8,sphereMaterial8);
	sphere8.position.x = -2;
	sphere8.position.y = -2;
	sphere8.position.z = -2;
	scene.add(sphere8);

	var sphereGeometry9 = new THREE.SphereGeometry(0.125,20,20);
	var sphereMaterial9 = new THREE.MeshBasicMaterial({color: 0xff0000});
	var sphere9 = new THREE.Mesh(sphereGeometry9,sphereMaterial9);
	sphere9.position.x = 2.81;
	sphere9.position.y = 1.93 * Math.sqrt(3);
	sphere9.position.z = -0.74;
	scene.add(sphere9);

	var sphereGeometry10 = new THREE.SphereGeometry(0.125,20,20);
	var sphereMaterial10 = new THREE.MeshBasicMaterial({color: 0x00ff00});
	var sphere10 = new THREE.Mesh(sphereGeometry10,sphereMaterial10);
	sphere10.position.x = 3.21;
	sphere10.position.y = -1.95 * Math.sqrt(3);
	sphere10.position.z = 0.73;
	scene.add(sphere10);

	var sphereGeometry11 = new THREE.SphereGeometry(0.125,20,20);
	var sphereMaterial11 = new THREE.MeshBasicMaterial({color: 0x0000ff});
	var sphere11 = new THREE.Mesh(sphereGeometry11,sphereMaterial11);
	sphere11.position.x = 1.01;
	sphere11.position.y = 1.59;
	sphere11.position.z = 2.33;
	scene.add(sphere11);

	var sphereGeometry12 = new THREE.SphereGeometry(0.125,20,20);
	var sphereMaterial12 = new THREE.MeshBasicMaterial({color: 0xffff00});
	var sphere12 = new THREE.Mesh(sphereGeometry12,sphereMaterial12);
	sphere12.position.x = 5;
	sphere12.position.y = -1.57;
	sphere12.position.z = -2.32;
	scene.add(sphere12);

	var sphereGeometry13 = new THREE.SphereGeometry(0.125,20,20);
	var sphereMaterial13 = new THREE.MeshBasicMaterial({color: 0xff00ff});
	var sphere13 = new THREE.Mesh(sphereGeometry13,sphereMaterial13);
	sphere13.position.x = 4.36;
	sphere13.position.y = -0.42;
	sphere13.position.z = 3.1;
	scene.add(sphere13);

	var sphereGeometry14 = new THREE.SphereGeometry(0.125,20,20);
	var sphereMaterial14 = new THREE.MeshBasicMaterial({color: 0x00ffff});
	var sphere14 = new THREE.Mesh(sphereGeometry14,sphereMaterial14);
	sphere14.position.x = -0.17;
	sphere14.position.y = -1.35;
	sphere14.position.z = -0.1;
	scene.add(sphere14);

	var sphereGeometry15 = new THREE.SphereGeometry(0.125,20,20);
	var sphereMaterial15 = new THREE.MeshBasicMaterial({color: 0xff0000});
	var sphere15 = new THREE.Mesh(sphereGeometry15,sphereMaterial15);
	sphere15.position.x = 1.65;
	sphere15.position.y = 0.4;
	sphere15.position.z = -3.12;
	scene.add(sphere15);

	var sphereGeometry16 = new THREE.SphereGeometry(0.125,20,20);
	var sphereMaterial16 = new THREE.MeshBasicMaterial({color: 0x00ff00});
	var sphere16 = new THREE.Mesh(sphereGeometry16,sphereMaterial16);
	sphere16.position.x = 6.13;
	sphere16.position.y = 1.38;
	sphere16.position.z = 0.10;
	scene.add(sphere16);

	var sphereGeometry17 = new THREE.SphereGeometry(0.125,20,20);
	var sphereMaterial17 = new THREE.MeshBasicMaterial({color: 0x0000ff});
	var sphere17 = new THREE.Mesh(sphereGeometry17,sphereMaterial17);
	sphere17.position.x = -3.98;
	sphere17.position.y = 0.25;
	sphere17.position.z = 2.22;
	scene.add(sphere17);

	// Camera position
			
	camera.position.x = -1.5;	// -1.5
	camera.position.y = 12;	// 12
	camera.position.z = 4;	// 4
	camera.lookAt(scene.position);

	// Changes

	function renderScene() {
				
		/* 
			There we make all functional
		*/

		requestAnimationFrame(renderScene);
		renderer.render(scene, camera);
	}

	// Rendering

	$("#WebGL-output").append(renderer.domElement);
	renderScene();
});