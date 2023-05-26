// import './Vinde.css';

// const Vinde = () => {

//         const handleInputChange = (e)=>{
//         //<span className=''>Sell your property</span>  
//         // setShowError({
//         //     text: 'Sell your property',
//         //     className: ''
//         // });

//         if(e.target.name == 'images')
//         {
//             setData((prev)=>{
//                 prev[e.target.name] = getImagesLinks(e.target.value);
//                 return {...prev}
//             })
//         }
//         else
//         {
//             setData((prev)=>{
//                 prev[e.target.name] = e.target.value;
//                 return {...prev}
//             })
//         }

//     }

//     return(
//         <div className="selected-screen-container">
//             <div className="selected-screen-map-container">
//                 {/* <MapComponent /> */}
//             </div>
//             <div className="selected-screen-right-content">
//                 <div className="selected-screen-right-content-padding">
//                     <div className="sell-form-title">
//                         {/* <span className={showError.className}>{showError.text}</span> */}
//                     </div>
//                     <form className="sell-form">
//                         <div className="triple-inputs">


//                             <div className="form-box-container">
//                                 <div className="box-title-container">
//                                     <span>
//                                         Name
//                                     </span>
//                                 </div>
//                                 <div className="number-input-box">
//                                     <input type="text" name="name" onChange={handleInputChange}/>
//                                 </div>
//                             </div>

//                             <div className="form-box-container">
//                                 <div className="box-title-container">
//                                     <span>
//                                         Contact Number
//                                     </span>
//                                 </div>
//                                 <div className="number-input-box">
//                                     <input type="number" name="contact_nr" onChange={handleInputChange}/>
//                                 </div>
//                             </div>

//                             <div className="form-box-container">
//                                 <div className="box-title-container">
//                                     <span>
//                                         Type
//                                     </span>
//                                 </div>
//                                 <div class="select">
//                                     <select name="type" onChange={handleInputChange}>
//                                         <option value="">None</option>
//                                         <option value="apartament">Apartament</option>
//                                         <option value="building area">Building area</option>
//                                         <option value="house">House</option>
//                                         <option value="villa">Villa</option>
//                                     </select>
//                                 </div>
//                             </div>

//                         </div>

//                         <div className="single-text-area-input">
//                             <div className="form-box-container">
//                                 <div className="box-title-container">
//                                     <span>
//                                         Description:
//                                     </span>
//                                 </div>
//                                 <div className="number-input-box">
//                                     <textarea id="w3review" name="w3review" rows="4" cols="50" name="description" onChange={handleInputChange}/>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="triple-inputs">


//                         <div className="form-box-container">
//                                 <div className="box-title-container">
//                                     <span>
//                                         Status
//                                     </span>
//                                 </div>
//                                 <div class="select">
//                                     <select name="status" onChange={handleInputChange}>
//                                         <option value="">None</option>
//                                         <option value="available">Available</option>
//                                         <option value="rent agreed ">Rent agreed </option>
//                                         <option value="reserved">Reserved</option>
//                                         <option value="sell agreed">Sell agreed</option>
//                                     </select>
//                                 </div>
//                             </div>

//                             <div className="form-box-container">
//                                 <div className="box-title-container">
//                                     <span>
//                                         Material
//                                     </span>
//                                 </div>
//                                 <div class="select">
//                                     <select name="material" onChange={handleInputChange}>
//                                         <option value="">None</option>
//                                         <option value="block">Block</option>
//                                         <option value="brick">Brick</option>
//                                         <option value="mixed">Mixed</option>
//                                         <option value="prefab">Prefab</option>
//                                         <option value="stone">Stone</option>
//                                         <option value="wood">Wood</option>
//                                     </select>
//                                 </div>
//                             </div>

//                             <div className="form-box-container">
//                                 <div className="box-title-container">
//                                     <span>
//                                         Price ($):
//                                     </span>
//                                 </div>
//                                 <div className="number-input-box">
//                                     <input type="number" name="price" onChange={handleInputChange}/>
//                                 </div>
//                             </div>

//                         </div>

//                         <div className="triple-inputs">

//                         <div className="form-box-container">
//                                 <div className="box-title-container">
//                                     <span>
//                                         Rooms:
//                                     </span>
//                                 </div>
//                                 <div className="number-input-box">
//                                     <input type="number" name="rooms" onChange={handleInputChange}/>
//                                 </div>
//                             </div>

//                             <div className="form-box-container">
//                                 <div className="box-title-container">
//                                     <span>
//                                         Baths:
//                                     </span>
//                                 </div>
//                                 <div className="number-input-box">
//                                     <input type="number" name="baths" onChange={handleInputChange}/>
//                                 </div>
//                             </div>

//                             <div className="form-box-container">
//                                 <div className="box-title-container">
//                                     <span>
//                                         Beds:
//                                     </span>
//                                 </div>
//                                 <div className="number-input-box">
//                                     <input type="number" name="beds" onChange={handleInputChange}/>
//                                 </div>
//                             </div>


//                         </div>
//                         <div className="triple-inputs">
//                         <div className="form-box-container">
//                                 <div className="box-title-container">
//                                     <span>
//                                         Location:
//                                     </span>
//                                 </div>
//                                 <div class="select">
//                                     <select name="location" onChange={handleInputChange}>
//                                         <option value="">None</option>
//                                         <option value="europe">Europe</option>
//                                         <option value="africa">Africa</option>
//                                         <option value="north-america">North America</option>
//                                         <option value="south-america">South America</option>
//                                         <option value="asia">Asia</option>
//                                         <option value="other">Other</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className='box-title-container' style={{padding: '0px 10px',}}>
//                             <span>Selected map marker: {data.long} long - {data.lat} lat</span>
//                         </div>

//                         <div className="single-text-area-input">
//                             <div className="form-box-container">
//                                 <div className="box-title-container">
//                                     <span>
//                                         Photo links (separated by comma):
//                                     </span>
//                                 </div>
//                                 <div className="number-input-box">
//                                     <textarea id="w3review" name="w3review" rows="4" cols="50" name="images" onChange={handleInputChange}/>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="submit-btn-sell-form-container">
//                             <div className="submit-btn-sell-form" onClick={handleSubmit}>
//                                 Submit
//                             </div>
//                         </div>

//                     </form>
//                 </div>
//             </div>

//         </div>
//     )
// }
 
// export default Vinde;