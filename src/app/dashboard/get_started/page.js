import NavWrapper from "../component/Header/NavWrapper"
export default function Page(){
    return(
        <>
        <div id="wrapper">
<NavWrapper/>

      <div id="page-wrapper">
        <div id="page-inner">
     <div className="w3-container">
        <div className="w3-row-padding">
        <div className="w3-half w3-center  w3-container">
          <img src="../../about.jpg" width="200px"/> 
          <div className="">
          <a href="" className="w3-center">About us URL</a>
            </div> 
              
          </div>
          
          <div className="w3-half w3-center w3-container">
          <img src="../../getstarted.jpg" /> 
          <div className="">
          <a href="" className="w3-center ">Getting Started URL</a>
            </div> 
           
          </div>

        </div>
          <div className="w3-row-padding">
          <div className="w3-half w3-center w3-container">
              <img src="../../news.jpg" />
              <div className="">
              <a href="" className="w3-center">Video Blog URL</a>
                </div>  
              
           <div >
    
      </div>
            </div>
          <div className="w3-half w3-center w3-container">
<img height="200px" width="200px" src="https://img.freepik.com/free-photo/marketing-ideas-share-research-planning-concept_53876-127431.jpg?size=626&ext=jpg&ga=GA1.1.2000470020.1693748519&semt=ais" />
<div  className="">
      <a href="" className="w3-center">Marketing Tool URL</a>
      </div>
      </div>
          </div>
      </div>
      </div>
    </div>
    </div>
        </>
    )
}