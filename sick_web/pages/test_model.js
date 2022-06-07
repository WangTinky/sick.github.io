let N = 2300; // 總人口
let infe = 2; // 單日確診人數
let reco = 15; // (累計確診人數)
let vacc = 560; // 有防護力人數(總人口*打疫苗比例*疫苗防護力)


let I0 = infe/N; // 單日確診人數/總人口
let R = 1.3/230 +56/230; // (累計確診人數-單日確診人數+有防護力人數)/總人口

let k = 3; // 病毒可傳染天數
let Ik = I0*k; // 可傳染天數的染疫數
let Sk = 1 - (Ik+R); // 可被感染的人數/總人口

let Xk = [Sk,Ik,R]; // initial

// # -----
let alp = 0.1513; // Least Square 算出的curve的成長率
let R0k = (1+(k*alp))/Sk; // 帶公式反推R0值

// # ---建構微分方程---
function ode_func(X){
    let dS = -R0k*X[0]*X[1]; 
    let dI = R0k*X[0]*X[1] - X[1];
    let dR = X[1];
    let dX = [dS,dI,dR];
    return dX
}

// # Time
let Tn = 3000 // 時間長
let T = [];
for ( ii = 0 ; ii < Tn+1 ; ii++ ) {
    T.push(0.01*ii);
}
//[0.01*ii for ii in range(0, Tn+1)];
document.getElementById("test1").innerHTML = "T參數：" + T;


// Xt = odeint(ode_func, Xk, T) # 解方程

// Stk = np.array(Xt[:,0])*N + vacc # 解的第一個colume 代表 S
// Itk = np.array(Xt[:,1])*(N/3) # 解的第二個colume 代表 I
// Rtk = np.array(Xt[:,2])*N - vacc # 解的第三個colume 代表 R


// T = np.array(T) # 把時間變成 array
// Tk = T*k # 時間需要乘回來(non dimension let k days be 1 day)

