function d(t){let a={};for(let r in t){let e=t[r],m=e.reduce((g,c)=>g+c.value,0)/e.length;a[r]=m;}return a}function u(t,a){return console.log({data:t,config:a}),{}}var n=class{constructor(a,r){if(r&&a)this.data=a,this.config=r,this.average=d(a),this.distribution=u(a,r.bins);else throw new Error("Invalid data or config")}draw(){}},o=class extends n{draw(){}},i=class extends n{draw(){}};function z(t,a,r){let e;r==="SVG"?e=new o(t,a):e=new i(t,a),e.draw();}function E(){console.log("Hello zxy!");}export{z as draw,E as helloWorld};//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map