precision mediump float;
uniform vec2 resolution;
uniform float u_time;
uniform vec2 mouse;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
  vec2 st = gl_FragCoord.xy / resolution.xy;
  float fr = 45.;

  st *= resolution.xy / fr;
  vec2 ipos = floor(st);
  vec3 color = vec3(abs(sin(u_time * 2.4 * random(ipos))), 0.88, 0.85);

  gl_FragColor = vec4(color + vec3(mouse, 0.0), 1.0);
}
