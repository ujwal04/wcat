const os=require("os");
// //returns the underlying architecture
// let mySystemArch=os.arch();
// console.log(mySystemArch);
// //returns info on the cpus
// let myCpuInfo=os.cpus();
// console.log(myCpuInfo);
// //Returns the host name of the os as a string
// let hostName=os.hostname();
// console.log(hostName);
console.log(os.release());
console.log(os.platform());
console.log(os.type());
