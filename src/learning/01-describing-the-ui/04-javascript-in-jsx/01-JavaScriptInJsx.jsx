const distro = {
  name: "Ubuntu",
  description:
    "Ubuntu is a free, open-source Linux-based operating system widely used for desktops, servers, cloud computing, and Internet of Things (IoT) devices",
  image: "https://i.imgur.com/H2gMv9P.png",
  theme: {
    color: "#127EA4",
    backgraoundColor: "white",
    marginLeft: "24px",
    marginTop: "24px",
  },
};

const listStyle = {
  listStyle: "number",
  listStylePosition: "inside",
  color: "#C76A15",
  padding: "0",
};

export default function JavaScriptInJsx() {
  return (
    <div style={distro.theme}>
      <h1>{distro.name}</h1>
      <p>{distro.description}</p>
      <img src={distro.image} alt={distro.name} width={100} />
      <ul style={listStyle}>
        <li>Desktop Operating System</li>
        <li>Server Operating System</li>
        <li>Cloud Computing</li>
        <li>Internet of Things (IoT)</li>
        <li>Development</li>
      </ul>
    </div>
  );
}
