
// import { useGLTF } from "@react-three/drei";

// export function Dav(props) {
//   const { nodes, materials } = useGLTF("/gltf-separate/5D FUENSANTICA GLTF.gltf");
//   return (
//     <group {...props} dispose={null} scale={.6} position={[0, .1, 0]}>
//       <group>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes["paula"].geometry}
//           material={materials.frente}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes["paula_1"].geometry}
//           material={materials.trasera}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes["paula_2"].geometry}
//           material={materials.perfil}
//         />
//       </group>
//     </group >
//   );
// }
// useGLTF.preload("/gltf-separate/5D FUENSANTICA GLTF.gltf");





// import React, { useState } from 'react';
// import { useGLTF, useTexture } from '@react-three/drei';

// export function Dav(props) {
//   const [currentTexture, setCurrentTexture] = useState(0);
//   const { nodes, materials } = useGLTF("/gltf-separate/5D FUENSANTICA GLTF.gltf");
//   const [texture1, texture2] = useTexture(['/gltf-separate/3.jpg', '/gltf-separate/4.jpg']);
//   texture1.flipY = false;
//   texture1.flipX = false;
//   texture1.encoding = 3000;
//   texture1.anisotropy = 16;
//   texture1.wrapS = 1000;
//   texture1.wrapT = 1000;
//   texture1.repeat.set(1, 1);
//   texture1.offset.set(0, 0);
//   texture1.center.set(0, 0);
//   texture1.rotation = 0;
//   texture1.matrixAutoUpdate = true;
//   texture2.flipY = false;
//   texture2.flipX = false;
//   texture2.encoding = 3000;
//   texture2.anisotropy = 16;
//   texture2.wrapS = 1000;
//   texture2.wrapT = 1000;
//   texture2.repeat.set(1, 1);
//   texture2.offset.set(0, 0);
//   texture2.center.set(0, 0);
//   texture2.rotation = 0;
//   texture2.matrixAutoUpdate = true;

//   const changeTexture = () => {
//     setCurrentTexture(currentTexture === texture1 ? texture2 : texture1);
//   }
//   return (
//     <group {...props} dispose={null} scale={.6} position={[0, .1, 0]}>
//       <group>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes["paula"].geometry}
//           material={materials.frente}
//         >
//           <meshBasicMaterial attach="material" map={currentTexture} />
//         </mesh>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes["paula_1"].geometry}
//           material={materials.trasera}
//         >
//         </mesh>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes["paula_2"].geometry}
//           material={materials.perfil}
//         />
//       </group>
//       <button onClick={changeTexture}>Change texture</button>
//     </group>
//   );
// }

// useGLTF.preload("/gltf-separate/5D FUENSANTICA GLTF.gltf");


import React, { useState } from 'react';
import { useGLTF, useTexture, Html } from '@react-three/drei';

export function Dav(props) {
  const { nodes, materials } = useGLTF("/gltf-separate/5D FUENSANTICA GLTF.gltf");
  const [texture1, texture2] = useTexture(['/gltf-separate/3.jpg', '/gltf-separate/4.jpg']);
  const [currentTexture, setCurrentTexture] = useState(texture1);

  const changeTexture = () => {
    setCurrentTexture(currentTexture === texture1 ? texture2 : texture1);
  }

  return (
    <group {...props} dispose={null} scale={.6} position={[0, .1, 0]}>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["paula"].geometry}
          material={materials.frente}
        >
          <meshBasicMaterial attach="material" map={currentTexture} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["paula_1"].geometry}
          material={materials.trasera}
        >
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["paula_2"].geometry}
          material={materials.perfil}
        />
      </group>
      <Html position={[0, 0, 0]}>
        <button onClick={changeTexture}>Cambiar textura</button>
      </Html>
    </group>
  );
}

useGLTF.preload("/gltf-separate/5D FUENSANTICA GLTF.gltf");