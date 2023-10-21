const fragmentShader: string = `
varying float vDistance;

void main() {
  vec3 color = vec3(.30, 0.3, 0.6);
  float strength = distance(gl_PointCoord, vec2(0.5));
  strength = 1.0 - strength;
  strength = pow(strength, 3.0);

  color = mix(color, vec3(0.4, 0.3, 0.02), vDistance * 0.52);
  color = mix(vec3(0.0), color, strength);
  gl_FragColor = vec4(color, strength);
}
`

export default fragmentShader;