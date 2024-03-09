import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { RNCamera } from "react-native-camera";

const QRCodeScanner = () => {
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    if (!scanned) {
      setScanned(true);
      // Handle the scanned QR code data here
      alert(`Scanned QR Code: ${data}`);
    }
  };

  useEffect(() => {
    setScanned(false);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        style={{ flex: 1 }}
        onBarCodeRead={handleBarCodeScanned}
        captureAudio={false} // Set to true if you need audio
      />

      {scanned && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          }}
        >
          <Text style={{ fontSize: 18, color: "white" }}>
            QR Code Scanned! Tap to scan again.
          </Text>
        </View>
      )}
    </View>
  );
};

export default QRCodeScanner;
