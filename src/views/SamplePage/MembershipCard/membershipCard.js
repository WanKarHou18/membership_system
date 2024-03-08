import React from "react";
import ReactDOM from "react-dom";
import './membershipCard.css';
import cardBackgroundImage from './loyalty_card_pink_cream_background.png';
import { TaskAltOutlined, GradeOutlined, QueryBuilderOutlined, StorefrontOutlined} from "@mui/icons-material";
import { useUserAuth } from "context/UserAuthContext";
import { formatDateToDDMMYYYY } from "helper/dateHelper";

const MembershipCard=({
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
            lineHeight: "15pt",
            margin: 0,
            padding: 0,
          }}
        >
          {data.customerName && (
            <li>
              <h1 style={{fontFamily:'cursive'}}>{data.customerName}</h1>
            </li>
          )}
          {data.membershipCode && (
            <li>
              <h2 style={{
                fontFamily:'cursive',
                color: '#AA336A'
              }}>
                {data.membershipCode}
              </h2>
            </li>
          )}
          {data.pointToReach && (
            <li style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px', // Adjust the gap as needed
              fontFamily: 'cursive',
              color: '#AA336A'
            }}>
              <TaskAltOutlined /> 
              <h3>Earn {data.pointToReach} points to get {data.reward}</h3>
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
              gap: '8px', // Adjust the gap as needed
              fontFamily: 'cursive',
              color: '#AA336A',
            }}>
              < QueryBuilderOutlined /> 
              <h4 style={{
                margin:'0px'
              }}>
                Valid till  {formatDateToDDMMYYYY(data.expiryDate)}
              </h4>
            </li>
          )}
           <li style={{
              display: 'flex',
              justifyContent:'flex-end',
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

export default MembershipCard;