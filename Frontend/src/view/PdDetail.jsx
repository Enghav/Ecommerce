import React from "react";
import './PdStyle.css';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRating from "../components/StarRating";


const Space = styled.div`
 padding: 10px; 
`;
const Pdname = styled.div`
font-size: 24px !important;
line-height: 32px !important;
`;
const Link = styled.div`
  font-size: 14px;
  color: #007185;
  font-family: "Amazon Ember", Arial, sans-serif;
`;
const Describ = styled.div`
font-size: 14px;
color: #0B0C0C;;
font-family: "Amazon Ember", Arial, sans-serif;
`;
const Discount = styled.div`
color: #CC0C39;
font-size: 24px;
line-height: 32px;
font-family: "Amazon Ember", Arial, sans-serif;
`;
const PdDetail = () => {
    return( 
      // Product image
      <div className="container" >
        <div className="ImageBox">
        <div className="BigImage"></div>
        <Space></Space>
        <div className="smallImagebox">
        <button className="SmallImage"></button>
        <button className="SmallImage"></button>
        </div>   
        </div>
        
        {/* Product description */}
        <div className="PdDescrib">
        <Pdname>dflajdlfjajdfll;ajdl;fjal;jdfl;lkjdflajdljfaljdfljaljdffl;ajdlfjalfjl;ajjdf;ajef;dafjakjefaldjkf</Pdname>
        <Link>Visit the //store name//</Link>
        <div style={{display: 'flex'}}>
        <StarRating totalStars={5}/>
        <Link>amount of rating</Link>
        </div>
        <Describ style={{fontSize:'12px'}}>300+ bought in past month</Describ>
        <hr />
        {/* in Case has promotion on the product */}
        <button type="button" class="btn btn-danger">Limited time deal</button>
        <div className="Price">
          <Discount>
            <span>-</span>
            <span>29</span>
            <span>%</span>
          </Discount>
        <span>$</span>
        <Describ style={{fontSize:'28px'}}>134</Describ>
        <Describ style={{fontSize:'13px'}}>134</Describ>
        </div>
        <Discount style={{fontSize: '12px', color: '#565959'}}>the last price: <span style={{textDecoration: 'line-through'}}>136$</span></Discount>
        <Link>Free returns for Cambodias</Link>
        <Describ style={{color:'#565959', display:'flex'}}>NO Import Charge & $21.87 Shipping to Cambodia
        <Space></Space><Link>Detail</Link></Describ>
         <div style={{display: 'flex'}}>
        <Describ>Available at a lower price from</Describ>
        <Link>other selling</Link>
        <Describ>that may not offer free Prime shipping.</Describ>
        </div>
        <Describ>Color: <span style={{fontWeight:'Bold',}}>Classic Black</span></Describ>
        <table>
          <tbody>
            <th>Brand</th>
            <td>Razer</td>
          </tbody>
        </table>
        <hr />
        <Describ style={{fontWeight: 'Bold'}}>About this item</Describ>
        <Space></Space>
        <li>Gaming Peripherals Manufacturer in the US: Source - The NPD Group, Inc. U.S. Retail Tracking Service, Keyboards, Mice, PC Headset/Pc Microphone, Gaming Designed, based on dollar sales, 2017-2021</li>
        <li>High-Precision 6,400 DPI Optical Sensor: Offers on-the-fly sensitivity adjustment through dedicated DPI buttons (reprogrammable) for gaming and creative work</li>
        <Space>
        </Space>
            <Link className="font">Report an issue with this product or seller</Link>
          <div className="font"><b>Note:</b> Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.</div>
        </div>

        {/* Payment part */}

    </div>

    )
  };
  
  export default PdDetail;