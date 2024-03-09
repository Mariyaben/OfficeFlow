import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DashboardScreen = () => {
  const navigation = useNavigation();

  const handleMoreInfoPress = () => {
    // Add your navigation logic here or any other action you want to perform
    navigation.navigate("MoreInfoScreen"); // Navigate to a screen with more information
  };
  


  const handleFeaturePress = (featureLabel) => {
    switch (featureLabel) {

      
      case "BHIM UPI":
        navigation.navigate("BhimUPI"); // Navigate to the BHIM UPI screen
        break;
      case "Pay to Contacts":
        navigation.navigate("ResumeScreeningComponent"); // Navigate to the Pay to Contacts screen
        break;
      case "Insurance":
        navigation.navigate("InsuranceScreen"); // Navigate to the Insurance screen
        break;
      case "Net Banking":
        navigation.navigate("NetBankingScreen"); // Navigate to the Net Banking screen
        break;
      case "Bank Holidays":
        navigation.navigate("BankHolidaysScreen"); // Navigate to the Bank Holidays screen
        break;
      case "Calculator":
        navigation.navigate("CalculatorScreen"); // Navigate to the Calculator screen
        break;
      case "Deposit Rates":
        navigation.navigate("DepositRatesScreen"); // Navigate to the Deposit Rates screen
        break;
      
      case "Online Payment":
        navigation.navigate("OnlinePaymentScreen"); // Navigate to the Online Payment screen
        break;
      case "Mobile":
          navigation.navigate("MobileScreen"); // Navigate to the Online Payment screen
          break;
      case "DTH":
            navigation.navigate("Dth"); // Navigate to the Online Payment screen
            break;
      case "Electricity":
            navigation.navigate("ElectricityScreen"); // Navigate to the Online Payment screen
            break;
      case "SIB Fastag":
              navigation.navigate("Fastag"); // Navigate to the Online Payment screen
            break;
      default:
      case "Resume":
          navigation.navigate("ResumeScreeningComponent"); // Navigate to the Online Payment screen
          break;

      case "Cheque Book Services":
            navigation.navigate("ChequeScreen"); // Navigate to the Online Payment screen
            break;
      case "Complaints":
              navigation.navigate("ComplaintsScreen"); // Navigate to the Online Payment screen
              break;

      case "Update KYC":
                navigation.navigate("UpdateKYCScreen"); // Navigate to the Online Payment screen
                break;

                case "FAQs":
                  navigation.navigate("FAQsScreen"); // Navigate to the Online Payment screen
                  break;

                  case "Locker Availability":
                navigation.navigate("LockerScreen"); // Navigate to the Online Payment screen
                break;

                case "College/School fee":
                navigation.navigate("CollegeScreen"); // Navigate to the Online Payment screen
                break;

                case "Offerings":
                navigation.navigate("OfferingsScreen"); // Navigate to the Online Payment screen
                break;

                case "Remit Money Abroad":
                navigation.navigate("RemitMoneyScreen"); // Navigate to the Online Payment screen
                break;

               
      
        console.log(`Pressed ${featureLabel}`);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../assets/dashboard.jpg')}
        style={styles.headerImage}
      />
     <View style={styles.featureContainer}>
        <FeatureCard
          icon="ios-people"
          label="Employees"
          onPress={() => handleFeaturePress('BHIM UPI')}
        />
        <FeatureCard
          icon="ios-people"
          label="Resume"
          onPress={() => handleFeaturePress("ResumeScreeningComponent")}
        />
        <FeatureCard
          icon="ios-umbrella"
          label="Interviews"
          onPress={() => handleFeaturePress("Insurance")}
        />
        <FeatureCard
          icon="ios-globe"
          label="Net Banking"
          onPress={() => handleFeaturePress("Net Banking")}
        />
      </View>

      <View style={styles.featureContainer}>
        <FeatureCard
          icon="ios-calendar"
          label="Bank Holidays"
          onPress={() => handleFeaturePress("Bank Holidays")}
        />
        <FeatureCard
          icon="ios-calculator"
          label="Calculator"
          onPress={() => handleFeaturePress("Calculator")}
        />
        <FeatureCard
          icon="ios-cash"
          label="Deposit Rates"
          onPress={() => handleFeaturePress("Deposit Rates")}
        />
        <FeatureCard
          icon="ios-card"
          label="Online Payment"
          onPress={() => handleFeaturePress("Online Payment")}
        />
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Recharge & Pay Bills</Text>
        <View style={styles.sectionDescription}>
          <Text style={styles.sectionText}>
            Earn more rewards points by paying bills
          </Text>
          <TouchableOpacity onPress={handleMoreInfoPress}>
            <Ionicons name="ios-arrow-forward" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.featureContainer}>
        <BillFeatureCard
          icon="ios-phone-portrait"
          label="Mobile"
          onPress={() => handleFeaturePress('Mobile')}
        />
        <BillFeatureCard
          icon="ios-desktop"
          label="DTH"
          onPress={() => handleFeaturePress("DTH")}
        />
        <BillFeatureCard
          icon="ios-flash"
          label="Electricity"
          onPress={() => handleFeaturePress("Electricity")}
        />
        <BillFeatureCard
          icon="ios-car"
          label="SIB Fastag"
          onPress={() => handleFeaturePress("SIB Fastag")}
        />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Services & Request</Text>
        <View style={styles.sectionDescription}>
          <Text style={styles.sectionText}>
            Get all services at your fingertip
          </Text>
          <TouchableOpacity onPress={handleMoreInfoPress}>
            <Ionicons name="ios-arrow-forward" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.featureContainer}>
        <BillFeatureCard
          icon="md-card"
          label="Resume"
          onPress={() => handleFeaturePress("ResumeScreeningComponent")}
        />
        <BillFeatureCard
          icon="md-albums"
          label="Cheque Book Services"
          onPress={() => handleFeaturePress("Cheque Book Services")}
        />
        <BillFeatureCard
          icon="md-warning"
          label="Complaints"
          onPress={() => handleFeaturePress("Complaints")}
        />
        <BillFeatureCard
          icon="md-person"
          label="Update KYC"
          onPress={() => handleFeaturePress("Update KYC")}
        />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Financial Tools & Enquiries</Text>
        <View style={styles.sectionDescription}>
          <Text style={styles.sectionText}>
            Get your enquiries resolved instantly
          </Text>
          <TouchableOpacity onPress={handleMoreInfoPress}>
            <Ionicons name="ios-arrow-forward" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.featureContainer}>
        <BillFeatureCard
          icon="ios-calculator"
          label="Calculator"
          onPress={() => handleFeaturePress("Calculator")}
        />
        <BillFeatureCard
          icon="ios-calendar"
          label="Bank Holidays"
          onPress={() => handleFeaturePress("Bank Holidays")}
        />
        <BillFeatureCard
          icon="ios-help-circle"
          label="FAQs"
          onPress={() => handleFeaturePress("FAQs")}
        />
        <BillFeatureCard
          icon="ios-lock-closed"
          label="Locker Availability"
          onPress={() => handleFeaturePress("Locker Availability")}
        />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Payments</Text>
        <View style={styles.sectionDescription}>
          <Text style={styles.sectionText}>
            Make Payments at your comfort
          </Text>
          <TouchableOpacity onPress={handleMoreInfoPress}>
            <Ionicons name="ios-arrow-forward" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.featureContainer}>
  <BillFeatureCard
    icon="ios-school"
    label="College/School fee"
    onPress={() => handleFeaturePress("College/School fee")}
  />
  <BillFeatureCard
    icon="ios-gift"
    label="Offerings"
    onPress={() => handleFeaturePress("Offerings")}
  />
  <BillFeatureCard
    icon="ios-globe"
    label="Remit Money Abroad"
    onPress={() => handleFeaturePress("Remit Money Abroad")}
  />
  <BillFeatureCard
    icon="ios-card"
    label="Online Payments"
    onPress={() => handleFeaturePress("Online Payments")}
  />
</View>
</ScrollView>


  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255,255,255)', // White background
  },
  headerImage: {
    flex: 1,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
  },
  featureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  sectionContainer: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#a72928', // Red text color
  },
  sectionDescription: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionText: {
    fontWeight: 'bold',
    marginRight: 10,
    color: '#a72928', // Red text color
  },
});

function FeatureCard({ icon, label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: 77,
          marginBottom: 10, 
        }}
      >
        <Ionicons name={icon} size={36} color="black" />
        <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 10 }}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

function BillFeatureCard({ icon, label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: 77,
          marginBottom: 10,
        }}
      >
        <Ionicons name={icon} size={36} color="black" />
        <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 10 }}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
export default DashboardScreen;
