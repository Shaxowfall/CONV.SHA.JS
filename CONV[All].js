// ACONV+DECONV+MERGE || An All In One Function That Contains: ACONV(Character to Identifier+CharCode), DECONV(ACONV(Output) to CharCode), MERGE(Reverts Character Codes to ASCII/Alpha)
// Version: 1.0 || Stage: Testing || Created By: Shaxowfall
/*
- ACONV(dAtA,variant) 
-- dAtA = "Inputted String" |
--- variant = Controls The ACONV Output Method | 
(0=ASCII-CharCode Conversion(Output Type: Array),1=ASCII-CharCode Merged With Identifier(Output Type: String) */
((CONV)=>{return(MERGE=(_)=>{try{return _.map(_=>String.fromCharCode(_)).join('')}catch{}},DECONV=(dAtA)=>{try{exp=/(...)/g,lib='abcdefghijklmnopqrstuvwxyz+-=&%#@*^!$></',Vcheck=dAtA.constructor;return(Vcheck.name=='String'&&dAtA.includes('1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'))?(()=>{for(arc=dAtA,i=0,libc=lib.length;i<libc;i++){arc=arc.replaceAll(lib[i],'0')};return(arc.split(exp).filter(arc=>arc))})():(Vcheck.name!=='Number')?(()=>{return('Error: Input Is Not Able To Be Processed')})():dAtA.toString().split(exp).filter(dAtA=>dAtA)}catch(Fe){(()=>{return('A Fatal Error Occurred: '+Fe)})()}},ACONV=(dAtA,variant)=>{(variant)?'->':variant=0;var ea=[],lib='abcdefghijklmnopqrstuvwxyz+-=&%#@*^!$></',cc=dAtA.constructor.name;for(i=0,b=1,c=(cc=='Array' || cc=='Object')?console.log(cc+' Cannot Be Converted'):dAtA.split('');i<(()=>{try{return c.length}catch(e){console.log(e)}})();i++,b++){ea.push(c.at(i,b).charCodeAt())}return(variant>=1)?(()=>{for(_V=ea,i=0,ii=lib.length;i<ii;i++){(ea[i]<100)?_V[i]=lib[Math.floor(Math.random()*lib.length)]+_V[i]:''};return _V.join('')})():ea})})()
