// events are published only by engines, subscribed to only by script (action) components

// only message engine can send a targeted message to any component or entity

// entity contains only a stack of states
// entity's only action is to change its state
// states are generic - entities can share a state (e.g. hurt), passing in context if nec.
// states contain only components
// components are generic - entities can share a component, passing in context if nec.
// components can be common between different states, many will be

// no component can act directly on another



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