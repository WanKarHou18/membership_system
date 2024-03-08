import React from "react";
import ReactDOM from "react-dom";
import './membershipCard.css';

const Linkedin = ({ size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="#000"
    style={{ verticalAlign: "bottom" }}
  >
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);
const Facebook2 = ({ size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="#000"
    style={{ verticalAlign: "bottom" }}
  >
    <path d="M22.5 0c.83 0 1.5.67 1.5 1.5v21c0 .83-.67 1.5-1.5 1.5h-6v-9h3l.75-3.75H16.5v-1.5c0-1.5.75-2.25 2.25-2.25h1.5V3.75h-3c-2.76 0-4.5 2.16-4.5 5.25v2.25h-3V15h3v9H1.5A1.5 1.5 0 0 1 0 22.5v-21C0 .67.67 0 1.5 0h21z" />
  </svg>
);
const Twitter = ({ size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="#000"
    style={{ verticalAlign: "bottom" }}
  >
    <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
  </svg>
);
const Share = ({ size = 16, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ verticalAlign: "bottom" }}
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);
const MapMarker2 = ({ size = 16, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ verticalAlign: "bottom" }}
  >
    <circle cx="12" cy="10" r="3" />
    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
  </svg>
);
const Phone = ({ size = 16, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ verticalAlign: "bottom" }}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const Mail = ({ size = 16, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ verticalAlign: "bottom" }}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const Star = ({ size = 16, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ verticalAlign: "bottom" }}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const Exlusive = ()=>(
  <svg 
    viewBox="0 0 1024 1024" 
    className="icon" 
    style="vertical-align: middle;fill: #000000;overflow: hidden;"
    version="1.1" 
    xmlns="http://www.w3.org/2000/svg" 
    fill="#000000">
    <g id="SVGRepo_bgCarrier" 
    strokeWidth="0">
    </g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
    </g>
    <g id="SVGRepo_iconCarrier">
    <path 
      d="M131.5328 369.0496l114.8416-187.0848c6.3488-10.2912 17.3568-16.5376 29.184-16.5376h538.8288c11.776 0 22.7328 6.1952 29.0816 16.384l116.224 187.1872c8.0384 13.0048 7.0656 29.8496-2.4576 41.728l-377.9584 472.576a42.72128 42.72128 0 0 1-67.1744 0L134.0928 410.624c-9.472-11.8272-10.496-28.6208-2.56-41.5744z" fill="#F2C336"></path><path d="M800.3072 198.8608l29.0816 45.8752 29.8496-45.8752-29.4912-41.728z" fill="#E8A200"></path><path d="M134.0928 410.624l372.992 466.3296-154.112-487.3728-226.56 1.6896c0.6144 6.9632 3.1744 13.7216 7.68 19.3536zM579.328 883.3024l377.9584-472.576a35.95264 35.95264 0 0 0 7.68-19.6096l-279.2448-9.8304-159.4368 513.536a42.58816 42.58816 0 0 0 53.0432-11.52z" fill="#F58200"></path><path d="M959.744 368.9984l-102.8096-165.5808-120.8832 180.992h-59.5968l-128.3072-195.8912-127.4368 188.928h-65.024L238.2336 195.2256 131.5328 369.0496a36.38784 36.38784 0 0 0-5.12 22.4256l838.5536-6.9632a35.84 35.84 0 0 0-5.2224-15.5136z" fill="#F58200"></path><path d="M859.2384 198.8608l-29.8496 45.8752 83.968 136.6016-367.6672 451.072-11.7248 81.8688 442.4704-522.8032-2.816-25.3952z" fill="#F46800">
    </path>
    <path d="M223.0272 562.2784a15.37536 15.37536 0 0 0-21.7088-1.0752 15.37536 15.37536 0 0 0-1.0752 21.7088l8.3456 9.216a15.36 15.36 0 0 0 11.3664 5.0176c3.6864 0 7.3728-1.3312 10.2912-3.9936a15.37536 15.37536 0 0 0 1.0752-21.7088l-8.2944-9.1648z" fill="#333333">
    </path>
    <path d="M980.6848 350.1568l-125.7984-196.864c-9.728-15.2576-26.368-24.32-44.4416-24.32H227.1232c-18.176 0-34.8672 9.1648-44.5952 24.576l-23.4496 37.12c-4.5056 7.168-2.4064 16.64 4.7616 21.1968 7.168 4.5568 16.64 2.4064 21.1968-4.7616l21.3504-33.792 119.04 192.6656H84.6336l66.816-105.6768c4.5056-7.168 2.4064-16.64-4.7616-21.1968-7.168-4.5056-16.64-2.4064-21.1968 4.7616L58.2144 350.2592c-12.1856 19.3024-10.6496 44.0832 3.6864 61.4912l90.8288 114.688a15.29344 15.29344 0 0 0 21.5552 2.5088c6.656-5.2736 7.7824-14.9504 2.5088-21.5552L89.1392 396.6976H341.504L483.4304 875.52l-207.104-249.4976a15.34976 15.34976 0 0 0-23.6032 19.6096l218.6752 263.4752c10.752 13.056 26.112 20.992 42.752 22.4768 1.6384 0.3072 3.328 0.5632 5.0176 0.5632h0.3072c1.5872 0 3.1232-0.2048 4.608-0.512 16.9984-1.2288 32.768-9.216 43.7248-22.528l409.1904-497.0496c14.5408-17.664 16.0768-42.5472 3.6864-61.9008z m-26.3168 15.8208h-252.9792l129.28-193.5872 123.6992 193.5872z m-435.4048 521.4208L373.504 396.6976h279.3472l-133.888 490.7008z m153.9072-534.0672l-125.0816-193.6896h254.4128l-129.3312 193.6896zM489.984 159.6928L353.792 353.4336 234.0864 159.6928H489.984z m29.0304 12.0832l125.3888 194.2016H382.5152l136.4992-194.2016z m34.2528 706.6624l131.4816-481.7408h265.1136l-396.5952 481.7408z" fill="#333333"></path><path d="M343.8592 630.9888c-3.84 0-7.6288-1.6896-10.1376-4.9664l-12.4928-16.128a12.8512 12.8512 0 0 1 2.304-17.9712 12.8512 12.8512 0 0 1 17.9712 2.304l12.4928 16.128a12.8512 12.8512 0 0 1-2.304 17.9712c-2.3552 1.792-5.12 2.6624-7.8336 2.6624zM301.312 569.344c-3.84 0-7.6288-1.6896-10.1376-4.9664L206.2848 454.4512a12.8512 12.8512 0 0 1 2.304-17.9712 12.8512 12.8512 0 0 1 17.9712 2.304l84.8896 109.9264a12.8512 12.8512 0 0 1-2.304 17.9712c-2.3552 1.792-5.12 2.6624-7.8336 2.6624zM205.568 342.272c-2.3552 0-4.6592-0.6144-6.8096-1.9456a12.83584 12.83584 0 0 1-4.0448-17.664l26.4704-42.1376a12.83584 12.83584 0 0 1 17.664-4.0448c5.9904 3.7376 7.7824 11.6736 4.0448 17.664l-26.4704 42.1376c-2.4064 3.84-6.5536 5.9904-10.8544 5.9904z" fill="#FFFFFF"></path><path d="M809.8816 346.9312c-2.3552 0-4.6592-0.6144-6.8096-1.9456a12.83584 12.83584 0 0 1-4.0448-17.664l26.4704-42.1376a12.83584 12.83584 0 0 1 17.664-4.0448c5.9904 3.7376 7.7824 11.6736 4.0448 17.664l-26.4704 42.1376c-2.4576 3.84-6.6048 5.9904-10.8544 5.9904z" fill="#FFFFFF">
    </path><path d="M493.824 341.8112c-2.3552 0-4.6592-0.6144-6.8096-1.9456a12.83584 12.83584 0 0 1-4.0448-17.664l26.4704-42.1376a12.83584 12.83584 0 0 1 17.664-4.0448c5.9904 3.7376 7.7824 11.6736 4.0448 17.664l-26.4704 42.1376c-2.4576 3.84-6.6048 5.9904-10.8544 5.9904z"
     fill="#FFFFFF">
    </path></g></svg>
)
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
        {/* <img
          width={"60mm"}
          height={"60mm"}
          alt="avatar"
          style={{
            position: "absolute",
            right: 15,
            top: 5,
            borderRadius: "100%",
            float: "right",
            background: "#fff"
          }}
          src={people.avatar}
        /> */}
        {/*https://pbs.twimg.com/profile_images/1215572708336865280/_8lVTX2z_400x400.jpg*/}
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
        {/* {people.tagline && (
          <p
            style={{
              margin: 0,
              fontSize: "10pt",
              marginRight: -50,
              color: "#ccc"
            }}
          >
            <span>{people.tagline}</span>
          </p>
        )} */}
      </div>
      <div style={{ padding: 10, paddingLeft: 20, position: "relative" }}>
        {/* <img
          alt="qr-code"
          style={{
            position: "absolute",
            right: 15,
            top: 10,
            float: "right"
          }}
          src="/qr.png"
        /> */}
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
              <Star /> {people.title}
            </li>
          )}
          {people.phone && (
            <li>
              <Phone /> {people.phone}
            </li>
          )}
          {/* {people.mail && (
            <li>
              <Mail /> {people.mail}
            </li>
          )} */}
          {people.socials && people.socials.length > 0 && (
            <li>
              <Share />{" "}
              {people.socials.map(([type, text]) => (
                <span style={{ marginRight: 5 }} key={text}>{text}</span>
              ))}
            </li>
          )}
          {people.location && (
            <li>
              <MapMarker2 /> {people.location}
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