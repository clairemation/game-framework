// messages sent by engines
// each component has a stack of states

// register subscription on hero:

// hero:
// on hitBy event from collisionEngine (info) {
//   hero run hitByScript: {
//     switch info.target
//     case info.target === fireball
//       this.hpComponent.lower(calculate hit/damage (info.attInfo, this.defInfo));
//       control component < push < hurtComponent: {
//         init countdown
//         pause control
//         sprite < push < hurt animation
//         apply recoilAccel
//         when countdown reaches 0, pop
//       }
//   }
// }
// on hit event from collisionEngine (info){
//   hero run hitScript (info){
//     if info.target === wall
//       apply info.collisionRestitution vector to accel
//   }
// }

// fireball:
// on hit event from collisionEngine (info) {
//   fireball run collideScript: {
//     control component = collisionBehavior: {
//       init countdown
//       apply collision counterAccel
//       sprite < push < explosion animation
//       when animation finished, return instance to pool
//     }
//   }
// }