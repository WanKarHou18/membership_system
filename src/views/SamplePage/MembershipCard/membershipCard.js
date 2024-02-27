import React from "react";
import ReactDOM from "react-dom";
import './membershipCard.css';

const MembershipCard=({
  people,
  headerColor = "#fff",
  // headerBg = "#4285F4",
  headerBg='#FFD700',
  headerStyle = {},
  shadow = true,
  style = {},
  ...props
})=>{
  return (
    <div
      id="myCard"
      className="card-business"
      style={{
        background: "#fff",
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
          background: headerBg,
          height: "12mm",
          padding: 10,
          paddingTop: 15,
          paddingLeft: 20,
          position: "relative",
          borderTopRightRadius: "5px",
          borderTopLeftRadius: "5px",
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
          {people.displayName}
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
          {people.title && (
            <li>
              {people.title}
            </li>
          )}
          {people.phone && (
            <li>
              {people.phone}
            </li>
          )}
          {people.socials && people.socials.length > 0 && (
            <li>
              {" "}
              {people.socials.map(([type, text]) => (
                <span style={{ marginRight: 5 }} key={text}>{text}</span>
              ))}
            </li>
          )}
          {people.location && (
            <li>
              {people.location}
            </li>
          )}
          <li style={{padding:'5px'}}>
            <span>Membership Start Date: 12-3-202</span>
          </li>
          <li style={{padding:'5px'}}>
            <span>Membership End Date: 12-3-202</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MembershipCard;