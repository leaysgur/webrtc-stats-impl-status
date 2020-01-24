# webrtc-stats-impl-status

> https://w3c.github.io/webrtc-stats/

This repository lists current WebRTC stats implementaion status for latest browser versions.

## Settings

- pc1: send+recv 1 video, 1 audio, and 1 datachannel w/  TURN
- pc2: send+recv 1 video, 1 audio, and 1 datachannel w/o TURN

See [./docs/main.js](./docs/main.js) for details.

## Notes

- ✅ means that `key` exists in the report
- There are much more stats types in the spec
- Some of stats report has specific props in the same type
  - e.g. `inbound-rtp` w/ `kind` = `audio` and `kind` = `video` have different props
- Type `track` is obslete stats
  - will be `sender`, `receiver` stats

## RTCStatsType

|  | chrome v79 | edge v79 | firefox v72 | safari v13.0.4 |
| --: | :--: | :--: | :--: | :--: |
| transport | ✅ | ✅ |  | ✅ |
| stream | ✅ | ✅ |  |  |
| track | ✅ | ✅ |  | ✅ |
| codec | ✅ | ✅ |  | ✅ |
| certificate | ✅ | ✅ |  | ✅ |
| media-source | ✅ | ✅ |  |  |
| data-channel | ✅ | ✅ |  | ✅ |
| candidate-pair | ✅ | ✅ | ✅ | ✅ |
| local-candidate | ✅ | ✅ | ✅ | ✅ |
| remote-candidate | ✅ | ✅ | ✅ | ✅ |
| inbound-rtp | ✅ | ✅ | ✅ | ✅ |
| outbound-rtp | ✅ | ✅ | ✅ | ✅ |
| peer-connection | ✅ | ✅ |  | ✅ |
| remote-inbound-rtp | ✅ | ✅ | ✅ |  |
| remote-outbound-rtp |  |  | ✅ |  |

## Details

### transport

|  | chrome v79 | edge v79 | firefox v72 | safari v13.0.4 |
| --: | :--: | :--: | :--: | :--: |
| id | ✅ | ✅ |  | ✅ |
| type | ✅ | ✅ |  | ✅ |
| dtlsState | ✅ | ✅ |  |  |
| bytesSent | ✅ | ✅ |  | ✅ |
| timestamp | ✅ | ✅ |  | ✅ |
| bytesReceived | ✅ | ✅ |  | ✅ |
| localCertificateId | ✅ | ✅ |  | ✅ |
| remoteCertificateId | ✅ | ✅ |  | ✅ |
| selectedCandidatePairId | ✅ | ✅ |  | ✅ |
| selectedCandidatePairChanges | ✅ | ✅ |  |  |

### stream

|  | chrome v79 | edge v79 | firefox v72 | safari v13.0.4 |
| --: | :--: | :--: | :--: | :--: |
| id | ✅ | ✅ |  |  |
| type | ✅ | ✅ |  |  |
| trackIds | ✅ | ✅ |  |  |
| timestamp | ✅ | ✅ |  |  |
| streamIdentifier | ✅ | ✅ |  |  |

### track

|  | chrome v79 | edge v79 | firefox v72 | safari v13.0.4 |
| --: | :--: | :--: | :--: | :--: |
| id | ✅ | ✅ |  | ✅ |
| kind | ✅ | ✅ |  |  |
| type | ✅ | ✅ |  | ✅ |
| ended | ✅ | ✅ |  | ✅ |
| detached | ✅ | ✅ |  | ✅ |
| timestamp | ✅ | ✅ |  | ✅ |
| framesSent | ✅ | ✅ |  | ✅ |
| frameWidth | ✅ | ✅ |  | ✅ |
| audioLevel | ✅ | ✅ |  | ✅ |
| frameHeight | ✅ | ✅ |  | ✅ |
| remoteSource | ✅ | ✅ |  | ✅ |
| mediaSourceId | ✅ | ✅ |  |  |
| framesDropped | ✅ | ✅ |  | ✅ |
| framesDecoded | ✅ | ✅ |  | ✅ |
| hugeFramesSent | ✅ | ✅ |  |  |
| echoReturnLoss | ✅ | ✅ |  |  |
| framesReceived | ✅ | ✅ |  | ✅ |
| trackIdentifier | ✅ | ✅ |  | ✅ |
| concealedSamples | ✅ | ✅ |  |  |
| totalAudioEnergy | ✅ | ✅ |  |  |
| concealmentEvents | ✅ | ✅ |  |  |
| jitterBufferDelay | ✅ | ✅ |  |  |
| totalSamplesDuration | ✅ | ✅ |  |  |
| totalSamplesReceived | ✅ | ✅ |  |  |
| silentConcealedSamples | ✅ | ✅ |  |  |
| jitterBufferEmittedCount | ✅ | ✅ |  |  |
| echoReturnLossEnhancement | ✅ | ✅ |  |  |
| removedSamplesForAcceleration | ✅ | ✅ |  |  |
| insertedSamplesForDeceleration | ✅ | ✅ |  |  |

### codec

|  | chrome v79 | edge v79 | firefox v72 | safari v13.0.4 |
| --: | :--: | :--: | :--: | :--: |
| id | ✅ | ✅ |  | ✅ |
| type | ✅ | ✅ |  | ✅ |
| mimeType | ✅ | ✅ |  | ✅ |
| clockRate | ✅ | ✅ |  | ✅ |
| timestamp | ✅ | ✅ |  | ✅ |
| payloadType | ✅ | ✅ |  | ✅ |

### certificate

|  | chrome v79 | edge v79 | firefox v72 | safari v13.0.4 |
| --: | :--: | :--: | :--: | :--: |
| id | ✅ | ✅ |  | ✅ |
| type | ✅ | ✅ |  | ✅ |
| timestamp | ✅ | ✅ |  | ✅ |
| fingerprint | ✅ | ✅ |  | ✅ |
| base64Certificate | ✅ | ✅ |  | ✅ |
| fingerprintAlgorithm | ✅ | ✅ |  | ✅ |

### media-source

|  | chrome v79 | edge v79 | firefox v72 | safari v13.0.4 |
| --: | :--: | :--: | :--: | :--: |
| id | ✅ | ✅ |  |  |
| kind | ✅ | ✅ |  |  |
| type | ✅ | ✅ |  |  |
| width | ✅ | ✅ |  |  |
| height | ✅ | ✅ |  |  |
| timestamp | ✅ | ✅ |  |  |
| audioLevel | ✅ | ✅ |  |  |
| framesPerSecond | ✅ | ✅ |  |  |
| trackIdentifier | ✅ | ✅ |  |  |
| totalAudioEnergy | ✅ | ✅ |  |  |
| totalSamplesDuration | ✅ | ✅ |  |  |

### data-channel

|  | chrome v79 | edge v79 | firefox v72 | safari v13.0.4 |
| --: | :--: | :--: | :--: | :--: |
| id | ✅ | ✅ |  | ✅ |
| type | ✅ | ✅ |  | ✅ |
| state | ✅ | ✅ |  | ✅ |
| label | ✅ | ✅ |  | ✅ |
| protocol | ✅ | ✅ |  | ✅ |
| bytesSent | ✅ | ✅ |  | ✅ |
| timestamp | ✅ | ✅ |  | ✅ |
| messagesSent | ✅ | ✅ |  | ✅ |
| bytesReceived | ✅ | ✅ |  | ✅ |
| datachannelid | ✅ | ✅ |  | ✅ |
| messagesReceived | ✅ | ✅ |  | ✅ |

### candidate-pair

|  | chrome v79 | edge v79 | firefox v72 | safari v13.0.4 |
| --: | :--: | :--: | :--: | :--: |
| id | ✅ | ✅ | ✅ | ✅ |
| type | ✅ | ✅ | ✅ | ✅ |
| state | ✅ | ✅ | ✅ | ✅ |
| selected |  |  | ✅ |  |
| readable |  |  | ✅ |  |
| writable | ✅ | ✅ | ✅ | ✅ |
| priority | ✅ | ✅ | ✅ | ✅ |
| bytesSent | ✅ | ✅ | ✅ | ✅ |
| nominated | ✅ | ✅ | ✅ | ✅ |
| timestamp | ✅ | ✅ | ✅ | ✅ |
| transportId | ✅ | ✅ | ✅ | ✅ |
| requestsSent | ✅ | ✅ |  | ✅ |
| responsesSent | ✅ | ✅ |  | ✅ |
| bytesReceived | ✅ | ✅ | ✅ | ✅ |
| requestsReceived | ✅ | ✅ |  | ✅ |
| localCandidateId | ✅ | ✅ | ✅ | ✅ |
| responsesReceived | ✅ | ✅ |  | ✅ |
| remoteCandidateId | ✅ | ✅ | ✅ | ✅ |
| totalRoundTripTime | ✅ | ✅ |  | ✅ |
| consentRequestsSent | ✅ | ✅ |  |  |
| currentRoundTripTime | ✅ | ✅ |  | ✅ |
| lastPacketSentTimestamp |  |  | ✅ |  |
| availableOutgoingBitrate | ✅ | ✅ |  | ✅ |
| lastPacketReceivedTimestamp |  |  | ✅ |  |

### local-candidate

|  | chrome v79 | edge v79 | firefox v72 | safari v13.0.4 |
| --: | :--: | :--: | :--: | :--: |
| ip | ✅ | ✅ |  |  |
| id | ✅ | ✅ | ✅ | ✅ |
| port | ✅ | ✅ | ✅ | ✅ |
| type | ✅ | ✅ | ✅ | ✅ |
| address |  |  | ✅ | ✅ |
| deleted | ✅ | ✅ |  | ✅ |
| priority | ✅ | ✅ | ✅ | ✅ |
| protocol | ✅ | ✅ | ✅ | ✅ |
| isRemote | ✅ | ✅ |  |  |
| timestamp | ✅ | ✅ | ✅ | ✅ |
| networkType | ✅ | ✅ |  |  |
| transportId | ✅ | ✅ |  | ✅ |
| candidateType | ✅ | ✅ | ✅ | ✅ |
| relayProtocol | ✅ | ✅ | ✅ |  |

### remote-candidate

|  | chrome v79 | edge v79 | firefox v72 | safari v13.0.4 |
| --: | :--: | :--: | :--: | :--: |
| ip | ✅ | ✅ |  |  |
| id | ✅ | ✅ | ✅ | ✅ |
| port | ✅ | ✅ | ✅ | ✅ |
| type | ✅ | ✅ | ✅ | ✅ |
| address |  |  | ✅ |  |
| deleted | ✅ | ✅ |  | ✅ |
| priority | ✅ | ✅ | ✅ | ✅ |
| protocol | ✅ | ✅ | ✅ | ✅ |
| isRemote | ✅ | ✅ |  |  |
| timestamp | ✅ | ✅ | ✅ | ✅ |
| transportId | ✅ | ✅ |  | ✅ |
| candidateType | ✅ | ✅ | ✅ | ✅ |

### inbound-rtp

|  | chrome v79 | edge v79 | firefox v72 | safari v13.0.4 |
| --: | :--: | :--: | :--: | :--: |
| id | ✅ | ✅ | ✅ | ✅ |
| kind | ✅ | ✅ | ✅ |  |
| ssrc | ✅ | ✅ | ✅ | ✅ |
| type | ✅ | ✅ | ✅ | ✅ |
| qpSum | ✅ | ✅ |  | ✅ |
| jitter | ✅ | ✅ | ✅ | ✅ |
| codecId | ✅ | ✅ |  | ✅ |
| trackId | ✅ | ✅ |  | ✅ |
| remoteId |  |  | ✅ |  |
| pliCount | ✅ | ✅ | ✅ | ✅ |
| firCount | ✅ | ✅ | ✅ | ✅ |
| isRemote | ✅ | ✅ |  | ✅ |
| nackCount | ✅ | ✅ | ✅ | ✅ |
| mediaType | ✅ | ✅ | ✅ | ✅ |
| timestamp | ✅ | ✅ | ✅ | ✅ |
| bitrateMean |  |  | ✅ |  |
| packetsLost | ✅ | ✅ | ✅ | ✅ |
| transportId | ✅ | ✅ |  | ✅ |
| fractionLost |  |  |  | ✅ |
| framerateMean |  |  | ✅ |  |
| bitrateStdDev |  |  | ✅ |  |
| framesDecoded | ✅ | ✅ | ✅ | ✅ |
| bytesReceived | ✅ | ✅ | ✅ | ✅ |
| framerateStdDev |  |  | ✅ |  |
| totalDecodeTime | ✅ | ✅ |  |  |
| packetsReceived | ✅ | ✅ | ✅ | ✅ |
| discardedPackets |  |  | ✅ |  |
| keyFramesDecoded | ✅ | ✅ |  |  |
| headerBytesReceived | ✅ | ✅ |  |  |
| decoderImplementation | ✅ | ✅ |  |  |
| lastPacketReceivedTimestamp | ✅ | ✅ |  |  |

### outbound-rtp

|  | chrome v79 | edge v79 | firefox v72 | safari v13.0.4 |
| --: | :--: | :--: | :--: | :--: |
| id | ✅ | ✅ | ✅ | ✅ |
| kind | ✅ | ✅ | ✅ |  |
| ssrc | ✅ | ✅ | ✅ | ✅ |
| type | ✅ | ✅ | ✅ | ✅ |
| qpSum | ✅ | ✅ | ✅ | ✅ |
| codecId | ✅ | ✅ |  | ✅ |
| trackId | ✅ | ✅ |  | ✅ |
| remoteId |  |  | ✅ |  |
| pliCount | ✅ | ✅ | ✅ | ✅ |
| firCount | ✅ | ✅ | ✅ | ✅ |
| isRemote | ✅ | ✅ |  | ✅ |
| nackCount | ✅ | ✅ | ✅ | ✅ |
| bytesSent | ✅ | ✅ | ✅ | ✅ |
| mediaType | ✅ | ✅ | ✅ | ✅ |
| timestamp | ✅ | ✅ | ✅ | ✅ |
| bitrateMean |  |  | ✅ |  |
| packetsSent | ✅ | ✅ | ✅ | ✅ |
| transportId | ✅ | ✅ |  | ✅ |
| framerateMean |  |  | ✅ |  |
| droppedFrames |  |  | ✅ |  |
| bitrateStdDev |  |  | ✅ |  |
| framesEncoded | ✅ | ✅ | ✅ | ✅ |
| mediaSourceId | ✅ | ✅ |  |  |
| framerateStdDev |  |  | ✅ |  |
| totalEncodeTime | ✅ | ✅ |  |  |
| headerBytesSent | ✅ | ✅ |  |  |
| keyFramesEncoded | ✅ | ✅ |  |  |
| totalPacketSendDelay | ✅ | ✅ |  |  |
| encoderImplementation | ✅ | ✅ |  |  |
| retransmittedBytesSent | ✅ | ✅ |  |  |
| qualityLimitationReason | ✅ | ✅ |  |  |
| totalEncodedBytesTarget | ✅ | ✅ |  |  |
| retransmittedPacketsSent | ✅ | ✅ |  |  |
| qualityLimitationResolutionChanges | ✅ | ✅ |  |  |

### peer-connection

|  | chrome v79 | edge v79 | firefox v72 | safari v13.0.4 |
| --: | :--: | :--: | :--: | :--: |
| id | ✅ | ✅ |  | ✅ |
| type | ✅ | ✅ |  | ✅ |
| timestamp | ✅ | ✅ |  | ✅ |
| dataChannelsClosed | ✅ | ✅ |  | ✅ |
| dataChannelsOpened | ✅ | ✅ |  | ✅ |

### remote-inbound-rtp

|  | chrome v79 | edge v79 | firefox v72 | safari v13.0.4 |
| --: | :--: | :--: | :--: | :--: |
| id | ✅ | ✅ | ✅ |  |
| kind | ✅ | ✅ | ✅ |  |
| ssrc | ✅ | ✅ | ✅ |  |
| type | ✅ | ✅ | ✅ |  |
| jitter | ✅ | ✅ | ✅ |  |
| localId | ✅ | ✅ | ✅ |  |
| codecId | ✅ | ✅ |  |  |
| mediaType |  |  | ✅ |  |
| timestamp | ✅ | ✅ | ✅ |  |
| packetsLost | ✅ | ✅ | ✅ |  |
| transportId | ✅ | ✅ |  |  |
| bytesReceived |  |  | ✅ |  |
| roundTripTime | ✅ | ✅ | ✅ |  |
| packetsReceived |  |  | ✅ |  |

### remote-outbound-rtp

|  | chrome v79 | edge v79 | firefox v72 | safari v13.0.4 |
| --: | :--: | :--: | :--: | :--: |
| id |  |  | ✅ |  |
| ssrc |  |  | ✅ |  |
| kind |  |  | ✅ |  |
| type |  |  | ✅ |  |
| localId |  |  | ✅ |  |
| bytesSent |  |  | ✅ |  |
| mediaType |  |  | ✅ |  |
| timestamp |  |  | ✅ |  |
| packetsSent |  |  | ✅ |  |


