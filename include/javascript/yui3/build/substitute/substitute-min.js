/*
 Copyright (c) 2010, Yahoo! Inc. All rights reserved.
 Code licensed under the BSD License:
 http://developer.yahoo.com/yui/license.html
 version: 3.3.0
 build: 3167
 */
YUI.add("substitute",function(g){var b=g.Lang,d="dump",f=" ",c="{",e="}",a=function(A,l,t,h){var q,p,n,y,x,z,w=[],m,r,u=A.length;for(;;){q=A.lastIndexOf(c,u);if(q<0){break;}p=A.indexOf(e,q);if(q+1>=p){break;}m=A.substring(q+1,p);y=m;z=null;n=y.indexOf(f);if(n>-1){z=y.substring(n+1);y=y.substring(0,n);}x=l[y];if(t){x=t(y,x,z);}if(b.isObject(x)){if(!g.dump){x=x.toString();}else{if(b.isArray(x)){x=g.dump(x,parseInt(z,10));}else{z=z||"";r=z.indexOf(d);if(r>-1){z=z.substring(4);}if(x.toString===Object.prototype.toString||r>-1){x=g.dump(x,parseInt(z,10));}else{x=x.toString();}}}}else{if(!b.isString(x)&&!b.isNumber(x)){x="~-"+w.length+"-~";w[w.length]=m;}}A=A.substring(0,q)+x+A.substring(p+1);if(!h){u=q-1;}}for(q=w.length-1;q>=0;q=q-1){A=A.replace(new RegExp("~-"+q+"-~"),c+w[q]+e,"g");}return A;};g.substitute=a;b.substitute=a;},"3.3.0",{optional:["dump"]});
