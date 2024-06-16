import NavWrapper from "../component/NavWrapper"
export default function Page (){
    return(
        <>
                   <div id="wrapper">
<NavWrapper/>

      <div id="page-wrapper">
        <div id="page-inner">
           <div className="w3-center w3-margin" style={{marginBottom:"60px"}} >
            <h1>Wallet</h1>
           </div>
           <div className="w3-white w3-center " style={{borderRadius: "20px 0 20px 0"}}>
            <h1>Wallet Balances</h1>
            <div className="w3-row">
            <div className="w3-half ">
            <h3>Available Balance</h3>
            </div>
            <div className="w3-half w3-text-blue">
            <h3>N 286,656565,55</h3>
            </div>
            </div>
            <div className="w3-row">
            <div className="w3-half ">
            <h3>Earned Commission</h3>
            </div>
            <div className="w3-half w3-text-blue">
            <h3>N 286,656565,55</h3>
            </div>
            </div>
            <div className="w3-row">
            <div className="w3-half ">
            <h3>Deduction</h3>
            </div>
            <div className="w3-half w3-text-blue">
            <h3>N 28,5353,55</h3>
            </div>
            <div className="w3-center w3-text-red w3-bold" style={{fontSize:"20px",fontWeight:"bolder"}}>
               <p>Withdraw</p>
            </div>
            </div>

           </div>
         </div>
         </div>
         </div>
         
        
        </>
    )
}