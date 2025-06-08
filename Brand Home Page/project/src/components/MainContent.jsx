import './MainContent.css'

const MainContent = () => {

    const shopnow = () =>{
        window.open("https://www.nike.com/in/t/uplift-sc-shoes-R0995d/IB2765-603")
    }

    const amazonclick = () =>{
        window.open("https://www.amazon.in")
    }

    const flipkartclick = () =>{
        window.open("https://www.flipkart.com")
    }

  return (
    <div id="maincontainer">

        <div id="left_half_container">
            <div id="main_heading_container">
                <h1>
                    YOUR FEET DESERVES THE BEST
                </h1>
            </div>
            <div id="sub_text_container">
                <p>
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
            </div>

            <div id="buttons_below_text_container">
            
                <button 
                id="shop_now_button" 
                className='buttons_below_text'
                onClick={shopnow}
                >Shop Now</button>

                <button 
                id="details_button" 
                className='buttons_below_text'
                onClick={shopnow}
                >Details</button>

            </div>

            <div id="icon_container">
                <p>also available on:</p>

                <img 
                src="./Images/amazon.png" 
                className="ecommerce_icons"
                onClick={amazonclick}
                ></img>

                <img 
                src="./Images/flipkart.png" 
                className="ecommerce_icons"
                onClick={flipkartclick}
                ></img>
            </div>

        </div>

        <div id="right_half_container">
            <img src="./Images/shoe_image.png"></img>
        </div>

    </div>
  )
}

export default MainContent
