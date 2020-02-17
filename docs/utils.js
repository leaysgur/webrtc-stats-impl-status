// use SkyWay just for TURN servers
export async function fetchTurnServers(Peer) {
  const peer = new Peer({
    key: "c7d70e97-0033-4a4d-a1aa-28625ad4b1d9"
  });
  const credentials = await new Promise(r => {
    // not public but
    peer.socket.once("OPEN", msg => r(msg.turnCredential));
  });
  peer.destroy();

  return [
    "stun:stun.webrtc.ecl.ntt.com:3478",
    "turn:turn.webrtc.ecl.ntt.com:443?transport=tcp",
    "turn:turn.webrtc.ecl.ntt.com:443?transport=udp",
    "turns:turn.webrtc.ecl.ntt.com:443?transport=tcp"
  ].map(urls => ({ urls, ...credentials }));
}

export function reportTypeCount(stats) {
  const map = new Map();
  for (const report of stats.values()) {
    map.has(report.type)
      ? map.set(report.type, map.get(report.type) + 1)
      : map.set(report.type, 1);
  }
  return map;
}
