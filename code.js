function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
}



var x1=784;
var y1=376;
var x2=884;
var y2=376;
let g=0.1;
let v1=0;
let v2=0;
let m1=10;
let m2=10;
let angle1=3.141592/2;
let angle2=3.141592/2;
let lines=[];
var x1=windowWidth/2+100*sin(angle1);
var y1=windowHeight/2+100*cos(angle1);
var x2=x1+100*sin(angle2);
var y2=y1+100*cos(angle2);

function draw() {
	background(255);
	line(x1,y1,windowWidth/2,windowHeight/2)
	line(x1,y1,x2,y2)
	ellipse(x1, y1, 5*Math.pow(m1,0.5), 5*Math.pow(m1,0.5));
	ellipse(x2, y2, 5*Math.pow(m2,0.5), 5*Math.pow(m2,0.5));
	
	x1=windowWidth/2+100*sin(angle1)
	y1=windowHeight/2+100*cos(angle1)
	
	lines.push([x2,y2,x1+100*sin(angle2),y1+100*cos(angle2)]);
	for (let i = 0; i < lines.length; i++) {
		line(lines[i][0],lines[i][1],lines[i][2],lines[i][3]);
	}
	if (lines.length>1000){
		lines.splice(0,1)
	}
	
	x2=x1+100*sin(angle2)
	y2=y1+100*cos(angle2)
	
	
	
	a1=(-g*(2*m1+m2)*sin(angle1)-m2*g*sin(angle1-2*angle2)-2*sin(angle1-angle2)*m2*(Math.pow(v2,2)*100+Math.pow(v1,2)*100*cos(angle1-angle2)))/(100*(2*m1+m2-m2*cos(2*angle1-2*angle2)))
	v1+=a1
	angle1+=v1
	
	a2=(2*sin(angle1-angle2)*(Math.pow(v1,2)*100*(m1+m2)+g*(m1+m2)*cos(angle1)+Math.pow(v2,2)*100*m2*cos(angle1-angle2)))/(100*(2*m1+m2-m2*cos(2*angle1-2*angle2)))
	v2+=a2
	angle2+=v2
	
	//Equation from: https://www.myphysicslab.com/pendulum/double-pendulum-en.html
