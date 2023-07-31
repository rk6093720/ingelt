import React from 'react'

const Ingelt = () => {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div>
        {/* first step of navbar  */}
         <div className='box' style={{display:'flex',border:"1px solid black",backgroundColor:"#051c45", width:'100%', height:"100px"}}>
             <div className='left' style={{width:"40%"}}>
                <img style={{width:"100px", height:"90px", marginTop:"5px"}} src="https://cdn.dribbble.com/users/15679704/avatars/normal/a0c0395a922cc4b766ad88e2c268f22a.jpg?1680117795" alt="" />
             </div>
             <div className='right' style={{width:"60%"}}>

             </div>

         </div>
         {/* second work */}
         <div className="secondwork" style={{display:'flex', justifyContent:"space-around"}}>
            <div className='secondworkpart1'>
            <div className="heading" style={{width:"450px",marginLeft:"120px"}}>
                <h1>Start Your IELTS Preparation And Get Desire Bands</h1>
            </div>
            <div className="list" style={{width:"400px", marginLeft:"140px"}}>
                <ul>
                    <li>Get access to IELTS Centralised Library</li>
                    <li>British Council Certified Teacher</li>
                </ul>
            </div>
             {/* I am making login design */}
            <div className="login" style={{width:"400px", height:"300px", borderRadius:"50px",marginTop:"5px", marginLeft:"150px",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                 <div className="first" style={{width:"90%", marginTop:"35px",marginLeft:"15px", display:"flex", justifyContent:"space-between",}}>
                    <div>Start</div>
                    <div>Fill Details</div>
                    <div>Confirm</div>
                 </div>
                 <div className="loginheading" style={{ width:"90%", height:"44px"}}>
                    <h1>Free IELTS Classes</h1>
                 </div>
                 <div className='input' style={{
                    width:"90%"
                 }}>
                    <input style={{width:"90%",height:"30px", fontSize:"14px",boxShadow:" rgba(149, 157, 165, 0.2) 0px 8px 24px;",borderRadius:"10px",marginLeft:"24px",marginTop:"5px"}} type="text"
                    placeholder='enter your name' />
                 </div>
                 <div className='phonenumber' style={{display:'flex', justifyContent:"space-around"}}>
                      <div className="flag" style={{display:'flex', justifyContent:"space-between",marginTop:"15px"}}>
                        <div>
                        <img style={{width:"30px",height:"30px"}} src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" alt="" />
                        </div>  
                        <select style={{width:"50px",height:"30px"}}>
                            <option value="+91"> +91
                            </option>
                        </select>
                      </div>
                      <div className="number">
                          <input style={{width:"90%",height:"30px", fontSize:"14px",boxShadow:" rgba(149, 157, 165, 0.2) 0px 8px 24px;",borderRadius:"10px",marginLeft:"5px",marginTop:"15px"}} type="number"
                          placeholder='enter your phone number' />
                      </div>
                 </div>
                 <div className='loginbutton'   >
                   <button style={{ width:"85%", height:"30px",marginTop:"15px", backgroundColor:"#051c45", color:"white",borderRadius:"10px"}}>Continue</button>
                 </div>
                 <div className="textoflogin" style={{width:"400px",height:"20px"}}>
                   <p> By continuing, you agree to our Term of services & Privacy policy </p>
                 </div>
            </div>
            </div>
            <div className="secondworkpart2" style={{ width:"500px", height:"500px"}}>
                  <div className="secondworkimage" style={{marginTop:"15px"}}>
                    <img style={{width:"90%", height:"90%"}} src="https://cdn.dribbble.com/users/15679704/avatars/normal/a0c0395a922cc4b766ad88e2c268f22a.jpg?1680117795" alt="" />
                  </div>
            </div>

            
         </div>
         {/* third work  */}
         <div className="thirdwork" style={{width:"90%", height:"25%", display:'flex', justifyContent:"space-around",margin:"auto",marginTop:"15px"}}>
            <div className='third' style={{border:"1px solid black", width:"30%", height:"20%",backgroundColor:"#051c45",borderRadius:"50px", color:"white"}}>
                <div>
                <img src="https://cdn.dribbble.com/users/15679704/avatars/normal/a0c0395a922cc4b766ad88e2c268f22a.jpg?1680117795" alt="" />
                </div>
                  <p>Free IELTS Modules</p>
                  <p>20,000+ Listed Properties  across 5 countries.</p>
            </div>
            <div style={{border:"1px solid black", width:"30%", height:"90%",backgroundColor:"#051c45",color:"white", borderRadius:"50px"}}>
            <div>
                <img src="https://cdn.dribbble.com/users/15679704/avatars/normal/a0c0395a922cc4b766ad88e2c268f22a.jpg?1680117795" alt="" />
                </div>
                  <p>Free IELTS Modules</p>
                  <p>20,000+ Listed Properties  across 5 countries.</p>
            </div>
            <div style={{border:"1px solid black", width:"30%", height:"90%",backgroundColor:"#051c45",color:"white",borderRadius:"50px"}}>
            <div>
                <img src="https://cdn.dribbble.com/users/15679704/avatars/normal/a0c0395a922cc4b766ad88e2c268f22a.jpg?1680117795" alt="" />
                </div>
                  <p>Free IELTS Modules</p>
                  <p>20,000+ Listed Properties  across 5 countries.</p>
            </div>
         </div>
         {/* 4th work  */}
         <div className="4thwork" style={{ display:"flex", border:"1px solid black", width:"98%", height:"740px",borderRadius:"50px",margin:'auto',marginTop:"15px",backgroundColor:"#17164d",color:'white', justifyContent:"space-around"}}>
              <div className="left4thwork" style={{width:"400px", height:"600px"}}>
                <img style={{width:"400px" , height:'100%', marginLeft:"104px", marginTop:"139px"}} src="https://media.licdn.com/dms/image/D4D22AQFjLOkbbAZ0XQ/feedshare-shrink_800/0/1688411274618?e=1693440000&v=beta&t=0G_Lqam6x6tw0jEiZDMIFacxb1bfuSkTX6DACgmLXQs" alt="" />
            </div>
            <div className="right4thwork" style={{width:"500px",marginTop:"55px"}}>
                        <div className='maintext' style={{fontSize:"24px"}}>
                            <p>Our Services</p>
                        </div>
                        <div className="gridwork" style={{
                            display:"grid",
                            gridTemplateColumns:"repeat(2,200px)",
                            gridGap:"20px",
                            marginLeft:"20px"
                        }}>
                             <div>
                           <img src="https://cdn.dribbble.com/users/15679704/avatars/normal/a0c0395a922cc4b766ad88e2c268f22a.jpg?1680117795" alt="" />  
                                <p>Accommodation</p>
                             20,000+ Listed Properties  across 5 countries.
                             100+cities
                             </div>
                             <div>
                                <div>
                                    <img src="https://cdn.dribbble.com/users/15679704/avatars/normal/a0c0395a922cc4b766ad88e2c268f22a.jpg?1680117795" alt="" />
                                </div>
                                <p>Visa Application</p>
                             By Industry leading Immigration Consultants.
                            Quick & Hassle Free Visa Filing.
                             </div>
                             <div>
                                <div>
                                    <img src="https://cdn.dribbble.com/users/15679704/avatars/normal/a0c0395a922cc4b766ad88e2c268f22a.jpg?1680117795" alt="" />
                                </div>
                             <p>Centralized Community</p>
                             Talk to international student community.
                              Ask your queries and doubts
                             </div>
                             <div>
                            <div>
                                <img src="https://cdn.dribbble.com/users/15679704/avatars/normal/a0c0395a922cc4b766ad88e2c268f22a.jpg?1680117795" alt="" />
                            </div>
                             <p>Education Loan</p>
                             100% Funding with quick loan sanction!
                               Pre-admission loan.
                             </div>
                        </div>
            </div>

         </div>
         {/* 5th work  */}
         <div className="messagebox" style={{ display:"flex", justifyContent:"space-between", width:"600px", height:"350px",border:"1px solid black", margin:"auto",marginTop:"15px",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
            <div className="left">
            <div className='messageheading' style={{width:"200px",height:"50px",marginTop:"20px", marginLeft:"24px"}}>
                <h1>Freda Collier</h1>
            </div>
            <div className='messagepara' style={{width:"300px",height:"150px" ,fontSize:"14px"}}>
                <p>"Ipsum vel nobis doloremque est aut non accusantium vero molestias. Et est minima dolorem eum modi atque sint nobis. Enim quod facere. Reiciendis necessitatibus ipsam non aspernatur voluptate id."</p>
            </div>
            <div className='msgstar' style={{
                width:"190px",
                height:"30px",
                display:'flex',
                justifyContent:"space-around",
                marginLeft:"20px"
            }} >
                  <div className='msgimageofstar'>
                    <img style={{width:"30px",height:"30px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Black_star_with_white_background.svg/1280px-Black_star_with_white_background.svg.png" alt="" />
                  </div>
                  <div>
                  <img style={{width:"30px",height:"30px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Black_star_with_white_background.svg/1280px-Black_star_with_white_background.svg.png" alt="" />
                  </div>
                  <div>
                  <img style={{width:"30px",height:"30px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Black_star_with_white_background.svg/1280px-Black_star_with_white_background.svg.png" alt="" />
                  </div>
                  <div>
                  <img style={{width:"30px",height:"30px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Black_star_with_white_background.svg/1280px-Black_star_with_white_background.svg.png" alt="" />
                  </div>
                  <div>
                  <img style={{width:"30px",height:"30px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Black_star_with_white_background.svg/1280px-Black_star_with_white_background.svg.png" alt="" />
                  </div>
            </div>
            </div>
            <div className="right5thmesssage" style={{ border:"1px solid black",position:"relative"}}>
                  <div className="leftarrow" style={{width:"100%",height:"100%",borderRadius:"40px",border:"1px solid black", zIndex:1,position:'relative'}}>
                     <img style={{width:"200px"}} src="https://m.media-amazon.com/images/I/81sD8OO1V1L._AC_UF894,1000_QL80_.jpg" alt="" />
                  </div>
                  <div style={{width:"100%",height:"100%",borderRadius:"40px",border:"1px solid black",transform:"rotate(-30.32deg)",zIndex:3, position:"absolute",top:"30px"}}>
                  <img style={{width:"200px"}} src="https://m.media-amazon.com/images/I/81sD8OO1V1L._AC_UF894,1000_QL80_.jpg" alt="" />
                  </div>
                
            </div>
            
         </div>
         <div className='arrow' style={{display:"flex", margin:"auto",marginTop:"65px",width:"200px", height:"50px", justifyContent:"space-around"}}>
                <div className='left' style={{fontSize:"44px"}}>{"<"}</div>
                <div style={{fontSize:"44px"}}>{"1/5"}</div>
                <div className="right" style={{fontSize:"44px"}}>{">"}</div>
            </div>

            {/* last work  */}
            <div className="lastwork" style={{width:"90%", height:"600px", margin:"auto", marginTop:"15px"}}>
                <div className='lastheading' style={{width:"400px", height:"50px", margin:"auto"}}>
                      <h1>Get in Touch with Us</h1>
                </div>
                <div style={{width:"600px", height:"50px", margin:"auto"}}>
                    <p>Elevate Your Institute Management and Student Success - Contact Us Now!</p>
                </div>
                {/* last work of second part */}
                <div className="lsecondpart" style={{ display:"flex", justifyContent:"space-between", width:"100%", height:"100%",position:"relative",zIndex:1,border:"1px solid black"}} >
                    <div className='contactus' style={{width:"80%", height:"85%"}} >
                        <div className="contactheading" style={{width:"200px", height:"37px",marginLeft:"85px"}}>
                            <h1>Contact Us</h1>
                        </div>
                        <div className='contactpara' style={{width:"30%", height:"100px",border:"1px solid black" , fontFamily:"sans-serif",marginTop:"15px",marginLeft:"85px"}}>
                            <p>Feel Free to contact us any time. We will get back to you as soon as we can!.Feel Free to contact us any time. We will get back to you as soon as we can!.
                            </p>
                        </div>
                        <div style={{width:"34px",height:"20px", marginLeft:"85px",marginTop:"15px"}}>
                            <div style={{textAlign:"start"}}>
                            <span>Name</span>
                            </div>
                            <input type="text"
                             value="Doe" />
                        </div>
                        <div style={{width:"31px",height:"20px", marginLeft:"85px",marginTop:"45px"}}>
                            <div style={{textAlign:"start"}}>
                            <span>Email</span>
                            </div>
                            <input type="emai;"
                             value="Doe@gmail.com" />
                        </div>
                        <div style={{width:"54px",height:"20px", marginLeft:"85px",marginTop:"55px"}}>
                            <div style={{textAlign:"start"}}>
                            <span>Message</span>
                            </div>
                             <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                   
                    <div className='socialIcons' style={{ display:"flex", justifyContent:"space-between", width:"20%", height:"100%",  backgroundColor:"blue",alignItems:"end",position:"relative"}}>
                        <div className='socialIconImage' style={{width:"30px",height:"30px"}}>
                            <img style={{width:"30px",height:"30px"}} src="https://store-images.s-microsoft.com/image/apps.45406.9007199266244427.4d45042b-d7a5-4a83-be66-97779553b24d.2a88a418-b96d-44a6-ad4f-5e0ee6289b2c" alt="" />
                        </div>
                        <div className='socialIconImage' style={{width:"30px",height:"30px"}}>
                            <img style={{width:"30px",height:"30px"}} src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/32/5a/78/325a78e6-729f-3b8e-c5bd-6f5c91f69a03/Prod-0-1x_U007emarketing-0-7-0-85-220.png/1200x600wa.png" alt="" />
                        </div>
                        
                        <div className='socialIconImage' style={{width:"30px",height:"30px"}}>
                            <img style={{width:"30px",height:"30px"}} src="https://play-lh.googleusercontent.com/5pZMqQYClc5McEjaISPkvhF8pDmlbLqraTMwk1eeqTlnUSjVxPCq-MItIrJPJGe7xW4" alt="" />
                        </div>
                    </div>
                </div>
                <div className='contactInf' style={{width:"400px", height:"250px",position:"absolute",marginLeft:"895px",
                top:"350%", backgroundColor:"#17164d",color:"white",zIndex:2,borderRadius:"50px"}}>
                       <div className='contactinfheading' style={{width:"400px",height:"39px"}}>
                         <h1>Contact Information</h1>
                       </div>
                       <div className='iconofcall' style={{display:"flex",justifyContent:"space-between", width:"200px",height:"50px", marginLeft:"25px", left:"20px", top:"20px"}}>
                            <div style={{width:"30px",height:"30px"}}>
                                <img style={{width:"50px",height:"30px",marginTop:"15px"}} src="https://play-lh.googleusercontent.com/wwzWuDb8ivbarUCpB7sEaUkx-vq6HbbqNZ2Eg5a_HpXNNyQpp-cFcNCcG-O9T28N8RLv=w600-h300-pc0xffffff-pd" alt="" />
                            </div>
                            <div >
                                <p>1234567890</p>
                            </div>
                       </div>
                       <div className='iconofcall' style={{display:"flex",justifyContent:"space-between", width:"200px",height:"50px", marginLeft:"25px", left:"20px", top:"20px",zIndex:2}}>
                            <div style={{width:"30px",height:"30px"}}>
                                <img style={{width:"50px",height:"30px",marginTop:"15px"}} src="https://staticfanpage.akamaized.net/wp-content/uploads/sites/6/2020/07/gmail-1595343693513-1200x675.jpg" alt="" />
                            </div>
                            <div style={{ width:"150px",height:"24px"}}>
                                <p style={{ width:"150px",height:"24px"}}>doe@gmail.com</p>
                            </div>
                       </div>
                       <div className='iconofcall' style={{display:"flex",justifyContent:"space-between", width:"200px",height:"50px", marginLeft:"25px",  top:"40px"}}>
                            <div style={{width:"30px",height:"30px"}}>
                                <img style={{width:"50px",height:"30px",marginTop:"15px"}} src="https://static.vecteezy.com/system/resources/previews/000/552/683/original/geo-location-pin-vector-icon.jpg" alt="" />
                            </div>
                            <div style={{ width:"290px",height:"66px"}}>
                                <p style={{ width:"290px",height:"66px"}}>132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
                            </div>
                       </div>
                    </div>
            </div>
    </div>
  )
}

export default Ingelt