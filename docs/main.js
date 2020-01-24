import { fetchTurnServers, reportTypeCount } from "./utils.js";

(async () => {
  const [$setup, $dump] = document.querySelectorAll("button");
  const [$textarea] = document.querySelectorAll("textarea");

  let pc1 = null;
  $setup.onclick = async () => {
    let iceServers = await fetchTurnServers(window.Peer);
    pc1 = new RTCPeerConnection({ iceServers, iceTransportPolicy: "relay" });

    iceServers = await fetchTurnServers(window.Peer);
    const pc2 = new RTCPeerConnection({ iceServers, iceTransportPolicy: "all" });

    pc1.onicecandidate = ev => ev.candidate && pc2.addIceCandidate(ev.candidate);
    pc2.onicecandidate = ev => ev.candidate && pc1.addIceCandidate(ev.candidate);

    pc1.ontrack = ({ track }) => {
      console.log("pc1:ontrack", track);
      const $media = document.createElement(track.kind);
      $media.srcObject = new MediaStream([track]);
      $media.controls = $media.playsInline =  true;
      $media.play();
      document.body.append($media);
    };
    pc1.ondatachannel = ev => console.log("pc1:ondatachannel", ev.channel);

    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    for (const track of stream.getTracks()) {
      pc1.addTrack(track, stream);
      pc2.addTrack(track, stream);
    }

    pc1.createDataChannel("x");
    pc2.createDataChannel("y");

    const offer = await pc1.createOffer();
    await pc1.setLocalDescription(offer);

    await pc2.setRemoteDescription(offer);
    const answer = await pc2.createAnswer();
    await pc2.setLocalDescription(answer);

    await pc1.setRemoteDescription(answer);

    console.log("ANSWER");
    console.log(answer.sdp);
  };

  $dump.onclick = async () => {
    if (pc1 === null) return;

    const stats = await pc1.getStats();
    console.log(stats);
    console.log(reportTypeCount(stats));

    $textarea.textContent = JSON.stringify([...stats.values()], null, 2);
  };
})();
