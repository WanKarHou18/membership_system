import React from "react";
import ReactDOM from "react-dom";
import './membershipCard.css';
import cardBackgroundImage from './food_cake_background.png';
import { TaskAltOutlined, GradeOutlined, QueryBuilderOutlined, StorefrontOutlined} from "@mui/icons-material";
import { useUserAuth } from "context/UserAuthContext";
import { formatDateToDDMMYYYY } from "helper/dateHelper";

const FoodCakeMembershipCard=({
  data,
  headerColor = "#fff",
  // headerBg = "#4285F4",
  headerBg='#AA336A',
  headerStyle = {},
  shadow = true,
  style = {},
  ...props
})=>{
  const { user } = useUserAuth();
  return (
    <div
      id="myCard"
      className="card-business"
      style={{
        backgroundImage: `url(${cardBackgroundImage})`,
        backgroundSize: 'cover',
        width: "120mm",
        height: "70mm",
        // borderRadius: "5px",
        boxShadow: shadow !== false ? "#9E9E9E 0px 0px 10px" : "",
        ...style
      }}
      {...props}
    >
      <div
        style={{
          // background: headerBg,
          height: "12mm",
          padding: 10,
          paddingTop: 15,
          paddingLeft: 20,
          position: "relative",
          borderTopRightRadius: "5px",
          borderTopLeftRadius: "5px",
          display:'flex',
          justifyContent:'end',
          ...headerStyle
        }}
      >
        <h1
          style={{
            fontSize: "17pt",
            margin: 0,
            marginRight: -50,
            color: headerColor
          }}
        >
        </h1>
      </div>
      <div style={{ padding: 10, paddingLeft: 20, position: "relative" }}>
        <ul
          style={{
            fontSize: "10pt",
            listStyle: "none",
            justifyContent:'center',
            lineHeight: "15pt",
            margin: 0,
            padding: 0,
          }}
        >
          {data.customerName && (
            <li style={{justifyContent:'center',  display: 'flex',}}>
              <h1 style={{fontFamily:'cursive'}}>{data.customerName}</h1>
            </li>
          )}
          {data.membershipCode && (
            <li>
              <h2 style={{
                fontFamily:'cursive',
                color: '#AA336A',
                display: 'flex',
                justifyContent:'center',
              }}>
                {data.membershipCode}
              </h2>
            </li>
          )}
          {data.pointToReach && (
            <li style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent:'center',
              gap: '8px', // Adjust the gap as needed
              fontFamily: 'cursive',
              color: '#AA336A'
            }}>
              <TaskAltOutlined /> 
              <h4>Earn {data.pointToReach} points to get {data.reward}</h4>
            </li>
          )}
          {/* {data.socials && data.socials.length > 0 && (
            <li>
              {" "}
              {data.socials.map(([type, text]) => (
                <span style={{ marginRight: 5 }} key={text}>{text}</span>
              ))}
            </li>
          )}
          {data.location && (
            <li>
              {data.location}
            </li>
          )} */}
             {data.expiryDate  && (
            <li style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px', // Adjust the gap as needed
              fontFamily: 'cursive',
              color: '#AA336A',
            }}>
              < QueryBuilderOutlined /> 
              <h4 >
                Valid till  {formatDateToDDMMYYYY(data.expiryDate)}
              </h4>
            </li>
          )}
           <li style={{
              display: 'flex',
              justifyContent:'center',
              alignItems: 'center',
              gap: '8px', // Adjust the gap as needed
              fontFamily: 'cursive',
              color: '#EFB9CB'
            }}>
              < StorefrontOutlined /> 
              <h4>{user.displayName}</h4>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default FoodCakeMembershipCard;