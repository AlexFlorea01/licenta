import './Search.css';

const Cautare = () => {

    return (  
        <div className="home-search-component">
                <div className="home-search-form-itself">
                    <form className="home-form">
                        <div className="upper-form">
                            <div className="form-box-container">
                                <div className="box-title-container">
                                    <span>
                                        Locație
                                    </span>
                                </div>
                                <div class="select">
                                    <select name="location">
                                        <option value="">-</option>
                                        <option value="europe">Moldova</option>
                                        <option value="north-america">Maramureș</option>
                                        <option value="south-america">Oltenia</option>
                                        <option value="asia">Ardeal</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-box-container">
                                <div className="box-title-container">
                                    <span>
                                        Tipul proprietății
                                    </span>
                                </div>
                                <div class="select">
                                    <select name="type">
                                        <option value="">-</option>
                                        <option value="apartament">Apartament</option>
                                        <option value="building area">Building area</option>
                                        <option value="house">House</option>
                                        <option value="villa">Villa</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-box-container">
                                <div className="box-title-container">
                                    <span>
                                        Disponibilitate
                                    </span>
                                </div>
                                <div class="select">
                                    <select name="status">
                                        <option value="">-</option>
                                        <option value="available">Available</option>
                                        <option value="rent agreed ">Rent agreed </option>
                                        <option value="reserved">Reserved</option>
                                        <option value="sell agreed">Sell agreed</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-box-container">
                                <div className="box-title-container">
                                    <span>
                                        Material
                                    </span>
                                </div>
                                <div class="select">
                                    <select name="material">
                                        <option value="">-</option>
                                        <option value="block">Block</option>
                                        <option value="brick">Brick</option>
                                        <option value="mixed">Mixed</option>
                                        <option value="prefab">Prefab</option>
                                        <option value="stone">Stone</option>
                                        <option value="wood">Wood</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-box-container">
                                <div className="box-title-container">
                                    <span>
                                        Preț de la
                                    </span>
                                </div>
                                <div className="number-input-box">
                                    <input type="number" name="price_from"/>
                                </div>
                            </div>
                        </div>
                        <div className="lower-form">
                            <div className="form-box-container">
                                    <div className="box-title-container">
                                        <span>
                                            Preț până la
                                        </span>
                                    </div>
                                    <div className="number-input-box">
                                        <input type="number" name="price_to"/>
                                    </div>
                            </div>
                        
                            <div className="form-box-container">
                                    <div className="box-title-container">
                                        <span>
                                            Nr. Camere
                                        </span>
                                    </div>
                                    <div class="select">
                                        <select name="rooms">
                                            <option value="">-</option>
                                            <option value="+1">+1</option>
                                            <option value="+2">+2</option>
                                            <option value="+4">+3</option>
                                        </select>
                                    </div>
                            </div>
                            
                            <div className="form-box-container">
                                    <div className="box-title-container">
                                        <span>
                                            Nr. băi
                                        </span>
                                    </div>
                                    <div class="select">
                                        <select name="baths">
                                            <option value="">-</option>
                                            <option value="+1">+1</option>
                                            <option value="+2">+2</option>
                                            <option value="+4">+3</option>
                                        </select>
                                    </div>
                            </div>
                            <div className="form-box-container">
                                    <div className="box-title-container">
                                        <span>
                                            Nr. paturi
                                        </span>
                                    </div>
                                    <div class="select">
                                        <select name="beds">
                                        <option value="">-</option>
                                            <option value="+1">+1</option>
                                            <option value="+2">+2</option>
                                            <option value="+4">+3</option>
                                        </select>
                                    </div>
                            </div>
                            <div className="form-box-container">
                                <span style={{color: 'transparent',marginBottom: '5px'}}>spatiu</span>
                                    <div className="box-container-submit-btn">
                                        <span>CAUTĂ</span>
                                    </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
    );
}
 
export default Cautare;